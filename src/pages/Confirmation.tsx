import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fade } from "../components/Fade";
import {
  FiCheck,
  FiPrinter,
  FiCalendar,
  FiUsers,
  FiMapPin,
  FiMail,
  FiPhone,
  FiShield,
  FaWhatsapp,
} from "../components/Icons";
import {
  BookingOrder,
  getConfirmedBooking,
  MOCK_CONTACT,
} from "../data/mockData";

export const Confirmation: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  // Load last confirmed order or provide demo sample
  const booking: BookingOrder = getConfirmedBooking() || {
    orderId: "DEL-2026-4892",
    tourId: "gold",
    tourName: "Gold Package — Cultural Immersion & Entoto Panorama",
    tag: "Best Seller • 1-Day",
    duration: "1 Day (8 Hours)",
    guests: 2,
    travelDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    pricePerPerson: 95,
    totalPrice: 190,
    currency: "USD",
    vehicle: "Standard Minivan (Toyota HiAce / Coaster)",
    stay: "None (Day Tour)",
    inclusions: [
      "Private air-conditioned vehicle & dedicated driver",
      "Licensed bilingual tour guide",
      "Traditional lunch & coffee ceremony",
      "All museum & Entoto Park entrance fees",
    ],
    customer: {
      fullName: "Jane Doe",
      email: "jane.doe@example.com",
      phone: "+1 (555) 234-5678",
      pickupLocation: "Ethiopian Skylight Hotel, Bole Airport Area (Flight: ET 500)",
      specialNotes: "Vegetarian fasting food (Bayenetu) requested.",
    },
    paymentMethod: "Simulated Visa / Mastercard (•••• 4242)",
    paidAt: new Date().toISOString(),
  };

  const orderId = booking.orderId || "DEL-2026-4892";

  const handleCopyRef = () => {
    navigator.clipboard.writeText(orderId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const createWhatsAppConfirmationLink = () => {
    const text = encodeURIComponent(
      `[Demo Booking Confirmed] Hello Delight Tour! I completed a test booking for "${booking.tourName}" on ${booking.travelDate}.\nBooking Ref: #${orderId}\nLead Traveler: ${booking.customer?.fullName}\nParty: ${booking.guests} Guests\nTotal: $${booking.totalPrice}`
    );
    return `${MOCK_CONTACT.whatsappUrl}?text=${text}`;
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16 text-slate-900 print:bg-white print:py-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Celebration Header */}
        <Fade delay={50}>
          <div className="text-center mb-10 print:mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4 ring-8 ring-emerald-50">
              <FiCheck size={36} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
              Reservation Confirmed &amp; Verified
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Thank You! Your Tour Is Booked
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal">
              A copy of your demonstration booking voucher has been generated. Our team in Addis
              Ababa looks forward to hosting you!
            </p>

            {/* Reference Badge */}
            <div className="mt-5 inline-flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-xs text-slate-500 font-medium">Booking Reference:</span>
              <span className="text-sm font-mono font-extrabold text-slate-900 tracking-wider">
                #{orderId}
              </span>
              <button
                onClick={handleCopyRef}
                className="text-xs font-semibold text-brand-600 hover:text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-200 transition print:hidden"
              >
                {copied ? "Copied! ✓" : "Copy"}
              </button>
            </div>
          </div>
        </Fade>

        {/* Official Voucher Card */}
        <div className="bg-white rounded-3xl border-2 border-slate-200/90 shadow-xl overflow-hidden mb-8 print:border print:shadow-none">
          {/* Voucher Header Banner */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  DELIGHT TOUR
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 border border-brand-400/30">
                  Addis Ababa
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Official Tour Voucher &amp; Travel Confirmation Receipt
              </p>
            </div>

            <div className="text-right">
              <span className="text-xs text-emerald-400 font-bold block">✓ STATUS: PAID / CONFIRMED</span>
              <span className="text-[11px] text-slate-400">
                Issued: {new Date(booking.paidAt || Date.now()).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Tour & Party Details */}
            <div className="border-b border-slate-100 pb-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {booking.tourName}
                </h2>
                <span className="text-xs font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full border border-brand-200">
                  {booking.tag || "Standard Itinerary"}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 text-xs">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2.5">
                  <FiCalendar size={18} className="text-brand-600 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 block font-semibold uppercase">
                      Tour Date
                    </span>
                    <span className="font-bold text-slate-800 text-sm">{booking.travelDate}</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2.5">
                  <FiUsers size={18} className="text-brand-600 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 block font-semibold uppercase">
                      Party Size
                    </span>
                    <span className="font-bold text-slate-800 text-sm">
                      {booking.guests} {booking.guests === 1 ? "Traveler" : "Travelers"}
                    </span>
                  </div>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2.5">
                  <span className="text-base">⏱️</span>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-semibold uppercase">
                      Duration
                    </span>
                    <span className="font-bold text-slate-800 text-sm">{booking.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Traveler & Meeting Point Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-b border-slate-100 pb-6 text-xs">
              <div className="space-y-3">
                <span className="font-bold text-slate-900 uppercase tracking-wider block">
                  Lead Traveler Information
                </span>
                <div className="space-y-2 text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900">Name:</span>
                    <span>{booking.customer?.fullName || "Jane Doe"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMail size={13} className="text-slate-400" />
                    <span>{booking.customer?.email || "jane.doe@example.com"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiPhone size={13} className="text-slate-400" />
                    <span>{booking.customer?.phone || "+1 (555) 234-5678"}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <span className="font-bold text-slate-900 uppercase tracking-wider block">
                  Pickup &amp; Logistics
                </span>
                <div className="space-y-2 text-slate-700">
                  <div className="flex items-start gap-2">
                    <FiMapPin size={14} className="text-brand-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Pickup:</strong>{" "}
                      {booking.customer?.pickupLocation || "Ethiopian Skylight Hotel, Bole Airport"}
                    </span>
                  </div>
                  {booking.vehicle && (
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-900">Vehicle Class:</span>
                      <span>{booking.vehicle}</span>
                    </div>
                  )}
                  {booking.customer?.specialNotes && (
                    <div className="flex items-start gap-2 text-slate-600 italic">
                      <span>Note:</span>
                      <span>"{booking.customer.specialNotes}"</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Inclusions Check List */}
            <div className="border-b border-slate-100 pb-6">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
                Included with this reservation:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {(
                  booking.inclusions || [
                    "Private vehicle and dedicated driver for the day",
                    "Licensed bilingual English & Amharic tour guide",
                    "Traditional Ethiopian lunch & coffee ceremony",
                    "Museum admissions (Lucy / National Museum & Trinity)",
                    "Bottled mountain spring water & refreshments",
                  ]
                ).map((inc, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-700">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Summary */}
            <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-slate-500 block">
                    Payment Method Used:
                  </span>
                  <span className="text-xs font-bold text-slate-800">
                    {booking.paymentMethod || "Simulated Credit Card (•••• 4242)"}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-xs text-slate-500 block">Total Amount Paid</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    ${booking.totalPrice} <span className="text-xs text-slate-500">USD</span>
                  </div>
                  <span className="text-[11px] text-slate-500">
                    ≈ {(booking.totalPrice * 135).toLocaleString()} ETB (All taxes included)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Happens Next Guide */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm mb-8 print:hidden">
          <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <FiShield size={18} className="text-brand-600" />
            <span>What Happens Next?</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600">
            <div className="space-y-1.5">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-50 text-brand-700 font-bold text-xs">
                1
              </span>
              <h4 className="font-bold text-slate-800 text-sm">Driver &amp; Guide Assignment</h4>
              <p className="leading-relaxed">
                24 hours before your tour departure, you will receive driver details and vehicle license
                plate on WhatsApp.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-50 text-brand-700 font-bold text-xs">
                2
              </span>
              <h4 className="font-bold text-slate-800 text-sm">Airport or Hotel Meetup</h4>
              <p className="leading-relaxed">
                Your driver will wait at your designated hotel lobby or arrivals terminal holding a
                personalized Delight Tour welcome placard.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-50 text-brand-700 font-bold text-xs">
                3
              </span>
              <h4 className="font-bold text-slate-800 text-sm">Flexible Support</h4>
              <p className="leading-relaxed">
                Need to adjust pickup time or ask dietary questions? Reach out to our 24/7 concierge
                desk anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 print:hidden">
          <button
            onClick={handlePrint}
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2"
          >
            <FiPrinter size={16} />
            <span>Print Official Voucher / PDF</span>
          </button>

          <a
            href={createWhatsAppConfirmationLink()}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2"
          >
            <FaWhatsapp size={16} />
            <span>Connect on WhatsApp with Ref #{orderId}</span>
          </a>

          <Link
            to="/destinations"
            className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 shadow-sm transition"
          >
            Explore Destinations
          </Link>

          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
