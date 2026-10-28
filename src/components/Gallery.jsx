import React, { useState, useEffect } from "react";
import Img1 from "../assets/images/01.jpg";
import Img2 from "../assets/images/02.jpg";
import Img3 from "../assets/images/03.jpg";
import Img4 from "../assets/images/04.jpg";
import Img5 from "../assets/images/05.jpg";
import Img6 from "../assets/images/06.jpg";

import axios from "axios";
import { BASE_IMAGE_URL, BASE_URL } from "../../utils/utils";

const images = [
  { imgUrl: Img1 },
  { imgUrl: Img2 },
  { imgUrl: Img3 },
  { imgUrl: Img4 },
  { imgUrl: Img5 },
  { imgUrl: Img6 },
];

function Gallery() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/photo/getall`);
        setPhotos(response.data.photos);
      } catch (error) {
        console.error("Error fetching photos:", error);
        // Handle error scenarios here
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="pricing-sec relative px-[7px] md:px-[8rem] bg-[#f6f6f6]">
      <div className="text-center">
        <h1 className="text-[2.4rem] mt-4 leading-[1.4] tracking-[0] text-[#02b1b4] font-bold">
          <span className="text-[#fba61b]"> When You Visit </span> The Capital
          City Of Ethiopia
        </h1>
       
      </div>
      <div className="mt-8 w-full grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] content-center gap-3">
        {photos.map((photo, index) => {
          return (
            <div
              className="w-full min-h-[23rem] rounded-xl overflow-hidden"
              key={index}
            >
              <img
                className="w-full h-full object-cover"
                src={BASE_IMAGE_URL + photo.photo}
                loading="lazy"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
