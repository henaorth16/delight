import React, { Suspense } from "react";
import Hero from "../components/Hero";
import Offerings from "../components/Offerings";
import Packages from "../components/Packages";
import PlannerBanner from "../components/PlannerBanner";
import Highlights from "../components/Highlights";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Loader from "../components/Loader";

export const Home: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="flex flex-col w-full">
        {/* 1. Hero with Quick Booking Bar */}
        <Hero />

        {/* 2. Core Business Offerings (Tours, Stays, Transport) */}
        <Offerings />

        {/* 3. Streamlined Packages & Transparent Pricing */}
        <Packages />

        {/* 4. Interactive Custom Trip Builder & Cost Calculator Spotlight */}
        <PlannerBanner />

        {/* 5. Sights & Landmarks of Addis Ababa */}
        <Highlights />

        {/* 6. Trust & Why Choose Delight */}
        <WhyChooseUs />

        {/* 7. Direct Contact & WhatsApp Inquiry */}
        <Contact />
      </div>
    </Suspense>
  );
};

export default Home;
