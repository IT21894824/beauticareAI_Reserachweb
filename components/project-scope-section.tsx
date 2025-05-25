"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function ProjectScopeSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Literature Survey",
      content:
        "Recent advancements in machine learning and computer vision have led to significant improvements in personalized fashion and beauty recommendation systems. However, existing applications still lack the ability to deliver truly individualized and real-time suggestions that account for diverse user attributes and preferences. Several studies have attempted to bridge this gap by integrating intelligent algorithms into different components of the recommendation process. Patel et al. applied a Random Forest Classifier for clothing suggestions, but it required manual user input. Wazarkar et al. demonstrated the effectiveness of deep learning through the Xception model for body shape detection, while other researchers utilized VGG16 and ResNet architectures to improve feature recognition and classification accuracy. Haircut and hair color recommendations have been explored using Support Vector Machines (SVMs) and Multiple Kernel Learning (MKL), but ensemble methods like XGBoost have proven to be more accurate and robust, achieving up to 94.2% accuracy. Makeup recommendation systems, as proposed by Liu et al. and Kim et al., combined machine learning with expert systems to generate context-aware suggestions based on facial features. Feature extraction and segmentation have also improved, with Borza et al. and Ileni et al. using deep learning to extract hair and facial data with high precision, while reducing processing time. Real-time visualization has seen promising developments through augmented reality, such as Tang et al.’s virtual hair try-on system and Yoon et al.’s Mobile-UNET architecture for efficient facial detection on mobile devices. Techniques like K-means clustering have been effective for skin tone classification, and transfer learning (e.g., Inception V3) has supported accurate face shape recognition in smaller datasets. Additionally, GANs like StyleGAN Salon have enabled realistic hairstyle transformations, and advanced datasets like CelebHair have enhanced feature extraction accuracy. Despite these advancements, current systems still rely heavily on manual inputs and lack integrated solutions across multiple fashion and beauty domains. The BeautiCare AI project addresses these gaps by combining real-time visual feature extraction, machine learning-based personalization, and virtual try-on technologies into a unified, mobile-first experience.",
    },
    {
      title: "Research Gap",
      content:
        "Despite the growing interest in personalized fashion and beauty recommendation systems, existing solutions exhibit several limitations that hinder their effectiveness and user adoption. Most current applications rely heavily on manual input from users, such as specifying skin tone, face shape, or preferences, which can be time-consuming, inaccurate, and inconvenient. Additionally, many systems focus on a single aspect—either hairstyle, clothing, or makeup—without offering an integrated approach that considers the combined influence of multiple personal attributes. Real-time visual feedback, such as virtual try-on capabilities, is either absent or lacks accuracy and realism, limiting user engagement. Furthermore, few models incorporate advanced computer vision techniques to automatically extract features from user images, and even fewer support dynamic adaptation to varying lighting, pose, or device constraints. These gaps highlight the need for a comprehensive, automated, and intelligent solution that leverages deep learning, ensemble models, and visual processing to deliver accurate, real-time, and fully personalized beauty and fashion recommendations—an area the BeautiCare AI system aims to address.",
    },
    {
      title: "Research Problem & Solution",
      content:
        "Existing fashion and beauty recommendation systems struggle to provide truly personalized experiences due to their reliance on manual data entry and their limited ability to consider a user's complete set of physical and contextual attributes. Most applications fail to deliver real-time visual feedback and do not integrate multiple recommendation types—such as hair, clothing, and makeup—into a single, cohesive system. To address these issues, BeautiCare AI proposes a unified mobile application that leverages machine learning, deep learning, and computer vision to automatically extract user features such as face shape, skin tone, eye color, and body type from images. By combining these visual attributes with user preferences and contextual data like gender and occasion, the system delivers highly personalized recommendations for haircuts, hair colors, outfits, and makeup. Furthermore, it incorporates real-time virtual try-on capabilities to enhance user experience and build confidence in their style decisions.",
    },
    {
      title: "Research Objectives",
      content:
        "The main objective of this research is to develop a machine learning-based personalized fashion and beauty recommendation system tailored for the young generation. The system aims to provide accurate and visually realistic suggestions by analyzing both user images and contextual preferences. Specific sub-objectives include: implementing hairstyle transformation and realistic simulation for personalized haircut recommendations; developing a real-time hair color recommendation system using user attributes such as skin tone and eye color; generating clothing suggestions based on body type and skin tone; and providing makeup recommendations by analyzing facial features like lip shape and eyebrow structure. These objectives collectively support the creation of a unified mobile application that enhances user experience through automation, accuracy, and interactivity.",
    },
    {
      title: "Methodology",
      content:
        "The methodology for the BeautiCare AI system is centered around a mobile application that intelligently integrates machine learning, deep learning, and computer vision techniques to offer personalized fashion and beauty recommendations. Upon granting camera access, the application captures the user's image and automatically extracts crucial visual features such as face shape, skin tone, eye color, lip shape, eyebrow shape, and body type. In addition to these visual cues, users provide contextual inputs like gender, personal preferences, and the intended occasion (e.g., casual, formal, or party). These combined data points are processed through a pipeline of specialized models. Facial landmarks are detected using MediaPipe Face Mesh, enabling precise analysis of facial geometry, while hair segmentation is carried out using a ResNet-18 architecture to isolate the hair region for color transformations. Skin tone and eye color are extracted through OpenCV and K-Means clustering in LAB color space, ensuring accurate results even in varied lighting conditions. For haircut and makeup recommendations, XGBoost classifiers are employed, trained on datasets that combine extracted features and user preferences to produce context-aware suggestions. Body type is classified using a Random Forest Classifier trained on anthropometric datasets, and skin tone classification for clothing recommendations is handled by VGG-16, a deep convolutional neural network known for its accuracy in visual tasks. The system supports real-time interaction by allowing users to preview recommended haircuts and hair colors using a virtual try-on interface that applies visual effects through alpha blending in OpenCV. While clothing and makeup suggestions are not directly rendered, the application provides style names, reference images, and detailed descriptions to support informed decision-making. This end-to-end automated pipeline ensures a seamless, user-friendly experience that minimizes manual input and enhances the accuracy and personalization of style recommendations.",
    },
    {
      title: "Technologies",
      content:
        "Utilizing TensorFlow, OpenCV, React Native, Node.js, and cloud computing platforms to build a scalable and efficient AI-powered beauty solution.",
    },
  ];

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
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                    {tab.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Content */}
          <div className="hidden md:block p-8">
            <div className="text-gray-600 leading-relaxed text-lg">
              {tabs[activeTab]?.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
