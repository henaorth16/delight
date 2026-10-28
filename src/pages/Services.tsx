import React from "react";
import { Link } from "@tanstack/react-router";
import { Fade } from "../components/Fade";
import { FaWhatsapp } from "../components/Icons";
import { DETAILED_SERVICES, MOCK_CONTACT } from "../data/mockData";

export const Services: React.FC = () => {
  return (
    <div className="bg-slate-50/60 min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <Fade delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
              Our Full Service Range
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
              Complete Hospitality &amp; Travel in Addis Ababa
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-normal">
              Whether you are in Ethiopia for a weekend layover, diplomatic mission, or cultural vacation,
              we deliver end-to-end travel care with family-grade dedication.
            </p>
          </div>
        </Fade>

        {/* Detailed Service Blocks */}
        <div className="space-y-20">
          {DETAILED_SERVICES.map((service, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <Fade delay={150 * (index + 1)} key={service.id}>
                <div
                  id={service.id}
                  className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Media Column */}
                    <div
                      className={`lg:col-span-5 ${
                        isReversed ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-md relative">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-xs font-bold text-slate-800 shadow-sm">
                            {service.badge}
                          </span>
                        </div>
                      </div>

                      {/* Specs Grid */}
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        {service.specs.map((spec, sIdx) => (
                          <div
                            key={sIdx}
                            className="bg-slate-50 p-3 rounded-xl border border-slate-100"
                          >
                            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                              {spec.label}
                            </span>
                            <span className="text-xs font-semibold text-slate-800">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Content Column */}
                    <div
                      className={`lg:col-span-7 flex flex-col justify-between ${
                        isReversed ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-warm-600">
                          {service.subtitle}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-4">
                          {service.title}
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                          {service.description}
                        </p>

                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                          Service Highlights:
                        </h3>
                        <ul className="space-y-2.5 mb-8">
                          {service.highlights.map((feat, fIdx) => (
                            <li
                              key={fIdx}
                              className="flex items-start gap-3 text-xs sm:text-sm text-slate-700"
                            >
                              <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                                ✓
                              </span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                        <Link
                          to="/contact"
                          className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition"
                        >
                          Inquire About {service.title}
                        </Link>
                        <a
                          href={`${MOCK_CONTACT.whatsappUrl}?text=${encodeURIComponent(
                            `Hello Delight Tour! I would like details about ${service.title}.`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition flex items-center gap-2"
                        >
                          <FaWhatsapp size={16} className="text-emerald-600" />
                          <span>WhatsApp Coordinator</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <Fade delay={400}>
          <div className="mt-20 rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-brand-900 via-slate-900 to-brand-950 text-white text-center max-w-4xl mx-auto shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Need a Custom Multi-Service Package?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
              We frequently bundle guest house stays with full-day chauffeurs and weekend excursions for
              business executives, families, and tour groups.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/tours"
                className="px-6 py-3 rounded-xl bg-warm-500 hover:bg-warm-600 text-slate-950 font-bold text-sm shadow transition"
              >
                Browse Tour Packages
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition"
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Services;
