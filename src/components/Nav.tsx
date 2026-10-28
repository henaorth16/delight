import React, { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { FaWhatsapp } from "./Icons";

export const Nav: React.FC = () => {
  const [topArea, setTopArea] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setTopArea(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const isScrolled = topArea >= 450;
  const textColor = isScrolled ? "text-[#111]" : "text-[#f7f7f7]";

  return (
    <div className="top-0 sticky bg-transparent z-30">
      <nav
        className={`w-full transition-all duration-500 px-4 sm:px-6 lg:px-8 py-3 ${
          isScrolled
            ? "bg-[#f7f7f7] shadow-md text-[#111]"
            : "bg-gradient-to-b from-black/60 to-transparent text-[#f7f7f7]"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.svg" className="h-7 sm:h-9" alt="Delight Tour Logo" />
            <span
              className={`text-xl font-bold tracking-tight ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Delight Tour
            </span>
          </Link>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8 text-base font-medium">
            <Link
              to="/"
              className={`transition hover:text-amber-500 ${textColor}`}
              activeProps={{ className: "font-semibold text-amber-500" }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition hover:text-green-500 ${textColor}`}
              activeProps={{ className: "font-semibold text-green-500" }}
            >
              About
            </Link>
            <a
              href="/#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
              }}
              className={`transition hover:text-amber-500 ${textColor}`}
            >
              Services and pricings
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className={`transition hover:text-amber-500 ${textColor}`}
            >
              Contact
            </a>
          </div>

          {/* Right Action: WhatsApp & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/qr/XATL45V764QNK1"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 text-sm md:text-base font-medium transition hover:text-green-400 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              <FaWhatsapp size={20} className="text-green-500" />
              <span className="hidden sm:inline">+251984529929</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className={`md:hidden inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? "text-gray-800 hover:bg-gray-200" : "text-white hover:bg-white/20"
              }`}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-gray-400/20 bg-[#1b1b1b] rounded-2xl p-4 text-white shadow-2xl flex flex-col gap-3">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="py-2 px-3 rounded hover:bg-white/10 hover:text-amber-400 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="py-2 px-3 rounded hover:bg-white/10 hover:text-green-400 font-medium"
            >
              About
            </Link>
            <a
              href="/#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
              }}
              className="py-2 px-3 rounded hover:bg-white/10 hover:text-amber-400 font-medium"
            >
              Services and pricings
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="py-2 px-3 rounded hover:bg-white/10 hover:text-amber-400 font-medium"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
