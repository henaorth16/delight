import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fade } from "../components/Fade";
import { FaWhatsapp } from "../components/Icons";
import { MOCK_CONTACT } from "../../utils/utils";

interface TourItem {
  id: string;
  name: string;
  tag: string;
  duration: string;
  price: number;
  featured?: boolean;
  overview: string;
  schedule: { time: string; activity: string }[];
  inclusions: string[];
  exclusions: string[];
}

const allTours: TourItem[] = [
  {
    id: "silver-day",
    name: "The Essential Addis Highlights",
    tag: "1-Day Express",
    duration: "1 Day (8 Hours, 09:00 – 17:00)",
    price: 70,
    overview:
      "Designed for travelers with limited time or on layovers. Covers world-famous archaeological discoveries, panoramic viewpoints, and authentic coffee rituals.",
    schedule: [
      { time: "09:00", activity: "Complimentary hotel/guest house pickup in private vehicle" },
      { time: "09:30", activity: "National Museum: Explore Lucy (Dinknesh) with our historian" },
      { time: "11:30", activity: "Holy Trinity Cathedral: Emperor Haile Selassie tomb & murals" },
      { time: "13:00", activity: "Traditional Ethiopian Lunch (Injera, Doro Wat or vegetarian feast)" },
      { time: "14:15", activity: "Authentic coffee ceremony: fresh green bean roasting & tasting" },
      { time: "15:30", activity: "Mount Entoto: 3,200m panoramic overlook of the capital" },
      { time: "16:30", activity: "Addis Merkato: Guided artisan & spice quarter stroll" },
      { time: "17:30", activity: "Comfortable drop-off at your hotel or Bole Airport" },
    ],
    inclusions: [
      "Professional English/Arabic/Amharic speaking licensed guide",
      "Private air-conditioned vehicle & dedicated driver",
      "All museum and historic site entrance tickets",
      "Authentic cultural lunch & bottled mineral water",
      "Complete Ethiopian coffee ceremony tasting",
    ],
    exclusions: ["Alcoholic beverages", "Personal souvenir purchases", "International flights"],
  },
  {
    id: "gold-culture",
    name: "Ethiopian Heritage & Cultural Explorer",
    tag: "2-Day Journey",
    duration: "2 Full Days",
    price: 160,
    featured: true,
    overview:
      "A deeper voyage into the historical cradle of East Africa. Features scenic highland forests, royal palaces, and an unforgettable evening of live traditional music.",
    schedule: [
      { time: "Day 1 - Morning", activity: "National Museum, Ethnological Museum & Arat Kilo landmarks" },
      { time: "Day 1 - Afternoon", activity: "Unity Park & Grand Palace historic state rooms" },
      { time: "Day 1 - Evening", activity: "Cultural dinner with live traditional Eskista dance & music" },
      { time: "Day 2 - Morning", activity: "Scenic ascent to Entoto Maryam Church & eucalyptus trails" },
      { time: "Day 2 - Afternoon", activity: "St. George's Cathedral & curated Merkato artisan tour" },
      { time: "Day 2 - Evening", activity: "Specialty sunset coffee tasting overlooking Bole skyline" },
    ],
    inclusions: [
      "Dedicated private vehicle for both full days with fuel",
      "All admission fees to Unity Park, National Museum & palaces",
      "Two traditional lunches + one premier cultural dinner show",
      "Daily bottled water, fresh seasonal fruits & snacks",
      "Full flexibility to adjust daily start times and stops",
    ],
    exclusions: ["Guest house accommodation (can be added)", "Gratuities for driver/guide"],
  },
  {
    id: "platinum-vip",
    name: "Imperial Platinum VIP Stay & Tour",
    tag: "3-Day All-Inclusive",
    duration: "3 Days / 2 Nights",
    price: 290,
    overview:
      "Our premier stress-free package. Includes private boutique guest house stay, airport VIP greeting, all meals, night skyline tours, and around-the-clock host assistance.",
    schedule: [
      { time: "Day 1", activity: "VIP Airport Meet-and-Greet, Guest House check-in, Old City landmarks tour, Welcome dinner" },
      { time: "Day 2", activity: "Entoto Mountain nature & adventure park, Unity Palace, cultural culinary masterclass, Night city tour" },
      { time: "Day 3", activity: "Merkato artisan treasure hunt, coffee roastery visit, relaxation & on-time Bole Airport departure transfer" },
    ],
    inclusions: [
      "2 Nights in vetted luxury guest house / boutique accommodation",
      "Round-trip Bole International Airport VIP transfers",
      "All meals: 3 breakfasts, 3 gourmet lunches, 2 dinners",
      "Dedicated private 4x4 SUV with personal chauffeur for 72 hours",
      "Personal host on call 24/7 for shopping, translation, and logistics",
    ],
    exclusions: ["Personal international travel insurance", "Excess baggage fees"],
  },
  {
    id: "bishoftu-escape",
    name: "Bishoftu Crater Lakes & Nature Escape",
    tag: "Day Trip Excursion",
    duration: "1 Full Day (45km outside Addis)",
    price: 85,
    overview:
      "Escape the city to the volcanic resort town of Bishoftu (Debre Zeit). Marvel at five crater lakes, luxuriate in lakeside dining, and spot rare endemic birds.",
    schedule: [
      { time: "08:30", activity: "Depart Addis Ababa along the modern expressway to Bishoftu" },
      { time: "09:45", activity: "Arrival at Lake Babogaya: boat cruise & bird watching" },
      { time: "11:30", activity: "Scenic rim walk around Lake Hora with panoramic viewpoints" },
      { time: "13:00", activity: "Lakeside resort lunch featuring fresh grilled fish and injera" },
      { time: "15:00", activity: "Spa relaxation or visit to local artisan workshops" },
      { time: "16:30", activity: "Scenic afternoon drive returning to Addis Ababa" },
    ],
    inclusions: [
      "Private return expressway transit in air-conditioned 4x4",
      "Lake boat cruise fees & local conservation tickets",
      "3-course lakeside lunch with soft drinks",
      "Experienced regional nature & birding guide",
    ],
    exclusions: ["Spa treatments & resort massages", "Alcoholic cocktails"],
  },
];

export const Tours: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredTours =
    activeTab === "all"
      ? allTours
      : allTours.filter((t) =>
          activeTab === "day"
            ? t.tag.includes("1-Day")
            : activeTab === "multi"
            ? t.tag.includes("2-Day") || t.tag.includes("3-Day")
            : t.tag.includes("Day Trip")
        );

  const handleBook = (tour: TourItem) => {
    const text = encodeURIComponent(
      `[Demo Inquiry] Hello Delight Tour! I would like to book "${tour.name}" ($${tour.price}/person). Please provide current availability and custom details.`
    );
    window.open(`${MOCK_CONTACT.whatsappUrl}?text=${text}`, "_blank");
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
                All Packages ({allTours.length})
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
                Regional Excursions
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
                      <FaWhatsapp size={14} />
                      <span>Book on WhatsApp</span>
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

        {/* Footer Contact Banner */}
        <div className="mt-16 text-center bg-white p-8 rounded-3xl border border-slate-200 shadow-sm max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Have a Unique Group or Schedule?</h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 font-normal">
            We happily craft custom packages for academic researchers, photography expeditions, and large family reunions.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition"
          >
            Request a Custom Itinerary
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tours;
