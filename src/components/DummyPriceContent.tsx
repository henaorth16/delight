import React from "react";
import { Special } from "./Special";
import { PurchaseButton } from "./PurchaseButton";

export const DummyPriceContent: React.FC = () => {
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
        <div className="max-w-[24rem] mx-auto rounded-[2.4rem] text-center shadow-md">
          <div className="text text-gray-100 bg-[#02b1b4] py-2 rounded-t-[2.4rem]">
            <p className="font-bold text-2xl">Silver</p>
            <div className="w-fit mx-auto my-2 text-right">
              <h1 className="text-[2.4rem] -mb-3">70$</h1>
            </div>
            <p className="text-sm my-4">City Tour Package</p>
          </div>
          <div className="py-3 px-4 text-left rounded-b-[2.3rem] bg-blue-100 flex flex-col justify-between min-h-[300px]">
            <div>
              <h2 className="font-semibold text-gray-800">Includes :</h2>
              <p className="text-sm text-gray-600 mb-2">full day city tour and guidance, Lunch</p>
              <h2 className="font-semibold text-gray-800">Places :</h2>
              <p className="text-sm text-gray-600 mb-2">Addis Ababa</p>
              <h2 className="font-semibold text-gray-800">Duration :</h2>
              <p className="text-sm text-gray-600 mb-4">1 Whole Day</p>
            </div>
            <div className="w-full text-center mt-auto">
              <PurchaseButton />
            </div>
          </div>
        </div>
      </div>

      <p className="text-[1.3rem] mt-4 leading-[1.4] tracking-[0] text-[#02b1b4] font-bold py-3 flex items-center mb-4 justify-center">
        <span className="text-[#02b1b4] text-center">
          * All Packages can be flexible and tailored to customer needs and can be switched to other packages
        </span>
      </p>
    </div>
  );
};

export default DummyPriceContent;
