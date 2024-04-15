import customConfigs from 'eslint-config-custom/web.js';

export default [
  ...customConfigs,
  {
    ignores: ['build', 'styled-system'],
  },
];
