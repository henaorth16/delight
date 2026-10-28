import React, { useState } from "react";
import { FaWhatsapp } from "./Icons";
import { MOCK_CONTACT } from "../../utils/utils";

export const Hero: React.FC = () => {
  const [selectedTour, setSelectedTour] = useState("1-Day City Highlights");
  const [guests, setGuests] = useState("2 Travelers");

  const handleQuickInquire = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `[Demo Inquiry] Hello Delight Tour! I am interested in booking a ${selectedTour} for ${guests}. Can you provide details and availability?`
    );
    window.open(`${MOCK_CONTACT.whatsappUrl}?text=${message}`, "_blank");
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-b from-white via-slate-50/60 to-white">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 -z-10 w-80 h-80 bg-warm-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-800 text-xs font-semibold mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-600" />
              <span>Authentic Addis Ababa Tours &amp; Accommodation • Prototype</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              Experience the True Soul of{" "}
              <span className="relative text-brand-700 whitespace-nowrap">
                Addis Ababa
                <span className="absolute left-0 bottom-1 w-full h-3 bg-warm-500/20 -z-10 rounded-full" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
              Private guided city tours, curated local stays, and seamless airport transport.
              Discover ancient history, coffee ceremonies, and breathtaking Entoto views with personal family care.
            </p>

            {/* Quick Inquiry Bar */}
            <div className="w-full max-w-2xl bg-white p-3 sm:p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/80 mb-8">
              <form
                onSubmit={handleQuickInquire}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center"
              >
                <div className="flex flex-col px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-100">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Tour Type
                  </label>
                  <select
                    value={selectedTour}
                    onChange={(e) => setSelectedTour(e.target.value)}
                    className="bg-transparent text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer mt-0.5"
                  >
                    <option value="1-Day City Highlights">1-Day City Highlights</option>
                    <option value="2-Day Cultural Tour">2-Day Cultural Tour</option>
                    <option value="3-Day Platinum Stay">3-Day Platinum Stay</option>
                    <option value="Tailored Custom Tour">Custom Itinerary</option>
                  </select>
                </div>

                <div className="flex flex-col px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-100">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Party Size
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="bg-transparent text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer mt-0.5"
                  >
                    <option value="1 Solo Traveler">1 Solo Traveler</option>
                    <option value="2 Travelers">2 Travelers (Couple)</option>
                    <option value="3-5 Small Group">3–5 Group / Family</option>
                    <option value="6+ Large Group">6+ Travelers</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full h-full py-3 px-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm rounded-xl shadow-sm hover:shadow transition flex items-center justify-center gap-2"
                >
                  <FaWhatsapp size={16} />
                  <span>Demo WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-2 border-t border-slate-200/60 w-full max-w-xl">
              <div>
                <div className="text-2xl font-bold text-slate-900">500+</div>
                <div className="text-xs text-slate-500 font-medium">Delighted Visitors</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-600">4.9 ★</div>
                <div className="text-xs text-slate-500 font-medium">Guest Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-warm-600">100%</div>
                <div className="text-xs text-slate-500 font-medium">Tailored Itineraries</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-100">
                <img
                  src="/addis.jpeg"
                  alt="Scenic Addis Ababa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
                    Panoramic Addis
                  </span>
                  <h3 className="text-xl font-bold leading-snug">
                    From Lucy to Entoto Hills
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 line-clamp-2">
                    Experience rich culture, local cuisine, and majestic viewpoints with our verified guides.
                  </p>
                </div>
              </div>

              {/* Floating Testimonial Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden sm:flex items-center gap-3">
                <img
                  src="/client1.avif"
                  alt="Tour Guide Samuel"
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-500 shrink-0"
                />
                <div>
                  <div className="flex items-center gap-1 text-amber-500 text-xs">
                    ★★★★★
                  </div>
                  <p className="text-xs font-medium text-slate-800 line-clamp-2 mt-0.5">
                    "Samuel and the team made our stay effortless and memorable!"
                  </p>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase">
                    Sample Review — Guest Feedback
                  </span>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md py-2 px-3.5 rounded-full shadow-lg border border-slate-100 flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-slate-800">
                  Verified Local Guides
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
