'use client'

import { useState, useEffect, useRef } from 'react'

interface Competency {
  id: string
  label: string
  description: string
  x: number
  y: number
  color: string
  connections: string[]
}

const COMPETENCIES: Competency[] = [
  {
    id: 'ml',
    label: 'Machine Learning',
    description: 'Deep learning, optimization, and model training',
    x: 0.5,
    y: 0.15,
    color: 'oklch(0.45 0.15 250)',
    connections: ['cv', 'robotics', 'embedded', 'iot'],
  },
  {
    id: 'cv',
    label: 'Computer Vision',
    description: 'Image processing, feature extraction, 3D reconstruction',
    x: 0.8,
    y: 0.35,
    color: 'oklch(0.48 0.14 190)',
    connections: ['ml', 'robotics', 'control'],
  },
  {
    id: 'embedded',
    label: 'Embedded Systems',
    description: 'Microcontrollers, real-time OS, hardware interfaces',
    x: 0.2,
    y: 0.35,
    color: 'oklch(0.5 0.08 180)',
    connections: ['ml', 'robotics', 'control', 'iot'],
  },
  {
    id: 'robotics',
    label: 'Robotics',
    description: 'Kinematics, dynamics, autonomous navigation',
    x: 0.5,
    y: 0.55,
    color: 'oklch(0.4 0.12 220)',
    connections: ['cv', 'control', 'embedded', 'ml'],
  },
  {
    id: 'control',
    label: 'Control Systems',
    description: 'Feedback control, estimation, optimization',
    x: 0.2,
    y: 0.75,
    color: 'oklch(0.35 0.1 260)',
    connections: ['robotics', 'embedded', 'iot', 'cv'],
  },
  {
    id: 'software',
    label: 'Software Engineering',
    description: 'Architecture, systems design, performance optimization',
    x: 0.8,
    y: 0.75,
    color: 'oklch(0.45 0.15 250)',
    connections: ['ml', 'embedded', 'iot'],
  },
  {
    id: 'iot',
    label: 'IoT & Connectivity',
    description: 'Network protocols, edge computing, data pipelines',
    x: 0.5,
    y: 0.95,
    color: 'oklch(0.48 0.14 190)',
    connections: ['embedded', 'ml', 'software', 'control'],
  },
]

export function SystemsCompetencyGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 900 })

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current?.parentElement) {
        const rect = canvasRef.current.parentElement.getBoundingClientRect()
        setDimensions({
          width: Math.min(rect.width, 800),
          height: Math.min(rect.width * 1.125, 900),
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

    // Draw connections
    ctx.strokeStyle = 'oklch(0.2 0 0 / 0.5)'
    ctx.lineWidth = 2

    COMPETENCIES.forEach((node) => {
      node.connections.forEach((connectedId) => {
        const connected = COMPETENCIES.find((n) => n.id === connectedId)
        if (connected) {
          const x1 = node.x * dimensions.width
          const y1 = node.y * dimensions.height
          const x2 = connected.x * dimensions.width
          const y2 = connected.y * dimensions.height

          // Highlight connections for hovered node
          if (hoveredNode && (hoveredNode === node.id || hoveredNode === connectedId)) {
            ctx.strokeStyle = 'oklch(0.45 0.12 200 / 0.8)'
            ctx.lineWidth = 3
          } else {
            ctx.strokeStyle = 'oklch(0.2 0 0 / 0.3)'
            ctx.lineWidth = 1.5
          }

          ctx.beginPath()
          ctx.moveTo(x1, y1)
          ctx.lineTo(x2, y2)
          ctx.stroke()
        }
      })
    })

    // Draw nodes
    COMPETENCIES.forEach((node) => {
      const x = node.x * dimensions.width
      const y = node.y * dimensions.height
      const isHovered = hoveredNode === node.id
      const radius = isHovered ? 55 : 45

      // Node circle
      ctx.fillStyle = node.color
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()

      // Node border when hovered
      if (isHovered) {
        ctx.strokeStyle = 'oklch(0.92 0 0 / 0.9)'
        ctx.lineWidth = 4
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Node text
      ctx.fillStyle = 'oklch(0.95 0 0)'
      ctx.font = isHovered ? 'bold 13px Geist' : '12px Geist'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      const lines = node.label.split(' ')
      const lineHeight = 16
      lines.forEach((line, index) => {
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
    for (const node of COMPETENCIES) {
      const nodeX = node.x * dimensions.width
      const nodeY = node.y * dimensions.height
      const distance = Math.hypot(x - nodeX, y - nodeY)
      if (distance <= 55) {
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
    <div className="space-y-8">
      <div className="flex justify-center">
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

      {/* Competency Details */}
      {hoveredNode && (
        <div className="mx-auto max-w-2xl p-6 bg-card border border-accent rounded-lg">
          {COMPETENCIES.find((c) => c.id === hoveredNode) && (
            <>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {COMPETENCIES.find((c) => c.id === hoveredNode)?.label}
              </h3>
              <p className="text-muted-foreground mb-4">
                {COMPETENCIES.find((c) => c.id === hoveredNode)?.description}
              </p>
              <p className="text-sm text-accent-secondary">
                Connects with:{' '}
                {COMPETENCIES.find((c) => c.id === hoveredNode)
                  ?.connections.map((id) => COMPETENCIES.find((c) => c.id === id)?.label)
                  .join(', ')}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  )
}
