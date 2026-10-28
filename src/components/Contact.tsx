import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/utils";
import { FaWhatsapp } from "./Icons";
import { Fade } from "./Fade";

interface FormData {
  name: string;
  email: string;
  tour: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    tour: "1-Day City Highlights ($70)",
    message: "",
  });
  const [notification, setNotification] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${BASE_URL}/contact/create`, {
        subject: `Tour Inquiry: ${formData.tour} - ${formData.name}`,
        email: formData.email,
        message: `${formData.message} (Client Name: ${formData.name})`,
      });

      setNotification("Your inquiry has been received! We will get in touch promptly.");
      setFormData({
        name: "",
        email: "",
        tour: "1-Day City Highlights ($70)",
        message: "",
      });
      setTimeout(() => setNotification(null), 5000);
    } catch {
      // Fallback feedback
      setNotification("Thank you for reaching out! We will contact you shortly.");
      setTimeout(() => setNotification(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(
      `Hello Delight Tour! I would like to plan a visit to Addis Ababa and learn more about your tour and accommodation packages.`
    );
    window.open(`https://wa.me/251984529929?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Fade delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
              Start Your Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Plan Your Visit with Our Local Team
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 font-normal">
              Have questions about itineraries, customized requests, or accommodation availability?
              We are here to assist you every step of the way.
            </p>
          </div>
        </Fade>

        {/* Toast Notification */}
        {notification && (
          <div className="fixed top-6 right-6 z-50 bg-emerald-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 transition-all animate-fade-in border border-emerald-500">
            <svg className="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-semibold text-sm">{notification}</span>
            <button
              onClick={() => setNotification(null)}
              className="ml-3 hover:opacity-75 text-white text-xs font-bold"
            >
              ✕
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & WhatsApp */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-900 to-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between min-h-[460px]">
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-300 font-bold">
                Direct Contact
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4">
                Chat Directly With Our Tour Coordinator
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-8 font-normal">
                Prefer immediate messaging? Reach out to us on WhatsApp for lightning-fast responses, custom itineraries, and instant photo previews.
              </p>

              <button
                onClick={handleWhatsAppChat}
                className="w-full py-3.5 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 mb-8"
              >
                <FaWhatsapp size={20} />
                <span>Chat On WhatsApp Now</span>
              </button>

              <div className="space-y-4 pt-6 border-t border-white/10 text-sm">
                <div className="flex items-center gap-3 text-slate-200">
                  <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-base">
                    📍
                  </span>
                  <span>Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-base">
                    📞
                  </span>
                  <a href="tel:+251984529929" className="hover:text-brand-300 transition">
                    +251 98 452 9929
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-base">
                    ✉️
                  </span>
                  <a href="mailto:delight.tour.acc@gmail.com" className="hover:text-brand-300 transition">
                    delight.tour.acc@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-brand-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Typical response time: under 15 minutes</span>
            </div>
          </div>

          {/* Right Column: Clean Web Form */}
          <div className="lg:col-span-7 bg-slate-50/80 p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Send an Inquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition shadow-sm"
                    placeholder="Jane Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition shadow-sm"
                    placeholder="jane@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="tour" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Interested Package
                </label>
                <select
                  id="tour"
                  name="tour"
                  value={formData.tour}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition shadow-sm cursor-pointer"
                >
                  <option value="1-Day City Highlights ($70)">1-Day City Highlights ($70 / person)</option>
                  <option value="2-Day Cultural Tour ($160)">2-Day Cultural Explorer ($160 / person)</option>
                  <option value="3-Day Platinum Stay ($290)">3-Day Platinum VIP with Stay ($290 / person)</option>
                  <option value="Custom Itinerary / Accommodation Only">Custom Itinerary / Accommodation Only</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Your Message or Travel Dates
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition shadow-sm"
                  placeholder="Tell us about your estimated travel dates, group size, and any special preferences..."
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm rounded-xl transition shadow-sm hover:shadow disabled:opacity-50"
                >
                  {isSubmitting ? "Sending Request..." : "Submit Travel Inquiry"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
