import React from "react";

export const About: React.FC = () => {
  return (
    <div className="text-gray-600 body-font min-h-screen py-16">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-3xl font-bold title-font mb-4 text-gray-900 tracking-wide">
            WHO WE ARE
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Meet the passionate team behind Delight Tour and Accommodation.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center items-center gap-16 md:gap-24">
          {/* Member 1 */}
          <div className="p-4 lg:w-1/3 md:w-1/2 max-w-sm">
            <div className="h-full flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <img
                alt="Abel Abraha"
                className="flex-shrink-0 rounded-xl w-full h-64 object-cover object-center mb-6 shadow-sm"
                src="/client_1.jpg"
              />
              <div className="w-full">
                <h2 className="title-font font-bold text-xl text-gray-900">
                  ABEL ABRAHA
                </h2>
                <h3 className="text-[#02b1b4] font-medium mb-3">FOUNDER AND CEO</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  My name is Abel Abraha, a CEO, Entrepreneur, founder of
                  Delight tour and accommodation company. I am a highly
                  organized individual with a strong attention to details, plus
                  I am a good communicator with excellent interpersonal skills.
                  In addition, I am proficient in English and Amharic languages.
                </p>
                <div className="inline-flex space-x-3 text-gray-500">
                  <a href="#" className="hover:text-[#02b1b4]" aria-label="Social link">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-[#02b1b4]" aria-label="Chat link">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Member 2 */}
          <div className="p-4 lg:w-1/3 md:w-1/2 max-w-sm">
            <div className="h-full flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <img
                alt="Semir Adem"
                className="flex-shrink-0 rounded-xl w-full h-64 object-cover object-center mb-6 shadow-sm"
                src="/client_2.jpg"
              />
              <div className="w-full">
                <h2 className="title-font font-bold text-xl text-gray-900">
                  SEMIR ADEM
                </h2>
                <h3 className="text-[#02b1b4] font-medium mb-3">CMO AND CO-FOUNDER</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  My name is Semir Adem, a CMO, Entrepreneur, Co-founder of
                  Delight tour and Accommodation who is passionate to work as a
                  tour guide by giving an amazing tour experience to everyone
                  who is curious and ready to know about Addis Ababa.
                  Additionally, I am proficient in Arabic, English, and Amharic
                  languages.
                </p>
                <div className="inline-flex space-x-3 text-gray-500">
                  <a href="#" className="hover:text-[#02b1b4]" aria-label="Social link">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-[#02b1b4]" aria-label="Chat link">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
