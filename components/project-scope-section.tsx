"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"

export default function ProjectScopeSection() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      title: "Literature Survey",
      content:
        "Comprehensive review of existing research in AI-powered skincare solutions, analyzing current methodologies, technologies, and market trends in the beauty tech industry.",
    },
    {
      title: "Research Gap",
      content:
        "Identification of limitations in current skincare AI systems, including lack of personalization, limited skin type recognition, and insufficient real-time analysis capabilities.",
    },
    {
      title: "Research Problem & Solution",
      content:
        "Addressing the need for personalized, AI-driven skincare recommendations through advanced computer vision and machine learning algorithms tailored to individual skin characteristics.",
    },
    {
      title: "Research Objectives",
      content:
        "Develop an intelligent skincare analysis system that provides personalized recommendations, tracks skin health progress, and offers evidence-based beauty insights.",
    },
    {
      title: "Methodology",
      content:
        "Implementation of deep learning models, computer vision techniques, and data analytics to create a comprehensive skincare AI platform with user-friendly interfaces.",
    },
    {
      title: "Technologies",
      content:
        "Utilizing TensorFlow, OpenCV, React Native, Node.js, and cloud computing platforms to build a scalable and efficient AI-powered beauty solution.",
    },
  ]

  return (
    <section id="project-scope" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Project Scope</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the comprehensive research and development approach behind BeautiCare AI
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Desktop Tabs */}
          <div className="hidden md:flex border-b border-gray-200">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === index
                    ? "text-[#E3AADD] border-b-2 border-[#E3AADD] bg-[#FAE7FB]"
                    : "text-gray-600 hover:text-[#E3AADD] hover:bg-[#FAE7FB]"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden">
            {tabs.map((tab, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-gray-800 hover:bg-[#FAE7FB] transition-colors"
                >
                  <span className="font-medium">{tab.title}</span>
                  {activeTab === index ? (
                    <ChevronDown className="h-5 w-5 text-[#E3AADD]" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                {activeTab === index && <div className="px-6 pb-4 text-gray-600 leading-relaxed">{tab.content}</div>}
              </div>
            ))}
          </div>

          {/* Desktop Content */}
          <div className="hidden md:block p-8">
            <div className="text-gray-600 leading-relaxed text-lg">{tabs[activeTab]?.content}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
