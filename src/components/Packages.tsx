import React, { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Fade } from "./Fade";
import { FiLock } from "./Icons";
import { saveCheckoutOrder } from "../data/mockData";

interface PackagePlan {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  price1Day: number;
  price2Days: number;
  price3Days: number;
  description: string;
  inclusions: string[];
  places: string;
}

const packages: PackagePlan[] = [
  {
    id: "silver",
    name: "Silver Package",
    badge: "Day Explorer",
    price1Day: 70,
    price2Days: 130,
    price3Days: 180,
    description: "Ideal for travelers with limited time seeking the essential sights and sounds of Addis Ababa.",
    inclusions: [
      "Full-day professional local tour guide",
      "Traditional Ethiopian lunch & coffee ceremony",
      "Private city transportation to all sites",
      "National Museum & Lucy exhibition entry",
      "Bottled water & snacks throughout the day",
    ],
    places: "National Museum, Holy Trinity Cathedral, St. George's, Merkato",
  },
  {
    id: "gold",
    name: "Gold Package",
    badge: "Most Popular",
    popular: true,
    price1Day: 95,
    price2Days: 160,
    price3Days: 210,
    description: "Deep cultural immersion with panoramic Entoto views, authentic dining, and evening experiences.",
    inclusions: [
      "Everything in Silver Package",
      "Entoto Hill & Maryam Church panorama",
      "Traditional cultural dinner with live music",
      "Daily breakfast & authentic lunch",
      "Dedicated air-conditioned vehicle & driver",
      "Flexible itinerary customized to your pace",
    ],
    places: "Addis Ababa City Highlights, Entoto Park, Unity Park, Cultural House",
  },
  {
    id: "platinum",
    name: "Platinum All-Inclusive",
    badge: "VIP & Stay",
    price1Day: 105,
    price2Days: 200,
    price3Days: 290,
    description: "The complete luxury experience: curated guest house accommodations, full transit, and 24/7 care.",
    inclusions: [
      "Guest House Accommodation included",
      "Round-trip Bole Airport transfers",
      "All meals (Breakfast, Lunch & Gourmet Dinner)",
      "Full-day guidance & Night City Tour",
      "Private vehicle with dedicated chauffeur",
      "Family touch personal host throughout stay",
    ],
    places: "Full Addis Experience + Curated Boutique Accommodation",
  },
];

export const Packages: React.FC = () => {
  const navigate = useNavigate();
  const [duration, setDuration] = useState<"1" | "2" | "3">("1");

  const getPrice = (pkg: PackagePlan) => {
    if (duration === "1") return pkg.price1Day;
    if (duration === "2") return pkg.price2Days;
    return pkg.price3Days;
  };

  const handleBook = (pkg: PackagePlan) => {
    const price = getPrice(pkg);
    const durationLabel = `${duration} ${duration === "1" ? "Day" : "Days"}`;
    saveCheckoutOrder({
      tourId: pkg.id,
      tourName: `${pkg.name} — ${pkg.badge || "Addis Tour"}`,
      tag: `${durationLabel} Package`,
      duration: durationLabel,
      guests: 2,
      pricePerPerson: price,
      totalPrice: price * 2,
      currency: "USD",
      inclusions: pkg.inclusions,
    });
    navigate({ to: "/checkout" });
  };

  return (
    <section id="packages" className="py-16 lg:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Fade delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-warm-600 bg-warm-50 px-3 py-1 rounded-full border border-warm-200">
              Clear &amp; Transparent
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Tailored Tour Packages
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 font-normal">
              Select your preferred duration below. All packages include a dedicated guide and can be
              tailored to your schedule.
            </p>

            {/* Duration Toggle Buttons */}
            <div className="inline-flex items-center p-1.5 bg-white border border-slate-200 rounded-full shadow-sm mt-8">
              <button
                onClick={() => setDuration("1")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition ${
                  duration === "1"
                    ? "bg-brand-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                1 Day Tour
              </button>
              <button
                onClick={() => setDuration("2")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition ${
                  duration === "2"
                    ? "bg-brand-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                2 Days Tour
              </button>
              <button
                onClick={() => setDuration("3")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition ${
                  duration === "3"
                    ? "bg-brand-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                3 Days Tour
              </button>
            </div>
          </div>
        </Fade>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <Fade delay={150 * (index + 1)} key={pkg.id}>
              <div
                className={`h-full flex flex-col justify-between rounded-3xl p-8 bg-white transition-all duration-300 relative ${
                  pkg.popular
                    ? "border-2 border-brand-500 shadow-xl shadow-brand-500/10 ring-4 ring-brand-50"
                    : "border border-slate-200/90 shadow-sm hover:shadow-md"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow">
                    Most Popular Choice
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {pkg.badge}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {duration} {duration === "1" ? "Day" : "Days"}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {pkg.name}
                  </h3>

                  <p className="text-xs text-slate-600 mb-6 font-normal">
                    {pkg.description}
                  </p>

                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                    <span className="text-4xl sm:text-5xl font-extrabold text-slate-900">
                      ${getPrice(pkg)}
                    </span>
                    <span className="text-slate-500 text-sm font-medium">
                      / person
                    </span>
                  </div>

                  {/* Included Items */}
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                    What You Get:
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {pkg.inclusions.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <svg
                          className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl mb-6">
                    <span className="font-semibold text-slate-700">Places Covered: </span>
                    {pkg.places}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleBook(pkg)}
                    className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition flex items-center justify-center gap-2 shadow-sm ${
                      pkg.popular
                        ? "bg-brand-600 hover:bg-brand-700 text-white"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    <FiLock size={16} />
                    <span>Book {pkg.name} (${getPrice(pkg)})</span>
                  </button>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {/* Note / Flexibility Assurance */}
        <div className="mt-12 text-center flex flex-col items-center gap-4">
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
            💡 <strong>Need full day-by-day itineraries or flight extensions?</strong> Including our <em>3-Day Lalibela UNESCO Rock Churches Expedition</em> and flexible meal plans.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/tours"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md transition"
            >
              <span>View All Tour Details &amp; Schedules</span>
              <span>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 transition"
            >
              Request Custom Itinerary
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
