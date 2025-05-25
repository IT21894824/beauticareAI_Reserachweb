"use client"

import type React from "react"

import { useState } from "react"
import { Download, Smartphone, Mail, ArrowRight, Apple, Play } from "lucide-react"

export default function FinalCtaSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setIsSubscribed(true)
    setEmail("")
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#E3AADD] via-[#C8A8E9] to-[#C3C7F4]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Download BeautiCare AI and explore your best look — powered by smart technology!
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have discovered their perfect style with AI-powered beauty recommendations
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="inline-flex items-center px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl group">
              <Apple className="h-8 w-8 mr-3" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
              <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button className="inline-flex items-center px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl group">
              <Play className="h-8 w-8 mr-3" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
              <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white">
              <Smartphone className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Instant Analysis</h3>
              <p className="text-white/80">Real-time facial feature detection and style recommendations</p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white">
              <Download className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Free Download</h3>
              <p className="text-white/80">Available for both iOS and Android devices</p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white">
              <Mail className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-white/80">Get the latest features and beauty tips</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-4">Stay in the Loop</h3>
          <p className="text-white/90 mb-6">
            Be the first to know about new features, beauty tips, and exclusive updates
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg border-0 bg-white/90 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-[#E3AADD] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
              >
                Subscribe
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </form>
          ) : (
            <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4 text-white">
              <p className="font-semibold">Thank you for subscribing!</p>
              <p className="text-sm text-white/80">You'll receive updates about BeautiCare AI soon.</p>
            </div>
          )}
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-white/70 text-sm">
          <p>Available for iOS 12.0+ and Android 8.0+</p>
        </div>
      </div>
    </section>
  )
}
