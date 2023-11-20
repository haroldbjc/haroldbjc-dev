module.exports = {
  extends: [
    "plugin:astro/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    // ...
  ],
  rules: {
    // Typescript rules
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/require-await": "error",

    // Import rules
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
          },
        ],
      },
    ],

    // Prettier rules
    "prettier/prettier": "warn",
  },
};
