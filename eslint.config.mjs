import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/.eslintrc.js", "**/perfect-scrollbar.esm.js"],
}, ...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
)), {
    plugins: {
        react: fixupPluginRules(react),
        "jsx-a11y": fixupPluginRules(jsxA11Y),
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.commonjs,
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: 6,
        sourceType: "module",

        parserOptions: {
            tsconfigRootDir: process.cwd(),

            ecmaFeatures: {
                jsx: true,
            },

            project: ["./tsconfig.json"],
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "linebreak-style": ["error", "unix"],
        semi: ["error", "always"],
        "no-console": ["warn"],
        "prefer-template": ["error"],
    },
}, {
    files: ["**/*.js", "**/*.jsx"],

    rules: {
        "@typescript-eslint/no-unsafe-assignment": 0,
        "@typescript-eslint/no-unsafe-member-access": 0,
        "@typescript-eslint/no-unsafe-argument": 0,
        "@typescript-eslint/no-unsafe-return": 0,
        "@typescript-eslint/restrict-template-expressions": 0,
        "@typescript-eslint/no-unsafe-call": 0,
    },
}, {
	files: ["./*.config.*"],
	rules: {
		"@typescript-eslint/no-unsafe-assignment": "off"
	}
}];