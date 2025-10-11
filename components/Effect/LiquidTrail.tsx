'use client'

import { useEffect, useRef } from 'react'

interface Drop {
  x: number
  y: number
  radius: number
  color: string
  alpha: number
}

export default function LiquidTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const drops = useRef<Drop[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')!
    const colors = ['#00FFFF', '#FF00FF', '#00FF66', '#FF6600', '#0099FF']

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const mouse = { x: 0, y: 0 }
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY

      drops.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: Math.random() * 30 + 15,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
      })
    })

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < drops.current.length; i++) {
        const d = drops.current[i]

        const hex = d.color.replace('#', '')
        const r = parseInt(hex.substring(0, 2), 16)
        const g = parseInt(hex.substring(2, 4), 16)
        const b = parseInt(hex.substring(4, 6), 16)
        const rgba = `rgba(${r}, ${g}, ${b}, ${d.alpha})`

        const gradient = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.radius)
        gradient.addColorStop(0, rgba)
        gradient.addColorStop(1, 'transparent')

        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.shadowColor = rgba
        ctx.shadowBlur = 30
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2)
        ctx.fill()

        // fade & move
        d.alpha -= 0.02
        d.radius += 0.3
        if (d.alpha <= 0) {
          drops.current.splice(i, 1)
          i--
        }
      }

      requestAnimationFrame(animate)
    }

    animate()
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  )
}
