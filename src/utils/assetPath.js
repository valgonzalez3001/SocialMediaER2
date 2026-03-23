/**
 * Resolves asset paths to work with any base URL (for GitHub Pages deployment)
 * @param {string} path - Asset path starting with /assets/...
 * @returns {string} - Full path with base URL prepended
 */
export const assetPath = (path) => {
  if (!path) return '';
  // If it's already a full URL, return as-is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  // Remove leading slash if present, then prepend base URL
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
