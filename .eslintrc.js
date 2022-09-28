module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": "off",
    "react/jsx-no-constructed-context-values": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    quotes: "off",
    "comma-dangle": "off",
    "object-curly-newline": "off",
    "react/jsx-wrap-multilines": "off",
    "react/jsx-one-expression-per-line": "off",
    "implicit-arrow-linebreak": "off",
  },
};
