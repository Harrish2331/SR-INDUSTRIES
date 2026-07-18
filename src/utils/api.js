/**
 * Central API configuration for SR Industries frontend.
 *
 * VITE_API_URL is set in .env and .env.production.
 * During `vite build`, Vite statically replaces import.meta.env.VITE_API_URL
 * with the value from .env.production — so no proxy or localhost is needed.
 */
const API_URL = import.meta.env.VITE_API_URL || 'https://sr-industries-backend-48o9.onrender.com';

export default API_URL;
