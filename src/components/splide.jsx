import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_IMAGE_URL, BASE_URL } from "../../utils/utils";
function SplideComponent() {
  const [firstContent, setFirstContent] = useState(null);
  const [nextContent, setNextContent] = useState(null);

  useEffect(() => {
    const fetchContentData = async (place, setterFunction) => {
      try {
        const response = await axios.get(`${BASE_URL}/contents/lists/${place}`);
        setterFunction(response.data.contents);
      } catch (error) {
        console.error(`Error fetching ${place} content data:`, error);
      }
    };

    // Fetch data for 'top' place initially
    fetchContentData("Carousel-First", setFirstContent);
    // Fetch data for 'middle' place initially
    fetchContentData("Carousel-Next", setNextContent);
  }, []);
  return (
    <div id="service" className="w-full mt-10 text-center">
      <Splide className="relative">
        {firstContent && nextContent && (
          <>
            {firstContent.map((slide) => (
              <SplideSlide key={slide.id}>
                <div className="w-full text-center bg-[#53bcce18] overflow-hidden rounded-[3rem]">
                  <img
                    className="object-cover w-full h-[50vh] md:h-[80vh] rounded-t-[3rem]"
                    src={BASE_IMAGE_URL + slide.photo}
                    alt=""
                  />
                  <h1 className="md:text-[3rem] text-[2.6rem] text-[#fba61b] font-curley uppercase font-bold">
                    {slide.title.split(" ")[0]}{" "}
                    <span className="text-[#02b1b4] font-mont tracking-tighter">
                      {slide.title.split(" ").slice(1).join(" ")}
                    </span>
                  </h1>
                  <p className="relative px-6 my-3 leading-[1.2] font-medium text-[#555] text-md">
                    {slide.description}
                  </p>
                </div>
              </SplideSlide>
            ))}
          </>
        )}
      </Splide>
    </div>
  );
}

export default SplideComponent;
