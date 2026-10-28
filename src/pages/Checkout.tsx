import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Fade } from "../components/Fade";
import {
  FiCheck,
  FiLock,
  FiCreditCard,
  FiSmartphone,
  FiDollarSign,
  FiCalendar,
  FiUsers,
  FiMapPin,
  FiShield,
  FiArrowLeft,
  FiAlertCircle,
} from "../components/Icons";
import {
  BookingOrder,
  getCheckoutOrder,
  saveConfirmedBooking,
} from "../data/mockData";

export const Checkout: React.FC = () => {
  const navigate = useNavigate();

  // Load order from sessionStorage or create realistic prototype fallback
  const [order, setOrder] = useState<BookingOrder>(() => {
    const existing = getCheckoutOrder();
    if (existing && existing.totalPrice > 0) {
      return existing;
    }
    // Fallback default prototype booking
    return {
      tourId: "gold",
      tourName: "Gold Package — Cultural Immersion & Entoto Panorama",
      tag: "Best Seller • 1-Day",
      duration: "1 Day (8 Hours)",
      guests: 2,
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
    };
  });

  // Traveler form state
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];
  const [travelDate, setTravelDate] = useState<string>(order.travelDate || tomorrow);
  const [fullName, setFullName] = useState<string>("Jane Doe");
  const [email, setEmail] = useState<string>("jane.doe@example.com");
  const [phone, setPhone] = useState<string>("+1 (555) 234-5678");
  const [pickupLocation, setPickupLocation] = useState<string>(
    "Ethiopian Skylight Hotel, Bole Airport Area"
  );
  const [flightNumber, setFlightNumber] = useState<string>("ET 500 (Arriving 07:15 AM)");
  const [specialNotes, setSpecialNotes] = useState<string>(
    "Interested in Ethiopian Orthodox church art and traditional fasting food (Bayenetu)."
  );

  // Payment method state
  const [paymentMethod, setPaymentMethod] = useState<"card" | "telebirr" | "arrival">("card");
  const [cardNumber, setCardNumber] = useState<string>("4242 •••• •••• 4242");
  const [cardExpiry, setCardExpiry] = useState<string>("12/28");
  const [cardCvc, setCardCvc] = useState<string>("321");
  const [telebirrPhone, setTelebirrPhone] = useState<string>("0911 234 567");

  // Submission state
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Synchronize guests quantity and total
  const handleGuestsChange = (newCount: number) => {
    if (newCount < 1) return;
    const basePerPerson = order.pricePerPerson || 70;
    setOrder((prev) => ({
      ...prev,
      guests: newCount,
      totalPrice: basePerPerson * newCount,
    }));
  };

  const handleAutofillCard = () => {
    setCardNumber("4242 4242 4242 4242");
    setCardExpiry("08/29");
    setCardCvc("888");
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (!fullName.trim()) {
      setValidationError("Please enter the primary traveler's full name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setValidationError("Please enter a valid email address for your confirmation voucher.");
      return;
    }
    if (!pickupLocation.trim()) {
      setValidationError("Please specify your hotel or terminal pickup location.");
      return;
    }

    setIsProcessing(true);

    const confirmationRef = `DEL-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    const confirmedRecord: BookingOrder = {
      ...order,
      orderId: confirmationRef,
      travelDate,
      customer: {
        fullName,
        email,
        phone,
        pickupLocation: `${pickupLocation}${flightNumber ? ` (Flight: ${flightNumber})` : ""}`,
        specialNotes,
      },
      paymentMethod:
        paymentMethod === "card"
          ? "Simulated Visa / Mastercard (•••• 4242)"
          : paymentMethod === "telebirr"
          ? `Telebirr Mobile Payment (${telebirrPhone})`
          : "Pay on Arrival with Driver (Cash/Card Guarantee)",
      paidAt: new Date().toISOString(),
    };

    // Simulate network authentication & voucher generation (800ms)
    setTimeout(() => {
      saveConfirmedBooking(confirmedRecord);
      setIsProcessing(false);
      navigate({ to: "/confirmation" });
    }, 850);
  };

  return (
    <div className="bg-slate-50/70 min-h-screen py-10 lg:py-16 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-brand-600 transition"
          >
            <FiArrowLeft size={16} />
            <span>Back to All Tours</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <FiLock size={12} className="text-emerald-600" />
            <span>Secure 256-Bit SSL Demo Checkout</span>
          </div>
        </div>

        {/* Header */}
        <Fade delay={50}>
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
              Complete Your Tour Reservation
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Review Itinerary &amp; Confirm Booking
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 font-normal">
              You are booking directly with Delight Tour Addis Ababa. Provide your travel details
              below and complete this prototype checkout to receive an instant verified voucher.
            </p>
          </div>
        </Fade>

        {/* Prototype Alert Banner */}
        <div className="mb-8 p-4 bg-brand-50/80 rounded-2xl border border-brand-200/80 flex items-start gap-3 shadow-sm">
          <FiAlertCircle size={20} className="text-brand-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-brand-900 leading-relaxed">
            <span className="font-bold">Client Demonstration Environment: </span>
            This page demonstrates how international clients select, personalize, and purchase tour
            packages with Delight Tour. No live banking funds will be deducted. All test cards and
            phone wallets process instantaneously.
          </div>
        </div>

        <form onSubmit={handleConfirmReservation}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left 7 Columns: Traveler Details & Payment Selection */}
            <div className="lg:col-span-7 space-y-8">
              {/* Step 1: Traveler Details */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-600 text-white font-bold text-sm">
                    1
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Lead Traveler Information</h2>
                    <p className="text-xs text-slate-500">
                      The official tour voucher will be issued under this person's name.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address (for Voucher) *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. jane@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      WhatsApp / Mobile Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +1 555 123 4567"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Tour Departure Date *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50/50"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Hotel Pickup or Terminal Meeting Point *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        placeholder="e.g. Ethiopian Skylight Hotel, Hyatt Regency, or Bole Terminal 2"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50/50"
                      />
                    </div>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      Our driver will meet you at the lobby or outside arrivals with your name board.
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Flight Arrival Number / Estimated Time (Optional)
                    </label>
                    <input
                      type="text"
                      value={flightNumber}
                      onChange={(e) => setFlightNumber(e.target.value)}
                      placeholder="e.g. ET 500 landing at 07:15 AM"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Dietary Preferences or Special Requests
                    </label>
                    <textarea
                      rows={2}
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      placeholder="e.g. Vegetarian/Vegan fasting food, mobility assistance, coffee roasting interest..."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50/50"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Payment Method */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-600 text-white font-bold text-sm">
                    2
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Select Payment Method</h2>
                    <p className="text-xs text-slate-500">
                      Choose your preferred demonstration checkout method.
                    </p>
                  </div>
                </div>

                {/* Method Tabs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`p-4 rounded-2xl border text-left transition flex flex-col justify-between ${
                      paymentMethod === "card"
                        ? "border-brand-500 bg-brand-50/40 ring-2 ring-brand-500/20"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <FiCreditCard
                        size={22}
                        className={paymentMethod === "card" ? "text-brand-600" : "text-slate-500"}
                      />
                      {paymentMethod === "card" && (
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-600" />
                      )}
                    </div>
                    <div>
                      <span className="font-bold text-xs sm:text-sm block text-slate-900">
                        Credit / Debit Card
                      </span>
                      <span className="text-[11px] text-slate-500">Visa, Mastercard, Amex</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("telebirr")}
                    className={`p-4 rounded-2xl border text-left transition flex flex-col justify-between ${
                      paymentMethod === "telebirr"
                        ? "border-brand-500 bg-brand-50/40 ring-2 ring-brand-500/20"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <FiSmartphone
                        size={22}
                        className={paymentMethod === "telebirr" ? "text-brand-600" : "text-slate-500"}
                      />
                      {paymentMethod === "telebirr" && (
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-600" />
                      )}
                    </div>
                    <div>
                      <span className="font-bold text-xs sm:text-sm block text-slate-900">
                        Telebirr Wallet
                      </span>
                      <span className="text-[11px] text-slate-500">Instant Local Pay (ETB)</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("arrival")}
                    className={`p-4 rounded-2xl border text-left transition flex flex-col justify-between ${
                      paymentMethod === "arrival"
                        ? "border-brand-500 bg-brand-50/40 ring-2 ring-brand-500/20"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <FiDollarSign
                        size={22}
                        className={paymentMethod === "arrival" ? "text-brand-600" : "text-slate-500"}
                      />
                      {paymentMethod === "arrival" && (
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-600" />
                      )}
                    </div>
                    <div>
                      <span className="font-bold text-xs sm:text-sm block text-slate-900">
                        Pay on Meetup
                      </span>
                      <span className="text-[11px] text-slate-500">Cash / POS with Driver</span>
                    </div>
                  </button>
                </div>

                {/* Selected Method Details */}
                {paymentMethod === "card" && (
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700">Test Card Input</span>
                      <button
                        type="button"
                        onClick={handleAutofillCard}
                        className="text-xs font-semibold text-brand-600 hover:text-brand-700 hover:underline bg-brand-50 px-2.5 py-1 rounded-lg border border-brand-200"
                      >
                        ⚡ Autofill Demo Card
                      </button>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-mono text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                        />
                        <div className="absolute right-3 top-2.5 flex items-center gap-1.5 text-xs text-slate-400 font-bold">
                          <span>VISA</span>
                          <span>MC</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Expiration (MM/YY)
                        </label>
                        <input
                          type="text"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          placeholder="MM/YY"
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm font-mono text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Security CVC
                        </label>
                        <input
                          type="text"
                          value={cardCvc}
                          onChange={(e) => setCardCvc(e.target.value)}
                          placeholder="CVC"
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm font-mono text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                        />
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-1">
                      <FiShield size={14} className="text-emerald-600" />
                      <span>Encrypted SSL prototype sandbox. Test numbers accepted safely.</span>
                    </p>
                  </div>
                )}

                {paymentMethod === "telebirr" && (
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700">Telebirr Mobile Account</span>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Exchange: ~135 ETB / $1 USD
                      </span>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Registered Mobile Number
                      </label>
                      <input
                        type="text"
                        value={telebirrPhone}
                        onChange={(e) => setTelebirrPhone(e.target.value)}
                        placeholder="09xx xxx xxx"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed flex items-center gap-3">
                      <div className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold text-[10px] shrink-0 text-center leading-tight">
                        QR
                        <br />
                        CODE
                      </div>
                      <div>
                        Upon confirmation, a simulated USSD push authorization notification will be sent
                        to your device for <strong>{(order.totalPrice * 135).toLocaleString()} ETB</strong>.
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "arrival" && (
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                    <span className="text-xs font-bold text-slate-700 block">
                      Pay on Arrival Guarantee
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      You may pay in full directly to your Delight Tour guide upon pickup at Bole
                      Airport or your hotel lobby. We accept USD, EUR, GBP, Ethiopian Birr (ETB), or
                      local POS cards.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                      <FiCheck size={16} />
                      <span>Zero cancellation fees up to 24 hours prior to scheduled departure.</span>
                    </div>
                  </div>
                )}

                {validationError && (
                  <div className="mt-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
                    <FiAlertCircle size={16} />
                    <span>{validationError}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right 5 Columns: Itemized Order Summary Card */}
            <div className="lg:col-span-5 sticky top-24 space-y-6">
              <div className="bg-white p-6 sm:p-7 rounded-3xl border-2 border-slate-200/90 shadow-lg">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Order Summary
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-brand-50 text-brand-700 border border-brand-200">
                    {order.tag || "Delight Tour"}
                  </span>
                </div>

                {/* Tour Title & Duration */}
                <div className="py-4 border-b border-slate-100">
                  <h3 className="text-base font-bold text-slate-900 leading-snug">{order.tourName}</h3>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mt-2">
                    <span className="flex items-center gap-1 font-medium">
                      <FiCalendar size={13} className="text-brand-600" />
                      {travelDate}
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      ⏱️ {order.duration}
                    </span>
                  </div>
                </div>

                {/* Guests Stepper */}
                <div className="py-4 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FiUsers size={16} className="text-brand-600" />
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">Number of Guests</span>
                      <span className="text-[11px] text-slate-400">
                        ${order.pricePerPerson} per person
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-slate-50 px-2.5 py-1 rounded-xl border border-slate-200">
                    <button
                      type="button"
                      onClick={() => handleGuestsChange(order.guests - 1)}
                      className="w-6 h-6 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-100 flex items-center justify-center text-xs"
                    >
                      -
                    </button>
                    <span className="text-xs font-extrabold text-slate-900 w-4 text-center">
                      {order.guests}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleGuestsChange(order.guests + 1)}
                      className="w-6 h-6 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-100 flex items-center justify-center text-xs"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Inclusions summary */}
                <div className="py-4 border-b border-slate-100 text-xs space-y-2">
                  <span className="font-bold text-slate-700 block">Package Inclusions:</span>
                  {(
                    order.inclusions || [
                      "Professional licensed English-speaking guide",
                      "Private ground transport & hotel pickup",
                      "All museum & national park entries",
                      "Authentic Ethiopian lunch & coffee ceremony",
                    ]
                  ).map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-600">
                      <FiCheck size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{inc}</span>
                    </div>
                  ))}
                  {order.vehicle && (
                    <div className="flex items-start gap-2 text-slate-600">
                      <FiCheck size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>Vehicle: {order.vehicle}</span>
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="py-4 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>
                      Tour Base (${order.pricePerPerson} × {order.guests} Guests)
                    </span>
                    <span className="font-medium text-slate-900">${order.totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Bole Airport Pickup / Hotel Transit</span>
                    <span className="font-bold text-emerald-600">INCLUDED</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Local Tourism &amp; Heritage Permits</span>
                    <span className="font-bold text-emerald-600">INCLUDED</span>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex justify-between items-baseline">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Total Due</span>
                      <span className="text-[10px] text-slate-400">All taxes &amp; fees included</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                        ${order.totalPrice}
                        <span className="text-xs text-slate-500 font-normal"> USD</span>
                      </div>
                      <span className="text-[11px] text-slate-500">
                        ≈ {(order.totalPrice * 135).toLocaleString()} ETB
                      </span>
                    </div>
                  </div>
                </div>

                {/* Confirmation Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full mt-4 py-4 px-6 bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-brand-600/25 hover:shadow-xl transition flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Confirming Reservation...</span>
                    </>
                  ) : (
                    <>
                      <FiLock size={16} />
                      <span>Pay &amp; Confirm Reservation (${order.totalPrice})</span>
                    </>
                  )}
                </button>

                <div className="mt-4 text-center">
                  <span className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                    <FiShield size={13} className="text-slate-400" />
                    <span>Instant voucher generation • Prototype demonstration</span>
                  </span>
                </div>
              </div>

              {/* Customer service assurance */}
              <div className="bg-slate-100/80 p-4 rounded-2xl border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
                <FiMapPin size={18} className="text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800 block">Need custom assistance?</span>
                  <span>
                    Our local concierge is available 24/7 to adjust pickup timing or vehicle choices.
                    Call us or chat directly via WhatsApp.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
