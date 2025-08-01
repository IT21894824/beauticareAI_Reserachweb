"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("home");

  const sections = [
    "home",
    "project-scope",
    "app-preview",
    "milestones",
    "downloads",
    "about",
    "contact",
  ];

  const projectScopeItems = [
    "Literature Survey",
    "Research Gap",
    "Research Problem & Solution",
    "Research Objectives",
    "Methodology",
    "Technologies",
  ];

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Highlight active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            break;
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6, // 60% in view
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navItemClass = (id: string) =>
    `px-3 py-2 text-sm font-medium transition-colors ${
      activeSection === id
        ? "text-[#E3AADD] border-b-2 border-[#E3AADD]"
        : "text-gray-700 hover:text-[#E3AADD]"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Title */}
          <div className="flex items-center space-x-2">
            <Image
              src="/faviconbe.png"
              alt="BeautiCare Logo"
              width={40}
              height={40}
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#E3AADD] to-[#C8A8E9] bg-clip-text text-transparent">
              BeautiCare AI
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((id) =>
              id === "project-scope" || id === "downloads" ? null : (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={navItemClass(id)}
                >
                  {id
                    .replace("-", " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
                </button>
              )
            )}

            {/* Project Scope Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("project-scope")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center ${navItemClass("project-scope")}`}
              >
                Project Scope
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "project-scope" && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
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

            {/* Downloads Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("downloads")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center ${navItemClass("downloads")}`}
                onClick={() => scrollToSection("downloads")}
              >
                Downloads
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
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
              {sections.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md ${
                    activeSection === id
                      ? "text-[#E3AADD] bg-[#FAE7FB]"
                      : "text-gray-700 hover:text-[#E3AADD] hover:bg-[#FAE7FB]"
                  }`}
                >
                  {id
                    .replace("-", " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
