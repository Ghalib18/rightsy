"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"

export default function QuestionCard({ question, selectedAnswer, onSelectAnswer, showFeedback, isCorrect }) {
  return (
    <Card className="border-3 border-purple-300 shadow-lg rounded-2xl overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute -top-6 -right-6 z-10 hidden md:block">
        <div className="text-4xl rotate-12">❓</div>
      </div>

      <CardHeader className="bg-purple-100 rounded-t-xl relative">
        <CardTitle className="text-xl text-purple-800 font-comic pr-12">{question.question}</CardTitle>
      </CardHeader>

      <CardContent className="pt-6 pb-4">
        <RadioGroup value={selectedAnswer} onValueChange={onSelectAnswer}>
          {question.options.map((option, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 p-3 rounded-xl mb-3 border-2 transition-colors ${
                selectedAnswer === index ? "border-purple-500 bg-purple-50" : "border-gray-200 hover:border-purple-300"
              }`}
            >
              <RadioGroupItem value={index} id={`option-${index}`} className="text-purple-600" />
              <Label
                htmlFor={`option-${index}`}
                className="flex-grow cursor-pointer text-gray-700 font-medium font-comic"
              >
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>

        {/* Feedback animation */}
        {showFeedback && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 z-20"
          >
            {isCorrect ? (
              <div className="text-center">
                <div className="text-8xl mb-2">🎉</div>
                <p className="text-2xl font-bold text-green-600 mt-4 font-comic">Correct!</p>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-8xl mb-2">😕</div>
                <p className="text-2xl font-bold text-red-500 mt-4 font-comic">Oops! That's not right.</p>
                <p className="text-purple-600 font-comic">
                  The correct answer is: {question.options[question.correctAnswer]}
                </p>
              </div>
            )}
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
}
