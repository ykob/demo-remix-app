import customConfigs from 'eslint-config-custom/remix.js';

export default [
  ...customConfigs,
  {
    ignores: ['build', 'styled-system'],
  },
];
