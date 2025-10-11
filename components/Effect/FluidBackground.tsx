'use client'

import { useEffect } from 'react'

export default function FluidBackground() {
	useEffect(() => {
		const canvas = document.getElementById('fluid-canvas') as HTMLCanvasElement
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return // ✅ Kiểm tra kỹ để tránh null

		let width = window.innerWidth
		let height = window.innerHeight
		canvas.width = width
		canvas.height = height

		// === Danh sách giọt màu ===
		const drops: {
			x: number
			y: number
			radius: number
			alpha: number
			color: string
			velocityX: number
			velocityY: number
		}[] = []

		const createDrop = (x: number, y: number) => {
			drops.push({
				x,
				y,
				radius: 100 + Math.random() * 150,
				alpha: 1,
				color: `hsl(${Math.random() * 360}, 100%, 60%)`,
				velocityX: (Math.random() - 0.5) * 5,
				velocityY: (Math.random() - 0.5) * 5,
			})
		}

		const draw = () => {
			// ✅ Đảm bảo ctx luôn tồn tại
			if (!ctx) return

			ctx.clearRect(0, 0, width, height)
			for (let i = drops.length - 1; i >= 0; i--) {
				const d = drops[i]
				d.x += d.velocityX
				d.y += d.velocityY
				d.alpha *= 0.96
				if (d.alpha < 0.08) {
					drops.splice(i, 1)
					continue
				}
				const gradient = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.radius)
				gradient.addColorStop(0, d.color)
				gradient.addColorStop(1, 'transparent')

				ctx.globalAlpha = d.alpha
				ctx.fillStyle = gradient
				ctx.beginPath()
				ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2)
				ctx.fill()
			}
			requestAnimationFrame(draw)
		}

		const onMove = (e: MouseEvent) => {
			createDrop(e.clientX, e.clientY)
		}

		window.addEventListener('mousemove', onMove)
		window.addEventListener('resize', () => {
			width = window.innerWidth
			height = window.innerHeight
			canvas.width = width
			canvas.height = height
		})

		draw()

		return () => {
			window.removeEventListener('mousemove', onMove)
		}
	}, [])

	return (
		<canvas
			id="fluid-canvas"
			className="fixed top-0 left-0 w-full h-full z-[-1]"
			style={{ pointerEvents: 'none' }}
		/>
	)
}
