import { Inter } from "next/font/google"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Indian Laws & Rights Quiz for Kids",
  description: "Learn about Indian laws and rights through fun interactive quizzes for children",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Indian Laws & Rights Quiz for Kids</title>
        <meta name="description" content="Learn about Indian laws and rights through fun interactive quizzes for children" />
        <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  )
}
