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

import { MOCK_CONTACT } from "../src/data/mockData";

export { MOCK_CONTACT };
export * from "../src/data/mockData";
