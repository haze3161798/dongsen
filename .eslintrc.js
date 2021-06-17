module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier', 'prettier', 'plugin:prettier/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 'off',
  },
}
//npm i prettier prettier-eslint eslint-plugin-prettier eslint-config-prettier
