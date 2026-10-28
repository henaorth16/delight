import React, { useState, useEffect } from "react";
import axios from "axios";
import { Special } from "./Special";
import { BASE_URL } from "../../utils/utils";
import { PurchaseButton } from "./PurchaseButton";
function Price() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/services/allservices`); // Replace with your actual backend endpoint
        setServices(response.data.services);
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
          Accomodation in Addis Ababa
        </h1>
      </div>
      <Special />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 py-3 h-[500px]">
        {services.map((service, index) => (
          <div
            className="max-w-[24rem] mx-auto rounded-[2.4rem] text-center"
            key={index}
          >
            <div className="text text-gray-100 bg-[#02b1b4] py-2 rounded-t-[2.4rem]">
              <p className="font-bold text-2xl">{service.title || "Silver"}</p>
              <div className="w-fit mx-auto my-2 text-right">
                <h1 className="text-[2.4rem] -mb-3">
                  {service.price || "95$"}
                </h1>
                {/* <small className="w-full text-right mb-4">per night</small> */}
              </div>
              <p className="text-sm my-4">
                {service.description || "sample description"}
              </p>
            </div>
            <div className="py-3 px-2 text-left rounded-b-[2.3rem] bg-blue-100">
              <h2>Includes :</h2>
              <p className="text-sm">{service.includes || "sample includes"}</p>
              <h2>Places :</h2>
              <p className="text-sm">{service.places || "places"}</p>
              <h2>Duration :</h2>
              <p className="text-sm">{service.duration || "sample duration"}</p>
              <div className="w-full text-center">
                <PurchaseButton />
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[1.3rem] mt-4 leading-[1.4] tracking-[0] text-[#02b1b4] font-bold py-3 flex items-center mb-4">
        <span className=" text-[#02b1b4]">
          {" "}
          * All Packages Can be flexible and on Customer's need&nbsp;and can be
          switched to other packages
        </span>
      </p>
    </div>
  );
}

export default Price;
