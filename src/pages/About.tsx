import React from "react";
import { Fade } from "../components/Fade";
import { MOCK_CONTACT } from "../../utils/utils";

export const About: React.FC = () => {
  return (
    <div className="bg-slate-50/60 min-h-screen py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <Fade delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
              Our Story &amp; Leadership • Prototype
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
              Passionate Local Guides, Personal Family Care
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-normal">
              Delight Tour and Accommodation was created to provide visitors to Ethiopia’s capital
              with authentic, secure, and personalized journeys guided by experienced local specialists.
            </p>
          </div>
        </Fade>

        {/* Company Mission Banner */}
        <Fade delay={150}>
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/80 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-xs font-bold uppercase tracking-wider text-warm-600">
                  Our Purpose
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 mb-4">
                  Bridging Heritage, Hospitality &amp; Peace of Mind
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                  Navigating an unfamiliar city can be overwhelming. We believe that true travel is
                  best experienced when you have dependable, warm-hearted locals guiding your path.
                  From discovering prehistoric fossil roots to tasting freshly roasted highland coffee
                  and relaxing in a quiet, curated guest house, we treat each guest like an honored family member.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                    ✓ Mock Prototype Tour Operator
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                    ✓ Multilingual (EN / AR / AM)
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                    ✓ Curated Stays &amp; Verified Guidance
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/home.jpg"
                  alt="Ethiopian Landscape"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </Fade>

        {/* Founders / Team Grid */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Leadership Personas</h2>
          <p className="text-slate-500 text-sm mt-2">
            Sample management team representation for prototype demonstration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Persona 1: Samuel Tesfaye */}
          <Fade delay={200}>
            <div className="h-full flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-xl transition-all duration-300">
              <div className="h-80 w-full overflow-hidden bg-slate-100 relative">
                <img
                  alt="Samuel Tesfaye - Lead Tour Director"
                  className="w-full h-full object-cover object-top"
                  src="/client_1.jpg"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-xs font-bold text-brand-700 rounded-full shadow-sm">
                    Founder &amp; Managing Director
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    Samuel Tesfaye
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-md">
                      English &amp; Amharic
                    </span>
                    <span className="text-xs text-slate-400">• Lead Tour Director (Mock Persona)</span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Passionate cultural organizer and tour coordinator with over a decade of hospitality experience in Addis Ababa.
                    Dedicated to creating customized, stress-free journeys for visiting travelers from across the globe.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">
                    Prototype Contact:
                  </span>
                  <a
                    href={MOCK_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-brand-600 hover:text-brand-800 transition"
                  >
                    Demo WhatsApp →
                  </a>
                </div>
              </div>
            </div>
          </Fade>

          {/* Persona 2: Elias Kebede */}
          <Fade delay={250}>
            <div className="h-full flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-xl transition-all duration-300">
              <div className="h-80 w-full overflow-hidden bg-slate-100 relative">
                <img
                  alt="Elias Kebede - Head of Hospitality"
                  className="w-full h-full object-cover object-top"
                  src="/client_2.jpg"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-xs font-bold text-warm-700 rounded-full shadow-sm">
                    Head of Hospitality &amp; Logistics
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    Elias Kebede
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold text-warm-700 bg-warm-50 px-2.5 py-0.5 rounded-md">
                      Arabic, English &amp; Amharic
                    </span>
                    <span className="text-xs text-slate-400">• Guest Relations (Mock Persona)</span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Specialist in guest house reservations, airport mobility, and culinary excursions.
                    Fluent in Arabic, English, and Amharic, ensuring smooth communication and warm hospitality for international guests.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">
                    Prototype Contact:
                  </span>
                  <a
                    href={MOCK_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-brand-600 hover:text-brand-800 transition"
                  >
                    Demo WhatsApp →
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
