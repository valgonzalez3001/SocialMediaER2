/**
 * Utility function to get localized content
 * If the content is a string, returns it as is (backward compatibility)
 * If the content is an object with language keys, returns the content for the current language
 * Falls back to English if the current language is not available
 */
const normalizeTextValue = (value) => {
  if (value === null || value === undefined) return '';

  if (typeof value === 'string') {
    // Guard against broken imported richText payloads serialized as object strings.
    return value.trim() === '[object Object]' ? '' : value;
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value
      .map((item) => normalizeTextValue(item))
      .filter(Boolean)
      .join(' ')
      .trim();
  }

  if (typeof value === 'object') {
    // Common rich text wrappers from imported datasets.
    if (value.text !== undefined) {
      const textValue = normalizeTextValue(value.text);
      if (textValue) return textValue;
    }

    if (value.richText !== undefined) {
      const richTextValue = normalizeTextValue(value.richText);
      if (richTextValue) return richTextValue;
    }

    return '';
  }

  return '';
};

export const getLocalizedContent = (content, currentLang = 'en') => {
  if (!content) return '';
  
  // If it's already a string, return it
  if (typeof content === 'string') return content;
  
  // If it's an object with language keys
  if (typeof content === 'object') {
    // Try to get the content in the current language
    if (content[currentLang]) return normalizeTextValue(content[currentLang]);
    
    // Fallback to English
    if (content['en']) return normalizeTextValue(content['en']);

    // Support non-localized rich text payloads
    if (content.text !== undefined || content.richText !== undefined) {
      const richContent = normalizeTextValue(content.text ?? content.richText);
      if (richContent) return richContent;
    }

    // Last fallback for malformed objects containing only hyperlink-like data
    if (content.hyperlink) return normalizeTextValue(content.hyperlink);
    
    // Fallback to the first available language
    const firstKey = Object.keys(content)[0];
    return normalizeTextValue(content[firstKey]);
  }
  
  return '';
};

/**
 * Helper to check if content is multilingual
 */
export const isMultilingual = (content) => {
  return content && typeof content === 'object' && !Array.isArray(content);
};
