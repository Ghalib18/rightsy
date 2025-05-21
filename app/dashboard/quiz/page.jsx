"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LockIcon,
  UnlockIcon,
  TrophyIcon,
  BookOpenIcon,
  ScrollIcon,
  HeartIcon,
  LeafIcon,
  ShoppingBagIcon,
} from "lucide-react"

export default function Home() {
  const router = useRouter()
  const [completedLevels, setCompletedLevels] = useState({})

  useEffect(() => {
    // Load completed levels from localStorage
    const savedLevels = localStorage.getItem("completedLevels")
    if (savedLevels) {
      setCompletedLevels(JSON.parse(savedLevels))
    }
  }, [])

  const levels = [
    {
      id: 1,
      title: "Basic Rights",
      description: "Learn about the fundamental rights in India",
      icon: <BookOpenIcon className="h-10 w-10 text-purple-600" />,
      emoji: "⚖️",
    },
    {
      id: 2,
      title: "Constitutional Laws",
      description: "Explore the Indian Constitution",
      icon: <ScrollIcon className="h-10 w-10 text-purple-600" />,
      emoji: "📜",
    },
    {
      id: 3,
      title: "Child Rights",
      description: "Discover rights specific to children in India",
      icon: <HeartIcon className="h-10 w-10 text-purple-600" />,
      emoji: "👶",
    },
    {
      id: 4,
      title: "Environmental Laws",
      description: "Learn about laws protecting the environment",
      icon: <LeafIcon className="h-10 w-10 text-purple-600" />,
      emoji: "🌳",
    },
    {
      id: 5,
      title: "Consumer Rights",
      description: "Understand your rights as a consumer",
      icon: <ShoppingBagIcon className="h-10 w-10 text-purple-600" />,
      emoji: "🛒",
    },
  ]

  const startQuiz = (levelId) => {
    router.push(`/dashboard/quiz/${levelId}`)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8 relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:block">
            <div className="text-7xl animate-bounce-slow">👧</div>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block">
            <div className="text-7xl animate-bounce-slow" style={{ animationDelay: "0.5s" }}>
              👦
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4 font-comic">Learn Indian Laws & Rights</h1>
          <p className="text-xl text-purple-600 max-w-2xl mx-auto font-comic">
            Test your knowledge about the laws and rights of India through fun quizzes!
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-full max-w-xs">
            <div className="bg-purple-100 text-center py-2 px-4 rounded-full border-2 border-purple-300 shadow-md">
              <span className="text-2xl font-comic text-purple-800">✨ Fun Quiz Time! ✨</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {levels.map((level, index) => {
              const isLocked = index > 0 && !completedLevels[index]
              const isCompleted = completedLevels[level.id]

              return (
                <Card
                  key={level.id}
                  className="border-3 border-purple-300 shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden bg-white"
                >
                  <CardHeader className="bg-purple-100 rounded-t-xl pb-3">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-purple-800 font-comic">Level {level.id}</CardTitle>
                      {isCompleted ? (
                        <div className="relative">
                          <TrophyIcon className="h-8 w-8 text-yellow-500" />
                          <div className="absolute -top-1 -right-1 animate-ping h-2 w-2 rounded-full bg-yellow-400 opacity-75"></div>
                        </div>
                      ) : isLocked ? (
                        <LockIcon className="h-7 w-7 text-purple-400" />
                      ) : (
                        <UnlockIcon className="h-7 w-7 text-green-500" />
                      )}
                    </div>
                    <CardDescription className="text-purple-600 font-medium font-comic">{level.title}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4 relative">
                    <p className="text-gray-700 font-comic">{level.description}</p>
                    {isCompleted && (
                      <div className="mt-2 bg-purple-100 p-2 rounded-xl">
                        <p className="text-purple-800 font-medium font-comic">
                          Score: {completedLevels[level.id]} points
                        </p>
                      </div>
                    )}

                    {/* Level-specific emoji */}
                    <div className="absolute -right-3 -bottom-3 text-4xl">{level.emoji}</div>
                  </CardContent>
                  <CardFooter className="pb-4">
                    <Button
                      className={`w-full text-white font-comic rounded-xl ${
                        isLocked
                          ? "bg-gray-400 hover:bg-gray-400 cursor-not-allowed"
                          : "bg-purple-600 hover:bg-purple-700"
                      }`}
                      disabled={isLocked}
                      onClick={() => startQuiz(level.id)}
                    >
                      {isCompleted ? "Play Again" : isLocked ? "Locked" : "Start Quiz"}
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block relative">
              <div className="text-7xl mx-auto">🦉</div>
              <div className="bg-white rounded-xl p-3 border-2 border-purple-300 mt-2 relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t-2 border-l-2 border-purple-300 transform rotate-45"></div>
                <p className="text-purple-800 font-comic">
                  Learning about laws is fun! Complete all levels to become a Rights Champion! 🏆
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
