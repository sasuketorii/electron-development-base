module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['node'],
  rules: {
    // コードスタイル
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'max-len': ['error', { 'code': 80 }],
    
    // ベストプラクティス
    'no-console': 'warn',
    'no-unused-vars': 'error',
    'no-undef': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    
    // Node.js固有
    'node/no-unpublished-require': 'off',
    'node/no-missing-require': 'error'
  },
  overrides: [
    {
      files: ['renderer/**/*.js'],
      env: {
        browser: true,
        node: false
      },
      rules: {
        'node/no-unsupported-features/es-syntax': 'off'
      }
    },
    {
      files: ['main.js', 'preload.js'],
      env: {
        node: true,
        browser: false
      }
    }
  ]
}; 