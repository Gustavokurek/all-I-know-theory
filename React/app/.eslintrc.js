module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-unused-vars': 0,
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 0,
    'react-hooks/rules-of-hooks': 0,
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'default-param-last': 0,
  },
};
