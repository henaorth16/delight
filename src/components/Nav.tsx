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
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/70 py-3"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo.svg"
                className="h-9 w-auto transition-transform group-hover:scale-105"
                alt="Delight Tour Logo"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-brand-700 transition">
                  Delight<span className="text-brand-600">.</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold -mt-1">
                  Tour &amp; Accommodation • Prototype
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
              <Link
                to="/"
                className="hover:text-brand-600 transition"
                activeProps={{ className: "text-brand-600 font-semibold" }}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="hover:text-brand-600 transition"
                activeProps={{ className: "text-brand-600 font-semibold" }}
              >
                Services
              </Link>
              <Link
                to="/tours"
                className="hover:text-brand-600 transition"
                activeProps={{ className: "text-brand-600 font-semibold" }}
              >
                Tours &amp; Packages
              </Link>
              <Link
                to="/destinations"
                className="hover:text-brand-600 transition"
                activeProps={{ className: "text-brand-600 font-semibold" }}
              >
                Destinations
              </Link>
              <Link
                to="/about"
                className="hover:text-brand-600 transition"
                activeProps={{ className: "text-brand-600 font-semibold" }}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="hover:text-brand-600 transition"
                activeProps={{ className: "text-brand-600 font-semibold" }}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`${MOCK_CONTACT.whatsappUrl}?text=${encodeURIComponent(
                  "Hello! I am inquiring about tour and accommodation availability (Prototype Demo)."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <FaWhatsapp size={14} className="text-emerald-600" />
                <span>{MOCK_CONTACT.phoneFormatted}</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-sm hover:shadow transition"
              >
                Book a Tour
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
          <div className="md:hidden mt-3 px-4 pt-2 pb-6 bg-white border-t border-slate-100 shadow-lg flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-slate-800 hover:bg-slate-50 font-medium text-sm"
              activeProps={{ className: "bg-brand-50 text-brand-600 font-bold" }}
            >
              Home
            </Link>
            <Link
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-slate-800 hover:bg-slate-50 font-medium text-sm"
              activeProps={{ className: "bg-brand-50 text-brand-600 font-bold" }}
            >
              Services
            </Link>
            <Link
              to="/tours"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-slate-800 hover:bg-slate-50 font-medium text-sm"
              activeProps={{ className: "bg-brand-50 text-brand-600 font-bold" }}
            >
              Tours &amp; Packages
            </Link>
            <Link
              to="/destinations"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-slate-800 hover:bg-slate-50 font-medium text-sm"
              activeProps={{ className: "bg-brand-50 text-brand-600 font-bold" }}
            >
              Destinations &amp; Sights
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-slate-800 hover:bg-slate-50 font-medium text-sm"
              activeProps={{ className: "bg-brand-50 text-brand-600 font-bold" }}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-slate-800 hover:bg-slate-50 font-medium text-sm"
              activeProps={{ className: "bg-brand-50 text-brand-600 font-bold" }}
            >
              Contact Us
            </Link>

            <div className="pt-3 mt-1 border-t border-slate-100 flex flex-col gap-2">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-sm text-sm"
              >
                Book a Tour or Inquiry
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
