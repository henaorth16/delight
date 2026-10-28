import React, { useState, useEffect } from "react";
import { TiPointOfInterestOutline } from "./Icons";
import { BASE_URL } from "../../utils/utils";
import { PurchaseButton } from "./PurchaseButton";
import axios from "axios";

interface GoldItem {
  duration: string;
  price: string;
  includes: string;
  places: string;
}

const defaultGoldData: GoldItem[] = [
  {
    duration: "1 Day",
    price: "95$",
    includes: "Full day Transportation, city tour and guidance, Lunch, Activities",
    places: "Chosen Places In Addis Ababa",
  },
  {
    duration: "2 Days",
    price: "160$",
    includes: "Full day Transportation, city tour and guidance, Breakfast & Lunch, Activities",
    places: "Chosen Places in Addis Ababa",
  },
  {
    duration: "3 Days",
    price: "210$",
    includes: "Full day Transportation, city tour and guidance, Breakfast & Lunch, Activities, Night life, Dinner",
    places: "Chosen Places in Addis",
  },
];

export const Gold: React.FC = () => {
  const [goldData, setGoldData] = useState<GoldItem[]>(defaultGoldData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/special/gold/getall`);
        if (response.data?.goldServices && response.data.goldServices.length > 0) {
          setGoldData(response.data.goldServices);
        }
      } catch (error) {
        console.error("Error fetching gold data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ml-5 mr-5">
      <div className="flex justify-center items-center ml-4 flex-col gap-3">
        <div className="text text-[#ded752] bg-[#02b1b4] py-2 px-8 rounded-t-[2.4rem]">
          <h2 className="flex justify-center items-center text-3xl font-bold">Gold</h2>
        </div>

        {/* Timeline representation without flowbite-react */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 py-4 overflow-x-auto">
          {goldData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="p-2 rounded-full bg-[#02b1b4] text-white">
                  <TiPointOfInterestOutline size={20} />
                </span>
                <span className="font-semibold text-lg text-gray-800">{item.duration}</span>
              </div>

              <div className="py-3 h-auto min-h-[480px]">
                <div className="max-w-[24rem] w-[18rem] md:w-[20rem] mx-auto rounded-[2.4rem] text-center shadow-md">
                  <div className="text text-gray-100 bg-[#02b1b4] py-2 rounded-t-[2.4rem]">
                    <div className="w-fit mx-auto my-2 text-right">
                      <h1 className="text-[2.4rem] -mb-3 py-6">{item.price}</h1>
                    </div>
                  </div>
                  <div className="py-3 px-4 text-left rounded-b-[2.3rem] bg-blue-100 flex flex-col justify-between min-h-[320px]">
                    <div>
                      <h2 className="font-semibold text-gray-800">Includes :</h2>
                      <p className="text-sm text-gray-600 mb-2">{item.includes}</p>
                      <h2 className="font-semibold text-gray-800">Places :</h2>
                      <p className="text-sm text-gray-600 mb-4">{item.places}</p>
                    </div>

                    <div className="w-full text-center mt-auto">
                      <PurchaseButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gold;
