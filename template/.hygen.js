const fs = require("node:fs");
const ejs = require("ejs");

module.exports = {
	helpers: {
		render: (path, data) => {
			let template;
			template = fs.readFileSync(path, "utf8");
			template = template.replace(/^---\n(.*)\n---/g, "");

			const output = ejs.render(template, data);
			return output;
		},
	},
};
