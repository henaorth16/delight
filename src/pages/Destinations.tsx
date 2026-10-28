import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fade } from "../components/Fade";
import { FiMapPin, FiClock, FiCheck, FiShield, FaWhatsapp } from "../components/Icons";
import { DESTINATIONS_DATA, MOCK_CONTACT, DestinationItem } from "../data/mockData";

export const Destinations: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredDestinations =
    activeFilter === "all"
      ? DESTINATIONS_DATA
      : DESTINATIONS_DATA.filter((d) => d.category === activeFilter);

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Demo Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/80 mb-8">
          <nav className="flex items-center text-xs text-slate-500 gap-2">
            <Link to="/" className="hover:text-brand-600 transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Destinations &amp; Landmarks</span>
          </nav>
          <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 bg-amber-50 text-amber-800 rounded-full border border-amber-200">
            Prototype Showcase Guide
          </span>
        </div>

        {/* Hero Header */}
        <Fade delay={50}>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
              Discover Addis Ababa &amp; Ethiopia
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Curated Landmarks &amp; Cultural Treasures
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              From the 3.2-million-year-old origins of human ancestry in Addis Ababa to the breathtaking 12th-century monolithic rock-hewn churches of Lalibela, explore Ethiopia&apos;s living archaeological and spiritual soul.
            </p>
          </div>
        </Fade>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {[
            { id: "all", label: `All Destinations (${DESTINATIONS_DATA.length})` },
            { id: "heritage", label: "UNESCO & Imperial Heritage" },
            { id: "museum", label: "Museums & Paleontology" },
            { id: "nature", label: "Highlands & Overlooks" },
            { id: "culture", label: "Culture & Living Traditions" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === tab.id
                  ? "bg-brand-600 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredDestinations.map((dest, idx) => (
            <Fade key={dest.id} delay={idx * 100}>
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                {/* Image & Badges */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur text-slate-900 rounded-full text-xs font-bold shadow-sm">
                      {dest.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs text-amber-300 font-medium tracking-wide">
                      {dest.amharicTitle}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-sm">
                      {dest.title}
                    </h2>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Meta Info Bar */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-4 mb-5 border-b border-slate-100">
                      <div className="flex items-center gap-1.5 font-medium">
                        <FiMapPin className="text-brand-600" size={15} />
                        <span>{dest.district}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-medium">
                        <FiClock className="text-brand-600" size={15} />
                        <span>Duration: {dest.duration}</span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
                      {dest.description}
                    </p>

                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mb-5">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Historical Context
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {dest.historicalContext}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="mb-5">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                        Key Experience Highlights:
                      </h3>
                      <ul className="space-y-2 text-xs text-slate-600 font-normal">
                        {dest.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <span className="text-emerald-600 mt-0.5">
                              <FiCheck size={14} />
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visitor Tip */}
                    <div className="p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
                      <span className="text-amber-600 font-bold shrink-0">💡 Travel Tip:</span>
                      <span className="font-normal">{dest.visitorTip}</span>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <div className="text-xs text-slate-500">
                      Featured in:{" "}
                      <span className="font-semibold text-slate-700">
                        {dest.includedInTours[0]}
                      </span>
                    </div>
                    <Link
                      to="/tours"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-50 hover:bg-brand-100 text-brand-700 text-xs font-bold rounded-xl transition border border-brand-200"
                    >
                      <span>View Tour Itinerary</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {/* Practical Visitor Essentials */}
        <div className="mt-16 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
              Essential Travel Knowledge
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Preparing for Your Visit to Addis Ababa
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-normal">
              Useful tips curated by Delight Tour to ensure your stay is comfortable, respectful, and safe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-brand-600 font-bold text-lg mb-2">🏔️ High Altitude (2,355m+)</div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Addis Ababa is the fourth-highest capital city in the world. Drink plenty of bottled mineral water, take your first day at a relaxed pace, and avoid strenuous hill sprints immediately after arrival.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-brand-600 font-bold text-lg mb-2">📸 Photography Etiquette</div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Always ask friendly permission before photographing local individuals, especially inside traditional markets. Military installations, airports, and government ministries strictly prohibit photography.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-brand-600 font-bold text-lg mb-2">👗 Respectful Church Attire</div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                When entering Ethiopian Orthodox churches and cathedrals, modest dress covering shoulders and knees is customary. Shoes are removed at the portal. Traditional white cotton Netela wraps are provided by your guide.
              </p>
            </div>
          </div>
        </div>

        {/* Custom Itinerary CTA */}
        <div className="mt-12 bg-gradient-to-r from-brand-700 to-emerald-800 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-200">
              Personalized City Itineraries
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">
              Want to Combine These Sites Into a Private Day?
            </h3>
            <p className="mt-2 text-sm text-emerald-100 font-normal leading-relaxed">
              We arrange customized timing, dedicated private vehicles, licensed multilingual historians, and hotel pickups for families, solo travelers, and delegations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={`${MOCK_CONTACT.whatsappUrl}?text=${encodeURIComponent(
                "Hello Delight Tour! I'd like to plan a custom sightseeing itinerary in Addis Ababa."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm shadow-md transition"
            >
              <FaWhatsapp size={18} />
              <span>Chat on WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm shadow-md transition"
            >
              Contact Booking Desk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
