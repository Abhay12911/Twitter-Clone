// In development, use Vite proxy by leaving base empty ("")
// In production, read the backend URL from VITE_URL
const envUrl = import.meta.env.VITE_URL;
const isDev = import.meta.env.DEV;
export const URL = isDev ? "" : (envUrl || "");