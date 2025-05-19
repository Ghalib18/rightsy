"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"
import Board from "../../(component)/Board"
import Controls from "../../(component)/Control"
import YoutubePlayer from "../../(component)/Youtube-player"
import PopupMessage from "../../(component)/PopupMessage"
import { useGameState } from "@/hooks/use-game-state"

// Pre-generated Sudoku puzzles for reliable preview
const PUZZLES = {
  easy: {
    puzzle: [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ],
    solution: [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ],
  },
  medium: {
    puzzle: [
      [0, 0, 0, 2, 6, 0, 7, 0, 1],
      [6, 8, 0, 0, 7, 0, 0, 9, 0],
      [1, 9, 0, 0, 0, 4, 5, 0, 0],
      [8, 2, 0, 1, 0, 0, 0, 4, 0],
      [0, 0, 4, 6, 0, 2, 9, 0, 0],
      [0, 5, 0, 0, 0, 3, 0, 2, 8],
      [0, 0, 9, 3, 0, 0, 0, 7, 4],
      [0, 4, 0, 0, 5, 0, 0, 3, 6],
      [7, 0, 3, 0, 1, 8, 0, 0, 0],
    ],
    solution: [
      [4, 3, 5, 2, 6, 9, 7, 8, 1],
      [6, 8, 2, 5, 7, 1, 4, 9, 3],
      [1, 9, 7, 8, 3, 4, 5, 6, 2],
      [8, 2, 6, 1, 9, 5, 3, 4, 7],
      [3, 7, 4, 6, 8, 2, 9, 1, 5],
      [9, 5, 1, 7, 4, 3, 6, 2, 8],
      [5, 1, 9, 3, 2, 6, 8, 7, 4],
      [2, 4, 8, 9, 5, 7, 1, 3, 6],
      [7, 6, 3, 4, 1, 8, 2, 5, 9],
    ],
  },
  hard: {
    puzzle: [
      [0, 2, 0, 6, 0, 8, 0, 0, 0],
      [5, 8, 0, 0, 0, 9, 7, 0, 0],
      [0, 0, 0, 0, 4, 0, 0, 0, 0],
      [3, 7, 0, 0, 0, 0, 5, 0, 0],
      [6, 0, 0, 0, 0, 0, 0, 0, 4],
      [0, 0, 8, 0, 0, 0, 0, 1, 3],
      [0, 0, 0, 0, 2, 0, 0, 0, 0],
      [0, 0, 9, 8, 0, 0, 0, 3, 6],
      [0, 0, 0, 3, 0, 6, 0, 9, 0],
    ],
    solution: [
      [1, 2, 3, 6, 7, 8, 9, 4, 5],
      [5, 8, 4, 2, 3, 9, 7, 6, 1],
      [9, 6, 7, 1, 4, 5, 3, 2, 8],
      [3, 7, 2, 4, 6, 1, 5, 8, 9],
      [6, 9, 1, 5, 8, 3, 2, 7, 4],
      [4, 5, 8, 7, 9, 2, 6, 1, 3],
      [8, 3, 6, 9, 2, 4, 1, 5, 7],
      [2, 1, 9, 8, 5, 7, 4, 3, 6],
      [7, 4, 5, 3, 1, 6, 8, 9, 2],
    ],
  },
}

