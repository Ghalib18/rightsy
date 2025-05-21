"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import QuizContainer from "../../(component)/Quiz-container"
import { quizData } from "../../../../lib/quiz-data"

export default function QuizPage({ params }) {
  const router = useRouter()
  const levelId = Number.parseInt(params.level)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Validate level id
    if (isNaN(levelId) || levelId < 1 || levelId > quizData.length) {
      router.push("/")
      return
    }

    // Check if previous level is completed (except for level 1)
    if (levelId > 1) {
      const completedLevels = JSON.parse(localStorage.getItem("completedLevels") || "{}")
      if (!completedLevels[levelId - 1]) {
        router.push("/")
        return
      }
    }

    setLoading(false)
  }, [levelId, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-purple-600 text-xl">Loading quiz...</div>
      </div>
    )
  }

  return <QuizContainer levelId={levelId} />
}
