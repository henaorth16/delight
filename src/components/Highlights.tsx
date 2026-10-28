import React from "react";
import { Fade } from "./Fade";

import Img1 from "../assets/images/01.jpg";
import Img2 from "../assets/images/02.jpg";
import Img3 from "../assets/images/03.jpg";
import Img4 from "../assets/images/04.jpg";
import Img5 from "../assets/images/05.jpg";
import Img6 from "../assets/images/06.jpg";

interface Landmark {
  title: string;
  tag: string;
  description: string;
  image: string;
}

const landmarks: Landmark[] = [
  {
    title: "National Museum & Lucy",
    tag: "History & Evolution",
    description: "Home of the famous 3.2-million-year-old hominid fossil 'Lucy' (Dinknesh), ancient royal relics, and Ethiopian archaeological treasures.",
    image: "/lucy_2.jpg",
  },
  {
    title: "Entoto Hill & Mountain View",
    tag: "Scenic Nature",
    description: "Rising 3,200m above sea level, Entoto offers sweeping panoramic skyline views of Addis Ababa, eucalyptus groves, and historic churches.",
    image: "/home.jpg",
  },
  {
    title: "Holy Trinity & St. George's",
    tag: "Religious Heritage",
    description: "Architectural masterpieces featuring stained glass artistry, traditional Ethiopian Orthodox murals, and resting place of Emperor Haile Selassie.",
    image: Img1,
  },
  {
    title: "Ethiopian Coffee & Cuisine",
    tag: "Culinary & Coffee",
    description: "Experience the birthplace of coffee through an authentic roasting ceremony, fresh injera, rich stews, and aromatic local spices.",
    image: Img2,
  },
  {
    title: "Unity Park & Grand Palace",
    tag: "Cultural Sanctuary",
    description: "The historical throne room of Ethiopian emperors transformed into a world-class park with palace museums and botanical gardens.",
    image: Img3,
  },
  {
    title: "Vibrant Merkato & Local Life",
    tag: "Local Commerce",
    description: "Africa's largest bustling open-air market where spices, silver jewelry, leatherwork, and traditional woven fabrics come to life.",
    image: Img4,
  },
];

export const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Fade delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
              City Landmarks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Must-Visit Locations in Addis Ababa
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 font-normal">
              From prehistoric discoveries to mountain viewpoints and aromatic coffee houses,
              here is what makes Addis Ababa an enchanting destination.
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {landmarks.map((spot, index) => (
            <Fade delay={100 * (index + 1)} key={index}>
              <div className="group rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={spot.image}
                    alt={spot.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-800 rounded-full shadow-sm">
                      {spot.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition">
                      {spot.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {spot.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-600">
                    <span>Included in Tour Packages</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
