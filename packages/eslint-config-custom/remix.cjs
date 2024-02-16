/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    'turbo',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
};
