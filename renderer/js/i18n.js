/**
 * Sasuke 国際化システム (i18n)
 * 英語をバックアップとして保持し、日本語翻訳を提供
 */

// 言語定義
const LANGUAGES = {
  en: {
    // ナビゲーション
    navigation: 'Navigation',
    dashboard: 'Dashboard',
    applications: 'Applications',
    calendar: 'Calendar',
    todolist: 'Todo List',
    projects: 'Projects',
    contacts: 'Contacts',
    custom: 'Custom',
    authPages: 'Auth Pages',
    pages: 'Pages',
    uiElements: 'UI Elements',
    forms: 'Forms',
    tables: 'Tables',
    charts: 'Charts',
    
    // ダッシュボード
    crm: 'CRM',
    analytics: 'Analytics',
    ecommerce: 'E-commerce',
    hrm: 'HRM',
    jobs: 'Jobs',
    
    // 認証
    login: 'Login',
    register: 'Register',
    signup: 'Sign Up',
    logout: 'Logout',
    forgotPassword: 'Forgot Password',
    resetPassword: 'Reset Password',
    rememberMe: 'Remember Me',
    
    // 共通
    search: 'Search',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    add: 'Add',
    addNew: 'Add New',
    close: 'Close',
    submit: 'Submit',
    loading: 'Loading...',
    welcome: 'Welcome',
    settings: 'Settings',
    profile: 'Profile',
    support: 'Support',
    about: 'About',
    contact: 'Contact',
    
    // ダッシュボード要素
    totalCustomers: 'Total Customers',
    pendingTasks: 'Pending Tasks',
    totalDeals: 'Total Deals',
    totalRevenue: 'Total Revenue',
    conversionRate: 'Conversion Rate',
    last7Days: 'Last 7 days',
    revenueReport: 'Revenue Report',
    salesReport: 'Sales Report',
    leadReport: 'Lead Report',
    recentActivity: 'Recent Activity',
    
    // テーブルヘッダー
    lead: 'Lead',
    email: 'Email',
    phone: 'Phone',
    company: 'Company',
    status: 'Status',
    action: 'Action',
    
    // ステータス
    newLead: 'New Lead',
    inProgress: 'In Progress',
    lost: 'Lost',
    won: 'Won',
    converted: 'Converted',
    
    // フォーム
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    username: 'Username',
    firstName: 'First Name',
    lastName: 'Last Name',
    phone: 'Phone',
    address: 'Address',
    
    // カレンダー
    today: 'Today',
    month: 'Month',
    week: 'Week',
    day: 'Day',
    event: 'Event',
    addEvent: 'Add Event',
    eventTitle: 'Event Title',
    startTime: 'Start Time',
    endTime: 'End Time',
    description: 'Description',
    
    // TODO
    task: 'Task',
    addTask: 'Add Task',
    completed: 'Completed',
    pending: 'Pending',
    priority: 'Priority',
    dueDate: 'Due Date',
    
    // メッセージ
    success: 'Success',
    error: 'Error',
    warning: 'Warning',
    info: 'Information',
    
    // 時間
    minutes: 'minutes',
    hours: 'hours',
    days: 'days',
    weeks: 'weeks',
    months: 'months',
    years: 'years',
    
    // 曜日
    sunday: 'Sunday',
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    
    // 月
    january: 'January',
    february: 'February',
    march: 'March',
    april: 'April',
    may: 'May',
    june: 'June',
    july: 'July',
    august: 'August',
    september: 'September',
    october: 'October',
    november: 'November',
    december: 'December'
  },
  
  ja: {
    // ナビゲーション
    navigation: 'ナビゲーション',
    dashboard: 'ダッシュボード',
    applications: 'アプリケーション',
    calendar: 'カレンダー',
    todolist: 'TODOリスト',
    projects: 'プロジェクト',
    contacts: '連絡先',
    custom: 'カスタム',
    authPages: '認証ページ',
    pages: 'ページ',
    uiElements: 'UI要素',
    forms: 'フォーム',
    tables: 'テーブル',
    charts: 'チャート',
    
    // ダッシュボード
    crm: 'CRM',
    analytics: 'アナリティクス',
    ecommerce: 'Eコマース',
    hrm: '人事管理',
    jobs: '求人',
    
    // 認証
    login: 'ログイン',
    register: '登録',
    signup: 'サインアップ',
    logout: 'ログアウト',
    forgotPassword: 'パスワードを忘れた',
    resetPassword: 'パスワードリセット',
    rememberMe: 'ログイン状態を保持',
    
    // 共通
    search: '検索',
    save: '保存',
    cancel: 'キャンセル',
    delete: '削除',
    edit: '編集',
    add: '追加',
    addNew: '新規作成',
    close: '閉じる',
    submit: '送信',
    loading: '読み込み中...',
    welcome: 'ようこそ',
    settings: '設定',
    profile: 'プロフィール',
    support: 'サポート',
    about: '概要',
    contact: 'お問い合わせ',
    
    // ダッシュボード要素
    totalCustomers: '総顧客数',
    pendingTasks: '保留中タスク',
    totalDeals: '総取引数',
    totalRevenue: '総売上',
    conversionRate: 'コンバージョン率',
    last7Days: '過去7日間',
    revenueReport: '売上レポート',
    salesReport: '販売レポート',
    leadReport: 'リードレポート',
    recentActivity: '最近のアクティビティ',
    
    // テーブルヘッダー
    lead: 'リード',
    email: 'メール',
    phone: '電話番号',
    company: '会社',
    status: 'ステータス',
    action: 'アクション',
    
    // ステータス
    newLead: '新規リード',
    inProgress: '進行中',
    lost: '失注',
    won: '受注',
    converted: 'コンバート済',
    
    // フォーム
    email: 'メールアドレス',
    password: 'パスワード',
    confirmPassword: 'パスワード確認',
    username: 'ユーザー名',
    firstName: '名',
    lastName: '姓',
    phone: '電話番号',
    address: '住所',
    
    // カレンダー
    today: '今日',
    month: '月',
    week: '週',
    day: '日',
    event: 'イベント',
    addEvent: 'イベント追加',
    eventTitle: 'イベントタイトル',
    startTime: '開始時間',
    endTime: '終了時間',
    description: '説明',
    
    // TODO
    task: 'タスク',
    addTask: 'タスク追加',
    completed: '完了',
    pending: '保留中',
    priority: '優先度',
    dueDate: '期限',
    
    // メッセージ
    success: '成功',
    error: 'エラー',
    warning: '警告',
    info: '情報',
    
    // 時間
    minutes: '分',
    hours: '時間',
    days: '日',
    weeks: '週',
    months: 'ヶ月',
    years: '年',
    
    // 曜日
    sunday: '日',
    monday: '月',
    tuesday: '火',
    wednesday: '水',
    thursday: '木',
    friday: '金',
    saturday: '土',
    
    // 月
    january: '1月',
    february: '2月',
    march: '3月',
    april: '4月',
    may: '5月',
    june: '6月',
    july: '7月',
    august: '8月',
    september: '9月',
    october: '10月',
    november: '11月',
    december: '12月'
  }
};

