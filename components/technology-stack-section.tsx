import { Brain, Camera, Cpu, Database, Code, Zap, Settings, BarChart } from "lucide-react"

export default function TechnologyStackSection() {
  const technologies = [
    {
      name: "MediaPipe Face Mesh",
      description: "Facial Landmark Detection",
      icon: Camera,
      category: "Computer Vision",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "ResNet-18",
      description: "Hair Segmentation",
      icon: Brain,
      category: "Deep Learning",
      color: "from-[#E3AADD] to-[#C8A8E9]",
    },
    {
      name: "VGG-16",
      description: "Skin Tone Classification",
      icon: Cpu,
      category: "Neural Networks",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Random Forest",
      description: "Body Type Classification",
      icon: BarChart,
      category: "Machine Learning",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "XGBoost",
      description: "Recommendation Engine",
      icon: Zap,
      category: "ML Algorithm",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Flask + REST API",
      description: "Backend Infrastructure",
      icon: Database,
      category: "Backend",
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "OpenCV & K-Means",
      description: "Color Extraction",
      icon: Settings,
      category: "Image Processing",
      color: "from-[#C3C7F4] to-[#F6BCBA]",
    },
    {
      name: "SMOTE & StratifiedKFold",
      description: "Data Preprocessing",
      icon: Code,
      category: "Data Science",
      color: "from-teal-500 to-blue-500",
    },
  ]

  return (
    <section id="technology" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Powered By AI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technologies and algorithms that make BeautiCare AI intelligent and accurate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${tech.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full mb-3">
                    {tech.category}
                  </span>

                  <h3 className="text-lg font-bold text-gray-800 mb-2">{tech.name}</h3>

                  <p className="text-gray-600 text-sm leading-relaxed">{tech.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Technology Stats */}
        <div className="mt-16 bg-gradient-to-br from-[#FAE7FB] to-[#F2DDDC] rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-800 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{"<2s"}</div>
              <div className="text-gray-600 font-medium">Processing Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-800 mb-2">50K+</div>
              <div className="text-gray-600 font-medium">Training Images</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-800 mb-2">8</div>
              <div className="text-gray-600 font-medium">AI Models</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
