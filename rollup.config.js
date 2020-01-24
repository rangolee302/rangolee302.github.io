import resolve from "rollup-plugin-node-resolve";
import commonJS from "rollup-plugin-commonjs"

export default {
  input: "./src/main.js",
  output: {
    file: "./dist/bundle.js",
    format: "iife",
    name: "bundle",
    globals: {
      "three": "three",
    },
  },
  plugins: [
    resolve(),
    commonJS(),
  ],
};
