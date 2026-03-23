import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";
import prettierConfig from "eslint-config-prettier";

export default [
  { ignores: ["dist/", "node_modules/"] },

  js.configs.recommended,

  // React source files
  {
    files: ["src/**/*.{js,jsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // Core rules that catch TDZ / unused-import class bugs
      "no-unused-vars": ["error", {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
      }],
      "no-undef": "error",

      // React hooks — would have caught the PR #120 TDZ bug
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // React best practices (minimal set)
      "react/jsx-uses-vars": "error",
      "react/jsx-key": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/no-direct-mutation-state": "error",
      "react/react-in-jsx-scope": "off", // React 18 JSX runtime

      // Allow strategic console usage in error boundaries
      "no-console": "off",
    },
  },

  // Test files — node globals
  {
    files: ["__tests__/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // Config files — node globals
  {
    files: ["*.config.js", "*.config.mjs"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // Prettier compat — must be last
  prettierConfig,
];
