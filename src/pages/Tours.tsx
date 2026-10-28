import React, { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Fade } from "../components/Fade";
import { FiLock } from "../components/Icons";
import { TOURS_DATA, TourPackage, saveCheckoutOrder } from "../data/mockData";

export const Tours: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredTours =
    activeTab === "all"
      ? TOURS_DATA
      : TOURS_DATA.filter((t) =>
          activeTab === "day"
            ? t.tag.includes("1-Day")
            : activeTab === "multi"
            ? t.tag.includes("2-Day") || t.tag.includes("3-Day")
            : t.id.includes("lalibela")
        );

  const handleBook = (tour: TourPackage) => {
    saveCheckoutOrder({
      tourId: tour.id,
      tourName: tour.name,
      tag: tour.tag,
      duration: tour.duration,
      guests: 2,
      pricePerPerson: tour.price,
      totalPrice: tour.price * 2,
      currency: "USD",
      inclusions: tour.inclusions,
    });
    navigate({ to: "/checkout" });
  };


  return (
    <div className="bg-slate-50/60 min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <Fade delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
              Verified Packages &amp; Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
              Explore Our Addis Ababa Tour Itineraries
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-normal">
              Every package is designed for maximum safety, cultural enrichment, and personal comfort.
              All itineraries can be tailored to match your flight times and interests.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition ${
                  activeTab === "all"
                    ? "bg-brand-600 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                All Packages ({TOURS_DATA.length})
              </button>
              <button
                onClick={() => setActiveTab("day")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition ${
                  activeTab === "day"
                    ? "bg-brand-600 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                1-Day Express
              </button>
              <button
                onClick={() => setActiveTab("multi")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition ${
                  activeTab === "multi"
                    ? "bg-brand-600 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                Multi-Day &amp; Stays
              </button>
              <button
                onClick={() => setActiveTab("excursion")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition ${
                  activeTab === "excursion"
                    ? "bg-brand-600 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                ✈️ Lalibela Flight Wonder
              </button>
            </div>
          </div>
        </Fade>

        {/* Detailed Tour Cards */}
        <div className="space-y-12">
          {filteredTours.map((tour, index) => (
            <Fade delay={100 * (index + 1)} key={tour.id}>
              <div
                className={`bg-white rounded-3xl p-8 sm:p-10 border transition-all ${
                  tour.featured
                    ? "border-2 border-brand-500 shadow-xl shadow-brand-500/5 ring-4 ring-brand-50/50"
                    : "border-slate-200/90 shadow-sm hover:shadow-md"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full border border-brand-100">
                        {tour.tag}
                      </span>
                      <span className="text-xs font-medium text-slate-400">
                        ⏱️ {tour.duration}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {tour.name}
                    </h2>
                    <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed font-normal">
                      {tour.overview}
                    </p>
                  </div>

                  <div className="lg:text-right shrink-0 bg-slate-50 p-4 rounded-2xl border border-slate-100 min-w-[200px]">
                    <span className="text-xs text-slate-500 font-medium block">Starting from</span>
                    <div className="text-4xl font-extrabold text-slate-900 my-1">
                      ${tour.price}
                      <span className="text-xs text-slate-500 font-normal"> / person</span>
                    </div>
                    <button
                      onClick={() => handleBook(tour)}
                      className="w-full mt-3 py-2.5 px-4 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
                    >
                      <FiLock size={14} />
                      <span>Book Tour Online (${tour.price})</span>
                    </button>
                  </div>
                </div>

                {/* Day / Hour Schedule Accordion List */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
                  <div className="lg:col-span-7">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                      Detailed Itinerary Schedule:
                    </h3>
                    <div className="space-y-3">
                      {tour.schedule.map((item, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-start gap-4 p-3 rounded-xl bg-slate-50 border border-slate-100/80"
                        >
                          <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-mono text-xs font-bold shrink-0">
                            {item.time}
                          </span>
                          <span className="text-xs sm:text-sm text-slate-700 font-medium pt-0.5">
                            {item.activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Inclusions & Exclusions */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3">
                        ✓ Inclusions:
                      </h3>
                      <ul className="space-y-2 mb-6">
                        {tour.inclusions.map((inc, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <span className="text-emerald-500 font-bold">✓</span>
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>

                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        ✕ Not Included:
                      </h3>
                      <ul className="space-y-1.5 text-xs text-slate-500">
                        {tour.exclusions.map((exc, eIdx) => (
                          <li key={eIdx} className="flex items-start gap-2">
                            <span>✕</span>
                            <span>{exc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>Minimum deposit guarantee applies</span>
                      <Link to="/contact" className="font-semibold text-brand-600 hover:underline">
                        Ask about group discounts →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {/* Footer Custom Builder Banner */}
        <div className="mt-16 text-center bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
            Tailor-Made Experience
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-3 mb-2">Have a Unique Group or Schedule?</h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 font-normal">
            Use our interactive cost calculator to select specific landmarks, 4x4 vehicles, and guest house stays with instant transparent pricing.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/plan"
              className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md transition"
            >
              ✨ Try Custom Trip Builder
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 transition"
            >
              Contact Booking Desk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
