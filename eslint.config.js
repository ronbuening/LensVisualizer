import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";
import prettierConfig from "eslint-config-prettier";
import tseslint from "typescript-eslint";

export default [
  { ignores: ["dist/", "dist-server/", "node_modules/", "src/lens-data/*.data.js"] },

  js.configs.recommended,

  // TypeScript source files (TS/TSX)
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // Use TS-aware no-unused-vars instead of base rule
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],

      // Disable no-undef for TS files — TypeScript handles this better
      "no-undef": "off",

      // Type-aware rules
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "warn",

      // React hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // React best practices (minimal set)
      "react/jsx-uses-vars": "error",
      "react/jsx-key": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/no-direct-mutation-state": "error",
      "react/react-in-jsx-scope": "off",

      "no-console": "off",

      // Guard CLAUDE.md working rules that are otherwise convention-only:
      // react-markdown renders only through the shared ThemedMarkdown wrapper,
      // and styling is inline-only (the katex stylesheet in ThemedMarkdown is
      // the sole exception; the carve-out is a separate config block below).
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "react-markdown",
              message: "Render markdown through src/components/markdown/ThemedMarkdown.tsx instead.",
            },
          ],
          patterns: [
            {
              group: ["*.css", "**/*.css", "*.scss", "**/*.scss"],
              message: "Inline styles only — no CSS files (see agent_docs/code_conventions.md).",
            },
          ],
        },
      ],
    },
  },

  // ThemedMarkdown is the one component allowed to import react-markdown, and
  // the KaTeX stylesheet lives here so it ships with the code-split markdown
  // chunk instead of the entry bundle (prerender.mjs links it directly into
  // math pages for the no-JS case).
  {
    files: ["src/components/markdown/ThemedMarkdown.tsx"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["*.css", "**/*.css", "*.scss", "**/*.scss", "!katex/dist/katex.min.css"],
              message: "Inline styles only — no CSS files (see agent_docs/code_conventions.md).",
            },
          ],
        },
      ],
    },
  },

  // Fisheye/ultra-wide field launch must go through the projection module
  // (src/optics/field/projection.ts + solveChiefRay); inlined Math.tan(field)
  // silently assumes a rectilinear projection. Non-field-launch tangents
  // (rim-slope geometry, vignetting bisection) carry per-line disables.
  {
    files: ["src/optics/**/*.ts"],
    ignores: ["src/optics/field/projection.ts"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: 'CallExpression[callee.object.name="Math"][callee.property.name="tan"]',
          message:
            "Math.tan in src/optics/ usually means an inlined rectilinear field launch — use src/optics/field/projection.ts / solveChiefRay. If this tangent is not a field launch, add a line disable explaining why.",
        },
      ],
    },
  },

  // TypeScript test files
  {
    files: ["__tests__/**/*.ts"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
      "no-undef": "off",
    },
  },

  // Config files and build scripts — node globals
  {
    files: ["*.config.js", "*.config.mjs", "scripts/**/*.mjs"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // Prettier compat — must be last
  prettierConfig,
];
