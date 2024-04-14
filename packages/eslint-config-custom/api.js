import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat({});

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends('plugin:turbo/recommended'),
  eslintConfigPrettier,
  {
    languageOptions: {
      parser: tseslint.parser,
    },
  },
];
