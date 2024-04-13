import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintConfigTurbo from 'eslint-config-turbo';
import tseslint from 'typescript-eslint';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigTurbo,
  eslintConfigPrettier,
  {
    languageOptions: {
      parser: tseslint.parser,
    },
  },
];
