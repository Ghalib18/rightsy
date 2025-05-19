"use client"

import { Trash2, RotateCcw, Lightbulb, Save, Upload } from "lucide-react"

export default function Controls({
  handleNumberClick,
  handleClearCell,
  handleNewGame,
  handleHint,
  handleSaveGame,
  handleLoadGame,
  difficulty,
  setDifficulty,
}) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const buttonStyle = {
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    fontWeight: "500",
    transition: "all 0.2s",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

  const primaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#8b5cf6",
    color: "white",
  }

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: "white",
    color: "#7e22ce",
    border: "1px solid #d8b4fe",
  }

  const numberButtonStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.25rem",
    fontWeight: "bold",
    backgroundColor: "white",
    color: "#7e22ce",
    border: "1px solid #d8b4fe",
    cursor: "pointer",
    transition: "all 0.2s",
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-4">
        <div className="flex justify-center mb-4">
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              border: "1px solid #d8b4fe",
              backgroundColor: "white",
              color: "#7e22ce",
            }}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button
            onClick={handleNewGame}
            style={{
              ...primaryButtonStyle,
              marginLeft: "0.5rem",
            }}
          >
            <RotateCcw size={18} style={{ marginRight: "0.25rem" }} />
            New Game
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(9, 1fr)",
            gap: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          {numbers.map((num) => (
            <button key={num} onClick={() => handleNumberClick(num)} style={numberButtonStyle}>
              {num}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button onClick={handleClearCell} style={secondaryButtonStyle}>
            <Trash2 size={18} style={{ marginRight: "0.25rem" }} />
            Clear
          </button>

          <button onClick={handleHint} style={secondaryButtonStyle}>
            <Lightbulb size={18} style={{ marginRight: "0.25rem" }} />
            Hint
          </button>

          <button onClick={handleSaveGame} style={secondaryButtonStyle}>
            <Save size={18} style={{ marginRight: "0.25rem" }} />
            Save
          </button>

          <button onClick={handleLoadGame} style={secondaryButtonStyle}>
            <Upload size={18} style={{ marginRight: "0.25rem" }} />
            Load
          </button>
        </div>
      </div>
    </div>
  )
}
