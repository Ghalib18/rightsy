"use client"

import { useState, useEffect, useRef } from "react"
import YoutubePlayer from "../../(component)/Youtube-player";
import { useGameState } from "@/hooks/use-game-state"
import { Clock, RefreshCw, Check, Lightbulb } from "lucide-react"

// Word data
const words = [
  {
    word: "child-labour",
    imghint: "/images/child.jpeg",
    hint: "children force to work instead of enjoying their childhood",
  },
  {
    word: "child-marriage",
    imghint: "/images/child-marriage.jpeg",
    hint: "Dream crushed in premature union",
  },
  {
    word: "child-abuse",
    imghint: "/images/child.jpg",
    hint: "secrets hidden in unwanted touches",
  },
  {
    word: "untouchability",
    imghint: "/images/untouchability.jpeg",
    hint: "unfair barriers isolating innocent connection",
  },
  {
    word: "guardianship",
    imghint: "/images/guardian.webp",
    hint: "An unadopted child awaits a family",
  },
  {
    word: "exploitataion",
    imghint: "/images/Right-Against-Exploitation.jpg",
    hint: "shielding children from clutches of injustice",
  },
  {
    word: "inequality",
    imghint: "/images/gender.jpeg",
    hint: "not treating everyone equal in all aspects",
  },
  {
    word: "bad-touch",
    imghint: "/images/bad.webp",
    hint: "secrets hidden in unwanted touches",
  },
]

export default function WordScramblePage() {
  const [scrambledWord, setScrambledWord] = useState("")
  const [correctWord, setCorrectWord] = useState("")
  const [hint, setHint] = useState("")
  const [imageHint, setImageHint] = useState("")
  const [userInput, setUserInput] = useState("")
  const [timeLeft, setTimeLeft] = useState(30)
  const [showWinPopup, setShowWinPopup] = useState(false)
  const [showWrongPopup, setShowWrongPopup] = useState(false)
  const [showTimeoutPopup, setShowTimeoutPopup] = useState(false)
  const [showHintAnswerPopup, setShowHintAnswerPopup] = useState(false)
  const [showYoutubeVideo, setShowYoutubeVideo] = useState(false)
  const timerRef = useRef(null)
  const { isStuck, setIsStuck } = useGameState()

  // Initialize the game
  const initGame = () => {
    // Clear any existing timer
    if (timerRef.current) clearInterval(timerRef.current)

    // Reset states
    setUserInput("")
    setTimeLeft(30)
    setShowWinPopup(false)
    setShowWrongPopup(false)
    setShowTimeoutPopup(false)
    setShowHintAnswerPopup(false)

    // Select a random word
    const randomObj = words[Math.floor(Math.random() * words.length)]
    setCorrectWord(randomObj.word.toLowerCase())
    setHint(randomObj.hint)
    setImageHint(randomObj.imghint)

    // Scramble the word
    const wordArray = randomObj.word.split("")
    for (let i = wordArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]
    }
    setScrambledWord(wordArray.join(""))

    // Start the timer
    startTimer()
  }

  // Start the timer
  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current)
          setShowTimeoutPopup(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  // Check the user's answer
  const checkWord = () => {
    if (!userInput.trim()) {
      alert("Please enter a word to check")
      return
    }

    if (userInput.toLowerCase() === correctWord) {
      setShowWinPopup(true)
      clearInterval(timerRef.current)
    } else {
      setShowWrongPopup(true)
    }
  }

  // Show hint and answer
  const showHint = () => {
    setShowHintAnswerPopup(true)
    setIsStuck(true)
    clearInterval(timerRef.current)
  }

  // Handle timeout popup close
  const handleTimeoutClose = () => {
    setShowTimeoutPopup(false)
    setShowYoutubeVideo(true)
  }

  // Handle YouTube video close
  const handleVideoClose = () => {
    setShowYoutubeVideo(false)
    initGame()
  }

  // Initialize the game on component mount
  useEffect(() => {
    initGame()

    // Cleanup timer on unmount
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  // Handle timeout
  useEffect(() => {
    if (timeLeft === 0) {
      setShowTimeoutPopup(true)
      clearInterval(timerRef.current)
    }
  }, [timeLeft])

  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="relative border-b border-purple-200 py-4">
          <h2 className="text-center text-2xl font-bold text-purple-800">Word Scramble</h2>
          <button
            onClick={showHint}
            className="absolute right-4 top-4 text-purple-600 hover:text-purple-800 transition-colors"
            aria-label="Show hint"
          >
            <Lightbulb className="w-6 h-6" />
          </button>
        </div>

        {/* Game Content */}
        <div className="p-6">
          {/* Image Hint */}
          <div className="flex justify-center mb-6">
            <img
              src={imageHint || "/placeholder.svg?height=150&width=200"}
              alt="Hint"
              className="h-[150px] w-[200px] object-cover border-2 border-purple-300 rounded-lg"
            />
          </div>

          {/* Scrambled Word */}
          <p className="text-xl font-medium text-center tracking-[25px] text-purple-900 uppercase mb-6">
            {scrambledWord}
          </p>

          {/* Details */}
          <div className="flex justify-between mb-6">
            <p className="text-sm text-purple-700">
              <span className="font-semibold">Hint: </span>
              {hint}
            </p>
            <p className="text-sm text-purple-700 flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span className="font-semibold">{timeLeft}s</span>
            </p>
          </div>

          {/* Input */}
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            maxLength={correctWord.length}
            placeholder="Enter a valid word"
            className="w-full h-14 px-4 rounded-xl border border-purple-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 text-lg"
          />

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={initGame}
              className="flex-1 bg-purple-200 hover:bg-purple-300 text-purple-800 py-3 px-4 rounded-xl font-medium flex items-center justify-center transition-colors"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Refresh
            </button>
            <button
              onClick={checkWord}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center transition-colors"
            >
              <Check className="w-5 h-5 mr-2" />
              Check
            </button>
          </div>
        </div>
      </div>

      {/* Win Popup */}
      {showWinPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm text-center transform transition-all">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto -mt-16 border-4 border-white">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-4">WIN! 🎊🎊🎊</h2>
            <button
              onClick={() => {
                setShowWinPopup(false)
                initGame()
              }}
              className="mt-6 w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Wrong Answer Popup */}
      {showWrongPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm text-center transform transition-all">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto -mt-16 border-4 border-white">
              <span className="text-3xl text-red-600">❌</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-4">WRONG!! 😵‍💫😵‍💫</h2>
            <button
              onClick={() => {
                setShowWrongPopup(false)
                setShowYoutubeVideo(true)
              }}
              className="mt-6 w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {/* Timeout Popup */}
      {showTimeoutPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm text-center transform transition-all">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto -mt-16 border-4 border-white">
              <Clock className="w-10 h-10 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-4">TIME-OUT 〽️〽️</h2>
            <button
              onClick={handleTimeoutClose}
              className="mt-6 w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              NEXT
            </button>
          </div>
        </div>
      )}

      {/* Hint Answer Popup */}
      {showHintAnswerPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm text-center transform transition-all">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto -mt-16 border-4 border-white">
              <Lightbulb className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-4">
              Correct Answer: <span className="text-purple-700">{correctWord}</span>
            </h2>
            <button
              onClick={() => {
                setShowHintAnswerPopup(false)
                setShowYoutubeVideo(true)
              }}
              className="mt-6 w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Watch Video
            </button>
          </div>
        </div>
      )}

      {/* YouTube Video */}
      {showYoutubeVideo && <YoutubePlayer onClose={handleVideoClose} />}
    </div>
  )
}