export default function Home() {
  const [board, setBoard] = useState(
    Array(9)
      .fill()
      .map(() => Array(9).fill(0)),
  )
  const [solution, setSolution] = useState(
    Array(9)
      .fill()
      .map(() => Array(9).fill(0)),
  )
  const [fixedCells, setFixedCells] = useState(
    Array(9)
      .fill()
      .map(() => Array(9).fill(false)),
  )
  const [selectedCell, setSelectedCell] = useState(null)
  const [difficulty, setDifficulty] = useState("medium")
  const [errors, setErrors] = useState([])
  const [showYoutubePlayer, setShowYoutubePlayer] = useState(false)
  const [message, setMessage] = useState(null)
  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const { isStuck, setIsStuck } = useGameState()
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [hintPendingCell, setHintPendingCell] = useState(null)

  // Initialize game
  useEffect(() => {
    newGame()
  }, [])

  // Timer
  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 1000)
    } else if (!isActive && timer !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, timer])

  // Format time as mm:ss
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Generate a new Sudoku puzzle
  const newGame = () => {
    // Reset state
    setSelectedCell(null)
    setErrors([])
    setTimer(0)
    setIsActive(true)
    setIsStuck(false)
    setWrongAnswers(0)
    setHintPendingCell(null)

    // Get a pre-generated puzzle based on difficulty
    const { puzzle, solution } = PUZZLES[difficulty]

    // Create deep copies to avoid reference issues
    const puzzleCopy = JSON.parse(JSON.stringify(puzzle))
    const solutionCopy = JSON.parse(JSON.stringify(solution))

    setBoard(puzzleCopy)
    setSolution(solutionCopy)

    // Mark fixed cells
    const fixed = Array(9)
      .fill()
      .map((_, row) =>
        Array(9)
          .fill()
          .map((_, col) => puzzle[row][col] !== 0),
      )
    setFixedCells(fixed)

    showMessage("New game started!", "info")
  }

  // Handle cell click
  const handleCellClick = (row, col) => {
    // Always set the selected cell, even if it's a fixed cell
    // This allows for better visual feedback
    setSelectedCell([row, col])

    // If it's a fixed cell, show a message
    if (fixedCells[row][col]) {
      showMessage("This is a fixed cell and cannot be modified", "info")
    }
  }

  // Handle number input
  const handleNumberClick = (num) => {
    if (!selectedCell) {
      showMessage("Please select a cell first", "info")
      return
    }

    const [row, col] = selectedCell

    if (fixedCells[row][col]) {
      showMessage("Cannot modify fixed cells", "error")
      return
    }

    // Create a new board with the updated value
    const newBoard = JSON.parse(JSON.stringify(board))
    newBoard[row][col] = num
    setBoard(newBoard)

    // Check if the move is valid
    if (num !== solution[row][col]) {
      setErrors([...errors, [row, col]])
      const newWrongAnswers = wrongAnswers + 1
      setWrongAnswers(newWrongAnswers)

      if (newWrongAnswers >= 3) {
        setShowYoutubePlayer(true)
        setIsActive(false)
      } else {
        showMessage(`Wrong answer! ${3 - newWrongAnswers} chances left.`, "error")
      }
    } else {
      // Remove this cell from errors if it was there
      setErrors(errors.filter(([r, c]) => r !== row || c !== col))

      // Check if the puzzle is solved
      if (isBoardComplete(newBoard)) {
        setIsActive(false)
        showMessage("Congratulations! You solved the puzzle!", "success")
      }
    }
  }

  // Clear selected cell
  const handleClearCell = () => {
    if (!selectedCell) {
      showMessage("Please select a cell first", "info")
      return
    }

    const [row, col] = selectedCell

    if (fixedCells[row][col]) {
      showMessage("Cannot clear fixed cells", "error")
      return
    }

    const newBoard = JSON.parse(JSON.stringify(board))
    newBoard[row][col] = 0
    setBoard(newBoard)

    // Remove this cell from errors if it was there
    setErrors(errors.filter(([r, c]) => r !== row || c !== col))
  }

  // Provide a hint
  const handleHint = () => {
    if (!selectedCell) {
      showMessage("Please select a cell first", "info")
      return
    }

    const [row, col] = selectedCell

    if (fixedCells[row][col]) {
      showMessage("This cell is already filled correctly", "info")
      return
    }

    if (board[row][col] === solution[row][col]) {
      showMessage("This cell is already correct", "info")
      return
    }

    // Save the current selected cell for after the video
    setHintPendingCell([...selectedCell])

    // Show YouTube player as penalty for using hint
    setShowYoutubePlayer(true)
    setIsActive(false)
  }

  // Save game
  const handleSaveGame = () => {
    const gameState = {
      board,
      solution,
      fixedCells,
      timer,
      difficulty,
    }

    try {
      localStorage.setItem("sudokuGameState", JSON.stringify(gameState))
      showMessage("Game saved successfully!", "success")
    } catch (e) {
      showMessage("Failed to save game", "error")
    }
  }

  // Load game
  const handleLoadGame = () => {
    try {
      const savedState = localStorage.getItem("sudokuGameState")

      if (!savedState) {
        showMessage("No saved game found", "error")
        return
      }

      const { board, solution, fixedCells, timer, difficulty } = JSON.parse(savedState)

      setBoard(board)
      setSolution(solution)
      setFixedCells(fixedCells)
      setTimer(timer)
      setDifficulty(difficulty)
      setSelectedCell(null)
      setErrors([])
      setIsActive(true)

      showMessage("Game loaded successfully!", "success")
    } catch (error) {
      showMessage("Failed to load saved game", "error")
    }
  }

  // Show message popup
  const showMessage = (text, type) => {
    setMessage({ text, type })
  }

  // Check if the board is complete and correct
  const isBoardComplete = (board) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] !== solution[row][col]) {
          return false
        }
      }
    }
    return true
  }

  // Handle YouTube player close
  const handleYoutubeClose = () => {
    setShowYoutubePlayer(false)

    // Check if this was triggered by a hint
    if (hintPendingCell) {
      // This was from a hint, provide the answer
      const [row, col] = hintPendingCell
      const newBoard = JSON.parse(JSON.stringify(board))
      newBoard[row][col] = solution[row][col]
      setBoard(newBoard)

      // Remove this cell from errors
      setErrors(errors.filter(([r, c]) => r !== row || c !== col))

      // Check if the puzzle is solved
      if (isBoardComplete(newBoard)) {
        showMessage("Congratulations! You solved the puzzle!", "success")
      } else {
        showMessage("Here's your hint!", "info")
      }

      // Clear the pending hint
      setHintPendingCell(null)
      setIsActive(true)
    } else {
      // This was from wrong answers, start a new game
      newGame()
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-purple-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-8 text-center">Sudoku Challenge</h1>

      <div
        className="w-full max-w-md mx-auto bg-white rounded-xl shadow-xl p-4 md:p-6"
        style={{
          maxWidth: "28rem",
          margin: "0 auto",
          backgroundColor: "white",
          borderRadius: "0.75rem",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
          padding: "1rem",
        }}
      >
        {message && <PopupMessage message={message.text} type={message.type} onClose={() => setMessage(null)} />}

        {showYoutubePlayer && <YoutubePlayer onClose={handleYoutubeClose} />}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              fontSize: "1.125rem",
              fontWeight: "600",
              color: "#7e22ce",
            }}
          >
            Difficulty: <span style={{ textTransform: "capitalize" }}>{difficulty}</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f3e8ff",
              padding: "0.25rem 0.75rem",
              borderRadius: "9999px",
              color: "#7e22ce",
            }}
          >
            <Clock size={18} style={{ marginRight: "0.25rem" }} />
            <span style={{ fontFamily: "monospace" }}>{formatTime(timer)}</span>
          </div>
        </div>

        <Board
          board={board}
          fixedCells={fixedCells}
          selectedCell={selectedCell}
          handleCellClick={handleCellClick}
          errors={errors}
        />

        <div style={{ marginTop: "1.5rem" }}>
          <Controls
            handleNumberClick={handleNumberClick}
            handleClearCell={handleClearCell}
            handleNewGame={newGame}
            handleHint={handleHint}
            handleSaveGame={handleSaveGame}
            handleLoadGame={handleLoadGame}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
        </div>
      </div>
    </main>
  )
}
