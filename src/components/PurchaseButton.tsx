import React from "react";

export const PurchaseButton: React.FC = () => {
  return (
    <div>
      <a
        href="mailto:delight.tour.acc@gmail.com"
        className="inline-block md:mx-0 mx-auto mb-10 bg-[#02b1b4] text-xl text-gray-200 rounded-xl hover:bg-[#02989b] py-2 px-6 w-fit font-medium transition"
      >
        Book Now
      </a>
    </div>
  );
};

export default PurchaseButton;
