import ts from "@wessberg/rollup-plugin-ts";

import pkg from "./package.json";

export default {
	input: "./src/index.ts",
	output: [
		{
			file: pkg.exports.import,
			format: "esm",
		},
		{
			file: pkg.exports.require,
			format: "cjs",
		},
	],
	plugins: [ts()],
	external: ["react"],
};
