/**
 * Utility function to get localized content
 * If the content is a string, returns it as is (backward compatibility)
 * If the content is an object with language keys, returns the content for the current language
 * Falls back to English if the current language is not available
 */
export const getLocalizedContent = (content, currentLang = 'en') => {
  if (!content) return '';
  
  // If it's already a string, return it
  if (typeof content === 'string') return content;
  
  // If it's an object with language keys
  if (typeof content === 'object') {
    // Try to get the content in the current language
    if (content[currentLang]) return content[currentLang];
    
    // Fallback to English
    if (content['en']) return content['en'];
    
    // Fallback to the first available language
    const firstKey = Object.keys(content)[0];
    return content[firstKey] || '';
  }
  
  return '';
};

/**
 * Helper to check if content is multilingual
 */
export const isMultilingual = (content) => {
  return content && typeof content === 'object' && !Array.isArray(content);
};
