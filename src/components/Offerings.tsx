import React from "react";
import { Link } from "@tanstack/react-router";
import { Fade } from "./Fade";

interface Offering {
  icon: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
}

const offerings: Offering[] = [
  {
    icon: "🏛️",
    badge: "Exploration & Culture",
    title: "Guided City Tours",
    description:
      "Full-day and multi-day tours led by experienced local historians. Discover the National Museum, Lucy's fossils, Entoto Maryam, and authentic coffee ceremonies.",
    features: [
      "Historic National Museum & Lucy",
      "Entoto Hill panoramic viewpoint",
      "Traditional Ethiopian coffee ceremony",
      "Local cultural lunch included",
    ],
  },
  {
    icon: "🏡",
    badge: "Comfort & Hospitality",
    title: "Accommodations & Stays",
    description:
      "Hand-picked guest houses and comfortable reservations across Addis Ababa, ensuring you feel right at home with warm hospitality and safety.",
    features: [
      "Centrally located, peaceful neighborhoods",
      "Family & solo traveler friendly",
      "Flexible check-in & personalized care",
      "Close to major attractions & airport",
    ],
  },
  {
    icon: "🚗",
    badge: "Comfortable Mobility",
    title: "Private Transport & Transfers",
    description:
      "Door-to-door transportation throughout your stay. Enjoy seamless airport pickups, modern air-conditioned vehicles, and dedicated drivers.",
    features: [
      "Bole International Airport pickup/drop-off",
      "Dedicated full-day vehicle & driver",
      "Night tour & evening dining transfers",
      "Fluent English, Arabic & Amharic guides",
    ],
  },
];

export const Offerings: React.FC = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Fade delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
              Complete Hospitality
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Everything You Need for an Unforgettable Stay
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-normal">
              We eliminate the stress of navigating a new city by offering an all-in-one package:
              expert guidance, secure transportation, and trusted accommodation.
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((item, index) => (
            <Fade delay={150 * (index + 1)} key={index}>
              <div className="h-full flex flex-col justify-between p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/5 hover:bg-white transition-all duration-300 group">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3 group-hover:text-brand-700 transition">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200/70">
                  <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
                    What's Included:
                  </h4>
                  <ul className="space-y-2.5">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
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
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition"
          >
            <span>Explore All Services &amp; Stays</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
