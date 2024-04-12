import eslint from '@eslint/js';
import eslintConfigRemix from '@remix-run/eslint-config';
import eslintConfigRemixNode from '@remix-run/eslint-config/node.js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintConfigTurbo from 'eslint-config-turbo';
import hooksPlugin from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigRemix,
  eslintConfigRemixNode,
  eslintConfigTurbo,
  eslintConfigPrettier,
  {
    ignores: ['build', 'styled-system'],
  },
  {
    languageOptions: {
      parser: tseslint.parser,
    },
    plugins: {
      'react-refresh': reactRefresh,
      'react-hooks': hooksPlugin,
    },
    rules: {
      ...hooksPlugin.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
