"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import QuestionCard from "./Question-card"
import ResultsCard from "./Result-card"
import { quizData } from "../../../lib/quiz-data"
import { ArrowLeftIcon, ArrowRightIcon, HomeIcon, HelpCircleIcon } from "lucide-react"

export default function QuizContainer({ levelId }) {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const levelQuestions = quizData[levelId - 1].questions
  const totalQuestions = levelQuestions.length

  useEffect(() => {
    // Initialize answers array
    setAnswers(new Array(totalQuestions).fill(null))
  }, [totalQuestions])

  const handleAnswer = (selectedOption) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestionIndex] = selectedOption
    setAnswers(newAnswers)

    // Show feedback
    setIsCorrect(selectedOption === levelQuestions[currentQuestionIndex].correctAnswer)
    setShowFeedback(true)

    // Auto-advance after 1.5 seconds
    setTimeout(() => {
      setShowFeedback(false)
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      } else {
        calculateScore()
        setQuizCompleted(true)
      }
    }, 1500)
  }

  const goToNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      calculateScore()
      setQuizCompleted(true)
    }
  }

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const calculateScore = () => {
    let totalScore = 0

    answers.forEach((answer, index) => {
      if (answer === levelQuestions[index].correctAnswer) {
        totalScore += 10
      }
    })

    setScore(totalScore)

    // Save score to localStorage if it's the first time or higher than previous
    const completedLevels = JSON.parse(localStorage.getItem("completedLevels") || "{}")
    if (!completedLevels[levelId] || completedLevels[levelId] < totalScore) {
      completedLevels[levelId] = totalScore
      localStorage.setItem("completedLevels", JSON.stringify(completedLevels))
    }
  }

  const goToNextLevel = () => {
    if (levelId < quizData.length) {
      router.push(`/quiz/${levelId + 1}`)
    } else {
      router.push("/")
    }
  }

  const restartQuiz = () => {
    setCurrentQuestionIndex(0)
    setAnswers(new Array(totalQuestions).fill(null))
    setQuizCompleted(false)
  }

  const goToHome = () => {
    router.push("/dashboard/quiz")
  }

  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100

  // Level-specific emoji
  const getLevelEmoji = () => {
    const emojis = ["⚖️", "📜", "👶", "🌳", "🛒"]
    return emojis[levelId - 1] || "📚"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-8 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="flex justify-between items-center mb-6">
          <Button
            variant="outline"
            className="border-purple-300 text-purple-700 rounded-xl font-comic"
            onClick={goToHome}
          >
            <HomeIcon className="h-4 w-4 mr-2" /> Home
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold text-purple-800 font-comic flex items-center">
            <span className="mr-2">{getLevelEmoji()}</span>
            Level {levelId}: {quizData[levelId - 1].title}
          </h1>
        </div>

        {!quizCompleted ? (
          <>
            <div className="mb-6 relative">
              <div className="absolute -left-20 top-0 hidden lg:block">
                <div className="bg-purple-100 p-3 rounded-full border-2 border-purple-300">
                  <HelpCircleIcon className="h-10 w-10 text-purple-600" />
                </div>
              </div>

              <div className="flex justify-between text-sm text-purple-600 mb-2 font-comic">
                <span>
                  Question {currentQuestionIndex + 1} of {totalQuestions}
                </span>
                <span>{progress.toFixed(0)}% Complete</span>
              </div>
              <Progress
                value={progress}
                className="h-3 bg-purple-100 rounded-full"
                indicatorClassName="bg-purple-600 rounded-full"
              />
            </div>

            <QuestionCard
              question={levelQuestions[currentQuestionIndex]}
              selectedAnswer={answers[currentQuestionIndex]}
              onSelectAnswer={handleAnswer}
              showFeedback={showFeedback}
              isCorrect={isCorrect}
            />

            {!showFeedback && (
              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  className="border-purple-300 text-purple-700 rounded-xl font-comic"
                  onClick={goToPreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                >
                  <ArrowLeftIcon className="h-4 w-4 mr-2" /> Previous
                </Button>

                <Button
                  className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-comic"
                  onClick={goToNextQuestion}
                  disabled={answers[currentQuestionIndex] === null}
                >
                  {currentQuestionIndex === totalQuestions - 1 ? "Finish Quiz" : "Next"}
                  {currentQuestionIndex !== totalQuestions - 1 && <ArrowRightIcon className="h-4 w-4 ml-2" />}
                </Button>
              </div>
            )}
          </>
        ) : (
          <ResultsCard
            score={score}
            totalQuestions={totalQuestions}
            levelId={levelId}
            onRestart={restartQuiz}
            onNextLevel={goToNextLevel}
            onHome={goToHome}
            answers={answers}
            questions={levelQuestions}
          />
        )}
      </div>
    </div>
  )
}
