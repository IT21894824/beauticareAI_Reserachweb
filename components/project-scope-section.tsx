"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function ProjectScopeSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Literature Survey",
      content: [
        "Recent advancements in machine learning and computer vision have led to significant improvements in personalized fashion and beauty recommendation systems. However, existing applications still lack the ability to deliver truly individualized and real-time suggestions that account for diverse user attributes and preferences.",
        "Several studies have attempted to bridge this gap by integrating intelligent algorithms into different components of the recommendation process. Patel et al. applied a Random Forest Classifier for clothing suggestions, but it required manual user input. Wazarkar et al. demonstrated the effectiveness of deep learning through the Xception model for body shape detection, while other researchers utilized VGG16 and ResNet architectures to improve feature recognition and classification accuracy.",
        "Haircut and hair color recommendations have been explored using Support Vector Machines (SVMs) and Multiple Kernel Learning (MKL), but ensemble methods like XGBoost have proven to be more accurate and robust, achieving up to 94.2% accuracy. Makeup recommendation systems, as proposed by Liu et al. and Kim et al., combined machine learning with expert systems to generate context-aware suggestions based on facial features.",
        "Real-time visualization has seen promising developments through augmented reality, such as Tang et al.’s virtual hair try-on system and Yoon et al.’s Mobile-UNET architecture for efficient facial detection on mobile devices. Despite these advancements, current systems still rely heavily on manual inputs and lack integrated solutions across multiple fashion and beauty domains.",
      ],
    },
    {
      title: "Research Gap",
      content: [
        "Despite the growing interest in personalized fashion and beauty recommendation systems, existing solutions exhibit several limitations that hinder their effectiveness and user adoption.",
        "Most current applications rely heavily on manual input from users, such as specifying skin tone, face shape, or preferences, which can be time-consuming, inaccurate, and inconvenient.",
        "These gaps highlight the need for a comprehensive, automated, and intelligent solution that leverages deep learning, ensemble models, and visual processing to deliver accurate, real-time, and fully personalized beauty and fashion recommendations—an area the BeautiCare AI system aims to address.",
      ],
    },
    {
      title: "Research Problem & Solution",
      content: [
        "Existing fashion and beauty recommendation systems struggle to provide truly personalized experiences due to their reliance on manual data entry and limited ability to analyze a user's complete set of physical and contextual attributes.",
        "To address these issues, BeautiCare AI proposes a unified mobile application that uses machine learning, deep learning, and computer vision to automatically extract features such as face shape, skin tone, eye color, and body type from user images.",
        "By combining visual attributes with user preferences and context (e.g., gender and occasion), the system delivers tailored haircut, hair color, clothing, and makeup recommendations, along with real-time virtual try-on capabilities to build confidence in style choices.",
      ],
    },
    {
      title: "Research Objectives",
      content: [
        "The main objective is to develop a machine learning-based personalized fashion and beauty recommendation system tailored for the young generation.",
        "Sub-objectives include:",
        {
          list: [
            "Implement hairstyle transformation and realistic simulation for haircut recommendations.",
            "Develop a real-time hair color recommendation system using attributes like skin tone and eye color.",
            "Generate clothing suggestions based on body type and skin tone.",
            "Provide makeup recommendations by analyzing facial features such as lip and eyebrow shapes.",
          ],
        },
      ],
    },
    {
      title: "Methodology",
      content: [
        "The methodology for the BeautiCare AI system is based on a mobile application that intelligently integrates machine learning, deep learning, and computer vision.",
        "After capturing user images via the mobile camera, the system extracts visual features like face shape, eye color, lip and eyebrow shape, skin tone, and body type.",
        "MediaPipe Face Mesh is used for facial landmark detection, ResNet-18 for hair segmentation, and OpenCV with K-Means clustering for color extraction.",
        "Haircut and makeup recommendations are generated using XGBoost classifiers, clothing suggestions use VGG-16 and a Random Forest Classifier, and real-time virtual try-on is enabled via alpha blending in OpenCV.",
        "The system presents personalized results along with preview options for hairstyles and hair colors, enhancing both accuracy and user engagement.",
      ],
    },
    {
      title: "Technologies",
      content: [
        "The system is built using the following technologies:",
        {
          list: [
            "TensorFlow – for machine learning model development",
            "OpenCV – for image processing and feature extraction",
            "React Native – for cross-platform mobile app development",
            "Node.js – for backend API and data processing",
            "Cloud platforms – for scalable and secure deployment",
          ],
        },
      ],
    },
  ];

  const renderContent = (content: (string | { list: string[] })[]) => {
    return content.map((item, idx) =>
      typeof item === "string" ? (
        <p key={idx} className="mb-4">
          {item}
        </p>
      ) : (
        <ul key={idx} className="list-disc pl-6 mb-4 text-gray-700">
          {item.list.map((point, i) => (
            <li key={i} className="mb-2">
              {point}
            </li>
          ))}
        </ul>
      )
    );
  };

  return (
    <section id="project-scope" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Project Scope
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the comprehensive research and development approach behind
            BeautiCare AI
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
              <div
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
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
                {activeTab === index && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed text-base">
                    {renderContent(tab.content)}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Content */}
          <div className="hidden md:block p-8">
            <div className="text-gray-600 leading-relaxed text-lg">
              {renderContent(tabs[activeTab].content)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
