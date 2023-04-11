/* eslint-disable no-restricted-syntax */
import { spawnSync } from "child_process";
import { existsSync, writeFileSync } from "fs";
import { createRequire } from "module";
import path from "path";

import { ensureFolderExists, projectRootFolder } from "./utility.mjs";

const huskyFolderPath = path.resolve(projectRootFolder, ".husky");
const preCommitHookPath = path.resolve(huskyFolderPath, "pre-commit");
const isHuskyPreCommitFilePresent = existsSync(preCommitHookPath);

if (isHuskyPreCommitFilePresent) {
  console.log();
  console.log("husky pre-commit hook seems to be installed already. That means you probably ran this script before. No files were created or updated now.");
  console.log();
} else {
  const require = createRequire(import.meta.url);
  const packageJsonPath = path.resolve(projectRootFolder, "package.json");
  const packageJsonData = require(packageJsonPath);
  // Add husky script to scripts section of package.json
  packageJsonData.scripts["prepare"] = "husky install";

  ensureFolderExists(huskyFolderPath);
  writeFileSync(
    preCommitHookPath,
    `#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
`,
    { encoding: "utf-8" }
  );
  // Format package.json with 2 spaces when writing to it
  writeFileSync(packageJsonPath, JSON.stringify(packageJsonData, null, 2) + "\n", { encoding: "utf-8" });
  spawnSync("npm", ["install"], {
    cwd: projectRootFolder,
    // Show command output in terminal
    stdio: [process.stdin, process.stdout, process.stderr],
    encoding: "utf-8",
  });

  spawnSync("git", ["add", "-A"]);
  spawnSync("git", ["commit", "-m", "Initialize git hooks using husky"]);

  console.log();
  console.log("Initial setup script successfully completed!");
  console.log();
}
