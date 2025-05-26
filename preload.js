const { contextBridge } = require('electron');

/**
 * レンダラープロセスに安全なAPIを公開する
 */
contextBridge.exposeInMainWorld('electronAPI', {
  // Node.jsとChromiumのバージョン情報を取得
  getVersions: () => {
    return {
      node: process.versions.node,
      chrome: process.versions.chrome,
      electron: process.versions.electron
    };
  },
  
  // プラットフォーム情報を取得
  getPlatform: () => {
    return process.platform;
  }
}); 