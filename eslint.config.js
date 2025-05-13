export default [
  {
    ignores: ['node_modules'],
  },
  {
    files: ['**/*.ts', '**/*.js'],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error',
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
    },
  },
];
