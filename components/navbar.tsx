"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const projectScopeItems = [
    "Literature Survey",
    "Research Gap",
    "Research Problem & Solution",
    "Research Objectives",
    "Methodology",
    "Technologies",
  ];

  const downloadsItems = [
    "Research Papers",
    "Documentation",
    "Datasets",
    "Source Code",
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#E3AADD] to-[#C8A8E9] bg-clip-text text-transparent">
              BeautiCare AI
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-[#E3AADD] px-3 py-2 text-sm font-medium border-b-2 border-[#E3AADD] transition-colors"
              >
                Home
              </button>

              {/* Project Scope Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("project-scope")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-gray-700 hover:text-[#E3AADD] px-3 py-2 text-sm font-medium flex items-center transition-colors">
                  Project Scope
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "project-scope" && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    {projectScopeItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection("project-scope")}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#FAE7FB] hover:text-[#E3AADD] transition-colors"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection("app-preview")}
                className="text-gray-700 hover:text-[#E3AADD] px-3 py-2 text-sm font-medium transition-colors"
              >
                App Preview
              </button>

              <button
                onClick={() => scrollToSection("milestones")}
                className="text-gray-700 hover:text-[#E3AADD] px-3 py-2 text-sm font-medium transition-colors"
              >
                Milestones
              </button>

              {/* Downloads Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("downloads")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-gray-700 hover:text-[#E3AADD] px-3 py-2 text-sm font-medium flex items-center transition-colors">
                  Downloads
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "downloads" && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    {downloadsItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection("downloads")}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#FAE7FB] hover:text-[#E3AADD] transition-colors"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-[#E3AADD] px-3 py-2 text-sm font-medium transition-colors"
              >
                About Us
              </button>
              {/* <button
                onClick={() => scrollToSection("achievements")}
                className="text-gray-700 hover:text-[#E3AADD] px-3 py-2 text-sm font-medium transition-colors"
              >
                Achievements
              </button> */}
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-[#E3AADD] px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#E3AADD] p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#E3AADD] hover:bg-[#FAE7FB] rounded-md"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("project-scope")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#E3AADD] hover:bg-[#FAE7FB] rounded-md"
              >
                Project Scope
              </button>
              <button
                onClick={() => scrollToSection("app-preview")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#E3AADD] hover:bg-[#FAE7FB] rounded-md"
              >
                App Preview
              </button>
              <button
                onClick={() => scrollToSection("milestones")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#E3AADD] hover:bg-[#FAE7FB] rounded-md"
              >
                Milestones
              </button>
              <button
                onClick={() => scrollToSection("downloads")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#E3AADD] hover:bg-[#FAE7FB] rounded-md"
              >
                Downloads
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#E3AADD] hover:bg-[#FAE7FB] rounded-md"
              >
                About Us
              </button>
              {/* <button
                onClick={() => scrollToSection("achievements")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#E3AADD] hover:bg-[#FAE7FB] rounded-md"
              >
                Achievements
              </button> */}
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#E3AADD] hover:bg-[#FAE7FB] rounded-md"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
