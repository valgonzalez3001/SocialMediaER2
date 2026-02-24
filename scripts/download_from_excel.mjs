import ExcelJS from "exceljs";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

/**
 * CONFIG
 */
const XLSX_URL = process.env.XLSX_URL;

if (!XLSX_URL) {
  console.error("Error: XLSX_URL not found in .env file");
  process.exit(1);
}

const OUT_DIR = process.cwd(); // adjust if you want output elsewhere
const INDENT = 2;
const XLSX_FILE = "ENDGAME_ER2_i18n.xlsx";
const tmpDir = path.join(OUT_DIR, "tmp");
      if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir, { recursive: true });
      }
/**
 * Insert a value into a nested object based on an array of keys
 */
function insertNested(obj, keys, value) {
  if (keys.length === 1) {
    obj[keys[0]] = value;
  } else {
    const k = keys[0];
    if (obj[k] === undefined || typeof obj[k] !== "object") {
      obj[k] = {};
    }
    insertNested(obj[k], keys.slice(1), value);
  }
  return obj;
}

/**
 * Build nested object from a flat object where keys may contain dot notation
 */
function nestFromDotNames(namedValues) {
  const out = {};
  for (const [key, val] of Object.entries(namedValues)) {
    const parts = key.split(".");
    insertNested(out, parts, val);
  }
  return out;
}

/**
 * Escape strings for JS (preserves \n as newline escape sequence)
 */
