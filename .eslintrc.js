module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'vue',
    '@typescript-eslint'
  ],
  parserOptions: {
     sourceType: 'module',
     parser: '@typescript-eslint/parser'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
  }
}