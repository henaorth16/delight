import React, { useState, useEffect } from "react";
import { TiPointOfInterestOutline } from "react-icons/ti";
import { Timeline } from "flowbite-react";
import { BASE_URL } from "../../utils/utils";
import { PurchaseButton } from "./PurchaseButton";
import axios from "axios";
export const Gold = () => {
  const [goldData, setGoldData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/special/gold/getall`);
        setGoldData(response.data.goldServices);
      } catch (error) {
        console.error("Error fetching gold data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="ml-5 mr-5">
      {/* <div className="flex justify-center items-center ml-4 flex-col gap-3">
        <div className="text text-[#e6e6fa] bg-[#02b1b4] py-2 rounded-t-[2.4rem]">
          <h2 className="flex justify-center items-center text-3xl">Gold</h2>
        </div>
        <Timeline horizontal>
          {goldData.map((item, index) => {
            <Timeline.Item key={index}>
              <Timeline.Point icon={TiPointOfInterestOutline} />
              <Timeline.Content>
                <Timeline.Title>{item.duration}</Timeline.Title>
                <Timeline.Body>
                  <div className="py-3 h-[500px] ">
                    <div className="max-w-[24rem] mx-auto rounded-[2.4rem] text-center">
                      <div className="text text-gray-100 bg-[#02b1b4] py-2 rounded-t-[2.4rem]">
                        <div className="w-fit mx-auto my-2 text-right">
                          <h1 className="text-[2.4rem] -mb-3 py-6">
                            {item.price}
                          </h1>
                        </div>
                      </div>
                      <div className="py-3 px-2 text-left rounded-b-[2.3rem] bg-blue-100">
                        <h2>Includes :</h2>
                        <p className="text-sm">{item.includes}</p>
                        <h2>Places :</h2>
                        <p className="text-sm">{item.places}</p>

                        <div className="w-full text-center">
                          <button
                            className="md:mx-0 mx-auto mb-10 bg-[#02b1b4] text-xl text-gray-200 rounded-xl hover:bg-[#02989b] py-2 px-4 w-fit"
                            href="#"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>;
          })}
        </Timeline>
      </div> */}
      <div className="flex justify-center items-center ml-4 flex-col gap-3">
        <div className="text text-[#ded752] bg-[#02b1b4] py-2 rounded-t-[2.4rem]">
          <h2 className="flex justify-center items-center text-3xl">Gold</h2>
        </div>
        <Timeline horizontal>
          <Timeline.Item>
            <Timeline.Point icon={TiPointOfInterestOutline} />
            <Timeline.Content>
              <Timeline.Title>1 Day</Timeline.Title>
              <Timeline.Body>
                <div className="py-3 h-[500px] ">
                  <div
                    className="max-w-[24rem] mx-auto rounded-[2.4rem] text-center"
                    // key={}
                  >
                    <div className="text text-gray-100 bg-[#02b1b4] py-2 rounded-t-[2.4rem]">
                      <div className="w-fit mx-auto my-2 text-right">
                        <h1 className="text-[2.4rem] -mb-3 py-6">95$</h1>
                      </div>
                    </div>
                    <div className="py-3 px-2 text-left rounded-b-[2.3rem] bg-blue-100">
                      <h2>Includes :</h2>
                      <p className="text-sm">
                        Full day Transportation, city tour and guidance, Lunch,
                        Activities
                      </p>
                      <h2>Places :</h2>
                      <p className="text-sm">Choosen Places In Addis Ababa</p>

                      <div className="w-full text-center">
                        <PurchaseButton />
                      </div>
                    </div>
                  </div>
                </div>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={TiPointOfInterestOutline} />
            <Timeline.Content>
              <Timeline.Title>2 Days</Timeline.Title>
              <Timeline.Body>
                <div className="py-3 h-[500px] ">
                  <div
                    className="max-w-[24rem] mx-auto rounded-[2.4rem] text-center"
                    // key={}
                  >
                    <div className="text text-gray-100 bg-[#02b1b4] py-2 rounded-t-[2.4rem]">
                      <div className="w-fit mx-auto my-2 text-right">
                        <h1 className="text-[2.4rem] -mb-3 py-6">160$</h1>
                      </div>
                    </div>
                    <div className="py-3 px-2 text-left rounded-b-[2.3rem] bg-blue-100">
                      <h2>Includes :</h2>
                      <p className="text-sm">
                        Full day Transportation, city tour and guidance,
                        Breakfast & Lunch, Activities
                      </p>
                      <h2>Places :</h2>
                      <p className="text-sm"> Choosen Places in Addis Ababa</p>
                      <div className="w-full text-center">
                        <PurchaseButton />
                      </div>
                    </div>
                  </div>
                </div>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={TiPointOfInterestOutline} />
            <Timeline.Content>
              <Timeline.Title>3 Days</Timeline.Title>
              <Timeline.Body>
                <div className="py-3 h-[500px] ">
                  <div
                    className="max-w-[24rem] mx-auto rounded-[2.4rem] text-center"
                    // key={}
                  >
                    <div className="text text-gray-100 bg-[#02b1b4] py-2 rounded-t-[2.4rem]">
                      <div className="w-fit mx-auto my-2 text-right">
                        <h1 className="text-[2.4rem] -mb-3 py-6">210$</h1>
                      </div>
                    </div>
                    <div className="py-3 px-2 text-left rounded-b-[2.3rem] bg-blue-100">
                      <h2>Includes :</h2>
                      <p className="text-sm">
                        {" "}
                        Full day Transportation, city tour and guidance,
                        Breakfast & Lunch, Activities, Night life, Dinner
                      </p>
                      <h2>Places :</h2>
                      <p className="text-sm">Choosen Places in Addis</p>

                      <div className="w-full text-center">
                        <PurchaseButton />
                      </div>
                    </div>
                  </div>
                </div>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
};
