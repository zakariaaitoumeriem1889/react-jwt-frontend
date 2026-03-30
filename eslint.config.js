import js from "@eslint/js";
import tsEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
    { ignores: ["dist", "node_modules"] },
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: { jsx: true }
            },
            globals: globals.browser
        },
        plugins: {
            react: react,
            "react-hooks": reactHooks,
            "@typescript-eslint": tsEslint
        },
        rules: {
            ...js.configs.recommended.rules,
            ...tsEslint.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            "@typescript-eslint/no-unused-vars": [
                "warn",
                { argsIgnorePattern: "^_" }
            ],
            "react/jsx-no-target-blank": "off",
            "react/prop-types": "off",
            "react/react-in-jsx-scope": "off",
            "@typescript-eslint/no-explicit-any": "off"
        },
        settings: { react: { version: "detect" } }
    }
]);
