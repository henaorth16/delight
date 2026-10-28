// utils/utils.ts - Prototype Mock Utilities

export const getEmailFromLocalStorage = (): string | null => {
  const email = localStorage.getItem("email");
  return email ? email : null;
};

export const getTokenFromLocalStorage = (): string | null => {
  const token = localStorage.getItem("token");
  return token ? token : null;
};

export const setEmailInLocalStorage = (email: string): void => {
  localStorage.setItem("email", email);
};

export const setTokenInLocalStorage = (token: string): void => {
  localStorage.setItem("token", token);
};

export const clearLocalStorage = (): void => {
  localStorage.removeItem("email");
  localStorage.removeItem("token");
};

// Mock prototype API configuration
export const BASE_URL = "https://api.example.com/v1";
export const BASE_IMAGE_URL = "/";

// Mock contact info for prototype
export const MOCK_CONTACT = {
  phone: "+251 90 000 0000",
  phoneFormatted: "+251 90 000 0000",
  email: "inquiry@delighttours.example.com",
  whatsappUrl: "https://wa.me/251900000000",
  address: "Bole Sub-City, Commercial Tower 4th Floor, Addis Ababa, Ethiopia",
};
