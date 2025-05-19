"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  MessageCircle,
  Award,
  Video,
  Send,
  Facebook,
  Instagram,
  Twitter,
  BookOpen,
  Shield,
  Lightbulb,
  Brain,
  Sparkles,
  ChevronRight,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [chatMessages, setChatMessages] = useState([
    { role: "bot", content: "Hi there! I can help you learn about your rights and laws. What would you like to know?" },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isScrolling, setIsScrolling] = useState(false)
  const router=useRouter();
   const login_dashboard=()=>{
    router.push('/dashboard');
   }
   const adminlog=()=>{
    router.push('/govtadmin');
   }
  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return

    setChatMessages([
      ...chatMessages,
      { role: "user", content: inputMessage },
      {
        role: "bot",
        content: "Thanks for your question! I'm here to help you understand your rights and laws in a simple way.",
      },
    ])

    setInputMessage("")
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const teamMembers = [
    {
      name: "Ghalib Hussain",
      role: "Founder & Full stack developer",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Anish Singh",
      role: "game development",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Abhishek",
      role: "front-end developer",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Sandeep Verman",
      role: "web-designer",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Ashish Kumar",
      role: "DBA",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-24 h-24 md:w-32 md:h-32 bg-purple-400 rounded-full opacity-20 animate-float-slow"></div>
          <div className="absolute top-[20%] right-[15%] w-16 h-16 md:w-24 md:h-24 bg-purple-300 rounded-full opacity-20 animate-float-medium"></div>
          <div className="absolute bottom-[30%] left-[20%] w-20 h-20 md:w-28 md:h-28 bg-purple-200 rounded-full opacity-20 animate-float-fast"></div>
          <div className="absolute bottom-[10%] right-[10%] w-32 h-32 md:w-40 md:h-40 bg-purple-300 rounded-full opacity-20 animate-float-slow"></div>

          {/* Law symbols */}
          <div className="absolute top-[15%] right-[25%] text-white opacity-10 text-7xl md:text-9xl">§</div>
          <div className="absolute bottom-[25%] left-[30%] text-white opacity-10 text-7xl md:text-9xl">⚖️</div>
        </div>

        <div className="container mx-auto px-4 z-10 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="inline-block bg-purple-800 bg-opacity-30 px-4 py-2 rounded-full text-purple-100 text-sm md:text-base mb-4 animate-pulse">
                Learning made fun for kids!
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Know Your{" "}
                <span className="relative inline-block">
                  Rights
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-yellow-300 opacity-50 rounded"></span>
                </span>{" "}
                &{" "}
                <span className="relative inline-block">
                  Laws
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-yellow-300 opacity-50 rounded"></span>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-xl">
                Explore rights and laws through exciting games, quizzes, and interactive challenges!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="bg-white text-white bg-purple-600  hover:bg-purple-500 font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  onClick={login_dashboard}
                >
                  Start Learning
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-white bg-purple-600  hover:bg-purple-500 font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  onClick={adminlog}
                >
                  Admin-Login 
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Main illustration */}
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300 border-opacity-30 shadow-2xl transform rotate-2 transition-transform hover:rotate-0 duration-300">
                  <img
                    src="/main.webp?height=400&width=400"
                    alt="Children learning about rights"
                    className="w-full h-auto rounded-xl"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 bg-yellow-400 rounded-full p-4 shadow-lg animate-bounce-slow">
                  <Shield className="h-8 w-8 text-purple-700" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-purple-200 rounded-full p-3 shadow-lg animate-bounce-medium">
                  <BookOpen className="h-6 w-6 text-purple-700" />
                </div>
                <div className="absolute top-1/2 -right-8 bg-green-400 rounded-full p-3 shadow-lg animate-bounce-fast">
                  <Lightbulb className="h-6 w-6 text-purple-700" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Floating Navigation */}
      <div
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${isScrolling ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}
      >
        <div className="bg-white rounded-full shadow-lg px-4 py-2 flex items-center space-x-6">
          <a href="#about" className="text-purple-600 hover:text-purple-800 font-medium text-sm px-2 py-1">
            About
          </a>
          <a href="#games" className="text-purple-600 hover:text-purple-800 font-medium text-sm px-2 py-1">
            Games
          </a>
          <a href="#quiz" className="text-purple-600 hover:text-purple-800 font-medium text-sm px-2 py-1">
            Quiz
          </a>
          <a href="#videos" className="text-purple-600 hover:text-purple-800 font-medium text-sm px-2 py-1">
            Videos
          </a>
          <a href="#chatbot" className="text-purple-600 hover:text-purple-800 font-medium text-sm px-2 py-1">
            Chatbot
          </a>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 rounded-lg transform rotate-6"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-100 rounded-lg transform -rotate-6"></div>
                <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border-4 border-purple-100 transform hover:scale-105 transition-transform duration-300">
                  <img src="/image2.jpg?height=400&width=400" alt="Children learning" className="w-full h-auto" />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="inline-block bg-purple-100 px-4 py-1 rounded-full text-purple-600 text-sm font-medium mb-4">
                ABOUT OUR WEBSITE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Learning Rights Through <span className="text-purple-600">Fun & Games</span>
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600">
                  Welcome to our interactive platform designed specifically for children to learn about their rights and
                  laws in a fun and engaging way!
                </p>
                <p className="text-lg text-gray-600">
                  We believe that understanding your rights shouldn't be boring or complicated. That's why we've created
                  a variety of games, quizzes, and interactive scenarios to make learning enjoyable.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <p className="text-purple-700">
                    Whenever you get stuck, you can watch short, easy-to-understand videos that explain different rights
                    and laws. Plus, you can earn points and rewards as you learn!
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="bg-purple-100 rounded-full p-2">
                    <Sparkles className="h-5 w-5 text-purple-600" />
                  </div>
                  <span className="font-medium">Interactive Learning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-purple-100 rounded-full p-2">
                    <Shield className="h-5 w-5 text-purple-600" />
                  </div>
                  <span className="font-medium">Rights Education</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-purple-100 rounded-full p-2">
                    <Brain className="h-5 w-5 text-purple-600" />
                  </div>
                  <span className="font-medium">Critical Thinking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-purple-100 rounded-full p-2">
                    <Award className="h-5 w-5 text-purple-600" />
                  </div>
                  <span className="font-medium">Rewards & Points</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Zone Section */}
      <section id="games" className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 px-4 py-1 rounded-full text-purple-600 text-sm font-medium mb-4">
              GAME ZONE
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
              Learn Through <span className="text-purple-600">Play</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Play fun games while learning about your rights and laws!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Game 1 */}
            <div className="group">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 overflow-hidden h-full">
                <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Popular
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 pt-8 pb-4 px-4 transition-colors group-hover:from-purple-200 group-hover:to-purple-300">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-md mx-auto flex items-center justify-center mb-4 transform group-hover:rotate-6 transition-transform">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt="Word Scramble Game"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <CardTitle className="text-center text-purple-700">Word Scramble</CardTitle>
                  <CardDescription className="text-center">Unscramble words related to rights and laws</CardDescription>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4">
                    Rearrange jumbled letters to form words about rights and laws. Learn new terms while having fun!
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="font-medium mr-2">Difficulty:</span>
                    <div className="flex">
                      <div className="w-4 h-1 bg-purple-600 rounded-full mr-1"></div>
                      <div className="w-4 h-1 bg-purple-600 rounded-full mr-1"></div>
                      <div className="w-4 h-1 bg-purple-200 rounded-full mr-1"></div>
                      <div className="w-4 h-1 bg-purple-200 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium mr-2">Age:</span>
                    <span>8-12 years</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={login_dashboard} className="w-full bg-purple-600 hover:bg-purple-700 group-hover:shadow-lg">
                    Play Now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Game 2 */}
            <div className="group">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 overflow-hidden h-full">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 pt-8 pb-4 px-4 transition-colors group-hover:from-purple-200 group-hover:to-purple-300">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-md mx-auto flex items-center justify-center mb-4 transform group-hover:rotate-6 transition-transform">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt="Sudoku Game"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <CardTitle className="text-center text-purple-700">Sudoku</CardTitle>
                  <CardDescription className="text-center">Solve puzzles with rights-themed rewards</CardDescription>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4">
                    Complete number puzzles and unlock facts about your rights. Improve your logical thinking skills!
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="font-medium mr-2">Difficulty:</span>
                    <div className="flex">
                      <div className="w-4 h-1 bg-purple-600 rounded-full mr-1"></div>
                      <div className="w-4 h-1 bg-purple-600 rounded-full mr-1"></div>
                      <div className="w-4 h-1 bg-purple-600 rounded-full mr-1"></div>
                      <div className="w-4 h-1 bg-purple-200 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium mr-2">Age:</span>
                    <span>10-14 years</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={login_dashboard} className="w-full bg-purple-600 hover:bg-purple-700 group-hover:shadow-lg">
                    Play Now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Game 3 */}
            <div className="group">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 overflow-hidden h-full">
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  New
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 pt-8 pb-4 px-4 transition-colors group-hover:from-purple-200 group-hover:to-purple-300">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-md mx-auto flex items-center justify-center mb-4 transform group-hover:rotate-6 transition-transform">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt="Memory Test Game"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <CardTitle className="text-center text-purple-700">Memory Test</CardTitle>
                  <CardDescription className="text-center">Match cards about rights and laws</CardDescription>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4">
                    Find matching pairs of cards while learning about important laws. Train your memory and learn!
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="font-medium mr-2">Difficulty:</span>
                    <div className="flex">
                      <div className="w-4 h-1 bg-purple-600 rounded-full mr-1"></div>
                      <div className="w-4 h-1 bg-purple-200 rounded-full mr-1"></div>
                      <div className="w-4 h-1 bg-purple-200 rounded-full mr-1"></div>
                      <div className="w-4 h-1 bg-purple-200 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium mr-2">Age:</span>
                    <span>6-10 years</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button  onClick={login_dashboard} className="w-full bg-purple-600 hover:bg-purple-700 group-hover:shadow-lg">
                    Play Now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Game 4 */}
            <div className="group">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 overflow-hidden h-full">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 pt-8 pb-4 px-4 transition-colors group-hover:from-purple-200 group-hover:to-purple-300">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-md mx-auto flex items-center justify-center mb-4 transform group-hover:rotate-6 transition-transform">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt="Puzzle Game"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <CardTitle className="text-center text-purple-700">Puzzle</CardTitle>
                  <CardDescription className="text-center">Solve puzzles about children's rights</CardDescription>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4">
                    Complete jigsaw puzzles that reveal important information about your rights. Fun visual learning!
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="font-medium mr-2">Difficulty:</span>
                    <div className="flex">
                      <div className="w-4 h-1 bg-purple-600 rounded-full mr-1"></div>
                      <div className="w-4 h-1 bg-purple-600 rounded-full mr-1"></div>
                      <div className="w-4 h-1 bg-purple-200 rounded-full mr-1"></div>
                      <div className="w-4 h-1 bg-purple-200 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium mr-2">Age:</span>
                    <span>7-12 years</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button  onClick={login_dashboard} className="w-full bg-purple-600 hover:bg-purple-700 group-hover:shadow-lg">
                    Play Now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Situation Reaction Test */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-purple-100 px-4 py-1 rounded-full text-purple-600 text-sm font-medium mb-4">
              SITUATION REACTION
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              What Would <span className="text-purple-600">You</span> Do?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Test your decision-making skills in real-life scenarios
            </p>
          </div>

          <Card className="mb-8 border-2 border-purple-100 shadow-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-500 text-white">
              <CardTitle className="text-2xl">Test Your Reaction</CardTitle>
              <CardDescription className="text-purple-100">
                Choose how you would respond to different scenarios
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="bg-purple-50 p-6 rounded-xl mb-8 border border-purple-100 relative">
                <div className="absolute -top-5 left-6 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Scenario
                </div>
                <h3 className="font-bold text-xl mb-4 text-purple-800">School Lunch Situation</h3>
                <p className="mb-6 text-lg">
                  You see someone taking another child's lunch at school. What should you do?
                </p>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <input type="radio" id="option1" name="scenario1" className="w-5 h-5 text-purple-600" />
                      <label htmlFor="option1" className="text-base font-medium cursor-pointer flex-1">
                        Tell a teacher or school staff member about what you saw
                      </label>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <input type="radio" id="option2" name="scenario1" className="w-5 h-5 text-purple-600" />
                      <label htmlFor="option2" className="text-base font-medium cursor-pointer flex-1">
                        Ignore it because it's not your problem
                      </label>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <input type="radio" id="option3" name="scenario1" className="w-5 h-5 text-purple-600" />
                      <label htmlFor="option3" className="text-base font-medium cursor-pointer flex-1">
                        Confront the person taking the lunch yourself
                      </label>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <input type="radio" id="option4" name="scenario1" className="w-5 h-5 text-purple-600" />
                      <label htmlFor="option4" className="text-base font-medium cursor-pointer flex-1">
                        Offer to share your lunch with the child who lost theirs
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" className="border-purple-600 text-purple-600 px-6">
                  Previous
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700 px-6">
                  Next Scenario
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
            <CardFooter className="bg-purple-50 flex flex-col sm:flex-row justify-between gap-4 border-t border-purple-100">
              <div className="flex items-center">
                <div className="bg-purple-200 text-purple-700 rounded-full px-3 py-1 font-medium">Scenario 1 of 5</div>
                <div className="ml-3 text-sm text-gray-500">Answer to see explanation</div>
              </div>
              <Button variant="outline" className="border-purple-600 text-purple-600 flex items-center">
                <Video className="w-4 h-4 mr-2" />
                Watch Help Video
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz" className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-purple-100 px-4 py-1 rounded-full text-purple-600 text-sm font-medium mb-4">
              QUIZ CHALLENGE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Test Your <span className="text-purple-600">Knowledge</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Answer questions about rights and laws to earn points and rewards!
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-purple-100 shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-500 text-white">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div>
                    <CardTitle className="text-2xl">Rights & Laws Quiz</CardTitle>
                    <CardDescription className="text-purple-100">Answer questions to earn rewards</CardDescription>
                  </div>
                  <div className="bg-white text-purple-700 px-5 py-2 rounded-full flex items-center font-bold text-lg shadow-md">
                    <Award className="w-5 h-5 mr-2 text-yellow-500" />
                    <span>120</span>
                    <span className="ml-1 text-sm font-normal">Points</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="bg-white p-6 rounded-xl shadow-md mb-8 border border-purple-100">
                  <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                    Question 3 of 10
                  </div>
                  <h3 className="font-bold text-xl mb-6 text-gray-800">
                    What is the minimum age for a child to have a social media account?
                  </h3>

                  <div className="space-y-4">
                    <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-purple-400 hover:bg-purple-50 cursor-pointer transition-all">
                      <span className="flex items-center">
                        <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold mr-3">
                          A
                        </span>
                        <span className="text-lg">10 years old</span>
                      </span>
                    </div>
                    <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-purple-400 hover:bg-purple-50 cursor-pointer transition-all">
                      <span className="flex items-center">
                        <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold mr-3">
                          B
                        </span>
                        <span className="text-lg">13 years old</span>
                      </span>
                    </div>
                    <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-purple-400 hover:bg-purple-50 cursor-pointer transition-all">
                      <span className="flex items-center">
                        <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold mr-3">
                          C
                        </span>
                        <span className="text-lg">16 years old</span>
                      </span>
                    </div>
                    <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-purple-400 hover:bg-purple-50 cursor-pointer transition-all">
                      <span className="flex items-center">
                        <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold mr-3">
                          D
                        </span>
                        <span className="text-lg">18 years old</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <Button variant="outline" className="border-purple-600 text-purple-600 px-6">
                    Previous
                  </Button>
                  <Button className="bg-purple-600 hover:bg-purple-700 px-6">Submit Answer</Button>
                </div>
              </CardContent>
              <CardFooter className="bg-purple-50 flex justify-between items-center border-t border-purple-100 p-4">
                <div className="text-sm text-gray-600">Take your time to think about the answer</div>
                <div className="flex items-center">
                  <Award className="text-yellow-500 w-5 h-5 mr-1" />
                  <span className="font-medium text-purple-700">+10 points per correct answer</span>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Help Section */}
      <section id="videos" className="py-20 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-purple-100 px-4 py-1 rounded-full text-purple-600 text-sm font-medium mb-4">
              VIDEO HELP CENTER
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Learn Through <span className="text-purple-600">Videos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch short, engaging videos to learn more about rights and laws
            </p>
          </div>

          <Tabs defaultValue="rights" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-purple-100 p-1 rounded-lg">
              <TabsTrigger
                value="rights"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-md"
              >
                Children's Rights
              </TabsTrigger>
              <TabsTrigger
                value="laws"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-md"
              >
                Important Laws
              </TabsTrigger>
              <TabsTrigger
                value="safety"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-md"
              >
                Online Safety
              </TabsTrigger>
            </TabsList>

            <TabsContent value="rights">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 overflow-hidden group">
                  <div className="relative">
                    <div className="aspect-video bg-purple-200 rounded-t-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Video className="w-16 h-16 text-purple-600" />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-purple-600 border-b-8 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      5:24
                    </div>
                  </div>
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
                    <CardTitle className="text-purple-700">Right to Education</CardTitle>
                    <CardDescription>Learn about your right to education</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-600">
                      This video explains your right to education and what it means for you. Learn why education is
                      important and how it's protected.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 group-hover:shadow-lg">
                      Watch Video
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 overflow-hidden group">
                  <div className="relative">
                    <div className="aspect-video bg-purple-200 rounded-t-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Video className="w-16 h-16 text-purple-600" />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-purple-600 border-b-8 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      4:18
                    </div>
                  </div>
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
                    <CardTitle className="text-purple-700">Right to Play</CardTitle>
                    <CardDescription>Learn about your right to play and leisure</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-600">
                      This video explains why play is important for your development and how it's recognized as a
                      fundamental right for all children.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 group-hover:shadow-lg">
                      Watch Video
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="laws">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 overflow-hidden group">
                  <div className="relative">
                    <div className="aspect-video bg-purple-200 rounded-t-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Video className="w-16 h-16 text-purple-600" />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-purple-600 border-b-8 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      6:42
                    </div>
                  </div>
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
                    <CardTitle className="text-purple-700">Online Privacy Laws</CardTitle>
                    <CardDescription>Learn about laws that protect your privacy online</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-600">
                      This video explains how laws protect your personal information online and what companies can and
                      cannot do with your data.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 group-hover:shadow-lg">
                      Watch Video
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 overflow-hidden group">
                  <div className="relative">
                    <div className="aspect-video bg-purple-200 rounded-t-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Video className="w-16 h-16 text-purple-600" />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-purple-600 border-b-8 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      5:15
                    </div>
                  </div>
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
                    <CardTitle className="text-purple-700">Anti-Bullying Laws</CardTitle>
                    <CardDescription>Learn about laws against bullying</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-600">
                      This video explains what bullying is, how laws protect you, and what you can do if you or someone
                      you know is being bullied.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 group-hover:shadow-lg">
                      Watch Video
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="safety">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 overflow-hidden group">
                  <div className="relative">
                    <div className="aspect-video bg-purple-200 rounded-t-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Video className="w-16 h-16 text-purple-600" />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-purple-600 border-b-8 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      7:30
                    </div>
                  </div>
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
                    <CardTitle className="text-purple-700">Safe Social Media Use</CardTitle>
                    <CardDescription>Learn how to stay safe on social media</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-600">
                      This video explains how to use social media safely and responsibly, including privacy settings and
                      what not to share online.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 group-hover:shadow-lg">
                      Watch Video
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 overflow-hidden group">
                  <div className="relative">
                    <div className="aspect-video bg-purple-200 rounded-t-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Video className="w-16 h-16 text-purple-600" />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-purple-600 border-b-8 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      4:55
                    </div>
                  </div>
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
                    <CardTitle className="text-purple-700">Protecting Personal Information</CardTitle>
                    <CardDescription>Learn how to protect your personal information</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-600">
                      This video explains what personal information is and how to keep it safe online and offline.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 group-hover:shadow-lg">
                      Watch Video
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Chatbot Section */}
      <section id="chatbot" className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-purple-100 px-4 py-1 rounded-full text-purple-600 text-sm font-medium mb-4">
              RIGHTS BOT
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Ask the <span className="text-purple-600">Rights Bot</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about your rights? Our friendly bot can help!
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-purple-200 shadow-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-700 to-purple-600 text-white">
                <div className="flex items-center">
                  <div className="bg-white bg-opacity-20 rounded-full p-2 mr-3">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Rights & Laws Chatbot</CardTitle>
                    <CardDescription className="text-purple-100">
                      Ask me anything about children's rights and laws
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-96 p-6 bg-gradient-to-b from-purple-50 to-white">
                  <div className="space-y-6">
                    {chatMessages.map((message, index) => (
                      <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[80%] rounded-2xl p-4 shadow-md ${
                            message.role === "user"
                              ? "bg-purple-600 text-white"
                              : "bg-white border border-purple-100 text-gray-800"
                          }`}
                        >
                          {message.content}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
              <CardFooter className="p-4 border-t border-purple-100 bg-white">
                <div className="flex w-full gap-3">
                  <Input
                    placeholder="Ask a question about your rights..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="border-purple-200 focus-visible:ring-purple-500 rounded-full py-6 text-base"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-purple-600 hover:bg-purple-700 rounded-full w-12 h-12 p-0 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-purple-100 px-4 py-1 rounded-full text-purple-600 text-sm font-medium mb-4">
            OUR TEAM
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            People Behind <span className="text-purple-600">Rightsy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet our team of experts dedicated to helping children learn about their rights
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-purple-200 hover:scale-105 transition-transform duration-300">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-purple-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Know Your Rights</h3>
              <p className="mb-6 text-purple-100">
                Making learning about rights and laws fun and engaging for children through interactive games, quizzes,
                and videos.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-colors">
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-colors">
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-colors">
                  <Twitter className="w-5 h-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-purple-100 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-purple-100 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#games" className="text-purple-100 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Games
                  </a>
                </li>
                <li>
                  <a href="#quiz" className="text-purple-100 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Quiz
                  </a>
                </li>
                <li>
                  <a href="#videos" className="text-purple-100 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Videos
                  </a>
                </li>
                <li>
                  <a href="#chatbot" className="text-purple-100 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Chatbot
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Contact Us</h3>
              <p className="mb-4 text-purple-100">Have questions or suggestions?</p>
              <p className="mb-6 text-purple-100">Email us at: info@knowyourrights.org</p>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-purple-600 rounded-full px-6"
              >
                Contact Us
              </Button>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-purple-600 text-center">
            <p className="text-purple-200">&copy; {new Date().getFullYear()} Know Your Rights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

// Add these animations to your globals.css
