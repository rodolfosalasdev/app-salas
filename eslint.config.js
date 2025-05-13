import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['node_modules'],
  },
  {
    files: ['**/*.ts', '**/*.js'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
    },
  },
];
