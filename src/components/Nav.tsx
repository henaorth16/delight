import React, { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { FaWhatsapp } from "./Icons";
import { MOCK_CONTACT } from "../../utils/utils";

export const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo (also serves as Home link) */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <img
                src="/logo.svg"
                className="h-8 w-auto transition-transform group-hover:scale-105"
                alt="Delight Tour Logo"
              />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-brand-700 transition">
                  Delight<span className="text-brand-600">.</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold -mt-1 hidden sm:block">
                  Addis Ababa • Tours &amp; Stays
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - 4 clean essential links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
              <Link
                to="/tours"
                className="hover:text-brand-600 transition"
                activeProps={{ className: "text-brand-600 font-bold" }}
              >
                Tours &amp; Packages
              </Link>
              <Link
                to="/destinations"
                className="hover:text-brand-600 transition"
                activeProps={{ className: "text-brand-600 font-bold" }}
              >
                Destinations
              </Link>
              <Link
                to="/services"
                className="hover:text-brand-600 transition"
                activeProps={{ className: "text-brand-600 font-bold" }}
              >
                Services &amp; Stays
              </Link>
              <Link
                to="/about"
                className="hover:text-brand-600 transition"
                activeProps={{ className: "text-brand-600 font-bold" }}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="hover:text-brand-600 transition"
                activeProps={{ className: "text-brand-600 font-bold" }}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Buttons - Clean & purposeful */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`${MOCK_CONTACT.whatsappUrl}?text=${encodeURIComponent(
                  "Hello! Inquiring about Addis Ababa tours (Demo)."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition"
                title="Chat on WhatsApp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={16} />
              </a>

              <Link
                to="/plan"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-sm hover:shadow transition"
              >
                ✨ Plan Custom Trip
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={`${MOCK_CONTACT.whatsappUrl}?text=${encodeURIComponent(
                  "Hello! Tour inquiry demo."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-full"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:bg-slate-100"
                aria-label="Toggle mobile menu"
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
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 px-4 pt-2 pb-6 bg-white border-t border-slate-100 shadow-xl flex flex-col gap-1.5">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl text-slate-800 hover:bg-slate-50 font-medium text-sm"
              activeProps={{ className: "bg-brand-50 text-brand-600 font-bold" }}
            >
              Home
            </Link>
            <Link
              to="/tours"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl text-slate-800 hover:bg-slate-50 font-medium text-sm"
              activeProps={{ className: "bg-brand-50 text-brand-600 font-bold" }}
            >
              Tours &amp; Packages
            </Link>
            <Link
              to="/plan"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl text-brand-700 bg-brand-50 hover:bg-brand-100 font-bold text-sm flex items-center justify-between"
              activeProps={{ className: "bg-brand-600 text-white font-bold" }}
            >
              <span>✨ Custom Trip Builder</span>
              <span className="text-[10px] uppercase font-extrabold bg-white/90 text-brand-700 px-2 py-0.5 rounded-full">
                Calculator
              </span>
            </Link>
            <Link
              to="/destinations"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl text-slate-800 hover:bg-slate-50 font-medium text-sm"
              activeProps={{ className: "bg-brand-50 text-brand-600 font-bold" }}
            >
              Destinations &amp; Landmarks
            </Link>
            <Link
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl text-slate-800 hover:bg-slate-50 font-medium text-sm"
              activeProps={{ className: "bg-brand-50 text-brand-600 font-bold" }}
            >
              Services &amp; Stays
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl text-slate-800 hover:bg-slate-50 font-medium text-sm"
              activeProps={{ className: "bg-brand-50 text-brand-600 font-bold" }}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl text-slate-800 hover:bg-slate-50 font-medium text-sm"
              activeProps={{ className: "bg-brand-50 text-brand-600 font-bold" }}
            >
              Contact
            </Link>

            <div className="pt-3 mt-2 border-t border-slate-100">
              <Link
                to="/plan"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-sm text-sm block"
              >
                Plan Your Trip
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
