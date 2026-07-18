import API_URL from './api';

/**
 * Normalizes any image reference into a fully-qualified URL.
 *
 * - Absolute http/https URLs and base64 data URIs → returned unchanged.
 * - Paths starting with /uploads/ or uploads/ → prepend API_URL (backend serves these).
 * - Bare filenames (e.g. "stairs-1.jpeg") stored by backend → API_URL + /uploads/<filename>.
 * - Locally imported bundled assets (contain / or \) → returned unchanged.
 */
export const normalizeImage = (image) => {
  if (!image) return '';
  if (typeof image !== 'string') return image;

  // Already a full URL or data URI — leave unchanged
  if (image.startsWith('http://') || image.startsWith('https://') || image.startsWith('data:')) {
    return image;
  }

  // Paths served by the backend's /uploads route
  if (image.startsWith('/uploads/')) {
    return `${API_URL}${image}`;
  }
  if (image.startsWith('uploads/')) {
    return `${API_URL}/${image}`;
  }

  // Locally bundled import (Vite resolves these — contains path separators)
  if (image.includes('/') || image.includes('\\')) {
    return image;
  }

  // Bare filename stored by backend (e.g. "stairs-1.jpeg")
  return `${API_URL}/uploads/${image}`;
};
