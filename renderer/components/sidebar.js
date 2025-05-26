/**
 * サイドバー機能の管理
 */

class SidebarManager {
  constructor() {
    this.sidebar = document.getElementById('sidebar');
    this.sidebarToggle = document.getElementById('sidebarToggle');
    this.mainContent = document.querySelector('.main-content');
    this.navItems = document.querySelectorAll('.nav-item');
    this.pageTitle = document.getElementById('pageTitle');
    
    this.isCollapsed = false;
    this.isMobile = window.innerWidth <= 768;
    
    this.init();
  }

  /**
   * 初期化
   */
  init() {
    this.setupEventListeners();
    this.setupTooltips();
    this.handleResize();
    
    // 初期ページの設定
    this.setActivePage('dashboard');
  }

  /**
   * イベントリスナーの設定
   */
  setupEventListeners() {
    // サイドバートグルボタン
    this.sidebarToggle.addEventListener('click', () => {
      this.toggleSidebar();
    });

    // ナビゲーションアイテム
    this.navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const page = item.dataset.page;
        this.setActivePage(page);
      });
    });

    // ウィンドウリサイズ
    window.addEventListener('resize', () => {
      this.handleResize();
    });

    // モバイルでのオーバーレイクリック
    document.addEventListener('click', (e) => {
      if (this.isMobile && 
          !this.sidebar.contains(e.target) && 
          this.sidebar.classList.contains('mobile-open')) {
        this.closeMobileSidebar();
      }
    });
  }

  /**
   * ツールチップの設定
   */
  setupTooltips() {
    this.navItems.forEach(item => {
      const text = item.querySelector('.nav-text').textContent;
      item.setAttribute('data-tooltip', text);
    });
  }

  /**
   * サイドバーの開閉
   */
  toggleSidebar() {
    if (this.isMobile) {
      this.toggleMobileSidebar();
    } else {
      this.toggleDesktopSidebar();
    }
  }

  /**
   * デスクトップ版サイドバーの開閉
   */
  toggleDesktopSidebar() {
    this.isCollapsed = !this.isCollapsed;
    
    if (this.isCollapsed) {
      this.sidebar.classList.add('collapsed');
      this.mainContent.classList.add('sidebar-collapsed');
    } else {
      this.sidebar.classList.remove('collapsed');
      this.mainContent.classList.remove('sidebar-collapsed');
    }

    // ローカルストレージに状態を保存
    localStorage.setItem('sidebarCollapsed', this.isCollapsed);
  }

  /**
   * モバイル版サイドバーの開閉
   */
  toggleMobileSidebar() {
    const isOpen = this.sidebar.classList.contains('mobile-open');
    
    if (isOpen) {
      this.closeMobileSidebar();
    } else {
      this.openMobileSidebar();
    }
  }

  /**
   * モバイル版サイドバーを開く
   */
  openMobileSidebar() {
    this.sidebar.classList.add('mobile-open');
    this.createOverlay();
  }

  /**
   * モバイル版サイドバーを閉じる
   */
  closeMobileSidebar() {
    this.sidebar.classList.remove('mobile-open');
    this.removeOverlay();
  }

  /**
   * オーバーレイの作成
   */
  createOverlay() {
    if (!document.querySelector('.sidebar-overlay')) {
      const overlay = document.createElement('div');
      overlay.className = 'sidebar-overlay active';
      document.body.appendChild(overlay);
      
      overlay.addEventListener('click', () => {
        this.closeMobileSidebar();
      });
    }
  }

  /**
   * オーバーレイの削除
   */
  removeOverlay() {
    const overlay = document.querySelector('.sidebar-overlay');
    if (overlay) {
      overlay.remove();
    }
  }

  /**
   * アクティブページの設定
   */
  setActivePage(page) {
    // 現在のアクティブアイテムを削除
    this.navItems.forEach(item => {
      item.classList.remove('active');
    });

    // 新しいアクティブアイテムを設定
    const activeItem = document.querySelector(`[data-page="${page}"]`);
    if (activeItem) {
      activeItem.classList.add('active');
      
      // ページタイトルを更新
      const pageText = activeItem.querySelector('.nav-text').textContent;
      this.pageTitle.textContent = pageText;
    }

    // ページコンテンツの切り替え（将来の実装用）
    this.switchPageContent(page);
  }

  /**
   * ページコンテンツの切り替え
   */
  switchPageContent(page) {
    // 現在は概要タブのみ表示
    // 将来的に他のページコンテンツを追加する際に実装
    console.log(`Switching to page: ${page}`);
  }

  /**
   * ウィンドウリサイズの処理
   */
  handleResize() {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth <= 768;

    // モバイル ⇔ デスクトップの切り替え
    if (wasMobile !== this.isMobile) {
      if (this.isMobile) {
        // デスクトップ → モバイル
        this.sidebar.classList.remove('collapsed');
        this.mainContent.classList.remove('sidebar-collapsed');
        this.removeOverlay();
      } else {
        // モバイル → デスクトップ
        this.sidebar.classList.remove('mobile-open');
        this.removeOverlay();
        
        // 保存された状態を復元
        const savedState = localStorage.getItem('sidebarCollapsed');
        if (savedState === 'true') {
          this.isCollapsed = true;
          this.sidebar.classList.add('collapsed');
          this.mainContent.classList.add('sidebar-collapsed');
        }
      }
    }
  }

  /**
   * 保存された状態の復元
   */
  restoreState() {
    if (!this.isMobile) {
      const savedState = localStorage.getItem('sidebarCollapsed');
      if (savedState === 'true') {
        this.isCollapsed = true;
        this.sidebar.classList.add('collapsed');
        this.mainContent.classList.add('sidebar-collapsed');
      }
    }
  }
}

// DOMが読み込まれた後に初期化
document.addEventListener('DOMContentLoaded', () => {
  window.sidebarManager = new SidebarManager();
}); 