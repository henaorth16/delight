import React from "react";
import { FaTelegram, FaInstagram, FaFacebook } from "./Icons";
import { Fade } from "./Fade";
import { MOCK_CONTACT } from "../../utils/utils";

export const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="relative min-h-[50vh] text-slate-800 bg-slate-50 py-16 flex justify-center items-center flex-col gap-3 border-t border-slate-200"
    >
      <div className="logo rounded-full">
        <img
          className="w-20 rounded-full shadow-md"
          src="/logo.svg"
          alt="Prototype Logo"
        />
      </div>
      <Fade delay={300}>
        <h1 className="text-2xl font-bold text-slate-900">
          Delight-Tours.example
        </h1>
      </Fade>
      <small className="text-slate-500 font-medium">{MOCK_CONTACT.address}</small>
      <a className="hover:text-brand-600 text-sm font-semibold text-slate-700" href={`tel:${MOCK_CONTACT.phone}`}>
        {MOCK_CONTACT.phoneFormatted}
      </a>
      <a
        className="text-brand-600 text-sm hover:underline"
        href={`mailto:${MOCK_CONTACT.email}`}
      >
        {MOCK_CONTACT.email}
      </a>
      <div className="flex gap-4 text-lg text-slate-500 my-2">
        <a className="hover:text-brand-600 transition" href="https://t.me/example" aria-label="Telegram">
          <FaTelegram size={20} />
        </a>
        <a className="hover:text-brand-600 transition" href="https://instagram.com/example" aria-label="Instagram">
          <FaInstagram size={20} />
        </a>
        <a className="hover:text-brand-600 transition" href="https://facebook.com/example" aria-label="Facebook">
          <FaFacebook size={20} />
        </a>
      </div>
      <p className="text-xs text-slate-400 mt-4">
        © {new Date().getFullYear()} Delight Tours Prototype. All demonstration rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
