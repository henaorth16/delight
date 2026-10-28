import React from "react";
import { Timeline } from "flowbite-react";
import { TiPointOfInterestOutline } from "react-icons/ti";
import { PurchaseButton } from "./PurchaseButton";
export const Platinum = () => {
  return (
    <div>
      <div className="flex justify-center items-center ml-4 flex-col gap-3">
        <div className="text text-[#e6e6fa] bg-[#02b1b4] py-2 rounded-t-[2.4rem]">
          <h2 className="flex justify-center items-center text-3xl">
            Platinum
          </h2>
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
                        <h1 className="text-[2.4rem] -mb-3 py-6">105$</h1>
                      </div>
                    </div>
                    <div className="py-3 px-2 text-left rounded-b-[2.3rem] bg-blue-100">
                      <h2>Includes :</h2>
                      <p className="text-sm">
                        Guest House Reservation, Full Transportation (To All
                        Places), Lunch, Full Day City Tour Guidance Night City
                        Tour
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
                        <h1 className="text-[2.4rem] -mb-3 py-6">200$</h1>
                      </div>
                    </div>
                    <div className="py-3 px-2 text-left rounded-b-[2.3rem] bg-blue-100">
                      <h2>Includes :</h2>
                      <p className="text-sm">
                        Guest House Reservation, Full Transportation (To All
                        Places), Lunch and Dinner, Full Day City Tour Guidance
                        Night City Tour
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
                        <h1 className="text-[2.4rem] -mb-3 py-6">290$</h1>
                      </div>
                    </div>
                    <div className="py-3 px-2 text-left rounded-b-[2.3rem] bg-blue-100">
                      <h2>Includes :</h2>
                      <p className="text-sm">
                        {" "}
                        Guest House Reservation, Full Transportation (To All
                        Places), Breakfast, Lunch, Full Day City Tour Guidance
                        Night City Tour
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
