import { Inter } from "next/font/google"
import { GameStateProvider } from "@/hooks/use-game-state"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Word Scramble Game",
  description: "A fun word scramble game with hints and rewards",
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
