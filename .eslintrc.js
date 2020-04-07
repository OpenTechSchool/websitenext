module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    React: 'writable',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 'off',
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    'react/prop-types': 1,
    'no-unused-vars': 1,
    'no-prototype-builtins': 0,
    'jsx-a11y/anchor-is-valid': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
  settings: {
    react: 'detect',
  },
  overrides: [
    {
      files: ['*.js'],
      parser: 'babel-eslint',
      rules: { '@typescript-eslint/camelcase': 0 },
    },
  ],
}
