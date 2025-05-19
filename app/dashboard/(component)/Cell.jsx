"use client"

export default function Cell({ value, isFixed, isSelected, isHighlighted, hasError, isSameValue, onClick }) {
  // Determine background color
  let backgroundColor = "white"
  if (isSelected)
    backgroundColor = "#d8b4fe" // purple-300
  else if (isFixed)
    backgroundColor = "#f3e8ff" // purple-100
  else if (hasError)
    backgroundColor = "#fee2e2" // red-100
  else if (isSameValue && value !== 0)
    backgroundColor = "#f3e8ff" // purple-100
  else if (isHighlighted) backgroundColor = "#faf5ff" // purple-50

  // Determine text color
  let textColor = "#6b21a8" // purple-800
  if (hasError) textColor = "#b91c1c" // red-700

  // Determine border color
  let borderColor = "#e9d5ff" // purple-200
  if (isSelected) borderColor = "#a855f7" // purple-500

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex="0"
      style={{
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.25rem",
        fontWeight: isFixed ? "bold" : "medium",
        backgroundColor,
        color: textColor,
        border: `1px solid ${borderColor}`,
        transition: "all 0.2s",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {value !== 0 ? value : ""}
    </div>
  )
}
