'use strict';

const OFF = 0;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'next/core-web-vitals',
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'simple-import-sort', 'import'],
  rules: {
    'object-curly-spacing': [ERROR, 'always'],
    'arrow-spacing': ERROR,
    'brace-style': ERROR,
    'comma-dangle': [ERROR, 'always-multiline'],
    indent: [ERROR, 2],
    'linebreak-style': [ERROR, 'unix'],
    quotes: [ERROR, 'single'],
    semi: [ERROR, 'always'],
    'no-duplicate-imports': [ERROR, { includeExports: true }],
    'no-multi-spaces': ERROR,
    'no-multiple-empty-lines': ERROR,
    'no-use-before-define': ERROR,
    'no-param-reassign': ['error', { props: true }],
    'no-console': ERROR,
    'max-len': [
      ERROR,
      80,
      {
        ignoreComments: true,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'object-curly-newline': [
      ERROR,
      {
        minProperties: 4,
        multiline: true,
      },
    ],
    'prefer-object-spread': ERROR,
    'import/newline-after-import': [ERROR, { count: 2 }],
    'react/react-in-jsx-scope': OFF,
    'react/jsx-uses-react': OFF,
    'react/jsx-max-props-per-line': [ERROR, { maximum: 2 }],
    'react/jsx-indent-props': [ERROR, 2],
    'react/jsx-first-prop-new-line': [ERROR, 'multiline'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
