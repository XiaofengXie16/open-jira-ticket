module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  plugins: ['jest', 'jsx-a11y', 'prettier', 'react-hooks', 'react'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': [0],
    'no-multi-spaces': ['error'],
    // Prettier Rules
    'prettier/prettier': ['error', { arrowParens: 'avoid', printWidth: 120, singleQuote: true, trailingComma: 'es5' }],
  },
};
