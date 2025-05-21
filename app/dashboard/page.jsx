
import Card from "./(component)/Card"

const activities = [
  {
    id: 1,
    title: "Game Zone",
    description: "Fun games to improve your thinking skills and creativity!",
    image: "/gamezone.jpg",
    color: "bg-purple-500",
    link: "/dashboard/game-zone",
  },
  {
    id: 2,
    title: "Situation Reaction Test",
    description: "Learn how to react in different situations through fun activities!",
    image: "/srt.webp",
    color: "bg-pink-500",
    link: "/situation-test",
  },
  {
    id: 3,
    title: "Car Race",
    description: "Race against time and learn new things along the way!",
    image: "/carrace.png",
    color: "bg-blue-500",
    link: "/car-race",
  },
  {
    id: 4,
    title: "Quiz Section",
    description: "Test your knowledge with fun quizzes on different topics!",
    image: "/quiz.jpg",
    color: "bg-green-500",
    link: "/dashboard/quiz",
  },
  {
    id: 5,
    title: "Chatbot",
    description: "Talk to our friendly robot and ask any questions you have!",
    image: "/chatbot.avif",
    color: "bg-yellow-500",
    link: "/chatbot",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-purple-700">
          Welcome to Kids Learning World!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <Card
              key={activity.id}
              title={activity.title}
              description={activity.description}
              image={activity.image}
              color={activity.color}
              link={activity.link}
            />
          ))}
        </div>
      </div>
    </main>
  )
}