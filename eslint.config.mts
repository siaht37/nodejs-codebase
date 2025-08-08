import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,ts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node },
  },
  // @ts-expect-error bypass lint
  tseslint.configs.recommended,

  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'always',
          semi: true,
          trailingComma: 'es5',
          endOfLine: 'auto',
          useTabs: false,
          tabWidth: 10,
          singleQuote: true,
          printWidth: 80,
          jsxSingleQuote: true,
        },
      ],
    },
    ignores: ['**/node_modules/', '**/dist/'],
  },
]);
