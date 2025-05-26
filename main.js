const { app, BrowserWindow } = require('electron');
const path = require('path');

/**
 * メインウィンドウを作成する
 */
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      // セキュリティのためnodeIntegrationを無効化
      nodeIntegration: false,
      // contextIsolationを有効化
      contextIsolation: true,
      // preloadスクリプトを指定
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // 開発環境では開発者ツールを開く
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.loadFile('renderer/index.html');
}

// アプリケーションの準備が完了したらウィンドウを作成
app.whenReady().then(() => {
  createWindow();

  // macOSでは、ドックアイコンがクリックされた時に新しいウィンドウを作成
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// すべてのウィンドウが閉じられた時の処理
app.on('window-all-closed', () => {
  // macOS以外ではアプリケーションを終了
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

