'use client'

import { useState, useEffect, useRef } from 'react'

interface Node {
  id: string
  label: string
  x: number
  y: number
  color: string
}

const NODES: Node[] = [
  { id: 'ml', label: 'Machine\nLearning', x: 0.5, y: 0.1, color: 'oklch(0.45 0.15 250)' },
  { id: 'cv', label: 'Computer\nVision', x: 0.8, y: 0.3, color: 'oklch(0.48 0.14 190)' },
  { id: 'embedded', label: 'Embedded\nSystems', x: 0.2, y: 0.3, color: 'oklch(0.5 0.08 180)' },
  { id: 'robotics', label: 'Robotics', x: 0.5, y: 0.5, color: 'oklch(0.4 0.12 220)' },
  { id: 'control', label: 'Control\nSystems', x: 0.2, y: 0.7, color: 'oklch(0.35 0.1 260)' },
  { id: 'software', label: 'Software\nEngineering', x: 0.8, y: 0.7, color: 'oklch(0.45 0.15 250)' },
]

const CONNECTIONS = [
  ['ml', 'cv'],
  ['ml', 'robotics'],
  ['ml', 'embedded'],
  ['cv', 'robotics'],
  ['embedded', 'control'],
  ['embedded', 'software'],
  ['robotics', 'control'],
  ['robotics', 'software'],
  ['control', 'software'],
]

export function SystemsVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 })

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current?.parentElement) {
        const rect = canvasRef.current.parentElement.getBoundingClientRect()
        setDimensions({
          width: Math.min(rect.width, 600),
          height: Math.min(rect.width, 600),
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

    // Set canvas size with device pixel ratio
    const dpr = window.devicePixelRatio || 1
    canvas.width = dimensions.width * dpr
    canvas.height = dimensions.height * dpr
    ctx.scale(dpr, dpr)

    // Clear canvas
    ctx.fillStyle = 'oklch(0.08 0 0)'
    ctx.fillRect(0, dimensions.width, dimensions.height, 0)

    // Draw connections
    ctx.strokeStyle = 'oklch(0.2 0 0 / 0.6)'
    ctx.lineWidth = 2

    CONNECTIONS.forEach(([fromId, toId]) => {
      const from = NODES.find((n) => n.id === fromId)
      const to = NODES.find((n) => n.id === toId)
      if (from && to) {
        const x1 = from.x * dimensions.width
        const y1 = from.y * dimensions.height
        const x2 = to.x * dimensions.width
        const y2 = to.y * dimensions.height

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      }
    })

    // Draw nodes
    NODES.forEach((node) => {
      const x = node.x * dimensions.width
      const y = node.y * dimensions.height
      const isHovered = hoveredNode === node.id
      const radius = isHovered ? 50 : 40

      // Node circle
      ctx.fillStyle = node.color
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()

      // Node border when hovered
      if (isHovered) {
        ctx.strokeStyle = 'oklch(0.92 0 0 / 0.8)'
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Node text
      ctx.fillStyle = 'oklch(0.95 0 0)'
      ctx.font = 'bold 12px Geist'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      const lines = node.label.split('\n')
      lines.forEach((line, index) => {
        const lineHeight = 16
        const yOffset = (index - (lines.length - 1) / 2) * lineHeight
        ctx.fillText(line, x, y + yOffset)
      })
    })
  }, [dimensions, hoveredNode])

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return

    const rect = canvasRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) * (dimensions.width / rect.width)
    const y = (e.clientY - rect.top) * (dimensions.height / rect.height)

    let foundNode: string | null = null
    for (const node of NODES) {
      const nodeX = node.x * dimensions.width
      const nodeY = node.y * dimensions.height
      const distance = Math.hypot(x - nodeX, y - nodeY)
      if (distance <= 50) {
        foundNode = node.id
        break
      }
    }

    setHoveredNode(foundNode)
    if (foundNode) {
      canvasRef.current.style.cursor = 'pointer'
    } else {
      canvasRef.current.style.cursor = 'default'
    }
  }

  return (
    <div className="flex justify-center items-center">
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredNode(null)}
        className="border border-border-subtle rounded-lg"
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    </div>
  )
}
