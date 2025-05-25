import { Trophy, Star, Award, Medal, Crown, Zap } from "lucide-react"

export default function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "Best AI Innovation",
      organization: "Tech Excellence Awards 2024",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Star,
      title: "Outstanding Research",
      organization: "Beauty Tech Conference 2024",
      color: "from-[#E3AADD] to-[#C8A8E9]",
    },
    {
      icon: Award,
      title: "Innovation in Healthcare",
      organization: "Digital Health Summit 2024",
      color: "from-blue-400 to-purple-500",
    },
    {
      icon: Medal,
      title: "Best Student Project",
      organization: "University Research Fair 2024",
      color: "from-green-400 to-teal-500",
    },
    {
      icon: Crown,
      title: "People's Choice Award",
      organization: "Beauty Innovation Expo 2024",
      color: "from-pink-400 to-rose-500",
    },
    {
      icon: Zap,
      title: "Most Promising Startup",
      organization: "Tech Startup Competition 2024",
      color: "from-[#C3C7F4] to-[#F6BCBA]",
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Achievements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition and awards for our innovative work in AI-powered skincare
          </p>
        </div>

        {/* Desktop Horizontal Scroll */}
        <div className="hidden md:block">
          <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-full mb-4`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>

                  <p className="text-gray-600 font-medium">{achievement.organization}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-full mb-4`}
                >
                  <IconComponent className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2">{achievement.title}</h3>

                <p className="text-gray-600 text-sm font-medium">{achievement.organization}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
