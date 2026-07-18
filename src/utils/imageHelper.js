export const normalizeImage = (image) => {
  if (!image) return '';
  if (typeof image !== 'string') return image;

  // If image already starts with http/https or is a base64 string, leave it unchanged
  if (image.startsWith('http://') || image.startsWith('https://') || image.startsWith('data:')) {
    return image;
  }

  // If it already starts with /uploads/, use it as a relative path (Vite proxies it)
  if (image.startsWith('/uploads/')) {
    return image;
  }
  if (image.startsWith('uploads/')) {
    return `/${image}`;
  }

  // If it's a local bundled import (contains / or \), leave it unchanged
  if (image.includes('/') || image.includes('\\')) {
    return image;
  }

  // Otherwise it's just a bare filename stored in the backend (e.g. "stairs-1.jpeg")
  return `/uploads/${image}`;
};
