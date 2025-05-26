"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Star,
  Heart,
} from "lucide-react";

export default function AppPreviewSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const screenshots = [
    {
      title: "Login Screen",
      description: "Secure authentication with personalized profile setup",
      image: "/login.jpg",
      alt: "BeautiCare AI Login Screen",
    },
    {
      title: "Welcome & Occasion Selection",
      description:
        "Start your journey by choosing the right occasion for recommendations",
      image: "/IMG-20250525-WA0013.jpg",
      alt: "BeautiCare AI Occasion Selection",
    },
    {
      title: "Feature Detection",
      description:
        "Automatic extraction of features like eye color, face shape, and more",
      image: "/indentyfy.jpg",
      alt: "BeautiCare AI Feature Detection",
    },
    {
      title: "Hair Color Suggestion",
      description: "AI-recommended hair color with real-time preview",
      image: "/IMG-20250525-WA0011.jpg",
      alt: "BeautiCare AI Hair Color Suggestion",
    },
    {
      title: "Haircut Suggestion",
      description: "Suggested haircut styles tailored to your face shape",
      image: "/hairCutSuggetion.jpg",
      alt: "BeautiCare AI Haircut Suggestion",
    },
    {
      title: "Makeup Suggestion",
      description:
        "Complete makeup look recommendations based on your features",
      image: "/makeupSuggetion.jpg",
      alt: "BeautiCare AI Makeup Suggestion",
    },
    {
      title: "Hair + Makeup Preview",
      description:
        "View recommended haircut and makeup in one combined preview",
      image: "/makup.jpg",
      alt: "BeautiCare AI Full Look Preview",
    },
    {
      title: "User Input",
      description: "Select the gender & the occasion you're hopping in for",
      image: "/c1.png",
      alt: "User Input",
    },
    {
      title: "Clothing Recommendation",
      description: "AI-recommended dress combination",
      image: "/c2.png",
      alt: "Clothing Recommendation",
    },
    {
      title: "Style References",
      description: "View recommended dress combination in google images",
      image: "/c3.png",
      alt: "Google Image Recommendation",
    },
    {
      title: "Sign Up Screen",
      description:
        "Easy and clean account creation for a personalized experience",
      image: "/signUp.jpg",
      alt: "BeautiCare AI Sign Up Screen",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length
    );
  };

  return (
    <section
      id="app-preview"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-[#FAE7FB]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">App Preview</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a closer look at BeautiCare AI's sleek mobile interface
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative max-w-sm mx-auto">
            {/* Phone Mockup */}
            <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
              <div className="bg-black rounded-[2.5rem] p-1">
                <div className="bg-white rounded-[2rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

                  {/* Screenshot */}
                  <div className="relative h-[600px] w-[300px]">
                    <Image
                      src={
                        screenshots[currentSlide].image || "/placeholder.svg"
                      }
                      alt={screenshots[currentSlide].alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Slide Info */}
            <div className="mt-8 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {screenshots[currentSlide].title}
              </h3>
              <p className="text-gray-600">
                {screenshots[currentSlide].description}
              </p>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-[#E3AADD]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Side-by-Side */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="group">
              {/* Phone Mockup */}
              <div className="relative bg-gray-900 rounded-[2rem] p-2 shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:scale-105 mx-auto max-w-[250px]">
                <div className="bg-black rounded-[1.5rem] p-1">
                  <div className="bg-white rounded-[1.25rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black rounded-b-xl z-10"></div>

                    {/* Screenshot */}
                    <div className="relative h-[550px] w-auto">
                      <Image
                        src={screenshot.image || "/placeholder.svg"}
                        alt={screenshot.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-br from-[#E3AADD] to-[#C8A8E9] rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Smartphone className="h-4 w-4 text-white" />
                </div>
              </div>

              {/* Info */}
              <div className="mt-6 text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {screenshot.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {screenshot.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Highlight */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#E3AADD] to-[#C8A8E9] rounded-full mb-4">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Personalized Experience
            </h3>
            <p className="text-gray-600">
              AI-driven recommendations tailored to your unique features and
              preferences
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#C8A8E9] to-[#C3C7F4] rounded-full mb-4">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Intuitive Interface
            </h3>
            <p className="text-gray-600">
              Clean, modern design that makes beauty discovery effortless and
              enjoyable
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#C3C7F4] to-[#F6BCBA] rounded-full mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Real-time Analysis
            </h3>
            <p className="text-gray-600">
              Instant facial feature detection and styling suggestions using
              advanced AI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
