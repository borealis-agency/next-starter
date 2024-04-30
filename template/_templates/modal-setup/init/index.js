/* eslint-disable no-restricted-syntax */
const path = require("node:path");
const childProcess = require("node:child_process");

const projectRootFolder = path.resolve(__dirname, "../../../");

console.log("Running initial modal setup...");
console.log();

childProcess.spawnSync("npm", ["install", "@ebay/nice-modal-react"], {
	cwd: projectRootFolder,
	// Show command output in terminal
	stdio: [process.stdin, process.stdout, process.stderr],
	encoding: "utf-8",
});

module.exports = {
	params: () => {
		return {};
	},
};
