module.exports = {
  extends: ['airbnb-typescript', 'plugin:prettier/recommended'],
  plugins: ['simple-import-sort'],
  rules: {
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'max-depth': ['error', { max: 3 }],
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'simple-import-sort/sort': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser:true,
    jest: true
  }
};