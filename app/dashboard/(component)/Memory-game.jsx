// "use client"

// import { useState, useEffect, useRef } from "react"
// import { Loader2 } from "lucide-react"
// import Image from "next/image"

// const CARDS = [
//   { id: 1, name: "dog", imageUrl: "/images/child-marriage.jpg" },
//   { id: 2, name: "cat", imageUrl: "/images/child.jpg" },
//   { id: 3, name: "mouse", imageUrl: "/images/gender.jpg" },
//   { id: 4, name: "panda", imageUrl: "/images/Right-Against-Exploitation.jpg" },
//   { id: 5, name: "fox", imageUrl: "/images/right-to-education.jpg" },
//   { id: 6, name: "bear", imageUrl: "/images/Right-to-Religious.jpg" },
//   { id: 7, name: "koala", imageUrl: "/images/signal.jpg" },
//   { id: 8, name: "tiger", imageUrl: "/images/bad.webp" }
// ]

// export default function MemoryGame({ onStuck }) {
//   const [cards, setCards] = useState([])
//   const [flippedCards, setFlippedCards] = useState([])
//   const [matchedCards, setMatchedCards] = useState([])
//   const [moves, setMoves] = useState(0)
//   const [gameOver, setGameOver] = useState(false)
//   const [loading, setLoading] = useState(true)
//   const [noMovesTimer, setNoMovesTimer] = useState(null)
//   const lastMoveTime = useRef(Date.now())

//   // Initialize game
//   useEffect(() => {
//     initGame()
//   }, [])

//   // Reset the last move time when a move is made
//   useEffect(() => {
//     lastMoveTime.current = Date.now()
//   }, [moves])

//   // Check for game completion
//   useEffect(() => {
//     if (matchedCards.length === CARDS.length * 2) {
//       setGameOver(true)
//       // Trigger YouTube video on game completion
//       onStuck()
//     }
//   }, [matchedCards, onStuck])

//   // Handle flipped cards logic
//   useEffect(() => {
//     if (flippedCards.length === 2) {
//       const [first, second] = flippedCards

//       if (cards[first].name === cards[second].name) {
//         setMatchedCards((prev) => [...prev, first, second])
//         setFlippedCards([])
//       } else {
//         const timer = setTimeout(() => {
//           setFlippedCards([])
//         }, 1000)
//         return () => clearTimeout(timer)
//       }
//     }
//   }, [flippedCards, cards])

//   const initGame = () => {
//     setLoading(true)
//     // Create pairs of cards and shuffle them
//     const duplicatedCards = [...CARDS, ...CARDS]
//       .sort(() => Math.random() - 0.5)
//       .map((card, index) => ({ ...card, id: index }))

//     setCards(duplicatedCards)
//     setFlippedCards([])
//     setMatchedCards([])
//     setMoves(0)
//     setGameOver(false)

//     setTimeout(() => {
//       setLoading(false)
//     }, 1000)
//   }

//   const handleCardClick = (index) => {
//     // Prevent clicking if already flipped or matched
//     if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(index)) {
//       return
//     }

//     setFlippedCards((prev) => [...prev, index])
//     setMoves((prev) => prev + 1)
//     lastMoveTime.current = Date.now()
//   }

//   const isFlipped = (index) => {
//     return flippedCards.includes(index) || matchedCards.includes(index)
//   }

//   // Add a new function to check if a card is matched
//   const isMatched = (index) => {
//     return matchedCards.includes(index)
//   }

//   return (
//     <div className="w-full max-w-4xl mx-auto">
//       <div className="flex justify-between items-center mb-6">
//         <div className="text-purple-700 font-bold text-xl">Moves: {moves}</div>
//         <button
//           onClick={initGame}
//           className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
//         >
//           Restart Game
//         </button>
//       </div>

