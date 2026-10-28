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
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-200 dark:border-gray-800">
          {/* Brand info */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="Delight Logo"
                className="w-[120px] h-auto object-contain"
              />
            </Link>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              Delight Tour and Accommodation in Addis Ababa, Ethiopia.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 col-span-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                About
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-600 dark:text-gray-400 hover:text-[#02b1b4] text-sm transition"
                  >
                    Delight (who we are)
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Follow us on
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61554133757479&mibextid=ZbWKwL"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-[#02b1b4] text-sm transition"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/delight_tours_accomodation?igsh=MTVuYjAwbGpweXZhMw=="
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-[#02b1b4] text-sm transition"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-[#02b1b4] text-sm transition"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-[#02b1b4] text-sm transition"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>© {new Date().getFullYear()} Delight™. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>
              Made by{" "}
              <a
                href="https://ezoltech.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-[#02b1b4]"
              >
                ezoltech
              </a>{" "}
              &{" "}
              <a
                href="https://contact-henok.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-[#02b1b4]"
              >
                henaorth
              </a>
            </span>
          </div>

          <div className="flex items-center space-x-5 text-gray-500 dark:text-gray-400">
            <a
              href="https://www.facebook.com/profile.php?id=61554133757479&mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#02b1b4] transition"
              aria-label="Facebook"
            >
              <BsFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/delight_tours_accomodation?igsh=MTVuYjAwbGpweXZhMw=="
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#02b1b4] transition"
              aria-label="Instagram"
            >
              <BsInstagram size={20} />
            </a>
            <a
              href="https://wa.me/qr/A7SKJLRIQAJZF1"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#02b1b4] transition"
              aria-label="WhatsApp"
            >
              <BsWhatsapp size={20} />
            </a>
            <a
              href="#"
              className="hover:text-[#02b1b4] transition"
              aria-label="WeChat"
            >
              <BsWechat size={20} />
            </a>
            <img src="/qr.png" alt="QR Code" className="h-10 w-10 object-contain rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Under;
