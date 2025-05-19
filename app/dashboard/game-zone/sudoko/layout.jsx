import { Inter } from "next/font/google"
import { GameStateProvider } from "@/hooks/use-game-state"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sudoku Game",
  description: "A modern Sudoku game with YouTube integration",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GameStateProvider>{children}</GameStateProvider>
      </body>
    </html>
  )
}