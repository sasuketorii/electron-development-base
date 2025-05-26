/**
 * Jest テストセットアップファイル
 */

// グローバルなテスト設定
global.console = {
  ...console,
  // テスト中のログを制御
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn()
};

// テスト前の共通処理
beforeEach(() => {
  // モックをクリア
  jest.clearAllMocks();
});

// テスト後の共通処理
afterEach(() => {
  // 必要に応じてクリーンアップ処理を追加
}); 