// 現在の言語設定
let currentLanguage = 'ja'; // デフォルトを日本語に設定

/**
 * 翻訳関数
 * @param {string} key - 翻訳キー
 * @param {string} fallback - フォールバック文字列（オプション）
 * @returns {string} 翻訳された文字列
 */
function t(key, fallback = null) {
  const translation = LANGUAGES[currentLanguage] && LANGUAGES[currentLanguage][key];
  
  if (translation) {
    return translation;
  }
  
  // 日本語で見つからない場合は英語を試す
  const englishTranslation = LANGUAGES.en && LANGUAGES.en[key];
  if (englishTranslation) {
    return englishTranslation;
  }
  
  // フォールバックまたはキー自体を返す
  return fallback || key;
}

/**
 * 言語を設定
 * @param {string} lang - 言語コード ('ja' または 'en')
 */
function setLanguage(lang) {
  if (LANGUAGES[lang]) {
    currentLanguage = lang;
    localStorage.setItem('sasuke_language', lang);
    translatePage();
  }
}

/**
 * 保存された言語設定を読み込み
 */
function loadLanguage() {
  const savedLang = localStorage.getItem('sasuke_language');
  if (savedLang && LANGUAGES[savedLang]) {
    currentLanguage = savedLang;
  }
}

/**
 * ページ全体を翻訳
 */
function translatePage() {
  // data-i18n属性を持つ要素を翻訳
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = t(key);
    
    if (element.tagName === 'INPUT' && (element.type === 'submit' || element.type === 'button')) {
      element.value = translation;
    } else if (element.tagName === 'INPUT' && element.placeholder) {
      element.placeholder = translation;
    } else {
      element.textContent = translation;
    }
  });
  
  // data-i18n-placeholder属性を持つ要素のプレースホルダーを翻訳
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    element.placeholder = t(key);
  });
  
  // data-i18n-title属性を持つ要素のタイトルを翻訳
  document.querySelectorAll('[data-i18n-title]').forEach(element => {
    const key = element.getAttribute('data-i18n-title');
    element.title = t(key);
  });
  
  // 言語切り替えボタンの状態を更新
  updateLanguageButtons();
}

/**
 * 言語切り替えボタンの状態を更新
 */
function updateLanguageButtons() {
  const currentLang = getCurrentLanguage();
  document.querySelectorAll('[onclick*="setLanguage"]').forEach(button => {
    if (button.onclick.toString().includes(`'${currentLang}'`)) {
      button.style.fontWeight = 'bold';
      button.style.backgroundColor = '#f8f9fa';
    } else {
      button.style.fontWeight = 'normal';
      button.style.backgroundColor = 'transparent';
    }
  });
}

/**
 * 動的に追加された要素を翻訳
 * @param {Element} container - 翻訳対象のコンテナ要素
 */
function translateElement(container) {
  if (!container) return;
  
  // コンテナ内のdata-i18n属性を持つ要素を翻訳
  container.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = t(key);
    
    if (element.tagName === 'INPUT' && (element.type === 'submit' || element.type === 'button')) {
      element.value = translation;
    } else if (element.tagName === 'INPUT' && element.placeholder) {
      element.placeholder = translation;
    } else {
      element.textContent = translation;
    }
  });
}

/**
 * 現在の言語を取得
 * @returns {string} 現在の言語コード
 */
function getCurrentLanguage() {
  return currentLanguage;
}

/**
 * 利用可能な言語一覧を取得
 * @returns {Array} 言語コードの配列
 */
function getAvailableLanguages() {
  return Object.keys(LANGUAGES);
}

// DOM読み込み完了時に初期化
document.addEventListener('DOMContentLoaded', function() {
  loadLanguage();
  // 少し遅延させて確実に翻訳を適用
  setTimeout(() => {
    translatePage();
    // さらに確実にするため、もう一度実行
    setTimeout(() => {
      translatePage();
    }, 100);
  }, 50);
});

// グローバルに公開
window.i18n = {
  t,
  setLanguage,
  loadLanguage,
  translatePage,
  translateElement,
  getCurrentLanguage,
  getAvailableLanguages
}; 