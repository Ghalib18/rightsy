"use client"

import { useEffect, useRef } from "react"

export default function ScoreGraph({ score, totalQuestions }) {
  const canvasRef = useRef(null)
  const maxScore = totalQuestions * 10
  const percentage = (score / maxScore) * 100

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw background with fun pattern
    ctx.fillStyle = "#F3E8FF" // Light purple
    ctx.fillRect(0, 0, width, height)

    // Add some fun dots in the background
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const radius = Math.random() * 3 + 1

      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(147, 51, 234, 0.2)" // Purple with opacity
      ctx.fill()
    }

    // Draw score bar
    const barWidth = (score / maxScore) * width
    const gradient = ctx.createLinearGradient(0, 0, barWidth, 0)
    gradient.addColorStop(0, "#9333EA") // Purple-600
    gradient.addColorStop(1, "#A855F7") // Purple-500

    // Draw rounded bar
    const radius = height / 2

    // Left half circle
    ctx.beginPath()
    ctx.arc(radius, height / 2, radius, Math.PI / 2, (3 * Math.PI) / 2)
    ctx.fillStyle = gradient
    ctx.fill()

    // Rectangle in the middle
    ctx.fillStyle = gradient
    ctx.fillRect(radius, 0, barWidth - radius * 2 > 0 ? barWidth - radius * 2 : 0, height)

    // Right half circle (only if we have enough score)
    if (barWidth > radius * 2) {
      ctx.beginPath()
      ctx.arc(barWidth - radius, height / 2, radius, (3 * Math.PI) / 2, Math.PI / 2)
      ctx.fillStyle = gradient
      ctx.fill()
    }

    // Draw percentage text
    ctx.fillStyle = percentage > 50 ? "#FFFFFF" : "#6B21A8" // White or Purple-800
    ctx.font = "bold 16px 'Comic Neue', cursive"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(`${percentage.toFixed(0)}%`, width / 2, height / 2)

    // Draw decorative elements
    if (percentage >= 70) {
      // Draw stars for high scores
      drawStar(ctx, width - 30, 15, 8, 5, "#FFD700")
      drawStar(ctx, width - 50, 25, 6, 5, "#FFD700")
      drawStar(ctx, width - 70, 15, 7, 5, "#FFD700")
    }
  }, [score, maxScore, percentage])

  // Function to draw a star
  const drawStar = (ctx, cx, cy, spikes, outerRadius, color) => {
    let rot = (Math.PI / 2) * 3
    let x = cx
    let y = cy
    const step = Math.PI / spikes

    ctx.beginPath()
    ctx.moveTo(cx, cy - outerRadius)

    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius
      y = cy + Math.sin(rot) * outerRadius
      ctx.lineTo(x, y)
      rot += step

      x = cx + (Math.cos(rot) * outerRadius) / 2
      y = cy + (Math.sin(rot) * outerRadius) / 2
      ctx.lineTo(x, y)
      rot += step
    }

    ctx.lineTo(cx, cy - outerRadius)
    ctx.closePath()
    ctx.fillStyle = color
    ctx.fill()
  }

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-purple-800 mb-2 font-comic">Your Score</h3>
      <div className="relative">
        <canvas ref={canvasRef} width={300} height={40} className="w-full h-10 rounded-lg" />
      </div>
      <div className="flex justify-between text-sm text-purple-600 mt-1 font-comic">
        <span>0 points</span>
        <span>{maxScore} points</span>
      </div>
    </div>
  )
}
