import React from "react";
import { Link } from "@tanstack/react-router";
import {
  BsFacebook,
  BsInstagram,
  BsTelegram,
  BsWechat,
  BsWhatsapp,
} from "./Icons";
import { MOCK_CONTACT } from "../../utils/utils";

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
              Designed as a prototype demonstration platform.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={MOCK_CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-700/50 hover:bg-emerald-900 transition"
              >
                <BsWhatsapp size={14} />
                <span>{MOCK_CONTACT.phoneFormatted}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 sm:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-slate-400 hover:text-white transition">
                  Tours &amp; Packages
                </Link>
              </li>
              <li>
                <Link to="/plan" className="text-brand-400 hover:text-white transition flex items-center gap-1.5">
                  <span>Trip Calculator &amp; Builder</span>
                  <span className="text-[10px] bg-brand-900/80 text-brand-300 px-1.5 py-0.2 rounded border border-brand-700/50">NEW</span>
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-slate-400 hover:text-white transition">
                  Addis Landmarks
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition">
                  Contact &amp; Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Highlights */}
          <div className="md:col-span-2 sm:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Top Destinations
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/destinations" className="hover:text-white transition">
                  National Museum &amp; Lucy
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-white transition">
                  Entoto Hills &amp; Park
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-white transition">
                  Holy Trinity Cathedral
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-white transition">
                  Unity Park Complex
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-white transition">
                  Merkato Open Market
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-white transition">
                  Traditional Buna Ceremony
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-3 sm:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Connect With Us
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Explore mock social channels and sample prototype connection points:
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/example"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-600 flex items-center justify-center text-slate-300 hover:text-white transition"
                aria-label="Facebook (Demo)"
              >
                <BsFacebook size={16} />
              </a>
              <a
                href="https://instagram.com/example"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-600 flex items-center justify-center text-slate-300 hover:text-white transition"
                aria-label="Instagram (Demo)"
              >
                <BsInstagram size={16} />
              </a>
              <a
                href="https://t.me/example"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-600 flex items-center justify-center text-slate-300 hover:text-white transition"
                aria-label="Telegram (Demo)"
              >
                <BsTelegram size={16} />
              </a>
              <a
                href={MOCK_CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-emerald-600 flex items-center justify-center text-slate-300 hover:text-white transition"
                aria-label="WhatsApp (Demo)"
              >
                <BsWhatsapp size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-600 flex items-center justify-center text-slate-300 hover:text-white transition"
                aria-label="WeChat (Demo)"
              >
                <BsWechat size={16} />
              </a>
            </div>

            <div className="mt-4 flex items-center gap-3 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
              <img src="/qr.png" alt="Scan QR" className="w-10 h-10 object-contain rounded bg-white p-0.5" />
              <div className="text-[11px] text-slate-300 leading-tight">
                <span className="font-semibold text-white block">Mock QR Code</span>
                Demo channel access
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Delight Tour and Accommodation Prototype. All demonstration rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-slate-400 transition">About</Link>
            <span>•</span>
            <Link to="/services" className="hover:text-slate-400 transition">Services</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-400 transition">Contact Desk</Link>
            <span>•</span>
            <span className="text-slate-400">Prototype Demo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Under;
