/**
 * レンダラープロセスのメインスクリプト
 * contextBridge経由でElectron APIにアクセスする
 */

// DOMが読み込まれた後に実行
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

/**
 * アプリケーションを初期化する
 */
function initializeApp() {
  loadSystemInfo();
  setupEventListeners();
}

/**
 * システム情報を読み込んで表示する
 */
function loadSystemInfo() {
  try {
    // electronAPIが利用可能かチェック
    if (window.electronAPI) {
      const versions = window.electronAPI.getVersions();
      const platform = window.electronAPI.getPlatform();
      
      // バージョン情報を表示
      updateElementText('node-version', versions.node);
      updateElementText('chrome-version', versions.chrome);
      updateElementText('electron-version', versions.electron);
      updateElementText('platform', getPlatformDisplayName(platform));
    } else {
      console.error('Electron API が利用できません');
      showErrorMessage();
    }
  } catch (error) {
    console.error('システム情報の取得に失敗しました:', error);
    showErrorMessage();
  }
}

/**
 * 要素のテキストを安全に更新する
 * @param {string} elementId - 要素のID
 * @param {string} text - 設定するテキスト
 */
function updateElementText(elementId, text) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = text;
  }
}

/**
 * プラットフォーム名を表示用に変換する
 * @param {string} platform - プラットフォーム名
 * @returns {string} 表示用プラットフォーム名
 */
function getPlatformDisplayName(platform) {
  const platformMap = {
    'win32': 'Windows',
    'darwin': 'macOS',
    'linux': 'Linux'
  };
  
  return platformMap[platform] || platform;
}

/**
 * エラーメッセージを表示する
 */
function showErrorMessage() {
  const errorElements = [
    'node-version',
    'chrome-version', 
    'electron-version',
    'platform'
  ];
  
  errorElements.forEach(id => {
    updateElementText(id, 'エラー');
  });
}

/**
 * イベントリスナーを設定する
 */
function setupEventListeners() {
  // 将来的な機能拡張のためのプレースホルダー
  console.log('イベントリスナーを設定しました');
} 