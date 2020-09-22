module.exports = {
  env: {
    // ESM Build
    esm: {
      exclude: ["node_modules/**"],
      presets: [
        [
          "@babel/preset-env",
          {
            modules: false, // Code is written as ES2015 - no need to transform modules
          },
        ],
        "@babel/preset-react",
      ],
      plugins: [
        "@babel/plugin-proposal-class-properties",

        [
          "transform-react-remove-prop-types",
          {
            mode: "unsafe-wrap",
            ignoreFilenames: ["node_modules"],
          },
        ],
      ],
    },

    // CommonJs build
    cjs: {
      exclude: ["node_modules/**"],
      presets: [
        [
          "@babel/preset-env",
          {
            modules: "commonjs", // Transform modules to CommonJs
          },
        ],
        "@babel/preset-react",
      ],
      plugins: [
        "@babel/plugin-proposal-class-properties",
        [
          "transform-react-remove-prop-types",
          {
            mode: "unsafe-wrap", // Wrap propTypes in condition to remove by webpack in production build
            ignoreFilenames: ["node_modules"],
          },
        ],
      ],
    },
  },
};
