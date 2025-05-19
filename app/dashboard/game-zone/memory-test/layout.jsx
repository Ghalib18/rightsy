
// import { GameStateProvider } from "@/hooks/use-game-state"
// // import "./globals.css"

// // export const metadata = {
// //   title: "Memory Game",
// //   description: "A fun memory card matching game for children",
// // }

// export default function RootLayout({ children }) {
//   return (
//     <>
//     <html lang="en">
//       <body>
//         <>
//         <GameStateProvider>{children}</GameStateProvider>
//         </>
//       </body>
//     </html>
//     </>
//   )
// }
import { GameStateProvider } from "@/hooks/use-game-state"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="inter_92243eee-module__hBCtSW__className">
        <GameStateProvider>{children}</GameStateProvider>
      </body>
    </html>
  )
}
