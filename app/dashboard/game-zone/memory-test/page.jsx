// // "use client";

// import MemoryGame from "../../(component)/Memory-game";
// import YoutubePlayer from "../../(component)/Youtube-player";
// import { useGameState } from "@/hooks/use-game-state";

// export default function Home() {
//   const { isStuck, setIsStuck } = useGameState();

//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-purple-100">
//       <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4 text-center">
//         Animal Friends Memory Game 🎮
//       </h1>

//       <p className="text-purple-600 mb-8 text-center max-w-md">
//         Match all the animal friends to win! 🐶 🐱 🐭 🐼
//       </p>

//       {isStuck ? (
//         <YoutubePlayer onClose={() => setIsStuck(false)} />
//       ) : (
//         <MemoryGame onStuck={() => setIsStuck(true)} />
//       )}

//       <footer className="mt-8 text-center text-purple-600">
//         <p className="text-lg">👾 Have fun and train your memory! 👾</p>
//       </footer>
//     </main>
//   );
// }
"use client";

import MemoryGame from "../../(component)/Memory-game";
import YoutubePlayer from "../../(component)/Youtube-player";
import { useGameState } from "@/hooks/use-game-state";

export default function Home() {
  const { isStuck, setIsStuck } = useGameState();

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-purple-100">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4 text-center">
          Animal Friends Memory Game 🎮
        </h1>

        <p className="text-purple-600 mb-8 text-center max-w-md">
          Match all the animal friends to win! 🐶 🐱 🐭 🐼
        </p>

        {isStuck ? (
          <YoutubePlayer onClose={() => setIsStuck(false)} />
        ) : (
          <MemoryGame onStuck={() => setIsStuck(true)} />
        )}

        <footer className="mt-8 text-center text-purple-600">
          <p className="text-lg">👾 Have fun and train your memory! 👾</p>
        </footer>
      </main>
    </>
  );
}
