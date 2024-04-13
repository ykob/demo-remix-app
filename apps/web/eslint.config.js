import customConfigs from 'eslint-config-custom/remix';

export default [
  ...customConfigs,
  {
    ignores: ['build', 'styled-system'],
  },
];
