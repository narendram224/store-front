import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import sonarjs from 'eslint-plugin-sonarjs';
import airbnbTypeScript from 'airbnb-typescript';
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  sonarjs.configs.recommended,
  airbnbTypeScript.configs.recommended,
  {
    ignores: [
      '.next',
      'docs',
      'node_modules',
      'coverage',
      'components/ui',
      'tailwind.config.ts',
      'hooks/*',
    ],
  },
  {
    Plugins: ['sonarjs', 'react', 'react-hooks', 'airbnbTypeScript'],
  },
];
