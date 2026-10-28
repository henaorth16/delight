import React from "react";
import { MOCK_CONTACT } from "../../utils/utils";

export const PurchaseButton: React.FC = () => {
  return (
    <div>
      <a
        href={`mailto:${MOCK_CONTACT.email}?subject=Demo%20Tour%20Booking`}
        className="inline-block md:mx-0 mx-auto mb-10 bg-brand-600 text-base text-white font-semibold rounded-xl hover:bg-brand-700 py-2.5 px-6 w-fit transition shadow-sm"
      >
        Book Now (Demo)
      </a>
    </div>
  );
};

export default PurchaseButton;
