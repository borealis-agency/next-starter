import fs from "fs";
import glob from "glob";
import path from "path";
import SVGSpriter from "svg-sprite";
import { fileURLToPath } from "url";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const iconsFolder = path.resolve(currentDirectory, "./icons");

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
 * Compile SVG sprite and return the name of the file created.
 */
const compileSvgSprite = (spriterInstance) => {
  return new Promise(resolve =>  {
    spriterInstance.compile((err, result, data) => {
      for (const type in result.defs) {
        if (Object.hasOwnProperty.call(result.defs, type)) {
          const element = result.defs[type];

          fs.mkdirSync(path.dirname(element.path), { recursive: true });
          fs.writeFileSync(element.path, element.contents);
        }
      }

      resolve(data.defs.sprite);
    });
  })
};

const allFilePaths = getAllSvgFilesPaths();

if (allFilePaths.length === 0) {
  process.exitCode = 1;
  throw new Error(`No SVG icon files found. Either you didn't add any icons yet, they aren't SVG or not in proper folder (${iconsFolder})`);
}

const spriter = new SVGSpriter({
  dest: "./public/icons",
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

const _allIconNames = allFilePaths.map((iconPath) => getFullyCleanIconName(iconPath)).sort();
const _compiledSpriteName = await compileSvgSprite(spriter);
