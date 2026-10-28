// utils/utils.ts

// Function to check if email exists in local storage
export const getEmailFromLocalStorage = (): string | null => {
  const email = localStorage.getItem("email");
  return email ? email : null;
};

// Function to check if token exists in local storage
export const getTokenFromLocalStorage = (): string | null => {
  const token = localStorage.getItem("token");
  return token ? token : null;
};

// Function to set email in local storage
export const setEmailInLocalStorage = (email: string): void => {
  localStorage.setItem("email", email);
};

// Function to set token in local storage
export const setTokenInLocalStorage = (token: string): void => {
  localStorage.setItem("token", token);
};

// Function to clear email and token from local storage
export const clearLocalStorage = (): void => {
  localStorage.removeItem("email");
  localStorage.removeItem("token");
};

export const BASE_URL = "https://delightcity.onrender.com/api/v1";
export const BASE_IMAGE_URL = "https://delightcity.onrender.com/";
