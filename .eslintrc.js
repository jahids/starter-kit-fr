module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    "no-use-before-define": "error",
    "no-unused-vars": "off", // Set to "off" to disable the error
    "no-var": "off", // Set to "off" to disable the error
    "indent": ["error", 2],
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-vars": "off", // Turn off the error for unused destructured elements
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.config.js'],
      env: {
        node: true,
      },
    },
  ],
};
