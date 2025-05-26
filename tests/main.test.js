/**
 * main.js のテスト
 */

const { app, BrowserWindow } = require('electron');

// Electronモジュールをモック化
jest.mock('electron', () => ({
  app: {
    whenReady: jest.fn(),
    on: jest.fn(),
    quit: jest.fn()
  },
  BrowserWindow: jest.fn().mockImplementation(() => ({
    loadFile: jest.fn(),
    webContents: {
      openDevTools: jest.fn()
    }
  }))
}));

describe('Main Process', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('アプリケーションが正常に初期化される', () => {
    // main.jsを読み込み
    require('../main.js');
    
    // app.whenReadyが呼ばれることを確認
    expect(app.whenReady).toHaveBeenCalled();
    
    // イベントリスナーが設定されることを確認
    expect(app.on).toHaveBeenCalledWith('window-all-closed', expect.any(Function));
  });

  test('BrowserWindowが正しい設定で作成される', () => {
    // main.jsを読み込み
    require('../main.js');
    
    // app.whenReadyのコールバックを実行
    const whenReadyCallback = app.whenReady.mock.calls[0][0];
    whenReadyCallback();
    
    // BrowserWindowが正しい設定で作成されることを確認
    expect(BrowserWindow).toHaveBeenCalledWith({
      width: 1200,
      height: 800,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        preload: expect.stringContaining('preload.js')
      }
    });
  });

  test('window-all-closedイベントでアプリケーションが終了する（非macOS）', () => {
    // プラットフォームをmacOS以外に設定
    const originalPlatform = process.platform;
    Object.defineProperty(process, 'platform', {
      value: 'win32'
    });

    // main.jsを読み込み
    require('../main.js');
    
    // window-all-closedイベントハンドラーを取得
    const windowAllClosedHandler = app.on.mock.calls
      .find(call => call[0] === 'window-all-closed')[1];
    
    // イベントハンドラーを実行
    windowAllClosedHandler();
    
    // app.quitが呼ばれることを確認
    expect(app.quit).toHaveBeenCalled();
    
    // プラットフォームを元に戻す
    Object.defineProperty(process, 'platform', {
      value: originalPlatform
    });
  });

  test('window-all-closedイベントでアプリケーションが終了しない（macOS）', () => {
    // プラットフォームをmacOSに設定
    const originalPlatform = process.platform;
    Object.defineProperty(process, 'platform', {
      value: 'darwin'
    });

    // main.jsを読み込み
    require('../main.js');
    
    // window-all-closedイベントハンドラーを取得
    const windowAllClosedHandler = app.on.mock.calls
      .find(call => call[0] === 'window-all-closed')[1];
    
    // イベントハンドラーを実行
    windowAllClosedHandler();
    
    // app.quitが呼ばれないことを確認
    expect(app.quit).not.toHaveBeenCalled();
    
    // プラットフォームを元に戻す
    Object.defineProperty(process, 'platform', {
      value: originalPlatform
    });
  });
}); 