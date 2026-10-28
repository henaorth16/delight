import React from "react";

export const Loader: React.FC = () => {
  return (
    <div className="h-[100vh] bg-gray-100 flex justify-center items-center">
      <div className="relative w-20 h-20">
        <div className="w-20 h-20 rounded-full border-4 border-gray-300 border-t-[#02b1b4] animate-spin" />
      </div>
    </div>
  );
};

export default Loader;
