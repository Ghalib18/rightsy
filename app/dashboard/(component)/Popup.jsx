"use client"

import Image from "next/image"

export default function Popup({ isOpen, onClose, title, image, buttonText, onButtonClick }) {
  if (!isOpen) return null

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick()
    } else {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
      <div className="bg-white rounded-lg w-full max-w-sm mx-4 overflow-hidden transform transition-all shadow-xl">
        <div className="relative flex justify-center -mt-12">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={image || "/placeholder.svg?height=96&width=96"}
              alt="Popup icon"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="px-6 py-4 text-center">
          <h2 className="text-2xl font-bold text-purple-800 mt-4 mb-6">{title}</h2>

          <button
            onClick={handleButtonClick}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors mb-4"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}
