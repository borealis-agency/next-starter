const fs = require("fs");
const path = require("path");
const childProcess = require("child_process");

const capitalizeWords = (str) => str.replace(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase());

const projectRootFolder = path.resolve(__dirname, "../../../");

const isModalUtilityPresent = fs.existsSync(path.resolve(projectRootFolder, "utility/modalRegister.ts"));
const packageJsonAsString = fs.readFileSync(path.resolve(projectRootFolder, "package.json")).toString();
const isModalLibraryInstalled = packageJsonAsString.includes("@ebay/nice-modal-react");
const isModalAlreadyInitialized = isModalUtilityPresent && isModalLibraryInstalled;

if (!isModalAlreadyInitialized) {
  console.log("First time generating a modal. Running initial modal setup...");
  console.log();

  childProcess.spawnSync("npm", ["install", "@ebay/nice-modal-react"], {
    cwd: projectRootFolder,
    // Show command output in terminal
    stdio: [process.stdin, process.stdout, process.stderr],
    encoding: "utf-8",
  });

  childProcess.spawnSync("npx", ["hygen", "modal-setup", "init"], {
    cwd: projectRootFolder,
    // Show command output in terminal
    stdio: [process.stdin, process.stdout, process.stderr],
    encoding: "utf-8",
  });
}

module.exports = {
  params: ({ args }) => {
    if (!args.name) {
      throw new Error(
        `No argument specified for this generator.\nPlease run this generator using "npx hygen component modal moduleName/modalName" command.\nYou are missing the "moduleName/modalName" part of the command.`
      );
    }

    const [moduleName, componentName] = args.name.split("/");

    if (!moduleName) {
      throw new Error("No module name specified. Please specify this generator argument as 'moduleName/modalName'");
    }

    if (!componentName) {
      throw new Error("No modal name specified. Please specify this generator argument as 'moduleName/modalName'");
    }

    return {
      moduleName,
      componentName: capitalizeWords(componentName),
    };
  },
};
