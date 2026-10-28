import React, { useState, useEffect } from "react";
import axios from "axios";
import { Special } from "./Special";
import { BASE_URL } from "../../utils/utils";
import { PurchaseButton } from "./PurchaseButton";

interface ServiceItem {
  title?: string;
  price?: string;
  description?: string;
  includes?: string;
  places?: string;
  duration?: string;
}

export const Price: React.FC = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/services/allservices`);
        if (response.data?.services) {
          setServices(response.data.services);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div
      className="pricing-sec bg-[#f6f6f6] relative px-[7px] md:px-[8rem] flex flex-col gap-3"
      id="services"
    >
      <div className="text-center">
        <h1 className="text-[2.4rem] mt-4 leading-[1.4] tracking-[0] text-[#02b1b4] font-bold py-6">
          <span className="text-[#fba61b]">Price Ranges</span> For Tour and
          Accommodation in Addis Ababa
        </h1>
      </div>
      <Special />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 py-3 h-auto min-h-[480px]">
        {services.map((service, index) => (
          <div
            className="max-w-[24rem] mx-auto rounded-[2.4rem] text-center shadow-md"
            key={index}
          >
            <div className="text text-gray-100 bg-[#02b1b4] py-2 rounded-t-[2.4rem]">
              <p className="font-bold text-2xl">{service.title || "Silver"}</p>
              <div className="w-fit mx-auto my-2 text-right">
                <h1 className="text-[2.4rem] -mb-3">{service.price || "95$"}</h1>
              </div>
              <p className="text-sm my-4">
                {service.description || "sample description"}
              </p>
            </div>
            <div className="py-3 px-4 text-left rounded-b-[2.3rem] bg-blue-100 flex flex-col justify-between min-h-[300px]">
              <div>
                <h2 className="font-semibold text-gray-800">Includes :</h2>
                <p className="text-sm text-gray-600 mb-2">{service.includes || "sample includes"}</p>
                <h2 className="font-semibold text-gray-800">Places :</h2>
                <p className="text-sm text-gray-600 mb-2">{service.places || "places"}</p>
                <h2 className="font-semibold text-gray-800">Duration :</h2>
                <p className="text-sm text-gray-600 mb-4">{service.duration || "sample duration"}</p>
              </div>
              <div className="w-full text-center mt-auto">
                <PurchaseButton />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
