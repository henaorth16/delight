import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fade } from "../components/Fade";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiCalendar,
  FiUsers,
  FiCheck,
  FiShield,
  FaWhatsapp,
} from "../components/Icons";
import { MOCK_CONTACT } from "../../utils/utils";

interface InquiryForm {
  fullName: string;
  email: string;
  phone: string;
  serviceCategory: string;
  travelDate: string;
  groupSize: string;
  message: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do international travelers obtain an Ethiopian tourist visa?",
    answer:
      "Most international travelers can conveniently apply online for an official Ethiopian e-Visa (30 or 90 days single entry) via evisa.gov.et prior to departure. Citizens of many nations can also obtain a visa upon arrival at Bole International Airport (ADD).",
  },
  {
    question: "Where will my driver or guide meet me upon arrival at Bole Airport?",
    answer:
      "For all airport transfer bookings, our dedicated driver waits directly outside the main international arrivals terminal holding a personalized Delight Tour welcome board with your name. We monitor live flight arrival times for delays.",
  },
  {
    question: "What currencies and payment methods are accepted?",
    answer:
      "For this prototype platform, all rates are displayed in USD for international clarity. Locally, we accept major foreign currencies (USD, EUR, GBP) converted at official bank rates, Ethiopian Birr (ETB), Telebirr, and major credit cards.",
  },
  {
    question: "Can Delight Tour accommodate strict vegetarian, vegan, or fasting diets?",
    answer:
      "Ethiopia has one of the world's richest traditions of plant-based cuisine due to Ethiopian Orthodox fasting traditions (Tsom). Delicious vegan platters (Bayenetu) consisting of spiced lentils, yellow split peas, collard greens, and shiro on injera are widely available daily.",
  },
  {
    question: "What is your cancellation and rescheduling policy?",
    answer:
      "We offer flexible rescheduling without penalty up to 24 hours before your scheduled tour departure. Cancellations made 48 hours in advance are eligible for a 100% refund of the deposit.",
  },
  {
    question: "Is Addis Ababa safe for solo and family travelers?",
    answer:
      "Addis Ababa is considered one of the safer capital cities in Africa. As in any large metropolitan area, common-sense precautions against petty pickpocketing in crowded areas like Merkato apply. Having our private licensed guide and vehicle ensures a seamless and secure experience.",
  },
];

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<InquiryForm>({
    fullName: "",
    email: "",
    phone: "",
    serviceCategory: "1-Day City Highlights ($70)",
    travelDate: "",
    groupSize: "1 - 2 Travelers",
    message: "",
  });

  const [notification, setNotification] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const mockRef = `DEL-${Math.floor(1000 + Math.random() * 9000)}`;
      setNotification(
        `Prototype Demonstration: Your mock inquiry has been recorded with reference #${mockRef}! A confirmation email preview has been generated for ${formData.email}.`
      );
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        serviceCategory: "1-Day City Highlights ($70)",
        travelDate: "",
        groupSize: "1 - 2 Travelers",
        message: "",
      });
      setIsSubmitting(false);
      window.scrollTo({ top: 300, behavior: "smooth" });
    }, 600);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Prototype Notice */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/80 mb-8">
          <nav className="flex items-center text-xs text-slate-500 gap-2">
            <Link to="/" className="hover:text-brand-600 transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Contact &amp; Reservations</span>
          </nav>
          <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 bg-amber-50 text-amber-800 rounded-full border border-amber-200">
            Prototype Inquiries Desk
          </span>
        </div>

        {/* Hero Header */}
        <Fade delay={50}>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
              Get in Touch
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Let&apos;s Plan Your Ethiopian Experience
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Have questions about tour packages, accommodation dates, or airport transfers?
              Our local travel concierge is available via WhatsApp or form inquiry.
            </p>
          </div>
        </Fade>

        {/* Feedback Alert Banner */}
        {notification && (
          <div className="mb-8 p-4 sm:p-5 bg-emerald-50 border border-emerald-300 rounded-2xl flex items-start gap-3 shadow-sm animate-fade-in">
            <span className="text-emerald-600 mt-0.5">
              <FiCheck size={20} />
            </span>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-emerald-900">Submission Confirmed</h4>
              <p className="text-xs sm:text-sm text-emerald-800 mt-1 font-normal leading-relaxed">
                {notification}
              </p>
            </div>
            <button
              onClick={() => setNotification(null)}
              className="text-emerald-700 hover:text-emerald-950 text-sm font-bold ml-2"
            >
              ✕
            </button>
          </div>
        )}

        {/* Main 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Office Details & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Delight Tour &amp; Stay Office
              </h3>
              <p className="text-xs text-slate-500 mb-6 font-normal">
                Visit our welcome desk for itinerary consultations, vehicle dispatch, or coffee ceremony arrangements.
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 text-brand-600 shrink-0">
                    <FiMapPin size={18} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Office Address:</span>
                    <span className="font-normal text-slate-600">
                      Bole Commercial Center, 4th Floor, Suite 402, Cameroon Street, Bole Sub-City, Addis Ababa, Ethiopia
                    </span>
                    <span className="block text-[11px] text-slate-400 mt-0.5">
                      (Approx. 7 minutes from Bole International Airport)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 text-brand-600 shrink-0">
                    <FiClock size={18} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Operating Hours:</span>
                    <span className="font-normal text-slate-600 block">
                      Monday – Saturday: 08:30 – 18:30 (EAT, UTC+3)
                    </span>
                    <span className="font-normal text-slate-600 block">
                      Sunday: 09:30 – 15:30 (EAT)
                    </span>
                    <span className="text-[11px] text-emerald-600 font-semibold block mt-0.5">
                      • 24/7 WhatsApp emergency support for active tour guests
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 text-brand-600 shrink-0">
                    <FiPhone size={18} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Phone &amp; Hotline:</span>
                    <a
                      href={`tel:${MOCK_CONTACT.phone.replace(/\s+/g, "")}`}
                      className="text-brand-600 font-semibold hover:underline"
                    >
                      {MOCK_CONTACT.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 text-brand-600 shrink-0">
                    <FiMail size={18} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Inquiry Email:</span>
                    <a
                      href={`mailto:${MOCK_CONTACT.email}`}
                      className="text-brand-600 font-semibold hover:underline"
                    >
                      {MOCK_CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Quick Contact Box */}
            <div className="bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-2 rounded-full bg-emerald-800 text-emerald-300">
                  <FaWhatsapp size={20} />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Instant Messaging Desk
                </span>
              </div>
              <h4 className="text-xl font-bold">Fastest Response on WhatsApp</h4>
              <p className="mt-2 text-xs text-emerald-100 font-normal leading-relaxed">
                Need quick price confirmation or immediate airport driver status? Message our local desk representative Elias Kebede directly.
              </p>

              <div className="mt-5">
                <a
                  href={`${MOCK_CONTACT.whatsappUrl}?text=${encodeURIComponent(
                    "Hello Elias! I am inquiring about tour availability and hotel options with Delight Tour."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs sm:text-sm transition shadow-md"
                >
                  <FaWhatsapp size={18} />
                  <span>Chat on WhatsApp (+251 90 000 0000)</span>
                </a>
              </div>
            </div>

            {/* Safety & Trust Guarantee */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 text-xs text-slate-600 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <FiShield className="text-brand-600" size={16} />
                <span>Our Booking Pledge:</span>
              </div>
              <ul className="space-y-1.5 list-disc list-inside text-slate-500">
                <li>Zero hidden fuel or guide entrance surcharges</li>
                <li>Flexible rescheduling if flight schedules shift</li>
                <li>Licensed, background-checked professional drivers</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Send a Booking Inquiry or Custom Request
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                  Fill in your preferred travel dates and package. Our team will verify guide availability and reply with an itemized quote.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Samuel Tesfaye"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. traveler@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+251 90 000 0000"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Package or Service *
                    </label>
                    <select
                      name="serviceCategory"
                      value={formData.serviceCategory}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition bg-white"
                    >
                      <option value="1-Day City Highlights ($70)">1-Day City Highlights ($70)</option>
                      <option value="2-Day Cultural Explorer ($160)">2-Day Cultural Explorer ($160)</option>
                      <option value="3-Day VIP Platinum Tour & Luxury Stay ($230)">
                        3-Day VIP Platinum Tour &amp; Stay ($230)
                      </option>
                      <option value="Airport Transfer & Chauffeured Vehicle">
                        Airport Transfer &amp; Chauffeured Vehicle
                      </option>
                      <option value="Guest House Accommodation Only">
                        Guest House Accommodation Only
                      </option>
                      <option value="Custom Group / Academic Expedition">
                        Custom Group / Academic Expedition
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Approximate Travel Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Number of Guests
                    </label>
                    <select
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition bg-white"
                    >
                      <option value="1 - 2 Travelers">1 – 2 Travelers (Solo or Couple)</option>
                      <option value="3 - 5 Travelers">3 – 5 Travelers (Family or Small Group)</option>
                      <option value="6 - 12 Travelers">6 – 12 Travelers (Minivan Group)</option>
                      <option value="12+ Travelers">12+ Travelers (Private Bus Delegation)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Special Requests or Questions
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about flight arrival details, dietary preferences (vegetarian / vegan), mobility requirements, or specific landmarks you'd like to include..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting Inquiry..." : "Submit Reservation Inquiry"}
                  </button>
                  <p className="text-[11px] text-slate-500 text-center mt-3">
                    Prototype note: No payment is collected here. Your submission simulates an automated inquiry dispatch.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-16 bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Everything You Need to Know Before You Travel
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition"
                  >
                    <span>{faq.question}</span>
                    <span className="text-brand-600 text-lg shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
