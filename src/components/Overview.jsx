import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Splide from "./splide";
import axios from "axios";
import { BASE_IMAGE_URL, BASE_URL } from "../../utils/utils";
export const Overview = ({ place }) => {
  const [topContent, setTopContent] = useState(null);
  const [middleContent, setMiddleContent] = useState(null);

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
    fetchContentData(
      "top" || "Top" || "toP" || "tOp" || "TOP" || "TOp",
      setTopContent
    );
    // Fetch data for 'middle' place initially
    fetchContentData("middle" || "Middle", setMiddleContent);
  }, []);
  return (
    <div id="overview" className="px-[7px] md:px-[10rem] ">
      {topContent &&
        topContent.map((content, index) => (
          <Fade delay={400}>
            <div className="mt-10" key={index}>
              <div className="flex flex-col md:flex-row gap-4 md:py-6">
                <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left">
                  <span className="tracking-[px] font-[verdana] font-semibold text-gray-600 uppercase text-[0.8rem]">
                    ____glap with breathtaking..
                  </span>
                  <h1 className="text-3xl leading-1 tracking-[-2px] text-[#fba61b] uppercase font-bold">
                    {content.title.split(" ")[0]}
                    <span className="text-[#02b1b4]">
                      {" "}
                      &nbsp;{content.title.split(" ").slice(1).join(" ")}
                    </span>
                  </h1>
                  <p className="my-5 leading-[1.4] font-medium text-[#555] text-lg">
                    {content.description}
                  </p>
                </div>
                <div className="flex justify-center items-center md:px-8">
                  <img
                    src={BASE_IMAGE_URL + content.photo} // Your image URL
                    alt="overview"
                    className="h-[75vh] object-cover md:max-w-[27rem] w-full rounded-[50px]"
                  />
                </div>
              </div>
            </div>
          </Fade>
        ))}

      <div className="mt-10">
        {middleContent &&
          middleContent.map((content, index) => (
            <Fade delay={300}>
              <div
                className="flex justify-between flex-col md:flex-row-reverse py-6"
                key={index}
              >
                <div className="flex flex-col gap-4 md:w-[50%] md:text-left text-center">
                  <span className="tracking-[px] font-[verdana] font-semibold text-gray-600 uppercase text-[0.8rem]">
                    ____various
                  </span>
                  <h1 className="text-3xl leading-1 tracking-[-2px] text-[#fba61b] uppercase font-bold">
                    {content.title.split(" ")[0]}
                    <span className="text-[#02b1b4]">
                      {" "}
                      &nbsp;{content.title.split(" ").slice(1).join(" ")}
                    </span>
                  </h1>
                  <p className="my-3 leading-[1.4] font-medium text-[#555] text-lg">
                    {content.description}
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src={BASE_IMAGE_URL + content.photo} // Your image URL
                    alt="overview"
                    className="h-[75vh] object-cover md:max-w-[27rem] w-full rounded-[50px]"
                  />
                </div>
              </div>
            </Fade>
          ))}
      </div>

      <Fade>
        <Splide />
      </Fade>
    </div>
  );
};
