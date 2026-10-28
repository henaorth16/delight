import React from "react";
import { Gold } from "./Gold";
import { Platinum } from "./Platinum";
export const Special = () => {
  return (
    <div className="flex flex-col gap-5">
      <Platinum />
      <Gold />
    </div>
  );
};
