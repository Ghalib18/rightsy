import Link from "next/link"
import Image from "next/image"
import { UserButton } from "@clerk/nextjs"

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="relative h-12 w-12 mr-3">
            <Image src="/infi.webp" alt="Kids Learning Platform Logo" fill className="object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-purple-600">Rightsy</h1>
        </div>

        <nav className="flex items-center space-x-6">
          <Link href="/dashboard" className="text-lg font-medium text-purple-600 hover:text-purple-800 transition-colors">
            Dashboard
          </Link>
          <Link href="/dashboard/about" className="text-lg font-medium text-purple-600 hover:text-purple-800 transition-colors">
            About
          </Link>
          <Link href="/premium" className="text-lg font-medium text-yellow-500 hover:text-yellow-600 transition-colors">
            Premium
          </Link>
          <div className="ml-4">
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-10 h-10",
                },
              }}
            />
          </div>
        </nav>
      </div>
    </header>
  )
}
