module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  plugins: ["jest", "jsx-a11y", "prettier", "react-hooks", "react"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  env: {
    node: true,
  },
  rules: {
    "react/jsx-filename-extension": [0],
    "no-multi-spaces": ["error"],
  },
};
