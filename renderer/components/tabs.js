/**
 * タブ機能の管理
 */

class TabManager {
  constructor() {
    this.tabsContainer = document.getElementById('tabs');
    this.addTabBtn = document.getElementById('addTabBtn');
    this.contentArea = document.querySelector('.content-area');
    
    this.tabs = [];
    this.activeTabId = null;
    this.tabCounter = 1;
    
    this.init();
  }

  /**
   * 初期化
   */
  init() {
    this.setupEventListeners();
    this.initializeDefaultTab();
  }

  /**
   * イベントリスナーの設定
   */
  setupEventListeners() {
    // 新しいタブボタン
    this.addTabBtn.addEventListener('click', () => {
      this.addNewTab();
    });

    // タブコンテナでのイベント委譲
    this.tabsContainer.addEventListener('click', (e) => {
      const tab = e.target.closest('.tab');
      if (!tab) return;

      if (e.target.classList.contains('tab-close')) {
        // タブを閉じる
        e.stopPropagation();
        this.closeTab(tab.dataset.tabId);
      } else {
        // タブを選択
        this.selectTab(tab.dataset.tabId);
      }
    });

    // タブの右クリックメニュー
    this.tabsContainer.addEventListener('contextmenu', (e) => {
      const tab = e.target.closest('.tab');
      if (tab) {
        e.preventDefault();
        this.showContextMenu(e, tab.dataset.tabId);
      }
    });

    // キーボードショートカット
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 't':
            e.preventDefault();
            this.addNewTab();
            break;
          case 'w':
            e.preventDefault();
            if (this.tabs.length > 1) {
              this.closeTab(this.activeTabId);
            }
            break;
        }
      }
    });
  }

  /**
   * デフォルトタブの初期化
   */
  initializeDefaultTab() {
    const defaultTab = document.querySelector('.tab[data-tab="overview"]');
    if (defaultTab) {
      const tabId = 'tab-overview';
      defaultTab.dataset.tabId = tabId;
      
      this.tabs.push({
        id: tabId,
        title: '概要',
        element: defaultTab,
        contentElement: document.getElementById('tab-overview')
      });
      
      this.activeTabId = tabId;
      this.selectTab(tabId);
    }
  }

  /**
   * 新しいタブを追加
   */
  addNewTab(title = null, content = null) {
    const tabId = `tab-${Date.now()}`;
    const tabTitle = title || `新しいタブ ${this.tabCounter++}`;
    
    // タブ要素を作成
    const tabElement = this.createTabElement(tabId, tabTitle);
    
    // コンテンツ要素を作成
    const contentElement = this.createContentElement(tabId, content);
    
    // タブを配列に追加
    this.tabs.push({
      id: tabId,
      title: tabTitle,
      element: tabElement,
      contentElement: contentElement
    });

    // DOMに追加
    this.tabsContainer.appendChild(tabElement);
    this.contentArea.appendChild(contentElement);

    // 新しいタブを選択
    this.selectTab(tabId);

    // アニメーション
    tabElement.classList.add('new');
    setTimeout(() => {
      tabElement.classList.remove('new');
    }, 300);

    return tabId;
  }

  /**
   * タブ要素を作成
   */
  createTabElement(tabId, title) {
    const tab = document.createElement('div');
    tab.className = 'tab';
    tab.dataset.tabId = tabId;
    
    tab.innerHTML = `
      <span class="tab-title">${title}</span>
      <button class="tab-close">×</button>
    `;
    
    return tab;
  }

  /**
   * コンテンツ要素を作成
   */
  createContentElement(tabId, content = null) {
    const contentElement = document.createElement('div');
    contentElement.className = 'tab-content';
    contentElement.id = tabId;
    
    if (content) {
      contentElement.innerHTML = content;
    } else {
      contentElement.innerHTML = `
        <div class="page-content">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">新しいページ</h3>
              <span class="card-icon">📄</span>
            </div>
            <div class="card-content">
              <p>このページは開発中です。</p>
            </div>
          </div>
        </div>
      `;
    }
    
    return contentElement;
  }

  /**
   * タブを選択
   */
  selectTab(tabId) {
    // 全てのタブを非アクティブに
    this.tabs.forEach(tab => {
      tab.element.classList.remove('active');
      tab.contentElement.classList.remove('active');
    });

    // 指定されたタブをアクティブに
    const selectedTab = this.tabs.find(tab => tab.id === tabId);
    if (selectedTab) {
      selectedTab.element.classList.add('active');
      selectedTab.contentElement.classList.add('active');
      this.activeTabId = tabId;
    }
  }

  /**
   * タブを閉じる
   */
  closeTab(tabId) {
    const tabIndex = this.tabs.findIndex(tab => tab.id === tabId);
    if (tabIndex === -1) return;

    const tab = this.tabs[tabIndex];
    
    // 最後のタブは閉じない
    if (this.tabs.length === 1) {
      return;
    }

    // アクティブなタブを閉じる場合、別のタブを選択
    if (this.activeTabId === tabId) {
      const newActiveIndex = tabIndex > 0 ? tabIndex - 1 : tabIndex + 1;
      const newActiveTab = this.tabs[newActiveIndex];
      if (newActiveTab) {
        this.selectTab(newActiveTab.id);
      }
    }

    // DOMから削除
    tab.element.remove();
    tab.contentElement.remove();

    // 配列から削除
    this.tabs.splice(tabIndex, 1);
  }

  /**
   * タブのタイトルを更新
   */
  updateTabTitle(tabId, newTitle) {
    const tab = this.tabs.find(tab => tab.id === tabId);
    if (tab) {
      tab.title = newTitle;
      const titleElement = tab.element.querySelector('.tab-title');
      if (titleElement) {
        titleElement.textContent = newTitle;
      }
    }
  }

  /**
   * コンテキストメニューを表示
   */
  showContextMenu(event, tabId) {
    // 既存のコンテキストメニューを削除
    const existingMenu = document.querySelector('.tab-context-menu');
    if (existingMenu) {
      existingMenu.remove();
    }

    // コンテキストメニューを作成
    const menu = document.createElement('div');
    menu.className = 'tab-context-menu';
    menu.style.left = `${event.pageX}px`;
    menu.style.top = `${event.pageY}px`;

    const canClose = this.tabs.length > 1;
    
    menu.innerHTML = `
      <div class="tab-context-item" data-action="rename">名前を変更</div>
      <div class="tab-context-item" data-action="duplicate">複製</div>
      ${canClose ? '<div class="tab-context-item" data-action="close">閉じる</div>' : ''}
      ${canClose ? '<div class="tab-context-item" data-action="close-others">他のタブを閉じる</div>' : ''}
    `;

    document.body.appendChild(menu);

    // アニメーション
    setTimeout(() => {
      menu.classList.add('active');
    }, 10);

    // メニューアイテムのクリック処理
    menu.addEventListener('click', (e) => {
      const action = e.target.dataset.action;
      this.handleContextMenuAction(action, tabId);
      menu.remove();
    });

    // 外部クリックで閉じる
    const closeMenu = (e) => {
      if (!menu.contains(e.target)) {
        menu.remove();
        document.removeEventListener('click', closeMenu);
      }
    };
    
    setTimeout(() => {
      document.addEventListener('click', closeMenu);
    }, 100);
  }

  /**
   * コンテキストメニューのアクション処理
   */
  handleContextMenuAction(action, tabId) {
    switch (action) {
      case 'rename':
        this.renameTab(tabId);
        break;
      case 'duplicate':
        this.duplicateTab(tabId);
        break;
      case 'close':
        this.closeTab(tabId);
        break;
      case 'close-others':
        this.closeOtherTabs(tabId);
        break;
    }
  }

  /**
   * タブの名前を変更
   */
  renameTab(tabId) {
    const tab = this.tabs.find(tab => tab.id === tabId);
    if (tab) {
      const newTitle = prompt('新しいタブ名を入力してください:', tab.title);
      if (newTitle && newTitle.trim()) {
        this.updateTabTitle(tabId, newTitle.trim());
      }
    }
  }

  /**
   * タブを複製
   */
  duplicateTab(tabId) {
    const tab = this.tabs.find(tab => tab.id === tabId);
    if (tab) {
      const newTitle = `${tab.title} のコピー`;
      const content = tab.contentElement.innerHTML;
      this.addNewTab(newTitle, content);
    }
  }

  /**
   * 他のタブを閉じる
   */
  closeOtherTabs(keepTabId) {
    const tabsToClose = this.tabs.filter(tab => tab.id !== keepTabId);
    tabsToClose.forEach(tab => {
      this.closeTab(tab.id);
    });
  }

  /**
   * アクティブなタブを取得
   */
  getActiveTab() {
    return this.tabs.find(tab => tab.id === this.activeTabId);
  }

  /**
   * 全てのタブを取得
   */
  getAllTabs() {
    return [...this.tabs];
  }
}

// DOMが読み込まれた後に初期化
document.addEventListener('DOMContentLoaded', () => {
  window.tabManager = new TabManager();
}); 