import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_IMAGE_URL, BASE_URL } from "../../utils/utils";

interface PhotoItem {
  photo: string;
}

export const Gallery: React.FC = () => {
  const [photos, setPhotos] = useState<PhotoItem[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/photo/getall`);
        if (response.data?.photos) {
          setPhotos(response.data.photos);
        }
      } catch (error) {
        console.error("Error fetching photos:", error);
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
        {photos.map((photo, index) => (
          <div
            className="w-full min-h-[23rem] rounded-xl overflow-hidden"
            key={index}
          >
            <img
              className="w-full h-full object-cover"
              src={BASE_IMAGE_URL + photo.photo}
              loading="lazy"
              alt={`photo-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
