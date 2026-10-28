import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_IMAGE_URL, BASE_URL } from "../../utils/utils";

interface SlideItem {
  id?: string | number;
  _id?: string | number;
  title: string;
  description: string;
  photo: string;
}

export const SplideComponent: React.FC = () => {
  const [slides, setSlides] = useState<SlideItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchContentData = async () => {
      try {
        const [firstRes, nextRes] = await Promise.all([
          axios.get(`${BASE_URL}/contents/lists/Carousel-First`),
          axios.get(`${BASE_URL}/contents/lists/Carousel-Next`),
        ]);
        const combined = [
          ...(firstRes.data?.contents || []),
          ...(nextRes.data?.contents || []),
        ];
        if (combined.length > 0) {
          setSlides(combined);
        }
      } catch (error) {
        console.error("Error fetching carousel content data:", error);
      }
    };

    fetchContentData();
  }, []);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  if (slides.length === 0) {
    return null;
  }

  const current = slides[currentIndex];
  const titleParts = current.title ? current.title.split(" ") : [""];
  const firstWord = titleParts[0];
  const restWords = titleParts.slice(1).join(" ");

  return (
    <div id="service" className="w-full mt-10 text-center relative px-4 max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-[3rem] bg-[#53bcce18] shadow-lg">
        <div className="relative">
          <img
            className="object-cover w-full h-[50vh] md:h-[80vh] rounded-t-[3rem] transition-all duration-700 ease-in-out"
            src={BASE_IMAGE_URL + current.photo}
            alt={current.title}
          />
          <div className="py-6 px-4">
            <h1 className="md:text-[3rem] text-[2.6rem] text-[#fba61b] font-curley uppercase font-bold">
              {firstWord}{" "}
              <span className="text-[#02b1b4] font-mont tracking-tighter">
                {restWords}
              </span>
            </h1>
            <p className="relative px-6 my-3 leading-[1.4] font-medium text-[#555] text-md max-w-3xl mx-auto">
              {current.description}
            </p>
          </div>
        </div>

        {/* Prev / Next controls */}
        {slides.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-3 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-3 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 pb-4">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-3 rounded-full transition-all ${
                    idx === currentIndex
                      ? "w-8 bg-[#02b1b4]"
                      : "w-3 bg-gray-400 hover:bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SplideComponent;
