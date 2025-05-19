"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function PopupMessage({ message, type = "info", duration = 2500, onClose }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      if (onClose) setTimeout(onClose, 300) // Allow time for fade out animation
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const getBackgroundColor = () => {
    if (type === "error") return "#fee2e2"
    if (type === "success") return "#dcfce7"
    return "#f3e8ff" // info (purple)
  }

  const getTextColor = () => {
    if (type === "error") return "#b91c1c"
    if (type === "success") return "#15803d"
    return "#7e22ce" // info (purple)
  }

  const getBorderColor = () => {
    if (type === "error") return "#fca5a5"
    if (type === "success") return "#86efac"
    return "#d8b4fe" // info (purple)
  }

  return (
    <div
      style={{
        position: "fixed",
        top: "1rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 50,
        transition: "opacity 0.3s",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        style={{
          borderRadius: "0.5rem",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          padding: "0.75rem 1.5rem",
          border: `1px solid ${getBorderColor()}`,
          backgroundColor: getBackgroundColor(),
          color: getTextColor(),
          maxWidth: "28rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span style={{ flexGrow: 1 }}>{message}</span>
        <button
          onClick={() => {
            setIsVisible(false)
            if (onClose) setTimeout(onClose, 300)
          }}
          style={{
            marginLeft: "1rem",
            color: "#6b7280",
            cursor: "pointer",
          }}
        >
          <X size={18} />
        </button>
      </div>
    </div>
  )
}
