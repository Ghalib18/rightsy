"use client"

import { useState, createContext, useContext } from "react"

// Create the context with default values
const GameStateContext = createContext({
  isStuck: false,
  setIsStuck: () => {},
})

export function GameStateProvider({ children }) {
  const [isStuck, setIsStuck] = useState(false)

  return <GameStateContext.Provider value={{ isStuck, setIsStuck }}>{children}</GameStateContext.Provider>
}

export function useGameState() {
  const context = useContext(GameStateContext)

  if (context === undefined) {
    throw new Error("useGameState must be used within a GameStateProvider")
  }

  return context
}
