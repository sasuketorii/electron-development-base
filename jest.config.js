module.exports = {
  // テスト環境
  testEnvironment: 'node',
  
  // テストファイルのパターン
  testMatch: [
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js'
  ],
  
  // カバレッジ設定
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  
  // カバレッジ対象ファイル
  collectCoverageFrom: [
    '*.js',
    'renderer/**/*.js',
    '!node_modules/**',
    '!coverage/**',
    '!dist/**',
    '!build/**'
  ],
  
  // カバレッジ閾値
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  
  // セットアップファイル
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  
  // モジュールパス
  moduleDirectories: ['node_modules', '<rootDir>'],
  
  // 変換設定
  transform: {},
  
  // テストタイムアウト
  testTimeout: 10000
}; 