//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <Loader2 className="w-12 h-12 text-purple-600 animate-spin" />
//         </div>
//       ) : (
//         <>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 rounded-xl border-4 border-purple-400 bg-purple-50 shadow-lg">
//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 className={`aspect-square cursor-pointer transition-all duration-300 transform ${
//                   isFlipped(index) ? "rotate-y-180" : ""
//                 } ${isMatched(index) ? "matched-card" : ""}`}
//                 onClick={() => handleCardClick(index)}
//               >
//                 <div className="relative w-full h-full preserve-3d">
//                   <div
//                     className={`absolute w-full h-full backface-hidden ${
//                       isFlipped(index) ? "opacity-0" : "opacity-100"
//                     } bg-purple-200 rounded-xl flex items-center justify-center shadow-md`}
//                   >
//                     <span className="text-3xl">🎮</span>
//                   </div>
//                   <div
//                     className={`absolute w-full h-full backface-hidden ${
//                       isFlipped(index) ? "opacity-100" : "opacity-0"
//                     } bg-white rounded-xl flex items-center justify-center shadow-md rotate-y-180`}
//                   >
//                     <div className="w-full h-full flex items-center justify-center p-2">
//                       <div className="w-full h-full bg-purple-100 rounded-lg flex items-center justify-center overflow-hidden">
//                         <Image
//                           src={card.imageUrl}
//                           alt={card.name}
//                           width={100}
//                           height={100}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {gameOver && (
//             <div className="mt-8 p-6 bg-purple-100 rounded-xl text-center border-4 border-purple-400">
//               <h2 className="text-2xl font-bold text-purple-700 mb-2">🎉 Hooray! You did it! 🎉</h2>
//               <p className="text-purple-600 mb-4">You matched all the animals in {moves} moves!</p>
//               <div className="text-3xl mb-4">🏆 👏 🥳</div>
//               <button
//                 onClick={initGame}
//                 className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
//               >
//                 Play Again 🎮
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   )
// }

// "use client"

// import { useState, useEffect, useRef } from "react"
// import { Loader2, ImageIcon } from "lucide-react"
// import Image from "next/image"

// // Updated CARDS array with correct image paths matching your file system
// const CARDS = [
//   { id: 1, name: "Child Marriage", imageUrl: "/images/child-marriage.jpg" },
//   { id: 2, name: "Child", imageUrl: "/images/child.jpg" },
//   { id: 3, name: "Gender", imageUrl: "/images/gender.jpg" },
//   { id: 4, name: "Right Against Exploitation", imageUrl: "/images/Right-Against-Exploitation.jpg" },
//   { id: 5, name: "Right to Education", imageUrl: "/images/right-to-education.jpg" },
//   { id: 6, name: "Right to Religion", imageUrl: "/images/Right-to-Religion.jpg" },
//   { id: 7, name: "Signal", imageUrl: "/images/signal.jpg" },
//   { id: 8, name: "Bad", imageUrl: "/images/bad.webp" },
// ]

// export default function MemoryGame({ onStuck }) {
//   const [cards, setCards] = useState([])
//   const [flippedCards, setFlippedCards] = useState([])
//   const [matchedCards, setMatchedCards] = useState([])
//   const [moves, setMoves] = useState(0)
//   const [gameOver, setGameOver] = useState(false)
//   const [loading, setLoading] = useState(true)
//   const [imageErrors, setImageErrors] = useState({})
//   const lastMoveTime = useRef(Date.now())

//   // Initialize game
//   useEffect(() => {
//     initGame()
//   }, [])

//   // Reset the last move time when a move is made
//   useEffect(() => {
//     lastMoveTime.current = Date.now()
//   }, [moves])

//   // Check for game completion
//   useEffect(() => {
//     if (matchedCards.length === CARDS.length * 2) {
//       setGameOver(true)
//       // Trigger YouTube video on game completion
//       onStuck()
//     }
//   }, [matchedCards, onStuck])

//   // Handle flipped cards logic
//   useEffect(() => {
//     if (flippedCards.length === 2) {
//       const [first, second] = flippedCards

//       if (cards[first].name === cards[second].name) {
//         setMatchedCards((prev) => [...prev, first, second])
//         setFlippedCards([])
//       } else {
//         const timer = setTimeout(() => {
//           setFlippedCards([])
//         }, 1000)
//         return () => clearTimeout(timer)
//       }
//     }
//   }, [flippedCards, cards])

//   const initGame = () => {
//     setLoading(true)
//     // Create pairs of cards and shuffle them
//     const duplicatedCards = [...CARDS, ...CARDS]
//       .sort(() => Math.random() - 0.5)
//       .map((card, index) => ({ ...card, id: index }))

//     setCards(duplicatedCards)
//     setFlippedCards([])
//     setMatchedCards([])
//     setMoves(0)
//     setGameOver(false)
//     setImageErrors({})

//     setTimeout(() => {
//       setLoading(false)
//     }, 1000)
//   }

