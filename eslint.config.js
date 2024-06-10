// eslint.config.js

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import react from 'eslint-plugin-react';

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  js.configs.recommended,
  react.configs.recommended,
  ...compat.extends('react-app', 'react-app/jest'),
  {
    rules: {
      'no-eval': 'error',
      // add other rules here
    },
  },
];

