import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const FaWhatsapp: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    height={size}
    width={size}
    className={className}
    {...props}
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

export const FaFacebook: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height={size}
    width={size}
    className={className}
    {...props}
  >
    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
  </svg>
);
export const BsFacebook = FaFacebook;

export const FaInstagram: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    height={size}
    width={size}
    className={className}
    {...props}
  >
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
);
export const BsInstagram = FaInstagram;

export const FaTelegram: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 496 512"
    height={size}
    width={size}
    className={className}
    {...props}
  >
    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.3z" />
  </svg>
);
export const BsTelegram = FaTelegram;

export const BsWhatsapp = FaWhatsapp;

export const BsWechat: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 16 16"
    height={size}
    width={size}
    className={className}
    {...props}
  >
    <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02 2.666 0 4.828 1.8 4.828 4.02 0 2.218-2.162 4.018-4.826 4.018m.608-5.385a.72.72 0 0 0-.712.724c0 .4.318.724.712.724.393 0 .713-.324.713-.724a.72.72 0 0 0-.713-.724m-2.55 0a.72.72 0 0 0-.713.724c0 .4.318.724.713.724.393 0 .713-.324.713-.724a.72.72 0 0 0-.713-.724M5.617 11.238a6.7 6.7 0 0 1-.954-.069l-1.42.716.368-1.258C2.5 9.712 1.8 8.44 1.8 7.026c0-2.84 2.8-5.14 6.257-5.14s6.257 2.3 6.257 5.14c0 .17-.01.338-.03.504a4.4 4.4 0 0 0-3.108-1.144c-3.13 0-5.666 2.176-5.666 4.856 0 .54.103 1.056.29 1.536z" />
  </svg>
);

export const TiPointOfInterestOutline: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    className={className}
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
  </svg>
);

export const IoFastFoodSharp: React.FC<IconProps> = ({ size = 48, className = "", ...props }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height={size}
    width={size}
    className={className}
    {...props}
  >
    <path d="M416 192c0-70.7-57.3-128-128-128S160 121.3 160 192v32h256v-32zm-288 64v32h320v-32H128zm-32 64v32h384v-32H96zm32 64c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64H128z" />
  </svg>
);

export const AiFillMedicineBox: React.FC<IconProps> = ({ size = 48, className = "", ...props }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 1024 1024"
    height={size}
    width={size}
    className={className}
    {...props}
  >
    <path d="M896 288H704v-64c0-35.3-28.7-64-64-64H384c-35.3 0-64 28.7-64 64v64H128c-35.3 0-64 28.7-64 64v448c0 35.3 28.7 64 64 64h768c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64zM384 224h256v64H384v-64zm160 416h96v64h-96v96h-64v-96h-96v-64h96v-96h64v96z" />
  </svg>
);

export const FaGears: React.FC<IconProps> = ({ size = 48, className = "", ...props }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 640 512"
    height={size}
    width={size}
    className={className}
    {...props}
  >
    <path d="M308.5 135.3c1.5-4.9 3-9.7 4.7-14.4l-18.4-24.1c-5.9-7.7-4.5-18.8 3.1-24.8l28.6-22.9c7.7-6.2 18.8-4.8 25 2.9l19 23.6c4.6-2 9.3-3.8 14.2-5.3l2.8-30.2c.9-9.7 9.2-17.1 19-17.1h36.6c9.7 0 18 7.4 19 17.1l2.8 30.2c4.8 1.5 9.6 3.3 14.2 5.3l19-23.6c6.2-7.7 17.3-9.1 25-2.9l28.6 22.9c7.7 6.2 9.1 17.1 3.1 24.8l-18.4 24.1c1.7 4.7 3.2 9.5 4.7 14.4l29.8 6.5c9.5 2.1 16 10.5 16 20.3v36.6c0 9.8-6.5 18.2-16 20.3l-29.8 6.5c-1.5 4.9-3 9.7-4.7 14.4l18.4 24.1c5.9 7.7 4.5 18.8-3.1 24.8l-28.6 22.9c-7.7 6.2-18.8 4.8-25-2.9l-19-23.6c-4.6 2-9.3 3.8-14.2 5.3l-2.8 30.2c-.9 9.7-9.2 17.1-19 17.1h-36.6c-9.7 0-18-7.4-19-17.1l-2.8-30.2c-4.8-1.5-9.6-3.3-14.2-5.3l-19 23.6c-6.2 7.7-17.3 9.1-25 2.9l-28.6-22.9c-7.7-6.2-9.1-17.1-3.1-24.8l18.4-24.1c-1.7-4.7-3.2-9.5-4.7-14.4l-29.8-6.5c-9.5-2.1-16-10.5-16-20.3v-36.6c0-9.8 6.5-18.2 16-20.3l29.8-6.5zM400 240c30.9 0 56-25.1 56-56s-25.1-56-56-56-56 25.1-56 56 25.1 56 56 56z" />
  </svg>
);

export const SiAddthis: React.FC<IconProps> = ({ size = 48, className = "", ...props }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    className={className}
    {...props}
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5 13h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
  </svg>
);
