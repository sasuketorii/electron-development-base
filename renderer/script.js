/**
 * SaaS Dashboard - メインスクリプト
 * contextBridge経由でElectron APIにアクセスし、ダッシュボード機能を管理する
 */

class DashboardApp {
  constructor() {
    this.isInitialized = false;
    this.systemInfo = null;
    
    this.init();
  }

  /**
   * アプリケーションを初期化する
   */
  async init() {
    try {
      await this.loadSystemInfo();
      this.setupEventListeners();
      this.setupQuickActions();
      this.isInitialized = true;
      
      console.log('SaaS Dashboard initialized successfully');
    } catch (error) {
      console.error('Failed to initialize dashboard:', error);
      this.showErrorState();
    }
  }

  /**
   * システム情報を読み込んで表示する
   */
  async loadSystemInfo() {
    try {
      // electronAPIが利用可能かチェック
      if (window.electronAPI) {
        const versions = window.electronAPI.getVersions();
        const platform = window.electronAPI.getPlatform();
        
        this.systemInfo = {
          versions,
          platform: this.getPlatformDisplayName(platform)
        };
        
        // バージョン情報を表示
        this.updateElementText('node-version', versions.node);
        this.updateElementText('chrome-version', versions.chrome);
        this.updateElementText('electron-version', versions.electron);
        this.updateElementText('platform', this.systemInfo.platform);
        
        // システム情報カードにアニメーション効果を追加
        this.animateSystemInfoCards();
        
      } else {
        console.error('Electron API が利用できません');
        this.showErrorMessage();
      }
    } catch (error) {
      console.error('システム情報の取得に失敗しました:', error);
      this.showErrorMessage();
    }
  }

  /**
   * 要素のテキストを安全に更新する
   * @param {string} elementId - 要素のID
   * @param {string} text - 設定するテキスト
   */
  updateElementText(elementId, text) {
    const element = document.getElementById(elementId);
    if (element) {
      // アニメーション効果付きで更新
      element.style.opacity = '0';
      setTimeout(() => {
        element.textContent = text;
        element.style.opacity = '1';
      }, 150);
    }
  }