function jsEscape(s) {
  if (typeof s !== "string") return String(s);
  // Escape backslashes EXCEPT when followed by 'n' (to preserve \n)
  return s
    .replace(/\\(?!n)/g, "\\\\")  // Escape backslashes not followed by 'n'
    .replace(/"/g, '\\"')          // Escape double quotes
    .replace(/\r\n/g, "\\n")       // Convert actual CRLF to \n
    .replace(/(?<!\\)\n/g, "\\n")  // Convert actual LF to \n (if not already escaped)
    .replace(/\r/g, "\\n");        // Convert actual CR to \n
}

/**
 * Convert a value to a JS literal string
 */
function toJsLiteral(x) {
  // Handle raw JS expressions (marked with __jsraw__)
  if (x && x.__jsraw__) return x.value;

  if (x === null || x === undefined || (typeof x === "number" && isNaN(x)))
    return "null";

  if (typeof x === "boolean") return x ? "true" : "false";

  if (typeof x === "number") return String(x);

  if (x instanceof Date) {
    const ds = formatDateString(x);
    return `new Date("${jsEscape(ds)}")`;
  }

  // Default: string
  return `"${jsEscape(String(x))}"`;
}

/**
 * Format date as "Month DD YYYY HH:MM:SS"
 */
function formatDateString(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date(date);
  const month = months[d.getUTCMonth()];
  const day = String(d.getUTCDate()).padStart(2, "0");
  const year = d.getUTCFullYear();
  const hours = String(d.getUTCHours()).padStart(2, "0");
  const mins = String(d.getUTCMinutes()).padStart(2, "0");
  const secs = String(d.getUTCSeconds()).padStart(2, "0");
  return `${month} ${day} ${year} ${hours}:${mins}:${secs}`;
}

/**
 * Create a raw JS expression (won't be quoted)
 */
function jsRaw(value) {
  return { __jsraw__: true, value };
}

/**
 * Render a nested object as JS object literal (pretty-printed)
 */
function renderJsObject(obj, indent = INDENT, level = 0) {
  const pad = (n) => " ".repeat(n);
  const thisIndent = pad(level * indent);
  const nextIndent = pad((level + 1) * indent);

  const keys = Object.keys(obj);
  const lines = [];

  lines.push(`${thisIndent}{`);

  keys.forEach((k, i) => {
    const v = obj[k];
    const isLast = i === keys.length - 1;
    const comma = isLast ? "" : ",";

    if (v !== null && typeof v === "object" && !v.__jsraw__ && !(v instanceof Date)) {
      if (Array.isArray(v)) {
        // Array
        const arrItems = v.map((item) => toJsLiteral(item));
        lines.push(`${nextIndent}${k}: [${arrItems.join(", ")}]${comma}`);
      } else {
        // Nested object
        const nested = renderJsObject(v, indent, level + 1);
        const firstLine = nested[0].trimStart();
        lines.push(`${nextIndent}${k}: ${firstLine}`);
        for (let j = 1; j < nested.length - 1; j++) {
          lines.push(nested[j]);
        }
        lines.push(`${nested[nested.length - 1]}${comma}`);
      }
    } else {
      lines.push(`${nextIndent}${k}: ${toJsLiteral(v)}${comma}`);
    }
  });

  lines.push(`${thisIndent}}`);
  return lines;
}

/**
 * Write an array of user objects to a JSX file
 */
function writeDbJsx(rows, exportName, outFile, fileInitLines = []) {
  const userObjects = rows.map((row) => {
    const vals = { ...row };

    // _id should be uuid() expression
    if ("_id" in vals) {
      vals._id = jsRaw("uuid()");
    }

    // updatedAt should be formatDate() expression
    vals.updatedAt = jsRaw("formatDate()");

    // createdAt: convert to new Date("...") JS expression
    if ("createdAt" in vals && vals.createdAt) {
      const ca = vals.createdAt;
      if (ca instanceof Date) {
        vals.createdAt = jsRaw(`new Date("${jsEscape(formatDateString(ca))}")`);
      } else if (ca && String(ca).trim()) {
        vals.createdAt = jsRaw(`new Date("${jsEscape(String(ca))}")`);
      } else {
        delete vals.createdAt;
      }
    }

    // Remove null/undefined entries
    for (const k of Object.keys(vals)) {
      if (vals[k] === null || vals[k] === undefined) {
        delete vals[k];
      }
    }

    // Nest dot-notation fields
    return nestFromDotNames(vals);
  });

  // Render array
  const arrLines = [];
  arrLines.push(`export const ${exportName} = [`);

  userObjects.forEach((obj, i) => {
    const objLines = renderJsObject(obj, INDENT, 1);
    const isLast = i === userObjects.length - 1;

    objLines.forEach((line, j) => {
      if (j === objLines.length - 1 && !isLast) {
        arrLines.push(line + ",");
      } else {
        arrLines.push(line);
      }
    });
  });

  arrLines.push("];");

  // Full file content
  const fileLines = [...fileInitLines, ...arrLines, ""];
  const filePath = path.join(OUT_DIR, outFile);
  fs.writeFileSync(filePath, fileLines.join("\n"), "utf8");
  console.log(`Wrote JSX to: ${filePath}`);
}

/**
 * Download XLSX file from URL
 */
async function downloadXlsx(url, destFile) {
  console.log(`Downloading ${url}...`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download: ${response.status} ${response.statusText}`);
  }
  const buffer = await response.arrayBuffer();
  fs.writeFileSync(destFile, Buffer.from(buffer));
  console.log(`Saved to: ${destFile}`);
}

/**
 * Convert Google Drive view URL to direct download URL
 */
function getGoogleDriveDownloadUrl(viewUrl) {
  // Extract file ID from URLs like:
  // https://drive.google.com/file/d/{FILE_ID}/view?usp=drive_link
  const match = viewUrl.match(/\/file\/d\/([^/]+)/);
  if (match) {
    return `https://drive.google.com/uc?export=download&id=${match[1]}`;
  }
  return viewUrl;
}

/**
 * Download an image from URL and save to destination
 */
async function downloadImage(url, destPath) {
  try {
    const downloadUrl = getGoogleDriveDownloadUrl(url);
    console.log(`  Downloading image: ${path.basename(destPath)}`);
    const response = await fetch(downloadUrl);
    if (!response.ok) {
      console.warn(`  Failed to download image: ${response.status}`);
      return false;
    }
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(destPath, Buffer.from(buffer));
    return true;
  } catch (err) {
    console.warn(`  Error downloading image: ${err.message}`);
    return false;
  }
}

/**
 * Process avatarURL field - download image if it's an object with hyperlink
 */
async function processAvatarUrl(avatarData, assetsDir) {
  if (!avatarData) return "";

  // If it's already a string, return as-is
  if (typeof avatarData === "string") return avatarData;

  // If it's an object with text and hyperlink (Excel hyperlink format)
  if (avatarData.text && avatarData.hyperlink) {
    const filename = avatarData.text;
    const destPath = path.join(assetsDir, filename);

    // Download the image
    const success = await downloadImage(avatarData.hyperlink, destPath);
    if (success) {
      return `/assets/users/${filename}`;
    }
  }

  return "";
}

/**
 * Read a sheet from the workbook as array of objects
 */
function readSheet(workbook, sheetName) {
  const sheet = workbook.getWorksheet(sheetName);
  if (!sheet) {
    console.warn(`Sheet "${sheetName}" not found`);
    return [];
  }

  const rows = [];
  const headers = [];

  sheet.eachRow((row, rowNumber) => {
    const values = row.values.slice(1); // row.values is 1-indexed, slice to normalize

    if (rowNumber === 1) {
      // First row is headers
      values.forEach((val) => headers.push(val));
    } else {
      // Data rows
      const obj = {};
      values.forEach((val, idx) => {
        if (headers[idx] !== undefined) {
          obj[headers[idx]] = val;
        }
      });
      rows.push(obj);
    }
  });

  return rows;
}

/**
 * Main processing function
 */
async function main() {
  // Download the Excel file
  const xlsxPath = path.join(OUT_DIR, "tmp", XLSX_FILE);
  await downloadXlsx(XLSX_URL, xlsxPath);

  // Read the workbook
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(xlsxPath);

  // Ensure assets directory exists
  const assetsDir = path.join(OUT_DIR, "public/assets");
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  // Get the first sheet for i18n
  const firstSheet = workbook.worksheets[0];
  const firstSheetName = firstSheet.name;
  const webI18n = readSheet(workbook, firstSheetName);

  if (webI18n.length === 0) {
    console.error("No data in first sheet");
    return;
  }

  // Get language columns (all columns except the first one which is the key)
  const allKeys = Object.keys(webI18n[0]);
  const keyColumn = allKeys[0]; // First column is the key
  const langs = allKeys.slice(1); // Rest are language columns
  const avatarsDir = path.join(OUT_DIR, "public/assets/users");
  const postsDir = path.join(OUT_DIR, "public/assets/posts");
  for (const lang of langs) {
    console.log(`\nProcessing language: ${lang}`);

    // Web i18n
    const resultList = {};
    for (const row of webI18n) {
      const keyParts = String(row[keyColumn]).split(".");
      const value = row[lang];
      insertNested(resultList, keyParts, value);
    }
    const oldFileI18N = path.join(OUT_DIR, `src/constants/langs/${lang}.js`);
    if (fs.existsSync(oldFileI18N)) {
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const newFileName = `${lang}_${timestamp}.js`;
      fs.renameSync(oldFileI18N, path.join(tmpDir, newFileName));
    }
    // Convert to JSON and write JSX
    let jsonOutput = JSON.stringify(resultList, null, INDENT);
    // Preserve \n as newline escape (JSON.stringify double-escapes it)
    jsonOutput = jsonOutput.replace(/\\\\n/g, "\\n");
    const jsx = `export const ${lang} = ${jsonOutput};`;
    const outFile = `src/constants/langs/${lang}.js`;
    fs.writeFileSync(path.join(OUT_DIR, outFile), jsx, "utf8");
    console.log(`Wrote i18n to: ${outFile}`);

    // Puzzle 1 - Accounts
    const langUpper = lang.toUpperCase();
    const accountsSheetName = `Puzzle 1 accounts ${langUpper}`;
    const accountsData = readSheet(workbook, accountsSheetName);

    if (accountsData.length > 0) {
      console.log(`  Downloading user avatars...`);
      const puzzle1Users = await Promise.all(accountsData.map(async (row) => ({
        _id: "uuid()",
        firstName: row["Account name"] || "",
        lastName: "",
        bio: row["Bio"] || "",
        username: row["Handle"] || "",
        password: "ECHO",
        createdAt: row["Joined"] || "",
        updatedAt: "formatDate()",
        avatarURL: await processAvatarUrl(row["Photo (link)"], avatarsDir),
        verified: row["Verified"] || false,
        "stats.followersCount": row["Followers"] || 0,
        "stats.followingCount": row["Following"] || 0,
        "puzzle.isBot": row["Official"] === undefined || row["Official"] === null,
      })));
      const oldFileUsers = path.join(OUT_DIR, `src/backend/db/users_${lang}.jsx`);
      if (fs.existsSync(oldFileUsers)) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
        const newFileName = `users_${lang}_${timestamp}.jsx`;
        fs.renameSync(oldFileUsers, path.join(tmpDir, newFileName));
      }
      writeDbJsx(
        puzzle1Users,
        `users${langUpper}`,
        `src/backend/db/users_${lang}.jsx`,
        [
          'import { v4 as uuid } from "uuid";',
          'import { formatDate } from "../utils/authUtils.jsx";',
          "",
          "/**",
          " *  Users Database",
          " */",
          "",
        ]
      );
    }

    // Puzzle 1 - Posts
    const postsSheetName = `Puzzle 1 posts ${langUpper}`;
    const postsData = readSheet(workbook, postsSheetName);

    if (postsData.length > 0) {
      console.log(`  Downloading post media...`);
      const puzzle1Posts = await Promise.all(postsData.map(async (row) => ({
        _id: "uuid()",
        content: row["Text"] || "",
        type: "image",
        mediaUrl: await processAvatarUrl(row["Multimedia (link)"], postsDir),
        username: row["Handle"] || "",
        firstName: row["Account name"] || "",
        lastName: "",
        avatarURL: await processAvatarUrl(row["Photo (link)"], avatarsDir),
        createdAt: row["Timestamp"] ? new Date(row["Timestamp"]) : new Date(),
        updatedAt: "formatDate()",
        likes: {
            likeCount: row["Likes"] || 0,
        }
        
      })));


      // Create tmp folder if it does not exist and move file  `src/backend/db/posts_${lang}.jsx`if it exists into it (to avoid being overwritten by git) with a datetime suffix, then write new file
      
      const oldFilePosts = path.join(OUT_DIR, `src/backend/db/posts_${lang}.jsx`);
      if (fs.existsSync(oldFilePosts)) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
        const newFileName = `posts_${lang}_${timestamp}.jsx`;
        fs.renameSync(oldFilePosts, path.join(tmpDir, newFileName));
      }
      writeDbJsx(
        puzzle1Posts,
        `posts${langUpper}`,
        `src/backend/db/posts_${lang}.jsx`,
        [
          'import { v4 as uuid } from "uuid";',
          'import { formatDate } from "../utils/authUtils.jsx";',
          "",
          "/**",
          " *  Posts Database",
          " */",
          "",
        ]
      );
    }
  }

  // Puzzle 2 - AI Content
  console.log("\nProcessing Puzzle 2 (AI Content)...");
  const aiContent = {};

  for (const lang of langs) {
    const langUpper = lang.toUpperCase();
    const puzzle2SheetName = `Puzzle 2 ${langUpper}`;
    const puzzle2Data = readSheet(workbook, puzzle2SheetName);

    if (puzzle2Data.length > 0) {
      console.log(`  Processing ${lang}...`);

      // Group words by sentence number
      const sentencesMap = {};

      for (const row of puzzle2Data) {
        const sentenceNum = row["Sentence"];
        if (sentenceNum === undefined || sentenceNum === null) continue;

        if (!sentencesMap[sentenceNum]) {
          sentencesMap[sentenceNum] = [];
        }

        const word = {
          correct: row["Correct"] || row["Word"] || "",
          percentage: row["Percentage"] || "",
          alts: [row["Alt1"] || "", row["Alt2"] || ""].filter(Boolean),
        };

        sentencesMap[sentenceNum].push(word);
      }

      // Convert to array of sentences (sorted by sentence number)
      const sentenceNums = Object.keys(sentencesMap)
        .map(Number)
        .sort((a, b) => a - b);

      aiContent[lang] = sentenceNums.map((num) => sentencesMap[num]);
    }
  }

  // Write AIContent.json
  if (Object.keys(aiContent).length > 0) {
    const aiContentPath = path.join(OUT_DIR, "src/pages/AIContent/AIContent.json");
    // Backup existing file
    if (fs.existsSync(aiContentPath)) {
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      fs.copyFileSync(aiContentPath, path.join(tmpDir, `AIContent_${timestamp}.json`));
    }
    fs.writeFileSync(aiContentPath, JSON.stringify(aiContent, null, 2), "utf8");
    console.log(`Wrote AI Content to: src/pages/AIContent/AIContent.json`);
  }

  // Puzzle 3 - AI Incorrect Uses
  console.log("\nProcessing Puzzle 3 (AI Incorrect Uses)...");
  const aiIncorrectUses = {};

  for (const lang of langs) {
    const langUpper = lang.toUpperCase();
    const puzzle3SheetName = `Puzzle 3 ${langUpper}`;
    const puzzle3Data = readSheet(workbook, puzzle3SheetName);

    if (puzzle3Data.length > 0) {
      console.log(`  Processing ${lang}...`);
      console.log(`  Downloading Puzzle 3 images...`);

      aiIncorrectUses[lang] = await Promise.all(puzzle3Data.map(async (row, index) => ({
        id: `case-${index + 1}`,
        post: {
          name: row["name"] || "",
          handle: row["handle"] || "",
          date: row["date"] || "",
          image: await processAvatarUrl(row["image"], avatarsDir),
          text: row["text"] || "",
        },
        options: [
          {
            text: row["Correct"] || "",
            isCorrect: true,
          },
          {
            text: row["Neutral"] || "",
            isCorrect: false,
          },
          {
            text: row["Incorrect"] || "",
            isCorrect: false,
          },
        ],
      })));
    }
  }

  // Write AIIncorrectUses.json
  if (Object.keys(aiIncorrectUses).length > 0) {
    const aiIncorrectUsesPath = path.join(OUT_DIR, "src/pages/AIIncorrectUses/AIIncorrectUses.json");
    // Backup existing file
    if (fs.existsSync(aiIncorrectUsesPath)) {
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      fs.copyFileSync(aiIncorrectUsesPath, path.join(tmpDir, `AIIncorrectUses_${timestamp}.json`));
    }
    fs.writeFileSync(aiIncorrectUsesPath, JSON.stringify(aiIncorrectUses, null, 2), "utf8");
    console.log(`Wrote AI Incorrect Uses to: src/pages/AIIncorrectUses/AIIncorrectUses.json`);
  }

  // Final Challenge - Community Note Statements
  console.log("\nProcessing Final Challenge (Community Note Statements)...");
  const communityNoteStatements = {};

  for (const lang of langs) {
    const langUpper = lang.toUpperCase();
    const finalSheetName = `Final ${langUpper}`;
    const finalData = readSheet(workbook, finalSheetName);

    if (finalData.length > 0) {
      console.log(`  Processing ${lang}...`);

      communityNoteStatements[lang] = finalData.map((row, index) => {
        // Handle OK column - could be TRUE/FALSE string or boolean
        let isCorrect = false;
        const okValue = row["OK"];
        if (typeof okValue === "boolean") {
          isCorrect = okValue;
        } else if (typeof okValue === "string") {
          isCorrect = okValue.toUpperCase() === "TRUE";
        }

        return {
          id: index + 1,
          text: row["Text"] || "",
          correct: isCorrect,
          category: row["CATEGORY"] || row["Category"] || "",
        };
      });
    }
  }

  // Write CommunityNoteStatements.json
  if (Object.keys(communityNoteStatements).length > 0) {
    const communityNotePath = path.join(OUT_DIR, "src/pages/CommunityNote/CommunityNoteStatements.json");
    // Backup existing file
    if (fs.existsSync(communityNotePath)) {
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      fs.copyFileSync(communityNotePath, path.join(tmpDir, `CommunityNoteStatements_${timestamp}.json`));
    }
    fs.writeFileSync(communityNotePath, JSON.stringify(communityNoteStatements, null, 2), "utf8");
    console.log(`Wrote Community Note Statements to: src/pages/CommunityNote/CommunityNoteStatements.json`);
  }

  console.log("\nDone!");
}

// Run the main function
main().catch(console.error);