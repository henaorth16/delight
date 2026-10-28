import React, { lazy, Suspense } from "react";
import { Hero } from "../components/Hero";
import { Overview } from "../components/Overview";
import Loader from "../components/Loader";
import { Contact } from "../components/Contact";
import { Fade } from "react-awesome-reveal";
import { DummyGallery } from "../components/DummyGallery";
import { DummyPriceContent } from "../components/DummyPriceContent";
import { DummyOverviewContent } from "../components/DummyOverviewContent";

const Price = lazy(() => import("../components/Price"));
const Features = lazy(() => import("../components/Features"));
const Gallery = lazy(() => import("../components/Gallery"));

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="flex flex-col gap-7">
        <Hero />
        {/* <Overview /> */}
        <DummyOverviewContent />
        {/* <Price /> */}
        <DummyPriceContent />
        <Features />
        {/* <Gallery /> */}
        <DummyGallery />
        <Contact />
      </div>
    </Suspense>
  );
};

export default Home;
