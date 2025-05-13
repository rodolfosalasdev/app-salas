import prettierPlugin from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['node_modules']
  },
  {
    files: ['**/*.ts', '**/*.js'],
    plugins: {
      prettier: prettierPlugin
    },
    languageOptions: {
      parser: tsParser,
      sourceType: 'module'
    },
    rules: {
      'prettier/prettier': ['error']
    },
    settings: eslintConfigPrettier // Desativa regras de formatação do ESLint
  }
];
