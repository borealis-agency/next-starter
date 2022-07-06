module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: "next/core-web-vitals",
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/display-name": "off",
    // Prevents accidental double imports that might sometime occur with auto import
    "no-duplicate-imports": "error",
    // Turn of this JavaScript no-unused-vars in order no to trigger false positives in TypeScript code
    "no-unused-vars": "off",
    // Error for this only in production or CI environment in order not to impact local development too much. Warning is enough in local development. CI will surface this if left in code.
    "@typescript-eslint/no-unused-vars": [
      process.env.NODE_ENV === "production" || process.env.CI === true || process.env.CI === "true" ? "error" : "warn",
      {
        // Allow unused variables with _ prefix (e.g. _index). Useful for callback function where positional arguments must be used, but maybe only second or third argument is of interest to you.
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    // Error for this only in production or CI environment in order not to impact local development too much. Warning is enough in local development. CI will surface this if left in code.
    "no-restricted-syntax": [
      process.env.NODE_ENV === "production" || process.env.CI === true || process.env.CI === "true" ? "error" : "warn",
      {
        selector: "CallExpression[callee.object.name='console'][callee.property.name!=/^(error|warn)$/]",
        message: "Unexpected property on console object was called. Only console.error or console.warn are allowed.",
      },
    ],
    curly: ["error", "all"],
  },
};
