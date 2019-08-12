import resolve from "rollup-plugin-node-resolve";

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
  ],
};
