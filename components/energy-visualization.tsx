"use client"

import { useEffect, useRef } from "react"

export function EnergyVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.clientWidth
        canvas.height = parent.clientHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Energy flow particles
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      alpha: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 2
        this.speedY = (Math.random() - 0.5) * 2
        this.color = `hsl(${5 + Math.random() * 15}, 83%, ${60 + Math.random() * 15}%)`
        this.alpha = Math.random() * 0.5 + 0.3
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Fade out particles
        if (this.alpha > 0.01) {
          this.alpha -= 0.005
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.globalAlpha = this.alpha
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    // Energy nodes
    class EnergyNode {
      x: number
      y: number
      radius: number
      connections: EnergyNode[]
      pulseRadius: number
      pulseAlpha: number
      isPulsing: boolean
      nextPulseTime: number

      constructor(x: number, y: number, radius: number) {
        this.x = x
        this.y = y
        this.radius = radius
        this.connections = []
        this.pulseRadius = radius
        this.pulseAlpha = 0
        this.isPulsing = false
        this.nextPulseTime = Date.now() + Math.random() * 5000
      }

      connect(node: EnergyNode) {
        this.connections.push(node)
      }

      update() {
        const now = Date.now()

        // Start a new pulse
        if (!this.isPulsing && now > this.nextPulseTime) {
          this.isPulsing = true
          this.pulseRadius = this.radius
          this.pulseAlpha = 0.7
        }

        // Update existing pulse
        if (this.isPulsing) {
          this.pulseRadius += 1
          this.pulseAlpha -= 0.01

          if (this.pulseAlpha <= 0) {
            this.isPulsing = false
            this.nextPulseTime = now + Math.random() * 5000 + 2000
          }
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Draw node
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()

        // Draw pulse
        if (this.isPulsing) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${this.pulseAlpha})`
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.pulseRadius, 0, Math.PI * 2)
          ctx.stroke()
        }

        // Draw connections
        this.connections.forEach((node) => {
          ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(node.x, node.y)
          ctx.stroke()
        })
      }
    }

    // Initialize particles and nodes
    const particles: Particle[] = []
    const nodes: EnergyNode[] = []

    // Create nodes
    const createNodes = () => {
      const width = canvas.width
      const height = canvas.height

      // Clear existing nodes
      nodes.length = 0

      // Create new nodes
      const nodeCount = Math.max(5, Math.floor((width * height) / 50000))

      for (let i = 0; i < nodeCount; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        const radius = Math.random() * 2 + 2
        nodes.push(new EnergyNode(x, y, radius))
      }

      // Connect nodes
      nodes.forEach((node) => {
        const closestNodes = [...nodes]
          .filter((n) => n !== node)
          .sort((a, b) => {
            const distA = Math.hypot(a.x - node.x, a.y - node.y)
            const distB = Math.hypot(b.x - node.x, b.y - node.y)
            return distA - distB
          })
          .slice(0, 2)

        closestNodes.forEach((closestNode) => {
          node.connect(closestNode)
        })
      })
    }

    createNodes()
    window.addEventListener("resize", createNodes)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node) => {
        node.update()
        node.draw(ctx)

        // Occasionally create particles at nodes
        if (Math.random() < 0.1) {
          particles.push(new Particle(node.x, node.y))
        }
      })

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update()
        particles[i].draw(ctx)

        // Remove faded particles
        if (particles[i].alpha <= 0.01) {
          particles.splice(i, 1)
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("resize", createNodes)
    }
  }, [])

  return <canvas ref={canvasRef} className="h-full w-full" />
}
