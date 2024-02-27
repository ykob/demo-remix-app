/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'turbo',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
};
