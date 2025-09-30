const envUrl = import.meta.env.VITE_URL;

if (!envUrl) {
  // Fail fast to avoid silent wrong-origin calls
  // Provide a helpful message to configure VITE_URL
  // eslint-disable-next-line no-console
  console.warn("VITE_URL is not set. Set VITE_URL to your backend base URL.");
}

export const URL = envUrl || "";