import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";

export default [
  // browser-friendly UMD build
  {
    input: "src/components/index.js",
    output: {
      name: "ChatUiKitReact",
      file: "dist/chat-ui-kit-react.min.js",
      format: "umd",
      noConflict: true,
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        "prop-types": "PropTypes",
      },
    },

    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: [".mjs", ".js", ".json", ".node", ".jsx"],
      }),
      commonjs(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-env", "@babel/preset-react"],
        babelHelpers: "bundled",
        compact: true,
        plugins: [
          "@babel/plugin-proposal-class-properties",
          [
            "transform-react-remove-prop-types",
            {
              mode: "remove",
              removeImport: true,
              ignoreFilenames: ["node_modules"],
            },
          ],
        ],
      }),
      terser(),
    ],
  },
];
