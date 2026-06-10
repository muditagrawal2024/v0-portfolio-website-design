'use client'

import { useState, useEffect, useRef } from 'react'

interface LayerNode {
  id: string
  label: string
  sublabel?: string
  layer: number
  position: number // 0-1, position within layer
}

interface Connection {
  from: string
  to: string
  type: 'data' | 'control' | 'feedback'
}

const ARCHITECTURE_LAYERS = [
  {
    name: 'Embedded Systems & Hardware',
    color: 'oklch(0.45 0.15 250)',
    nodes: [
      { id: 'hw-mcu', label: 'Microcontroller', sublabel: 'Processing', position: 0.2 },
      { id: 'hw-sensors', label: 'Sensors', sublabel: 'I/O', position: 0.5 },
      { id: 'hw-actuators', label: 'Actuators', sublabel: 'Output', position: 0.8 },
    ],
  },
  {
    name: 'Control & Cyber-Physical Systems',
    color: 'oklch(0.48 0.14 190)',
    nodes: [
      { id: 'ctrl-feedback', label: 'Feedback Control', sublabel: 'CPS', position: 0.33 },
      { id: 'ctrl-realtime', label: 'Real-Time OS', sublabel: 'Scheduling', position: 0.67 },
    ],
  },
  {
    name: 'Perception & Machine Learning',
    color: 'oklch(0.5 0.08 180)',
    nodes: [
      { id: 'ml-cv', label: 'Computer Vision', sublabel: 'Perception', position: 0.25 },
      { id: 'ml-inference', label: 'ML Inference', sublabel: 'Intelligence', position: 0.75 },
    ],
  },
  {
    name: 'Software Engineering & Integration',
    color: 'oklch(0.4 0.12 220)',
    nodes: [
      { id: 'sw-robotics', label: 'Robotics Framework', sublabel: 'Coordination', position: 0.33 },
      { id: 'sw-platform', label: 'Software Platform', sublabel: 'Architecture', position: 0.67 },
    ],
  },
]

const CONNECTIONS: Connection[] = [
  // Hardware to Control
  { from: 'hw-sensors', to: 'ctrl-feedback', type: 'data' },
  { from: 'hw-actuators', to: 'ctrl-feedback', type: 'control' },
  { from: 'hw-mcu', to: 'ctrl-realtime', type: 'data' },

  // Control to Perception
  { from: 'ctrl-feedback', to: 'ml-cv', type: 'data' },
  { from: 'ctrl-realtime', to: 'ml-inference', type: 'data' },

  // Perception to Software
  { from: 'ml-cv', to: 'sw-robotics', type: 'data' },
  { from: 'ml-inference', to: 'sw-platform', type: 'data' },

  // Cross-layer feedback
  { from: 'sw-robotics', to: 'ctrl-feedback', type: 'control' },
  { from: 'sw-platform', to: 'hw-mcu', type: 'control' },

  // Within perception layer
  { from: 'ml-cv', to: 'ml-inference', type: 'data' },
]

