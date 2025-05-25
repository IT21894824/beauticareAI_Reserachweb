"use client"

export default function HeroSection() {
  const scrollToProjectScope = () => {
    const element = document.getElementById("project-scope")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAE7FB] via-[#F2DDDC] to-[#F6BCBA] opacity-90"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#E3AADD] to-[#C8A8E9] rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#C3C7F4] to-[#F6BCBA] rounded-full opacity-20 blur-xl"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Discover the Future of{" "}
          <span className="bg-gradient-to-r from-[#E3AADD] to-[#C8A8E9] bg-clip-text text-transparent">Skincare</span>{" "}
          with BeautiCare AI
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
          AI-powered insights for your personal beauty journey.
        </p>

        <button
          onClick={scrollToProjectScope}
          className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-[#E3AADD] to-[#C8A8E9] rounded-full hover:from-[#C8A8E9] to-[#C3C7F4] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Explore More
        </button>
      </div>
    </section>
  )
}
