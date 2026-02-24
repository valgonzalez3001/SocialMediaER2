import fs from 'fs';
import path from 'path';

import { en } from '../src/constants/langs/en.js';
import { es } from '../src/constants/langs/es.js';
import { sr } from '../src/constants/langs/sr.js';
import { fi } from '../src/constants/langs/fi.js';

/**
 * Get all keys from a nested object using dot notation
 */
function getKeys(obj, parent = "") {
  let keys = [];

  for (let key in obj) {
    const fullKey = parent ? `${parent}.${key}` : key;

    if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
      keys = keys.concat(getKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }

  return keys;
}

/**
 * Get a value from a nested object by dot notation key
 */
function getValue(obj, dotKey) {
  const parts = dotKey.split('.');
  let current = obj;

  for (const part of parts) {
    if (current === null || current === undefined) {
      return undefined;
    }
    current = current[part];
  }

  return current;
}

/**
 * Escape a value for CSV (handles quotes and commas, converts newlines to literal \n)
 */
function escapeCsv(value) {
  if (value === null || value === undefined) {
    return '';
  }

  let str = String(value);

  // Convert actual newlines to literal \n
  str = str.replace(/\r\n/g, '\\n').replace(/\n/g, '\\n').replace(/\r/g, '\\n');

  // If the value contains quotes or commas, wrap in quotes and escape internal quotes
  if (str.includes('"') || str.includes(',')) {
    return '"' + str.replace(/"/g, '""') + '"';
  }

  return str;
}

const langs = { en, es, fi, sr };
const langNames = ['en', 'es', 'fi', 'sr'];

// Get all keys from the English object (assuming all langs have same structure)
const allKeys = getKeys(en);

// Build CSV rows
const header = ['Key', 'en', 'es', 'fi', 'sr'].join(',');

const rows = allKeys.map(key => {
  const values = [key];
  for (const lang of langNames) {
    values.push(escapeCsv(getValue(langs[lang], key) ?? ''));
  }
  return values.join(',');
});

const csvContent = [header, ...rows].join('\n');

// Create output directory
const OUT_DIR = path.join(process.cwd(), 'tmp/i18n_csv');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

// Write CSV file with UTF-8 BOM for proper encoding of special characters (Serbian, etc.)
const outPath = path.join(OUT_DIR, 'i18n_strings.csv');
const BOM = '\uFEFF';
fs.writeFileSync(outPath, BOM + csvContent, 'utf8');

console.log('CSV file created successfully!');
console.log(`Output: ${outPath}`);
console.log(`Total keys: ${allKeys.length}`);
