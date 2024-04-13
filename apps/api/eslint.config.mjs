import customConfigs from 'eslint-config-custom/api.js';

export default [
  ...customConfigs,
  {
    ignores: ['dist'],
  },
];
