module.exports = {
  extends: [
    "eslint:recommended",
    'plugin:@typescript-eslint/recommended'
  ],

  plugins: ['@typescript-eslint'],

  rules: {
    "@typescript-eslint/indent": ["error", 2]
  },
};
