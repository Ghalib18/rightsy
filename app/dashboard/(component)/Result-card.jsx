"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ScoreGraph from "./Score-graph"
import { CheckCircle2Icon, XCircleIcon, RotateCcwIcon, ArrowRightIcon, HomeIcon } from "lucide-react"
import { quizData } from "../../../lib/quiz-data"
import confetti from "canvas-confetti"
import { useEffect } from "react"

export default function ResultsCard({
  score,
  totalQuestions,
  levelId,
  onRestart,
  onNextLevel,
  onHome,
  answers,
  questions,
}) {
  const percentage = (score / (totalQuestions * 10)) * 100
  const isLastLevel = levelId === quizData.length

  // Trigger confetti effect on good scores
  useEffect(() => {
    if (percentage >= 60) {
      const duration = 3 * 1000
      const end = Date.now() + duration
      ;(function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ["#9333EA", "#A855F7", "#C084FC"],
        })
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ["#9333EA", "#A855F7", "#C084FC"],
        })

        if (Date.now() < end) {
          requestAnimationFrame(frame)
        }
      })()
    }
  }, [percentage])

  // Get feedback based on score percentage
  const getFeedback = () => {
    if (percentage >= 80) return "Excellent! You're a legal expert!"
    if (percentage >= 60) return "Great job! You know your rights well!"
    if (percentage >= 40) return "Good effort! Keep learning about your rights!"
    return "Keep studying! Understanding your rights is important!"
  }

  // Get emoji based on score
  const getEmoji = () => {
    if (percentage >= 80) return "🤩"
    if (percentage >= 60) return "😄"
    if (percentage >= 40) return "🙂"
    return "🤔"
  }

  return (
    <div className="space-y-6">
      <Card className="border-3 border-purple-300 shadow-lg rounded-2xl overflow-hidden">
        <CardHeader className="bg-purple-100 rounded-t-xl text-center">
          <CardTitle className="text-2xl text-purple-800 font-comic">Quiz Results</CardTitle>
          <CardDescription className="text-purple-600 text-lg font-medium font-comic">
            Level {levelId}: {quizData[levelId - 1].title}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 pb-4">
          <div className="text-center mb-6 relative">
            <div className="absolute -top-20 -left-20 hidden lg:block">
              <div className="text-8xl">{getEmoji()}</div>
            </div>

            <p className="text-4xl font-bold text-purple-800 mb-2 font-comic">
              {score} / {totalQuestions * 10}
            </p>
            <p className="text-lg text-purple-600 font-comic">{getFeedback()}</p>

            {percentage >= 60 && (
              <div className="mt-2">
                <div className="text-6xl mx-auto">🏆</div>
              </div>
            )}
          </div>

          <ScoreGraph score={score} totalQuestions={totalQuestions} />

          <div className="mt-8 border-t-2 border-purple-100 pt-4">
            <h3 className="text-lg font-semibold text-purple-800 mb-3 font-comic">Question Summary</h3>
            <div className="space-y-3">
              {questions.map((question, index) => (
                <div key={index} className="flex items-start bg-white p-3 rounded-xl border-2 border-purple-100">
                  {answers[index] === question.correctAnswer ? (
                    <CheckCircle2Icon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  ) : (
                    <XCircleIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  )}
                  <div>
                    <p className="text-gray-700 font-comic">{question.question}</p>
                    <p className="text-sm text-gray-500 font-comic">
                      Correct answer: {question.options[question.correctAnswer]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-3 justify-center pb-4">
          <Button
            variant="outline"
            className="border-purple-300 text-purple-700 rounded-xl font-comic"
            onClick={onRestart}
          >
            <RotateCcwIcon className="h-4 w-4 mr-2" /> Try Again
          </Button>

          <Button
            variant="outline"
            className="border-purple-300 text-purple-700 rounded-xl font-comic"
            onClick={onHome}
          >
            <HomeIcon className="h-4 w-4 mr-2" /> Home
          </Button>

          {!isLastLevel && (
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-comic"
              onClick={onNextLevel}
            >
              Next Level <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
