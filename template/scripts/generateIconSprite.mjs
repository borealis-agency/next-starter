import fs from "fs";
import glob from "glob";
import path from "path";
import SVGSpriter from "svg-sprite";

import { appendToFileOnce, currentDirectory, ensureFolderExists, projectRootFolder } from "./utility.mjs";

const sourceIconsFolder = path.resolve(projectRootFolder, "./icons");

/**
 * Get actual file name of the SVG icon without the relative path before it.
 */
const getSvgFileName = (iconFilePath) => iconFilePath.replaceAll("./icons/", "");

/**
 * Get fully cleaned up icon name without path data, extension and potential redundant naming.
 */
const getFullyCleanIconName = (iconFilePath) => getSvgFileName(iconFilePath).replaceAll(".svg", "").replaceAll("icon-", "").replaceAll("icon", "");

/**
 * Get relative paths of all SVG icon files.
 */
const getAllSvgFilesPaths = () => glob.sync("./icons/**/*.svg");

/**
 * Generate Typescript string literal type from an array of strings.
 */
const generateStringLiteralType = (stringArray) => stringArray.map((item) => `"${item}"`).join(" | ");

/**
 * Compile SVG sprite and return the name of the file created.
 */
const compileSvgSprite = (spriterInstance) => {
  return new Promise((resolve) => {
    spriterInstance.compile((_err, result, data) => {
      for (const type in result.defs) {
        if (Object.hasOwnProperty.call(result.defs, type)) {
          const element = result.defs[type];

          fs.mkdirSync(path.dirname(element.path), { recursive: true });
          fs.writeFileSync(element.path, element.contents);
        }
      }

      resolve(data.defs.sprite);
    });
  });
};

// Remove existing icon sprite folder so that we don't commit multiple SVG sprite files.
// Only one icon sprite file should exist in the project
fs.rmSync(path.resolve(projectRootFolder, "public/icon-sprite"), { recursive: true, force: true });

const allFilePaths = getAllSvgFilesPaths();

if (allFilePaths.length === 0) {
  process.exitCode = 1;
  throw new Error(`No SVG icon files found. Either you didn't add any icons yet, they aren't SVG or not in proper folder (${sourceIconsFolder})`);
}

const redundantNamedIcons = allFilePaths.filter((x) => x.includes("./icons/icon")).map((y) => y.replace("./icons/", ""));

if (redundantNamedIcons.length > 0) {
  process.exitCode = 1;
  throw new Error(`At least one icon has the word "icon" in its name. This is redundant and not supported. Icons should be named by what they represent without the word "icon" being used. Using a name such as "icon-share" is redundant because files in "icons/" folder are obviously icons, no need to specify it in their name.
  Rename these icons:
${redundantNamedIcons.join("\n")}
  `);
}

const spriter = new SVGSpriter({
  dest: "./public/icon-sprite",
  mode: {
    defs: {
      dest: "",
      example: {
        dest: "icon-symbols-example.html",
      },
      bust: true,
      sprite: "icon-symbols.svg",
    },
  },
});

for (const iconRelativePath of allFilePaths) {
  spriter.add(path.resolve(currentDirectory, iconRelativePath), getSvgFileName(iconRelativePath), fs.readFileSync(iconRelativePath, "utf-8"));
}

const constantsFolderPath = path.resolve(projectRootFolder, "./constants");
// If constants folder doesn't exist, just create it because we need it to exist when we write our file
ensureFolderExists(constantsFolderPath);

const compiledSpriteName = await compileSvgSprite(spriter);
// Write a file that exports the public URL of the SVG sprite file
fs.writeFileSync(
  path.resolve(constantsFolderPath, "icon-sprite.ts"),
  `
// DO NOT EDIT IN ANY WAY!!
// Autogenerated file. All your changes will be overwritten next time this file is generated.
export const ICONS_SPRITE_URL = "/icon-sprite/${compiledSpriteName}";
`
);
appendToFileOnce(path.resolve(constantsFolderPath, "index.ts"), 'export * from "./icon-sprite";');

const typesFolderPath = path.resolve(projectRootFolder, "./types");
// If types folder doesn't exists, just create it because we need it to exist when we write our file
ensureFolderExists(typesFolderPath);

const allIconNames = allFilePaths.map((iconPath) => getFullyCleanIconName(iconPath)).sort();
// Write a file with a custom type for all available icons
fs.writeFileSync(
  path.resolve(typesFolderPath, "icon-sprite.ts"),
  `
// DO NOT EDIT IN ANY WAY!!
// Autogenerated file. All your changes will be overwritten next time this file is generated.
export type TIconName = ${generateStringLiteralType(allIconNames)};
`
);
appendToFileOnce(path.resolve(typesFolderPath, "index.ts"), 'export * from "./icon-sprite";');