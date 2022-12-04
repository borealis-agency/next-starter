const errorInNonDevelopmentEnvironment = process.env.NODE_ENV === "production" || process.env.CI === true || process.env.CI === "true" ? "error" : "warn";

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["next/core-web-vitals", "plugin:import/recommended"],
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
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
  rules: {
    "react/display-name": "off",
    "react/jsx-key": ["error", { checkFragmentShorthand: true }],
    "react/no-unescaped-entities": "off",
    // Prevents accidental double imports that might sometime occur with auto import
    "no-duplicate-imports": "error",
    // Turn of this JavaScript no-unused-vars in order no to trigger false positives in TypeScript code
    "no-unused-vars": "off",
    "no-useless-rename": [
      "error",
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    "object-shorthand": ["error", "properties"],
    // Error for this only in production or CI environment in order not to impact local development too much. Warning is enough in local development. CI will surface this if left in code.
    "@typescript-eslint/no-unused-vars": [
      errorInNonDevelopmentEnvironment,
      {
        // Allow unused variables with _ prefix (e.g. _index). Useful for callback function where positional arguments must be used, but maybe only second or third argument is of interest to you.
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
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
          'Boolean props must be prefixed with is/has/should/can/did/will. Prop "{{ propName }}" must be renamed to match this pattern, depending on the context. (e.g. isValid, hasItems)',
      },
    ],
    // Always require boolean props to have explicit true/false value. <MyComponent isBad /> vs <MyComponent isGood={true} />
    "react/jsx-boolean-value": ["error", "always"],
    // Error for this only in production or CI environment in order not to impact local development too much. Warning is enough in local development. CI will surface this if left in code.
    "no-restricted-syntax": [
      errorInNonDevelopmentEnvironment,
      {
        selector: "CallExpression[callee.object.name='console'][callee.property.name!=/^(error|warn)$/]",
        message: "Unexpected property on console object was called. Only console.error and console.warn are allowed.",
      },
    ],
    // Missing dependency array values for React hooks can lead to bugs. Warn in development to let the developer know, but error in non development environment to point this out and fail the build, CI check etc.
    "react-hooks/exhaustive-deps": errorInNonDevelopmentEnvironment,
    "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never", propElementValues: "always" }],
    curly: ["error", "all"],
  },
};