export function SystemsVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [dimensions, setDimensions] = useState({ width: 600, height: 700 })

  // Build flat node list
  const allNodes = ARCHITECTURE_LAYERS.flatMap((layer, layerIdx) =>
    layer.nodes.map((node) => ({
      ...node,
      layer: layerIdx,
      layerColor: layer.color,
      layerName: layer.name,
    }))
  )

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current?.parentElement) {
        const rect = canvasRef.current.parentElement.getBoundingClientRect()
        const w = Math.min(rect.width, 600)
        setDimensions({
          width: w,
          height: w * 1.15,
        })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = dimensions.width * dpr
    canvas.height = dimensions.height * dpr
    ctx.scale(dpr, dpr)

    const padding = 40
    const layerHeight = (dimensions.height - padding * 2) / ARCHITECTURE_LAYERS.length
    const contentWidth = dimensions.width - padding * 2

    // Clear canvas
    ctx.fillStyle = 'oklch(0.08 0 0)'
    ctx.fillRect(0, 0, dimensions.width, dimensions.height)

    // Helper function to get node position
    const getNodePos = (node: any) => {
      const x = padding + node.position * contentWidth
      const y = padding + node.layer * layerHeight + layerHeight * 0.5
      return { x, y }
    }

    // Draw layer backgrounds with subtle grid
    ARCHITECTURE_LAYERS.forEach((layer, idx) => {
      const y = padding + idx * layerHeight
      ctx.fillStyle = 'oklch(0.12 0 0 / 0.4)'
      ctx.fillRect(padding - 10, y, contentWidth + 20, layerHeight)

      // Layer label
      ctx.fillStyle = 'oklch(0.6 0 0 / 0.5)'
      ctx.font = '10px monospace'
      ctx.textAlign = 'left'
      ctx.textBaseline = 'top'
      ctx.fillText(`[${String.fromCharCode(65 + idx)}]`, padding - 25, y + 6)
    })

    // Draw connections with type indicators
    CONNECTIONS.forEach((conn) => {
      const fromNode = allNodes.find((n) => n.id === conn.from)
      const toNode = allNodes.find((n) => n.id === conn.to)

      if (!fromNode || !toNode) return

      const from = getNodePos(fromNode)
      const to = getNodePos(toNode)

      // Connection line style based on type
      if (conn.type === 'data') {
        ctx.strokeStyle = 'oklch(0.45 0.12 200 / 0.4)'
        ctx.lineWidth = 2
      } else if (conn.type === 'control') {
        ctx.strokeStyle = 'oklch(0.48 0.14 190 / 0.3)'
        ctx.lineWidth = 1.5
        ctx.setLineDash([4, 2])
      } else {
        ctx.strokeStyle = 'oklch(0.5 0.08 180 / 0.3)'
        ctx.lineWidth = 1
        ctx.setLineDash([2, 2])
      }

      ctx.beginPath()
      ctx.moveTo(from.x, from.y)

      // Curved path for inter-layer connections
      const ctrlY = (from.y + to.y) / 2
      ctx.quadraticCurveTo(from.x + (to.x - from.x) * 0.3, ctrlY, to.x, to.y)
      ctx.stroke()
      ctx.setLineDash([])

      // Arrow head for data flow
      if (conn.type === 'data') {
        const angle = Math.atan2(to.y - from.y, to.x - from.x)
        const arrowSize = 6
        const arrowX = to.x - Math.cos(angle) * arrowSize
        const arrowY = to.y - Math.sin(angle) * arrowSize

        ctx.fillStyle = 'oklch(0.45 0.12 200 / 0.6)'
        ctx.beginPath()
        ctx.moveTo(to.x, to.y)
        ctx.lineTo(arrowX - Math.sin(angle) * arrowSize * 0.6, arrowY + Math.cos(angle) * arrowSize * 0.6)
        ctx.lineTo(arrowX + Math.sin(angle) * arrowSize * 0.6, arrowY - Math.cos(angle) * arrowSize * 0.6)
        ctx.closePath()
        ctx.fill()
      }
    })

    // Draw nodes
    allNodes.forEach((node) => {
      const pos = getNodePos(node)
      const isHovered = hoveredNode === node.id
      const radius = isHovered ? 28 : 24

      // Node background
      ctx.fillStyle = isHovered ? node.layerColor : node.layerColor + 'cc'
      ctx.beginPath()
      ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2)
      ctx.fill()

      // Node border
      ctx.strokeStyle = isHovered ? 'oklch(0.92 0 0)' : 'oklch(0.92 0 0 / 0.3)'
      ctx.lineWidth = isHovered ? 2 : 1
      ctx.beginPath()
      ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2)
      ctx.stroke()

      // Highlight connections on hover
      if (isHovered) {
        const relatedConnections = CONNECTIONS.filter((c) => c.from === node.id || c.to === node.id)
        relatedConnections.forEach((conn) => {
          const relatedNode = conn.from === node.id ? allNodes.find((n) => n.id === conn.to) : allNodes.find((n) => n.id === conn.from)
          if (relatedNode) {
            const relPos = getNodePos(relatedNode)
            ctx.strokeStyle = 'oklch(0.45 0.12 200 / 0.6)'
            ctx.lineWidth = 3
            ctx.beginPath()
            ctx.moveTo(pos.x, pos.y)
            ctx.lineTo(relPos.x, relPos.y)
            ctx.stroke()
          }
        })
      }

      // Node label
      ctx.fillStyle = 'oklch(0.95 0 0)'
      ctx.font = isHovered ? 'bold 11px Geist' : '10px Geist'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(node.label, pos.x, pos.y - 2)

      // Sublabel if available
      if (node.sublabel) {
        ctx.fillStyle = 'oklch(0.7 0 0)'
        ctx.font = '8px monospace'
        ctx.fillText(node.sublabel, pos.x, pos.y + 8)
      }
    })

    // Draw coordinate markers (blueprint aesthetic)
    ctx.strokeStyle = 'oklch(0.2 0 0 / 0.2)'
    ctx.lineWidth = 0.5
    for (let i = 0; i <= 4; i++) {
      const y = padding + (i * (dimensions.height - padding * 2)) / 4
      ctx.beginPath()
      ctx.moveTo(padding - 5, y)
      ctx.lineTo(padding - 15, y)
      ctx.stroke()
      ctx.fillStyle = 'oklch(0.4 0 0 / 0.3)'
      ctx.font = '7px monospace'
      ctx.textAlign = 'right'
      ctx.textBaseline = 'middle'
      ctx.fillText(`Y${i}`, padding - 20, y)
    }
  }, [dimensions, hoveredNode])

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return

    const rect = canvasRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) * (dimensions.width / rect.width)
    const y = (e.clientY - rect.top) * (dimensions.height / rect.height)

    const padding = 40
    const layerHeight = (dimensions.height - padding * 2) / ARCHITECTURE_LAYERS.length

    let foundNode: string | null = null
    for (const node of allNodes) {
      const nodeX = padding + node.position * (dimensions.width - padding * 2)
      const nodeY = padding + node.layer * layerHeight + layerHeight * 0.5
      const distance = Math.hypot(x - nodeX, y - nodeY)

      if (distance <= 28) {
        foundNode = node.id
        break
      }
    }

    setHoveredNode(foundNode)
    canvasRef.current.style.cursor = foundNode ? 'pointer' : 'default'
  }

  return (
    <div className="flex justify-center items-center w-full">
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredNode(null)}
        className="border border-border-subtle rounded-lg bg-card/20"
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    </div>
  )
}
