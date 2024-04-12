import customConfigs from 'eslint-config-custom/db.js';

export default [
  ...customConfigs,
  {
    ignores: ['dist'],
  },
];
