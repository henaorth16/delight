import { Card } from "flowbite-react";
import React from "react";

const About = () => {
  return (
    <div class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto ">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">
            WHO WE ARE
          </h1>
          {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p> */}
        </div>
        <div class="flex flex-wrap -m-4 justify-center items-center gap-24">
          <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="/client_1.jpg"
              />
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  ABEL ABRAHA
                </h2>
                <h3 class="text-gray-500 mb-3">FOUNDER AND CEO</h3>
                <p class="mb-4">
                  My name is Abel Abraha, a CEO, Entrepreneur, founder of
                  Delight tour and accommodation company, I am a highly
                  organized individual with a strong attention to details, plus
                  I am a good communicator with excellent Intrapersonal skill.
                  In addition to this I am proficient on English, Amharic
                  languages.
                </p>
                <span class="inline-flex">
                  <a class="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center ">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 "
                src="client_2.jpg"
              />
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  SEMIR ADEM
                </h2>
                <h3 class="text-gray-500 mb-3">CMO AND CO FOUNDER</h3>
                <p class="mb-4">
                  My name is Semir Adem I am a CMO, Entrepreneur, Co-founder of
                  Delight tour and Accommodation who is pationate to work as a
                  tour guide by giving an amazing tour experience to everyone
                  who is curious and ready to know about Addis Ababa,
                  Additionally I am proficient on Arabic, English, Amharic
                  languages.
                </p>
                <span class="inline-flex">
                  <a class="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
