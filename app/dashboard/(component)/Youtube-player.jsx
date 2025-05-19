"use client"

import { useState, useEffect } from "react"
import { X, Clock } from "lucide-react"

export default function YoutubePlayer({ onClose }) {
  const [isReady, setIsReady] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(10) // 10 seconds countdown
  const [canSkip, setCanSkip] = useState(false)

  const videoIds = [
    "gpTtJD0lILE", // Original video
    "S5lwT-4zUas",
    "AU_rqQvh9D8",
     // Mark Ronson - Uptown Funk
  ]
  const [selectedVideo, setSelectedVideo] = useState("")

  useEffect(() => {
    // Select a random video from the array
    const randomIndex = Math.floor(Math.random() * videoIds.length)
    setSelectedVideo(videoIds[randomIndex])
  }, [])

  useEffect(() => {
    // Load YouTube API
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    // Set ready state after a short delay to ensure API is loaded
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Countdown timer for non-skippable duration
  useEffect(() => {
    if (!isReady) return

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          setCanSkip(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isReady])

  const handleClose = () => {
    if (canSkip) {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-purple-900/95 z-50 flex flex-col items-center justify-center">
      {!canSkip && (
        <div className="absolute top-4 right-4 bg-white/90 text-purple-700 px-3 py-1 rounded-full flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          <span className="font-bold">{timeRemaining}s</span>
        </div>
      )}

      <button
        onClick={handleClose}
        
        className={`absolute top-4 right-4 ${
          canSkip ? "text-white hover:text-purple-300" : "text-gray-500 cursor-not-allowed opacity-50"
        } transition-colors ${!canSkip ? "hidden" : ""}`}
        aria-label="Close video"
        disabled={!canSkip}
      >
        <X className="w-8 h-8" />
      </button>

      <div className="w-full h-full max-w-5xl max-h-[80vh] p-4 flex items-center justify-center">
        {isReady ? (
          <iframe
            className="w-full h-full aspect-video rounded-xl border-4 border-purple-300"
            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`} // Child-friendly video
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="text-white text-xl">Loading video...</div>
        )}
      </div>

      <div className="mt-4 text-white text-center px-4">
        <p className="text-xl mb-2">🎉 Congratulations! 🎉</p>
        <p className="text-lg">Enjoy this fun video as a reward for completing the game!</p>
        {!canSkip ? (
          <p className="mt-2 text-purple-300">Please watch for {timeRemaining} more seconds...</p>
        ) : (
          <button
            onClick={handleClose}
            className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Continue Playing 🎮
          </button>
        )}
      </div>
    </div>
  )
}
