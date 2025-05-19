"use client"
import { motion } from "framer-motion"

export default function KidsGamesPage() {
  const games = [
    {
      id: 1,
      name: "Word Scramble",
      image: "/word_scramble.png",
      description: "Unscramble the letters to find the hidden word!",
    },
    {
      id: 2,
      name: "Sudoku",
      image: "/sudoku.png",
      description: "Fill the grid with numbers from 1 to 9!",
    },
    {
      id: 3,
      name: "Memory Test",
      image: "/memory.avif",
      description: "Remember the patterns and match the cards!",
    },
    {
      id: 4,
      name: "Puzzle",
      image: "/puzzle.jpg",
      description: "Put the pieces together to complete the picture!",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-purple-500 py-6 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          <span className="inline-block animate-bounce mr-2">🎮</span>
          Fun Games for Kids
          <span className="inline-block animate-bounce ml-2">🎮</span>
        </h1>
        <p className="text-purple-100 mt-2">As much as you Play, you will learn more</p>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <motion.div
              key={game.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-purple-200 hover:border-purple-400 transition-all duration-300"
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(147, 51, 234, 0.1), 0 10px 10px -5px rgba(147, 51, 234, 0.04)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: game.id * 0.1 }}
            >
              {/* Game Image */}
              <div className="relative h-48 bg-purple-100">
                <img
                  src={game.image || "/placeholder.svg"}
                  alt={`${game.name} game`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Game {game.id}
                </div>
              </div>

              {/* Game Info */}
              <div className="p-5">
                <h2 className="text-xl font-bold text-purple-800 mb-2">{game.name}</h2>
                <p className="text-gray-600 text-sm mb-4">{game.description}</p>

                {/* Play Button */}
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                  <span className="mr-2">Play Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 text-center">
          <div className="inline-flex space-x-4">
            {["🎨", "🧩", "🎯", "🎪", "🎭"].map((emoji, index) => (
              <motion.span
                key={index}
                className="text-3xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: index * 0.2,
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
          <p className="mt-4 text-purple-600 font-medium">Learning is fun with our interactive games!</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-purple-100 py-6 px-4 text-center">
        <p className="text-purple-600">© 2024 Kids Fun Games • Made with ❤️ for curious minds</p>
      </footer>
    </div>
  )
}
