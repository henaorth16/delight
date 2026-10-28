import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Fade } from "../components/Fade";
import {
  FiClock,
  FiMapPin,
  FiCheck,
  FiDollarSign,
  FiUsers,
  FiCalendar,
  FiPrinter,
  FiBookmark,
  FiRefreshCw,
  FiLock,
  FaWhatsapp,
} from "../components/Icons";
import {
  PLANNER_ATTRACTIONS,
  VEHICLE_OPTIONS,
  STAY_OPTIONS,
  MOCK_CONTACT,
  PlannerAttraction,
  saveCheckoutOrder,
} from "../data/mockData";

type Currency = "USD" | "EUR" | "ETB";

const STORAGE_KEY = "delight_custom_trip_plan";

export const TripPlanner: React.FC = () => {
  const navigate = useNavigate();
  // Wizard state
  const [days, setDays] = useState<number>(2);
  const [guests, setGuests] = useState<number>(2);
  const [selectedAttractionIds, setSelectedAttractionIds] = useState<string[]>([
    "lalibela",
    "lucy",
    "entoto",
    "coffee",
  ]);
  const [selectedVehicle, setSelectedVehicle] = useState<string>("standard");
  const [selectedStay, setSelectedStay] = useState<string>("guesthouse");
  const [airportTransfer, setAirportTransfer] = useState<boolean>(true);
  const [multilingualGuide, setMultilingualGuide] = useState<boolean>(false);
  const [currency, setCurrency] = useState<Currency>("USD");
  const [summaryTab, setSummaryTab] = useState<"breakdown" | "schedule">("breakdown");

  const [notification, setNotification] = useState<string | null>(null);

  // Load from local storage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.days) setDays(parsed.days);
        if (parsed.guests) setGuests(parsed.guests);
        if (parsed.selectedAttractionIds) setSelectedAttractionIds(parsed.selectedAttractionIds);
        if (parsed.selectedVehicle) setSelectedVehicle(parsed.selectedVehicle);
        if (parsed.selectedStay) setSelectedStay(parsed.selectedStay);
        if (typeof parsed.airportTransfer === "boolean") setAirportTransfer(parsed.airportTransfer);
        if (typeof parsed.multilingualGuide === "boolean") setMultilingualGuide(parsed.multilingualGuide);
      }
    } catch {
      // Ignore parse errors
    }
  }, []);

  const toggleAttraction = (id: string) => {
    setSelectedAttractionIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleReset = () => {
    setDays(2);
    setGuests(2);
    setSelectedAttractionIds(["lucy", "entoto", "coffee", "unity"]);
    setSelectedVehicle("standard");
    setSelectedStay("guesthouse");
    setAirportTransfer(true);
    setMultilingualGuide(false);
    localStorage.removeItem(STORAGE_KEY);
    setNotification("Preferences reset to default 2-day experience.");
    setTimeout(() => setNotification(null), 3500);
  };

  const handleSaveToBrowser = () => {
    const payload = {
      days,
      guests,
      selectedAttractionIds,
      selectedVehicle,
      selectedStay,
      airportTransfer,
      multilingualGuide,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    setNotification("✓ Custom trip itinerary successfully saved to your browser!");
    setTimeout(() => setNotification(null), 4000);
  };

  // Pricing calculations
  const baseGuideRatePerDay = 35; // $35/day base local expert fee
  const vehicleObj = VEHICLE_OPTIONS.find((v) => v.id === selectedVehicle) || VEHICLE_OPTIONS[0];
  const stayObj = STAY_OPTIONS.find((s) => s.id === selectedStay) || STAY_OPTIONS[0];

  const guideTotal = baseGuideRatePerDay * days;
  const vehicleTotal = vehicleObj.pricePerDay * days;

  const attractionsCostPerPerson = selectedAttractionIds.reduce((sum, id) => {
    const att = PLANNER_ATTRACTIONS.find((a) => a.id === id);
    return sum + (att ? att.costPerPerson : 0);
  }, 0);
  const attractionsTotal = attractionsCostPerPerson * guests;

  const nights = selectedStay === "none" ? 0 : Math.max(1, days - 1);
  const stayTotal = stayObj.pricePerNight * nights;

  const airportTransferTotal = airportTransfer ? 25 : 0;
  const multilingualGuideTotal = multilingualGuide ? 20 * days : 0;

  const grandTotalUSD =
    guideTotal +
    vehicleTotal +
    attractionsTotal +
    stayTotal +
    airportTransferTotal +
    multilingualGuideTotal;

  const perPersonUSD = Math.round(grandTotalUSD / Math.max(1, guests));

  // Currency Formatter
  const formatMoney = (amountUSD: number): string => {
    if (currency === "EUR") {
      return `€${Math.round(amountUSD * 0.92).toLocaleString()}`;
    }
    if (currency === "ETB") {
      return `${Math.round(amountUSD * 125).toLocaleString()} ETB`;
    }
    return `$${amountUSD.toLocaleString()} USD`;
  };

  // Generate dynamic daily schedule
  const selectedAttractionsList = PLANNER_ATTRACTIONS.filter((a) =>
    selectedAttractionIds.includes(a.id)
  );

  // Distribute selected attractions across days
  const dailyPlans: { dayNumber: number; morning: PlannerAttraction[]; afternoon: PlannerAttraction[]; evening: PlannerAttraction[] }[] = [];
  for (let d = 1; d <= days; d++) {
    dailyPlans.push({ dayNumber: d, morning: [], afternoon: [], evening: [] });
  }

  selectedAttractionsList.forEach((attraction, idx) => {
    const targetDayIndex = idx % days;
    const day = dailyPlans[targetDayIndex];
    if (attraction.id === "dinner") {
      day.evening.push(attraction);
    } else if (day.morning.length === 0) {
      day.morning.push(attraction);
    } else {
      day.afternoon.push(attraction);
    }
  });

  // Construct WhatsApp inquiry link
  const createWhatsAppLink = () => {
    const summary = [
      `[Custom Trip Plan Inquiry - Delight Demo]`,
      `• Duration: ${days} Day(s)`,
      `• Party Size: ${guests} Guest(s)`,
      `• Vehicle: ${vehicleObj.name}`,
      `• Accommodation: ${stayObj.name} (${nights} nights)`,
      `• Included Sights: ${selectedAttractionsList.map((a) => a.name).join(", ") || "General City Highlights"}`,
      airportTransfer ? `• Airport Transfer: Yes (Bole Airport)` : ``,
      multilingualGuide ? `• Multilingual Guide: Yes` : ``,
      `• Estimated Total: ${formatMoney(grandTotalUSD)} (~${formatMoney(perPersonUSD)} / person)`,
      `Ref: #DEL-PLAN-${Math.floor(1000 + Math.random() * 9000)}`,
    ]
      .filter(Boolean)
      .join("\n");

    return `${MOCK_CONTACT.whatsappUrl}?text=${encodeURIComponent(summary)}`;
  };

  const handlePrint = () => {
    window.print();
  };

  const handleProceedCheckout = () => {
    const attractionNames = selectedAttractionsList.map((a) => a.name);
    saveCheckoutOrder({
      tourId: `custom-plan-${days}d`,
      tourName: `Custom ${days}-Day Addis & Regional Experience`,
      tag: `Tailor-Made (${days} Days)`,
      duration: `${days} Days (${nights} Nights)`,
      guests,
      pricePerPerson: perPersonUSD,
      totalPrice: grandTotalUSD,
      currency: "USD",
      vehicle: vehicleObj.name,
      stay: stayObj.name,
      inclusions: [
        `Private transport: ${vehicleObj.name}`,
        `Accommodation: ${stayObj.name} (${nights} nights)`,
        `${selectedAttractionsList.length} Selected attractions (${attractionNames.slice(0, 3).join(", ")}${attractionNames.length > 3 ? "..." : ""})`,
        airportTransfer ? "Round-trip Bole Airport transfers" : "Standard city dropoff",
        multilingualGuide ? "Dedicated multilingual guide specialist" : "Professional English-speaking guide",
      ],
    });
    navigate({ to: "/checkout" });
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16 text-slate-900 print:bg-white print:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Demo Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/80 mb-8 print:hidden">
          <nav className="flex items-center text-xs text-slate-500 gap-2">
            <Link to="/" className="hover:text-brand-600 transition">
              Home
            </Link>
            <span>/</span>
            <Link to="/tours" className="hover:text-brand-600 transition">
              Tours
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Custom Itinerary Builder</span>
          </nav>

          {/* Currency Switcher */}
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
            <span className="text-xs text-slate-500 font-medium">Currency:</span>
            {(["USD", "EUR", "ETB"] as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`text-xs font-bold px-2.5 py-1 rounded-full transition ${
                  currency === c
                    ? "bg-brand-600 text-white"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {c === "ETB" ? "ETB (ብር)" : c}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Header */}
        <Fade delay={50}>
          <div className="max-w-3xl mb-10 print:mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100 print:hidden">
              Interactive Trip Builder
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Design Your Personalized Addis Ababa Experience
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Select your duration, favorite cultural sights, transportation tier, and guest house stays.
              The live calculator instantly computes transparent itemized costs and outputs a day-by-day itinerary.
            </p>
          </div>
        </Fade>

        {/* Feedback alert */}
        {notification && (
          <div className="mb-8 p-4 bg-emerald-50 border border-emerald-300 rounded-2xl flex items-center justify-between text-xs sm:text-sm text-emerald-900 font-semibold shadow-sm animate-fade-in print:hidden">
            <span>{notification}</span>
            <button onClick={() => setNotification(null)} className="ml-3 text-emerald-700 font-bold">
              ✕
            </button>
          </div>
        )}

        {/* Main 2-Column Grid */}
        <div className="grid relative grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 space-y-8 print:hidden">
            {/* Step 1: Duration & Group Size */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm">
                  1
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Duration &amp; Group Size</h3>
                  <p className="text-xs text-slate-500 font-normal">
                    Choose how many days you want to explore and your party count.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Tour Duration: <span className="text-brand-600 font-extrabold">{days} Full Day{days > 1 ? "s" : ""}</span>
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDays(d)}
                        className={`py-2.5 rounded-xl text-xs sm:text-sm font-bold transition border ${
                          days === d
                            ? "bg-brand-600 text-white border-brand-600 shadow-sm"
                            : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                        }`}
                      >
                        {d} {d === 1 ? "Day" : "Days"}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Travelers: <span className="text-brand-600 font-extrabold">{guests} {guests === 1 ? "Guest" : "Guests"}</span>
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 4, 6].map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setGuests(g)}
                        className={`py-2.5 rounded-xl text-xs sm:text-sm font-bold transition border ${
                          guests === g
                            ? "bg-brand-600 text-white border-brand-600 shadow-sm"
                            : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                        }`}
                      >
                        {g} {g === 1 ? "Solo" : g === 2 ? "Couple" : "Group"}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Select Sights & Attractions */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm">
                    2
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Pick Your Sights &amp; Experiences
                    </h3>
                    <p className="text-xs text-slate-500 font-normal">
                      Click to toggle destinations. Your custom schedule automatically balances morning &amp; afternoon slots.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-brand-50 text-brand-700 rounded-full border border-brand-100">
                  {selectedAttractionIds.length} Selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {PLANNER_ATTRACTIONS.map((att) => {
                  const isSelected = selectedAttractionIds.includes(att.id);
                  return (
                    <div
                      key={att.id}
                      onClick={() => toggleAttraction(att.id)}
                      className={`cursor-pointer p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                        isSelected
                          ? "bg-brand-50/70 border-brand-500 shadow-sm ring-1 ring-brand-500"
                          : "bg-slate-50/60 border-slate-200 hover:bg-slate-100/80"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 text-xs font-bold transition ${
                            isSelected
                              ? "bg-brand-600 text-white"
                              : "border border-slate-300 bg-white"
                          }`}
                        >
                          {isSelected && "✓"}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-1">
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                              {att.name}
                            </h4>
                          </div>
                          <span className="text-[11px] text-amber-700 font-medium block">
                            {att.amharic}
                          </span>
                          <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 font-normal">
                            {att.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                        <span className="flex items-center gap-1">
                          <FiClock size={12} className="text-brand-600" />
                          <span>~{att.durationHours}h</span>
                        </span>
                        <span className="font-bold text-slate-800">
                          +{formatMoney(att.costPerPerson)} / person
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Vehicle & Transportation Class */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm">
                  3
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Vehicle &amp; Chauffeur Mobility
                  </h3>
                  <p className="text-xs text-slate-500 font-normal">
                    Includes dedicated licensed driver, fuel, insurance, and parking passes throughout.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {VEHICLE_OPTIONS.map((v) => {
                  const isSelected = selectedVehicle === v.id;
                  return (
                    <div
                      key={v.id}
                      onClick={() => setSelectedVehicle(v.id)}
                      className={`cursor-pointer p-4 rounded-2xl border transition flex items-center justify-between gap-4 ${
                        isSelected
                          ? "bg-brand-50/70 border-brand-500 ring-1 ring-brand-500 shadow-sm"
                          : "bg-slate-50/60 border-slate-200 hover:bg-slate-100/80"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected ? "border-brand-600 bg-brand-600" : "border-slate-300 bg-white"
                          }`}
                        >
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{v.name}</h4>
                          <span className="text-xs text-slate-500 font-normal">{v.description}</span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-sm font-extrabold text-slate-900 block">
                          {formatMoney(v.pricePerDay * days)}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          ({formatMoney(v.pricePerDay)}/day)
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Accommodation & Concierge Add-ons */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm">
                  4
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Accommodation &amp; VIP Add-ons
                  </h3>
                  <p className="text-xs text-slate-500 font-normal">
                    Optional curated boutique lodging and airport convenience.
                  </p>
                </div>
              </div>

              {/* Stays */}
              <div className="space-y-3 mb-6">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Hotel / Guest House Choice ({nights} Night{nights > 1 ? "s" : ""}):
                </label>
                {STAY_OPTIONS.map((s) => {
                  const isSelected = selectedStay === s.id;
                  const totalStayCost = s.pricePerNight * nights;
                  return (
                    <div
                      key={s.id}
                      onClick={() => setSelectedStay(s.id)}
                      className={`cursor-pointer p-4 rounded-2xl border transition flex items-center justify-between gap-4 ${
                        isSelected
                          ? "bg-brand-50/70 border-brand-500 ring-1 ring-brand-500 shadow-sm"
                          : "bg-slate-50/60 border-slate-200 hover:bg-slate-100/80"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected ? "border-brand-600 bg-brand-600" : "border-slate-300 bg-white"
                          }`}
                        >
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{s.name}</h4>
                          <span className="text-xs text-slate-500 font-normal">{s.description}</span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-sm font-extrabold text-slate-900 block">
                          {formatMoney(totalStayCost)}
                        </span>
                        {s.pricePerNight > 0 && (
                          <span className="text-[10px] text-slate-400 font-medium">
                            ({formatMoney(s.pricePerNight)}/night)
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Extra toggles */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Extra Convenience Options:
                </label>

                <div
                  onClick={() => setAirportTransfer(!airportTransfer)}
                  className={`cursor-pointer p-3.5 rounded-2xl border transition flex items-center justify-between ${
                    airportTransfer
                      ? "bg-brand-50/70 border-brand-500"
                      : "bg-slate-50/60 border-slate-200 hover:bg-slate-100/80"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={airportTransfer}
                      onChange={() => {}}
                      className="w-4 h-4 text-brand-600 rounded cursor-pointer"
                    />
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                        Bole Airport VIP Meet &amp; Greet + Roundtrip Transfer
                      </span>
                      <span className="text-[11px] text-slate-500 font-normal">
                        Personal name signboard, flight delay tracking, and luggage assistance.
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-800 shrink-0">
                    +{formatMoney(25)} flat
                  </span>
                </div>

                <div
                  onClick={() => setMultilingualGuide(!multilingualGuide)}
                  className={`cursor-pointer p-3.5 rounded-2xl border transition flex items-center justify-between ${
                    multilingualGuide
                      ? "bg-brand-50/70 border-brand-500"
                      : "bg-slate-50/60 border-slate-200 hover:bg-slate-100/80"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={multilingualGuide}
                      onChange={() => {}}
                      className="w-4 h-4 text-brand-600 rounded cursor-pointer"
                    />
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                        Multilingual Guide (Arabic / French / German)
                      </span>
                      <span className="text-[11px] text-slate-500 font-normal">
                        Guaranteed fluent conversational docent for international delegations.
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-800 shrink-0">
                    +{formatMoney(20 * days)} ({formatMoney(20)}/day)
                  </span>
                </div>
              </div>
            </div>

            {/* Step 5: Generated Day-by-Day Schedule (Full Width in Left Column) */}
            <div id="schedule" className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm">
                    5
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Your Generated Day-by-Day Schedule
                    </h3>
                    <p className="text-xs text-slate-500 font-normal">
                      Dynamically balanced roadmap based on your chosen attractions and duration.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                  {days} Full Days • {selectedAttractionIds.length} Sights
                </span>
              </div>

              <div className="space-y-6">
                {dailyPlans.map((day) => (
                  <div
                    key={day.dayNumber}
                    className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-4"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                      <span className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-brand-600 text-white flex items-center justify-center text-xs font-bold">
                          {day.dayNumber}
                        </span>
                        <span>Day {day.dayNumber} Custom Itinerary</span>
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        Vehicle: {vehicleObj.name.split("/")[0]}
                      </span>
                    </div>

                    {/* Morning */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                        <span>🌅 Morning (09:00 – 12:30):</span>
                      </div>
                      {day.morning.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 ml-1">
                          {day.morning.map((m) => (
                            <div
                              key={m.id}
                              className="p-3 rounded-xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs"
                            >
                              <img
                                src={m.image}
                                alt={m.name}
                                className="w-12 h-12 rounded-lg object-cover shrink-0"
                              />
                              <div className="flex-1 min-w-0">
                                <h5 className="text-xs font-bold text-slate-900 truncate">
                                  {m.name}
                                </h5>
                                <span className="text-[10px] text-amber-700 font-medium block truncate">
                                  {m.amharic}
                                </span>
                                <span className="text-[10px] text-slate-400">
                                  Duration: ~{m.durationHours} hrs
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-xs text-slate-500 italic ml-2">
                          Complimentary hotel pickup, morning tea, and historic Piazza orientation drive.
                        </div>
                      )}
                    </div>

                    {/* Cultural Lunch */}
                    <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-900 flex items-center gap-2.5">
                      <span className="text-base">🍽️</span>
                      <div>
                        <span className="font-bold">12:30 – 14:00 Cultural Lunch:</span>{" "}
                        <span>Authentic injera with fasting stews or Doro Wat &amp; fresh highland water.</span>
                      </div>
                    </div>

                    {/* Afternoon */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                        <span>☀️ Afternoon (14:00 – 17:30):</span>
                      </div>
                      {day.afternoon.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 ml-1">
                          {day.afternoon.map((a) => (
                            <div
                              key={a.id}
                              className="p-3 rounded-xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs"
                            >
                              <img
                                src={a.image}
                                alt={a.name}
                                className="w-12 h-12 rounded-lg object-cover shrink-0"
                              />
                              <div className="flex-1 min-w-0">
                                <h5 className="text-xs font-bold text-slate-900 truncate">
                                  {a.name}
                                </h5>
                                <span className="text-[10px] text-amber-700 font-medium block truncate">
                                  {a.amharic}
                                </span>
                                <span className="text-[10px] text-slate-400">
                                  Duration: ~{a.durationHours} hrs
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-xs text-slate-500 italic ml-2">
                          Scenic coffee pause, artisanal souvenir shopping, and sunset panoramic views.
                        </div>
                      )}
                    </div>

                    {/* Evening */}
                    {day.evening.length > 0 ? (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                          <span>🌙 Evening (18:30 – 21:00):</span>
                        </div>
                        <div className="grid grid-cols-1 gap-2.5 ml-1">
                          {day.evening.map((e) => (
                            <div
                              key={e.id}
                              className="p-3 rounded-xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs"
                            >
                              <img
                                src={e.image}
                                alt={e.name}
                                className="w-12 h-12 rounded-lg object-cover shrink-0"
                              />
                              <div>
                                <h5 className="text-xs font-bold text-slate-900">{e.name}</h5>
                                <span className="text-[10px] text-amber-700 font-medium block">
                                  {e.amharic}
                                </span>
                                <span className="text-[10px] text-slate-500">
                                  Authentic honey wine (Tej) &amp; live Eskista shoulder dancing performance
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-xs text-slate-500 ml-1 flex items-center gap-2 pt-1 border-t border-slate-200/60">
                        <span>🌙</span>
                        <span>
                          Comfortable drop-off at {stayObj.name} or Bole Airport.
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Pure Sticky Price & Summary Card (stays sticky to bottom of left column) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start space-y-4 print:static">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xl print:border-none print:shadow-none print:p-0">
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                  Live Cost Estimate
                </span>
                <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                  {days} Day(s) • {guests} Traveler(s)
                </span>
              </div>

              {/* Price Tag */}
              <div className="my-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {formatMoney(grandTotalUSD)}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    Total for {guests} {guests === 1 ? "person" : "people"}
                  </span>
                </div>
                <div className="mt-1 text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
                  <span>~{formatMoney(perPersonUSD)} / person</span>
                  <span className="text-slate-400">• Includes vehicle, fuel &amp; entry tickets</span>
                </div>
              </div>

              {/* View Switcher: Itemized Line Items vs Quick Schedule */}
              <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl mb-4 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setSummaryTab("breakdown")}
                  className={`py-1.5 rounded-lg transition ${
                    summaryTab === "breakdown"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  🧾 Itemized Cost
                </button>
                <button
                  type="button"
                  onClick={() => setSummaryTab("schedule")}
                  className={`py-1.5 rounded-lg transition ${
                    summaryTab === "schedule"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  📅 Day Preview
                </button>
              </div>

              {/* Content Panel: Breakdown */}
              {summaryTab === "breakdown" ? (
                <div className="space-y-2 py-3 border-t border-b border-slate-100 text-xs text-slate-600 max-h-60 overflow-y-auto pr-1">
                  <div className="flex justify-between">
                    <span>Licensed Guide ({days} days)</span>
                    <span className="font-semibold text-slate-900">{formatMoney(guideTotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Private Vehicle ({vehicleObj.name.split("/")[0]})</span>
                    <span className="font-semibold text-slate-900">{formatMoney(vehicleTotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Site Admissions ({selectedAttractionIds.length} sights × {guests})</span>
                    <span className="font-semibold text-slate-900">{formatMoney(attractionsTotal)}</span>
                  </div>
                  {stayTotal > 0 && (
                    <div className="flex justify-between">
                      <span>Accommodations ({nights} nights)</span>
                      <span className="font-semibold text-slate-900">{formatMoney(stayTotal)}</span>
                    </div>
                  )}
                  {airportTransfer && (
                    <div className="flex justify-between">
                      <span>VIP Bole Airport Transfers</span>
                      <span className="font-semibold text-slate-900">{formatMoney(airportTransferTotal)}</span>
                    </div>
                  )}
                  {multilingualGuide && (
                    <div className="flex justify-between">
                      <span>Multilingual Specialist ({days} days)</span>
                      <span className="font-semibold text-slate-900">{formatMoney(multilingualGuideTotal)}</span>
                    </div>
                  )}
                </div>
              ) : (
                /* Content Panel: Quick Schedule Preview */
                <div className="space-y-3 py-3 border-t border-b border-slate-100 text-xs max-h-60 overflow-y-auto pr-1">
                  {dailyPlans.map((d) => (
                    <div key={d.dayNumber} className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">
                        Day {d.dayNumber}: {d.morning.length + d.afternoon.length + d.evening.length} Activities
                      </span>
                      <ul className="text-[11px] text-slate-600 space-y-0.5 list-disc list-inside">
                        {d.morning.map((m) => (
                          <li key={m.id} className="truncate">{m.name}</li>
                        ))}
                        {d.afternoon.map((a) => (
                          <li key={a.id} className="truncate">{a.name}</li>
                        ))}
                        {d.evening.map((e) => (
                          <li key={e.id} className="truncate">{e.name}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <a
                    href="#schedule"
                    className="block text-center text-xs font-bold text-brand-600 hover:underline pt-1"
                  >
                    View Full Photo Roadmap Below ↓
                  </a>
                </div>
              )}

              {/* CTAs */}
              <div className="pt-5 space-y-2.5 print:hidden">
                <button
                  onClick={handleProceedCheckout}
                  className="w-full py-3.5 px-4 bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-brand-600/25 hover:shadow-xl transition flex items-center justify-center gap-2"
                >
                  <FiLock size={16} />
                  <span>Proceed to Checkout ({formatMoney(grandTotalUSD)})</span>
                </button>

                <a
                  href={createWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition flex items-center justify-center gap-2"
                >
                  <FaWhatsapp size={15} />
                  <span>Send Itinerary via WhatsApp</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleSaveToBrowser}
                    className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition flex items-center justify-center gap-1.5"
                  >
                    <FiBookmark size={14} className="text-brand-600" />
                    <span>Save Plan</span>
                  </button>

                  <button
                    onClick={handlePrint}
                    className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition flex items-center justify-center gap-1.5"
                  >
                    <FiPrinter size={14} className="text-brand-600" />
                    <span>Print / PDF</span>
                  </button>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
                  <button
                    onClick={handleReset}
                    className="hover:text-slate-600 transition flex items-center gap-1"
                  >
                    <FiRefreshCw size={11} />
                    <span>Reset choices</span>
                  </button>
                  <a href="#schedule" className="hover:text-brand-600 transition font-medium">
                    Full Timeline ↓
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;
