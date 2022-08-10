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
    project: ["./tsconfig.eslint.json"],
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
    "@typescript-eslint/naming-convention": [
      process.env.NODE_ENV === "production" || process.env.CI === true || process.env.CI === "true" ? "error" : "warn",
      {
        // Force most variables and properties to use PascalCase or camelCase
        // We would force camelCase case here exclusively, but this cannot work since React components have to be PascalCase
        selector: ["variable", "function", "objectLiteralProperty", "objectLiteralMethod"],
        types: ["function"],
        format: ["StrictPascalCase", "strictCamelCase"],
        leadingUnderscore: "allow",
      },
      {
        // Force boolean variables to start prefixed with one of prefixes listed here
        // This is in order to ensure readable booleans that convey meaning (e.g. isValid, hasItems, willUpdate etc.)
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "should", "has", "can", "did", "will"],
        leadingUnderscore: "allow",
      },
      {
        // Don't enforce destructured variables to have a certain naming convention
        // We might not control the variable name directly so we don't need to enforce it in order to save us some headache
        selector: "variable",
        modifiers: ["destructured"],
        format: null,
      },
      {
        // Force types to use PascalCase naming convention
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
    "react/boolean-prop-naming": [
      "error",
      {
        rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+",
        message:
          "Boolean props must be prefixed with is/has/should/can/did/will. Prop ({{ propName }}) must be renamed to match this pattern, depending on the context. (e.g. isValid, hasItems)",
      },
    ],
    "react/jsx-boolean-value": ["error", "always"],
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
