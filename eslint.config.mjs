import tanstackQuery from '@tanstack/eslint-plugin-query';
import { defineConfig, globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import reactPerf from 'eslint-plugin-react-perf';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

function withoutPlugins(config) {
  return Object.fromEntries(Object.entries(config).filter(([key]) => key !== 'plugins'));
}

const importRecommended = withoutPlugins(importPlugin.flatConfigs.recommended);
const importTypescript = withoutPlugins(importPlugin.flatConfigs.typescript);

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  importRecommended,
  importTypescript,
  reactPerf.configs.flat.recommended,
  ...tanstackQuery.configs['flat/recommended'],
  {
    rules: {
      '@typescript-eslint/array-type': ['error', { default: 'generic' }],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': 'error',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/purity': 'off',
      'react-hooks/refs': 'off',
      'react-hooks/set-state-in-effect': 'off',
    },
  },
  globalIgnores([
    '.husky/**',
    '.next/**',
    'node_modules/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'public/static/**',
    'src/assets/images/**',
    'src/assets/fonts/**',
    '**/*.json',
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.pdf',
  ]),
]);

export default eslintConfig;
