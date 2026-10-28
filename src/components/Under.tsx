import React from "react";
import { Link } from "@tanstack/react-router";
import {
  BsFacebook,
  BsInstagram,
  BsTelegram,
  BsWechat,
  BsWhatsapp,
} from "./Icons";

export const Under: React.FC = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo.svg"
                alt="Delight Logo"
                className="h-9 w-auto brightness-200"
              />
              <span className="text-xl font-bold tracking-tight text-white">
                Delight<span className="text-brand-400">.</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              Specialized city tour guidance and boutique accommodation services in Addis Ababa, Ethiopia.
              We take pride in delivering unforgettable journeys with personal family care.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://wa.me/251984529929"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-700/50 hover:bg-emerald-900 transition"
              >
                <BsWhatsapp size={14} />
                <span>+251 98 452 9929</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 sm:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#services" className="text-slate-400 hover:text-white transition">
                  What We Offer
                </a>
              </li>
              <li>
                <a href="/#packages" className="text-slate-400 hover:text-white transition">
                  Tour Packages
                </a>
              </li>
              <li>
                <a href="/#highlights" className="text-slate-400 hover:text-white transition">
                  City Highlights
                </a>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Highlights */}
          <div className="md:col-span-2 sm:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Top Sights
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>National Museum &amp; Lucy</li>
              <li>Entoto Hills Viewpoint</li>
              <li>Holy Trinity Cathedral</li>
              <li>Unity Park Complex</li>
              <li>Coffee Ceremony</li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-3 sm:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Connect With Us
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Follow our daily Addis adventures and guest stories on social media:
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61554133757479&mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-600 flex items-center justify-center text-slate-300 hover:text-white transition"
                aria-label="Facebook"
              >
                <BsFacebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/delight_tours_accomodation?igsh=MTVuYjAwbGpweXZhMw=="
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-600 flex items-center justify-center text-slate-300 hover:text-white transition"
                aria-label="Instagram"
              >
                <BsInstagram size={16} />
              </a>
              <a
                href="https://wa.me/qr/A7SKJLRIQAJZF1"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-emerald-600 flex items-center justify-center text-slate-300 hover:text-white transition"
                aria-label="WhatsApp"
              >
                <BsWhatsapp size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-600 flex items-center justify-center text-slate-300 hover:text-white transition"
                aria-label="WeChat"
              >
                <BsWechat size={16} />
              </a>
            </div>

            <div className="mt-4 flex items-center gap-3 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
              <img src="/qr.png" alt="Scan QR" className="w-10 h-10 object-contain rounded bg-white p-0.5" />
              <div className="text-[11px] text-slate-300 leading-tight">
                <span className="font-semibold text-white block">Instant WhatsApp</span>
                Scan QR code to start chat
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Delight Tour and Accommodation. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-400 transition">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition">Terms of Service</a>
            <span>•</span>
            <span className="text-slate-400">
              Made by{" "}
              <a href="https://ezoltech.netlify.app" target="_blank" rel="noreferrer" className="underline hover:text-brand-400">
                ezoltech
              </a>{" "}
              &amp;{" "}
              <a href="https://contact-henok.netlify.app/" target="_blank" rel="noreferrer" className="underline hover:text-brand-400">
                henaorth
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Under;
