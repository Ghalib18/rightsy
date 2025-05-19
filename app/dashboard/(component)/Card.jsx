import Image from "next/image"
import Link from "next/link"

export default function Card({ title, description, image, color, link }) {
  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border-4 ${color.replace("bg-", "border-")}`}
    >
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>

        <Link href={link}>
          <button
            className={`${color} hover:opacity-90 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-200 transform hover:scale-105`}
          >
            Open
          </button>
        </Link>
      </div>
    </div>
  )
}
