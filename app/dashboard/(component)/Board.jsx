"use client"

import Cell from "./Cell"

export default function Board({ board, fixedCells, selectedCell, handleCellClick, errors }) {
  const getHighlightStatus = (row, col) => {
    if (!selectedCell) return false

    const [selectedRow, selectedCol] = selectedCell

    // Same row, column, or 3x3 box
    return (
      row === selectedRow ||
      col === selectedCol ||
      (Math.floor(row / 3) === Math.floor(selectedRow / 3) && Math.floor(col / 3) === Math.floor(selectedCol / 3))
    )
  }

  const isSameValue = (row, col) => {
    if (!selectedCell) return false

    const [selectedRow, selectedCol] = selectedCell
    const selectedValue = board[selectedRow][selectedCol]

    return selectedValue !== 0 && board[row][col] === selectedValue
  }

  const hasError = (row, col) => {
    return errors.some(([errRow, errCol]) => errRow === row && errCol === col)
  }

  return (
    <div
      className="grid grid-cols-9 gap-0 border-2 border-purple-800 bg-white rounded-lg overflow-hidden shadow-lg"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(9, 1fr)",
        gap: "0px",
        border: "2px solid #6b21a8",
        borderRadius: "0.5rem",
        overflow: "hidden",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      }}
    >
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          // Add borders for 3x3 grid separation
          const borderStyles = {}
          if ((rowIndex + 1) % 3 === 0 && rowIndex < 8) borderStyles.borderBottom = "2px solid #6b21a8"
          if ((colIndex + 1) % 3 === 0 && colIndex < 8) borderStyles.borderRight = "2px solid #6b21a8"

          return (
            <div key={`${rowIndex}-${colIndex}`} style={borderStyles}>
              <Cell
                value={cell}
                isFixed={fixedCells[rowIndex][colIndex]}
                isSelected={selectedCell && selectedCell[0] === rowIndex && selectedCell[1] === colIndex}
                isHighlighted={getHighlightStatus(rowIndex, colIndex)}
                hasError={hasError(rowIndex, colIndex)}
                isSameValue={isSameValue(rowIndex, colIndex)}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              />
            </div>
          )
        }),
      )}
    </div>
  )
}
