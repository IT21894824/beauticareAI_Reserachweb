import { Users, Award, Target, Heart } from "lucide-react"

export default function AboutUsSection() {
  const teamStats = [
    {
      icon: Users,
      number: "5+",
      label: "Team Members",
    },
    {
      icon: Award,
      number: "3+",
      label: "Years Experience",
    },
    {
      icon: Target,
      number: "100+",
      label: "Research Hours",
    },
    {
      icon: Heart,
      number: "1000+",
      label: "Users Impacted",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-[#FAE7FB]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Meet the passionate team behind BeautiCare AI</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-[#E3AADD] to-[#C8A8E9] p-1">
                <img
                  src="/placeholder.svg?height=256&width=256"
                  alt="Team Profile"
                  className="w-full h-full rounded-full object-cover bg-white"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#F6BCBA] to-[#C3C7F4] rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">BeautiCare AI Research Team</h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              BeautiCare AI is a mobile-based visual style advisor that uses machine learning and computer vision to
              recommend haircuts, hair colors, clothing, and makeup. It detects facial and body features using your
              camera and personalizes styling recommendations based on preferences, gender, and occasion.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our mission is to democratize access to professional-grade skincare analysis and make personalized beauty
              recommendations accessible to everyone, regardless of their location or budget constraints.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-6">
            {teamStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#E3AADD] to-[#C8A8E9] rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>

                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
