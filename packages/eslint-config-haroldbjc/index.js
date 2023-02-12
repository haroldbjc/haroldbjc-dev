module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "turbo",
    "prettier",
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "warn",
  },
};
