import React from "react";
import { Link } from "@tanstack/react-router";
import { Fade } from "./Fade";
import { FiSliders, FiClock, FiDollarSign, FiPrinter } from "./Icons";

export const PlannerBanner: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-r from-brand-900 via-slate-900 to-emerald-950 text-white relative overflow-hidden border-y border-slate-800">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Fade delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Pitch */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-900/60 border border-emerald-700/60 mb-4">
                <FiSliders size={14} />
                <span>Client-Side Feature Spotlight</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Build &amp; Price Your Custom Itinerary in Real Time
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl font-normal leading-relaxed">
                Don’t fit standard tour templates? Use our interactive cost calculator to select your favorite Addis sights,
                mobility class (4x4 Land Cruiser or sedan), and boutique accommodations with live transparent pricing.
              </p>

              {/* Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-xs">
                  <FiDollarSign className="text-emerald-400 mb-1" size={16} />
                  <span className="font-bold block text-white">Live Costing</span>
                  <span className="text-[11px] text-slate-400">USD, EUR, ETB</span>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-xs">
                  <FiClock className="text-emerald-400 mb-1" size={16} />
                  <span className="font-bold block text-white">Smart Schedule</span>
                  <span className="text-[11px] text-slate-400">Auto-balanced days</span>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-xs">
                  <FiPrinter className="text-emerald-400 mb-1" size={16} />
                  <span className="font-bold block text-white">Print / PDF</span>
                  <span className="text-[11px] text-slate-400">Export your plan</span>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-xs">
                  <span className="text-emerald-400 mb-1 block text-base font-bold">💬</span>
                  <span className="font-bold block text-white">WhatsApp</span>
                  <span className="text-[11px] text-slate-400">1-click quote dispatch</span>
                </div>
              </div>
            </div>

            {/* Right Column: CTA Box */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start lg:items-end justify-center">
              <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl flex flex-col items-center text-center">
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-300 mb-1">
                  Try the Interactive Wizard
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Ready to test your custom trip?
                </h3>
                <p className="text-xs text-slate-300 mb-6 font-normal">
                  Customize duration, guests, sights, and vehicles. Takes less than 60 seconds to generate a full day plan.
                </p>

                <Link
                  to="/plan"
                  className="w-full py-3.5 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-lg hover:shadow-emerald-500/25 transition flex items-center justify-center gap-2"
                >
                  <span>Launch Custom Trip Builder</span>
                  <span>→</span>
                </Link>

                <span className="text-[11px] text-slate-400 mt-3 font-medium">
                  Zero signup required • Saved directly in your browser
                </span>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default PlannerBanner;
