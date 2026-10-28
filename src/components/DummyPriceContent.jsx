import React, { useState } from "react";
import { Special } from "./Special";
import { PurchaseButton } from "./PurchaseButton";
export const DummyPriceContent = () => {
  const [services, setServices] = useState([]);
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
        <div
          className="max-w-[24rem] mx-auto rounded-[2.4rem] text-center"
          //   key={index}
        >
          <div className="text text-gray-100 bg-[#02b1b4] py-2 rounded-t-[2.4rem]">
            <p className="font-bold text-2xl">{"Silver"}</p>
            <div className="w-fit mx-auto my-2 text-right">
              <h1 className="text-[2.4rem] -mb-3">{"70$"}</h1>
              {/* <small className="w-full text-right mb-4">per night</small> */}
            </div>
            <p className="text-sm my-4">{"sample description"}</p>
          </div>
          <div className="py-3 px-2 text-left rounded-b-[2.3rem] bg-blue-100">
            <h2>Includes :</h2>
            <p className="text-sm">
              {"full day city tour and guidance, Lunch"}
            </p>
            <h2>Places :</h2>
            <p className="text-sm">{"Addis Ababa"}</p>
            <h2>Duration :</h2>
            <p className="text-sm">{"1 Whole Day"}</p>
            <div className="w-full text-center">
              <PurchaseButton />
            </div>
          </div>
        </div>
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
};
