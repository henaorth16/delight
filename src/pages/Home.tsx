import React, { lazy, Suspense } from "react";
import { Hero } from "../components/Hero";
import Loader from "../components/Loader";
import { Contact } from "../components/Contact";
import { DummyGallery } from "../components/DummyGallery";
import { DummyPriceContent } from "../components/DummyPriceContent";
import { DummyOverviewContent } from "../components/DummyOverviewContent";

const Features = lazy(() => import("../components/Features"));

export const Home: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="flex flex-col gap-7">
        <Hero />
        <DummyOverviewContent />
        <DummyPriceContent />
        <Features />
        <DummyGallery />
        <Contact />
      </div>
    </Suspense>
  );
};

export default Home;
