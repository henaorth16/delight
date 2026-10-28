import React, { Suspense } from "react";
import Hero from "../components/Hero";
import Offerings from "../components/Offerings";
import Packages from "../components/Packages";
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

        {/* 4. Sights & Landmarks of Addis Ababa */}
        <Highlights />

        {/* 5. Trust & Why Choose Delight */}
        <WhyChooseUs />

        {/* 6. Direct Contact & WhatsApp Inquiry */}
        <Contact />
      </div>
    </Suspense>
  );
};

export default Home;
