module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  plugins: ["react", "jsx-a11y", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: ["./tsconfig.json"],
  },
  ignorePatterns: [".eslintrc.js", "perfect-scrollbar.esm.js"],
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/no-unsafe-assignment": 0,
        "@typescript-eslint/no-unsafe-member-access": 0,
        "@typescript-eslint/no-unsafe-argument": 0,
        "@typescript-eslint/no-unsafe-return": 0,
        "@typescript-eslint/restrict-template-expressions": 0,
        "@typescript-eslint/no-unsafe-call": 0,
      },
    },
  ],
  rules: {
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"],
    "no-console": ["warn"],
    "prefer-template": ["error"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