//   const handleCardClick = (index) => {
//     // Prevent clicking if already flipped or matched
//     if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(index)) {
//       return
//     }

//     setFlippedCards((prev) => [...prev, index])
//     setMoves((prev) => prev + 1)
//     lastMoveTime.current = Date.now()
//   }

//   const isFlipped = (index) => {
//     return flippedCards.includes(index) || matchedCards.includes(index)
//   }

//   // Add a new function to check if a card is matched
//   const isMatched = (index) => {
//     return matchedCards.includes(index)
//   }

//   const handleImageError = (index) => {
//     setImageErrors((prev) => ({
//       ...prev,
//       [index]: true,
//     }))
//   }

//   return (
//     <div className="w-full max-w-4xl mx-auto">
//       <div className="flex justify-between items-center mb-6">
//         <div className="text-purple-700 font-bold text-xl">Moves: {moves}</div>
//         <button
//           onClick={initGame}
//           className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
//         >
//           Restart Game
//         </button>
//       </div>

//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <Loader2 className="w-12 h-12 text-purple-600 animate-spin" />
//         </div>
//       ) : (
//         <>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 rounded-xl border-4 border-purple-400 bg-purple-50 shadow-lg">
//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 className={`aspect-square cursor-pointer transition-all duration-300 transform ${
//                   isFlipped(index) ? "rotate-y-180" : ""
//                 } ${isMatched(index) ? "matched-card" : ""}`}
//                 onClick={() => handleCardClick(index)}
//               >
//                 <div className="relative w-full h-full preserve-3d">
//                   <div
//                     className={`absolute w-full h-full backface-hidden ${
//                       isFlipped(index) ? "opacity-0" : "opacity-100"
//                     } bg-purple-200 rounded-xl flex items-center justify-center shadow-md`}
//                   >
//                     <span className="text-3xl">🎮</span>
//                   </div>
//                   <div
//                     className={`absolute w-full h-full backface-hidden ${
//                       isFlipped(index) ? "opacity-100" : "opacity-0"
//                     } bg-white rounded-xl flex items-center justify-center shadow-md rotate-y-180`}
//                   >
//                     <div className="w-full h-full flex items-center justify-center p-2">
//                       <div className="w-full h-full bg-purple-100 rounded-lg flex items-center justify-center overflow-hidden">
//                         {imageErrors[index] ? (
//                           <div className="flex flex-col items-center justify-center text-purple-700">
//                             <ImageIcon className="w-8 h-8 mb-2" />
//                             <span className="text-sm text-center">{card.name}</span>
//                           </div>
//                         ) : (
//                           <div className="relative w-full h-full">
//                             <Image
//                               src={ "/images/child.jpg"}
//                               alt={card.name}
//                               fill
//                               sizes="(max-width: 768px) 100vw, 33vw"
//                               className="object-cover"
//                               onError={() => handleImageError(index)}
//                               priority={index < 4} // Prioritize loading the first few images
//                             />
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {gameOver && (
//             <div className="mt-8 p-6 bg-purple-100 rounded-xl text-center border-4 border-purple-400">
//               <h2 className="text-2xl font-bold text-purple-700 mb-2">🎉 Hooray! You did it! 🎉</h2>
//               <p className="text-purple-600 mb-4">You matched all the cards in {moves} moves!</p>
//               <div className="text-3xl mb-4">🏆 👏 🥳</div>
//               <button
//                 onClick={initGame}
//                 className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
//               >
//                 Play Again 🎮
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   )
// }

"use client"

import { useState, useEffect, useRef } from "react"
import { Loader2, ImageIcon } from "lucide-react"
import Image from "next/image"

// Updated CARDS array with placeholder images
const CARDS = [
  { id: 1, name: "Child Marriage", imageUrl: "/images/child-marriage.jpg" },
  { id: 2, name: "Child", imageUrl: "/images/child.jpg" },
  { id: 3, name: "Gender", imageUrl: "/images/gender.jpg" },
  { id: 4, name: "Right Against Exploitation", imageUrl: "/images/Right-Against-Exploitation.jpg" },
  { id: 5, name: "Right to Education", imageUrl: "/images/right-to-education.jpg" },
  { id: 6, name: "Right to Religion", imageUrl: "/images/Right-to-Religion.jpg" },
  { id: 7, name: "Signal", imageUrl: "/images/signal.jpg" },
  { id: 8, name: "Bad", imageUrl: "/images/bad.webp" },
]

export default function MemoryGame({ onStuck }) {
  const [cards, setCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([])
  const [moves, setMoves] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [loading, setLoading] = useState(true)
  const [imageErrors, setImageErrors] = useState({})
  const lastMoveTime = useRef(Date.now())

  // Initialize game
  useEffect(() => {
    initGame()
  }, [])

  // Reset the last move time when a move is made
  useEffect(() => {
    lastMoveTime.current = Date.now()
  }, [moves])

  // Check for game completion
  useEffect(() => {
    if (matchedCards.length === CARDS.length * 2) {
      setGameOver(true)
      // Trigger YouTube video on game completion
      onStuck()
    }
  }, [matchedCards, onStuck])

  // Handle flipped cards logic
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards

      if (cards[first].name === cards[second].name) {
        setMatchedCards((prev) => [...prev, first, second])
        setFlippedCards([])
      } else {
        const timer = setTimeout(() => {
          setFlippedCards([])
        }, 1000)
        return () => clearTimeout(timer)
      }
    }
  }, [flippedCards, cards])

  const initGame = () => {
    setLoading(true)
    // Create pairs of cards and shuffle them
    const duplicatedCards = [...CARDS, ...CARDS]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index }))

    setCards(duplicatedCards)
    setFlippedCards([])
    setMatchedCards([])
    setMoves(0)
    setGameOver(false)
    setImageErrors({})

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const handleCardClick = (index) => {
    // Prevent clicking if already flipped or matched
    if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(index)) {
      return
    }

    setFlippedCards((prev) => [...prev, index])
    setMoves((prev) => prev + 1)
    lastMoveTime.current = Date.now()
  }

  const isFlipped = (index) => {
    return flippedCards.includes(index) || matchedCards.includes(index)
  }

  // Add a new function to check if a card is matched
  const isMatched = (index) => {
    return matchedCards.includes(index)
  }

  const handleImageError = (index) => {
    setImageErrors((prev) => ({
      ...prev,
      [index]: true,
    }))
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="text-purple-700 font-bold text-xl">Moves: {moves}</div>
        <button
          onClick={initGame}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Restart Game
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="w-12 h-12 text-purple-600 animate-spin" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 rounded-xl border-4 border-purple-400 bg-purple-50 shadow-lg">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`aspect-square cursor-pointer transition-all duration-500 ${
                  isMatched(index) ? "opacity-80" : ""
                }`}
                onClick={() => handleCardClick(index)}
              >
                <div className={`relative w-full h-full [perspective:1000px]`}>
                  <div
                    className={`absolute w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${
                      isFlipped(index) ? "[transform:rotateY(180deg)]" : ""
                    }`}
                  >
                    {/* Card Back */}
                    <div className="absolute w-full h-full flex items-center justify-center bg-purple-200 rounded-xl shadow-md [backface-visibility:hidden]">
                      <span className="text-3xl">🎮</span>
                    </div>

                    {/* Card Front */}
                    <div className="absolute w-full h-full bg-white rounded-xl shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <div className="w-full h-full flex items-center justify-center p-2">
                        <div className="w-full h-full bg-purple-100 rounded-lg flex items-center justify-center overflow-hidden">
                          {imageErrors[index] ? (
                            <div className="flex flex-col items-center justify-center text-purple-700">
                              <ImageIcon className="w-8 h-8 mb-2" />
                              <span className="text-sm text-center">{card.name}</span>
                            </div>
                          ) : (
                            <div className="relative w-full h-full">
                              <Image
                                src={
                                  card.imageUrl ||
                                  `/placeholder.svg?height=200&width=200&text=${encodeURIComponent(card.name)}`
                                }
                                alt={card.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                                onError={() => handleImageError(index)}
                                priority={index < 4} // Prioritize loading the first few images
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {gameOver && (
            <div className="mt-8 p-6 bg-purple-100 rounded-xl text-center border-4 border-purple-400">
              <h2 className="text-2xl font-bold text-purple-700 mb-2">🎉 Hooray! You did it! 🎉</h2>
              <p className="text-purple-600 mb-4">You matched all the cards in {moves} moves!</p>
              <div className="text-3xl mb-4">🏆 👏 🥳</div>
              <button
                onClick={initGame}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Play Again 🎮
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
