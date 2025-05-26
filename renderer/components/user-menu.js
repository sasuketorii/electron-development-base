/**
 * ユーザーメニュー機能の管理
 */

class UserMenuManager {
  constructor() {
    this.userMenu = document.getElementById('userMenu');
    this.userAvatar = document.getElementById('userAvatar');
    this.userDropdown = document.getElementById('userDropdown');
    
    this.isOpen = false;
    
    this.init();
  }

  /**
   * 初期化
   */
  init() {
    this.setupEventListeners();
  }

  /**
   * イベントリスナーの設定
   */
  setupEventListeners() {
    // ユーザーアバターのクリック
    this.userAvatar.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleMenu();
    });

    // ドロップダウンメニューのクリック
    this.userDropdown.addEventListener('click', (e) => {
      const dropdownItem = e.target.closest('.dropdown-item');
      if (dropdownItem) {
        this.handleMenuItemClick(dropdownItem);
      }
    });

    // 外部クリックでメニューを閉じる
    document.addEventListener('click', (e) => {
      if (!this.userMenu.contains(e.target) && this.isOpen) {
        this.closeMenu();
      }
    });

    // ESCキーでメニューを閉じる
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeMenu();
      }
    });
  }

  /**
   * メニューの開閉切り替え
   */
  toggleMenu() {
    if (this.isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  /**
   * メニューを開く
   */
  openMenu() {
    this.userMenu.classList.add('open');
    this.isOpen = true;
    
    // アクセシビリティ
    this.userDropdown.setAttribute('aria-hidden', 'false');
    this.userAvatar.setAttribute('aria-expanded', 'true');
  }

  /**
   * メニューを閉じる
   */
  closeMenu() {
    this.userMenu.classList.remove('open');
    this.isOpen = false;
    
    // アクセシビリティ
    this.userDropdown.setAttribute('aria-hidden', 'true');
    this.userAvatar.setAttribute('aria-expanded', 'false');
  }

  /**
   * メニューアイテムのクリック処理
   */
  handleMenuItemClick(item) {
    const text = item.textContent.trim();
    
    // メニューを閉じる
    this.closeMenu();
    
    // アクションに応じた処理
    switch (true) {
      case text.includes('プロフィール'):
        this.showProfile();
        break;
      case text.includes('アカウント設定'):
        this.showAccountSettings();
        break;
      case text.includes('請求設定'):
        this.showBillingSettings();
        break;
      case text.includes('ヘルプ'):
        this.showHelp();
        break;
      case text.includes('ログアウト'):
        this.logout();
        break;
      default:
        console.log(`Unknown menu item: ${text}`);
    }
  }

  /**
   * プロフィール表示
   */
  showProfile() {
    console.log('プロフィールを表示');
    // 将来的にプロフィールモーダルやページを表示
    this.showNotification('プロフィール機能は開発中です', 'info');
  }

  /**
   * アカウント設定表示
   */
  showAccountSettings() {
    console.log('アカウント設定を表示');
    // 将来的に設定ページを表示
    this.showNotification('アカウント設定機能は開発中です', 'info');
  }

  /**
   * 請求設定表示
   */
  showBillingSettings() {
    console.log('請求設定を表示');
    // 将来的に請求設定ページを表示
    this.showNotification('請求設定機能は開発中です', 'info');
  }

  /**
   * ヘルプ表示
   */
  showHelp() {
    console.log('ヘルプを表示');
    // 将来的にヘルプページやモーダルを表示
    this.showNotification('ヘルプ機能は開発中です', 'info');
  }

  /**
   * ログアウト処理
   */
  logout() {
    const confirmed = confirm('ログアウトしますか？');
    if (confirmed) {
      console.log('ログアウト処理');
      // 将来的にログアウト処理を実装
      this.showNotification('ログアウト機能は開発中です', 'warning');
    }
  }

  /**
   * 通知を表示
   */
  showNotification(message, type = 'info') {
    // 既存の通知を削除
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    // 通知要素を作成
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-icon">${this.getNotificationIcon(type)}</span>
        <span class="notification-message">${message}</span>
        <button class="notification-close">×</button>
      </div>
    `;

    // スタイルを設定
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: var(--bg-primary);
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius);
      box-shadow: var(--shadow-lg);
      padding: 16px;
      z-index: 10000;
      max-width: 300px;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.3s ease;
    `;

    // DOMに追加
    document.body.appendChild(notification);

    // アニメーション
    setTimeout(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateX(0)';
    }, 10);

    // 閉じるボタンの処理
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
      this.hideNotification(notification);
    });

    // 自動で閉じる
    setTimeout(() => {
      if (notification.parentNode) {
        this.hideNotification(notification);
      }
    }, 5000);
  }

  /**
   * 通知を非表示
   */
  hideNotification(notification) {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  }

  /**
   * 通知アイコンを取得
   */
  getNotificationIcon(type) {
    const icons = {
      info: 'ℹ️',
      success: '✅',
      warning: '⚠️',
      error: '❌'
    };
    return icons[type] || icons.info;
  }

  /**
   * ユーザー情報を更新
   */
  updateUserInfo(userInfo) {
    const userName = this.userMenu.querySelector('.user-name');
    const userEmail = this.userMenu.querySelector('.user-email');
    const userAvatar = this.userMenu.querySelector('.user-avatar img');

    if (userName && userInfo.name) {
      userName.textContent = userInfo.name;
    }

    if (userEmail && userInfo.email) {
      userEmail.textContent = userInfo.email;
    }

    if (userAvatar && userInfo.avatar) {
      userAvatar.src = userInfo.avatar;
    }
  }
}

// DOMが読み込まれた後に初期化
document.addEventListener('DOMContentLoaded', () => {
  window.userMenuManager = new UserMenuManager();
}); 