  /**
   * プラットフォーム名を表示用に変換する
   * @param {string} platform - プラットフォーム名
   * @returns {string} 表示用プラットフォーム名
   */
  getPlatformDisplayName(platform) {
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
  showErrorMessage() {
    const errorElements = [
      'node-version',
      'chrome-version', 
      'electron-version',
      'platform'
    ];
    
    errorElements.forEach(id => {
      this.updateElementText(id, 'エラー');
    });
  }

  /**
   * エラー状態を表示する
   */
  showErrorState() {
    const dashboardGrid = document.querySelector('.dashboard-grid');
    if (dashboardGrid) {
      dashboardGrid.innerHTML = `
        <div class="card error-card">
          <div class="card-header">
            <h3 class="card-title">エラーが発生しました</h3>
            <span class="card-icon">❌</span>
          </div>
          <div class="card-content">
            <p>アプリケーションの初期化に失敗しました。</p>
            <button class="action-button primary" onclick="location.reload()">
              <span class="action-icon">🔄</span>
              <span class="action-text">再読み込み</span>
            </button>
          </div>
        </div>
      `;
    }
  }

  /**
   * イベントリスナーを設定する
   */
  setupEventListeners() {
    // 通知ボタンのクリック処理
    const notificationBtn = document.querySelector('.notification-btn');
    if (notificationBtn) {
      notificationBtn.addEventListener('click', () => {
        this.showNotifications();
      });
    }

    // ウィンドウリサイズ時の処理
    window.addEventListener('resize', () => {
      this.handleResize();
    });

    // キーボードショートカット
    document.addEventListener('keydown', (e) => {
      this.handleKeyboardShortcuts(e);
    });
  }

  /**
   * クイックアクションの設定
   */
  setupQuickActions() {
    const actionButtons = document.querySelectorAll('.action-button');
    
    actionButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const actionText = button.querySelector('.action-text')?.textContent;
        this.handleQuickAction(actionText, button);
      });
    });
  }

  /**
   * クイックアクションの処理
   */
  handleQuickAction(actionText, button) {
    // ボタンにローディング効果を追加
    this.addLoadingEffect(button);
    
    switch (actionText) {
      case '新規作成':
        this.createNewItem();
        break;
      case 'レポート生成':
        this.generateReport();
        break;
      case '設定':
        this.openSettings();
        break;
      default:
        console.log(`Unknown action: ${actionText}`);
    }
    
    // ローディング効果を削除
    setTimeout(() => {
      this.removeLoadingEffect(button);
    }, 1000);
  }

  /**
   * ローディング効果を追加
   */
  addLoadingEffect(button) {
    const originalContent = button.innerHTML;
    button.dataset.originalContent = originalContent;
    button.innerHTML = `
      <span class="action-icon">⏳</span>
      <span class="action-text">処理中...</span>
    `;
    button.disabled = true;
  }

  /**
   * ローディング効果を削除
   */
  removeLoadingEffect(button) {
    if (button.dataset.originalContent) {
      button.innerHTML = button.dataset.originalContent;
      delete button.dataset.originalContent;
    }
    button.disabled = false;
  }

  /**
   * 新規作成アクション
   */
  createNewItem() {
    console.log('新規作成アクション');
    if (window.tabManager) {
      window.tabManager.addNewTab('新規プロジェクト');
    }
  }

  /**
   * レポート生成アクション
   */
  generateReport() {
    console.log('レポート生成アクション');
    this.showNotification('レポート生成機能は開発中です', 'info');
  }

  /**
   * 設定を開く
   */
  openSettings() {
    console.log('設定を開く');
    if (window.sidebarManager) {
      window.sidebarManager.setActivePage('settings');
    }
  }

  /**
   * 通知を表示
   */
  showNotifications() {
    console.log('通知を表示');
    this.showNotification('新しい通知が3件あります', 'info');
  }

  /**
   * 通知メッセージを表示
   */
  showNotification(message, type = 'info') {
    if (window.userMenuManager) {
      window.userMenuManager.showNotification(message, type);
    }
  }

  /**
   * システム情報カードにアニメーション効果を追加
   */
  animateSystemInfoCards() {
    const infoItems = document.querySelectorAll('.info-item');
    
    infoItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.transform = 'translateY(0)';
        item.style.opacity = '1';
      }, index * 100);
    });
  }

  /**
   * ウィンドウリサイズの処理
   */
  handleResize() {
    // レスポンシブ対応の追加処理があれば実装
    console.log('Window resized');
  }

  /**
   * キーボードショートカットの処理
   */
  handleKeyboardShortcuts(e) {
    // Ctrl/Cmd + R: リフレッシュ
    if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
      e.preventDefault();
      this.refreshDashboard();
    }
    
    // F5: リフレッシュ
    if (e.key === 'F5') {
      e.preventDefault();
      this.refreshDashboard();
    }
  }

  /**
   * ダッシュボードをリフレッシュ
   */
  async refreshDashboard() {
    console.log('ダッシュボードをリフレッシュ');
    
    // ローディング状態を表示
    const systemInfoCard = document.querySelector('.system-info-card');
    if (systemInfoCard) {
      systemInfoCard.style.opacity = '0.5';
    }
    
    try {
      await this.loadSystemInfo();
      this.showNotification('ダッシュボードが更新されました', 'success');
    } catch (error) {
      this.showNotification('更新に失敗しました', 'error');
    } finally {
      if (systemInfoCard) {
        systemInfoCard.style.opacity = '1';
      }
    }
  }

  /**
   * アプリケーションの状態を取得
   */
  getAppState() {
    return {
      isInitialized: this.isInitialized,
      systemInfo: this.systemInfo,
      activeTab: window.tabManager?.getActiveTab(),
      sidebarCollapsed: window.sidebarManager?.isCollapsed
    };
  }
}

// DOMが読み込まれた後に初期化
document.addEventListener('DOMContentLoaded', () => {
  window.dashboardApp = new DashboardApp();
});

// グローバルエラーハンドリング
window.addEventListener('error', (e) => {
  console.error('Global error:', e.error);
  if (window.dashboardApp) {
    window.dashboardApp.showNotification('予期しないエラーが発生しました', 'error');
  }
});

// 未処理のPromise拒否をキャッチ
window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
  if (window.dashboardApp) {
    window.dashboardApp.showNotification('処理中にエラーが発生しました', 'error');
  }
}); 