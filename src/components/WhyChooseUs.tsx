import React from "react";
import { Fade } from "./Fade";

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual with Founder & Team */}
          <div className="lg:col-span-5 relative">
            <Fade delay={100}>
              <div className="relative mx-auto max-w-md">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-100">
                  <img
                    src="/client_1.jpg"
                    alt="Abel Abraha, Founder"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-wider text-warm-300">
                      Founder's Guarantee
                    </p>
                    <h3 className="text-xl font-bold">
                      "We treat every visitor as honored family in our city."
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      — Abel Abraha, Founder &amp; CEO
                    </p>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[200px] text-center">
                  <div className="text-3xl font-extrabold text-brand-600">100%</div>
                  <div className="text-xs font-bold text-slate-800 mt-1">
                    Dedication to Traveler Safety
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          {/* Right Column: 4 Pillars of Trust */}
          <div className="lg:col-span-7">
            <Fade delay={200}>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                  The Delight Difference
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-6">
                  Why Discerning Travelers Choose Delight
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-8 font-normal">
                  Traveling to Ethiopia should be inspiring, seamless, and completely worry-free.
                  Here is what sets our personalized approach apart from standard commercial tour agencies:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold text-lg mb-3">
                      🤝
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">
                      Family Touch Care
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      We go beyond guiding: from flight tracking to diet accommodations, you have a dependable local friend at every moment.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-warm-50 text-warm-700 flex items-center justify-center font-bold text-lg mb-3">
                      🗣️
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">
                      Multilingual Guides
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Proficient in English, Arabic, and Amharic with deep historical knowledge, delivering enriching narratives everywhere you go.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-lg mb-3">
                      💵
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">
                      Minimum Payment Guarantee
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Transparent prices with no hidden charges. Reserve your tour securely with minimal deposit and pay the rest upon arrival.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold text-lg mb-3">
                      🛡️
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">
                      Safety &amp; Reliability
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Well-maintained private vehicles, vetted drivers, secure guest house selections, and 24/7 local emergency assistance.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
