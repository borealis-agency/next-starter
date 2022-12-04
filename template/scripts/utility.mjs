import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
export const projectRootFolder = path.resolve(currentDirectory, "../");

/**
 * Check if folder exists, if it doesn't create it.
 */
export const ensureFolderExists = (folderPath) => {
  if (!existsSync(folderPath)) {
    mkdirSync(folderPath);
  }
};

/**
 * Check if file exists, if it doesn't create it.
 */
export const ensureFileExists = (filePath) => {
  let didItExist = true;

  if (!existsSync(filePath)) {
    writeFileSync(filePath, "");
    didItExist = false;
  }

  return didItExist;
};

/**
 * Append a line of text to a file only if that file doesn't already contain that line of text. If file doesn't exist, it will be created.
 */
export const appendToFileOnce = (file, content) => {
  const didFileExist = ensureFileExists(file);
  const fileContents = readFileSync(file);

  if (!fileContents.includes(content)) {
    writeFileSync(file, `${fileContents}${didFileExist ? "\n" : ""}${content}`);
  }
};
