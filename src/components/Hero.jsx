import React, { useEffect, useState } from "react";

export const Hero = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const factorBackground = scrollPos;
  const factorForeground = scrollPos * 0.2;
  return (
    <div>
      <header className="flex justify-center px-[10px] items-center text-white min-h-[100vh]">
        <div
          className="top-[30vw] z-10"
          style={{
            position: "absolute",
            top: `${factorBackground * 0.06 + 35}vh`,
          }}
        >
          <h1 className=" md:text-[3rem] text-[2rem] font-[100] font-curley">
            City Tour In Addis Ababa
          </h1>
          <h3 className="w-full text-right md:text-xl text-lg font-mont">
            Delightful
          </h3>
        </div>
      </header>
    </div>
  );
};
