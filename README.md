# Sasuke Node v1.0.0

セキュアで拡張可能なElectronアプリケーションの開発ベース

## 概要

Sasuke Node v1.0.0は、モダンなElectronアプリケーション開発のための包括的なベーステンプレートです。美しいダッシュボードUI、セキュリティ機能、そして開発者フレンドリーな環境を提供します。

## 特徴

### 🎨 美しいUI/UX
- **レスポンシブデザイン**: あらゆるデバイスサイズに対応
- **日本語フォント**: Noto Sans JPによる美しい日本語表示
- **英語フォント**: Inter Tightによるモダンな英語表示
- **ダークモード対応**: ライト/ダークテーマの切り替え
- **Bootstrap 5**: 最新のBootstrapフレームワーク

### 📊 ダッシュボード機能
- **リアルタイムチャート**: ApexChartsによる美しいデータ可視化
- **ウィジェット**: カスタマイズ可能な統計ウィジェット
- **データテーブル**: 高機能なデータ表示・操作
- **カレンダー**: FullCalendarによるスケジュール管理
- **通知システム**: リアルタイム通知機能

### 🔒 セキュリティ
- **CSP (Content Security Policy)**: XSS攻撃からの保護
- **セキュアなプリロード**: 安全なレンダラープロセス通信
- **入力検証**: フォーム入力の適切な検証
- **セッション管理**: 安全なユーザーセッション

### 🛠️ 開発環境
- **TypeScript対応**: 型安全な開発
- **ESLint + Prettier**: コード品質の維持
- **Jest**: 包括的なテスト環境
- **Hot Reload**: 開発時の自動リロード
- **ビルド最適化**: 本番環境向けの最適化

## 必要環境

- **Node.js**: 18.0.0以上
- **npm**: 8.0.0以上
- **OS**: Windows 10+, macOS 10.14+, Ubuntu 18.04+

## インストール

```bash
# リポジトリのクローン
git clone https://github.com/sasuke/sasuke-node-v1.0.0.git
cd sasuke-node-v1.0.0

# 依存関係のインストール
npm install
```

## 使用方法

### 開発モード

```bash
# 開発モードで起動
npm run dev
```

### 本番ビルド

```bash
# 全プラットフォーム向けビルド
npm run build

# Windows向けビルド
npm run build:win

# macOS向けビルド
npm run build:mac

# Linux向けビルド
npm run build:linux
```

### テスト

```bash
# テスト実行
npm test

# テスト監視モード
npm run test:watch
```

### コード品質

```bash
# ESLintチェック
npm run lint

# ESLint自動修正
npm run lint:fix

# Prettierフォーマット
npm run format
```

## プロジェクト構造

```
sasuke-node-v1.0.0/
├── main.js                 # メインプロセス
├── preload.js              # プリロードスクリプト
├── renderer/               # レンダラープロセス
│   ├── index.html          # メインHTML
│   ├── css/                # スタイルシート
│   ├── js/                 # JavaScript
│   ├── libs/               # ライブラリ
│   ├── images/             # 画像ファイル
│   └── fonts/              # フォントファイル
├── tests/                  # テストファイル
├── package.json            # プロジェクト設定
├── .eslintrc.js           # ESLint設定
├── .prettierrc            # Prettier設定
├── jest.config.js         # Jest設定
└── README.md              # このファイル
```

## カスタマイズ

### テーマの変更

CSSカスタムプロパティを使用してテーマをカスタマイズできます：

```css
:root {
  --primary-color: #108dff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --danger-color: #dc3545;
  --warning-color: #ffc107;
  --info-color: #17a2b8;
}
```

### フォントの変更

Google Fontsから任意のフォントを選択して変更できます：

```css
/* 日本語フォント */
.font-jp {
  font-family: 'Noto Sans JP', sans-serif;
}

/* 英語フォント */
.font-en {
  font-family: 'Inter Tight', sans-serif;
}
```

## API仕様

### メインプロセス API

```javascript
// ウィンドウ管理
ipcMain.handle('window-minimize', () => {
  mainWindow.minimize();
});

ipcMain.handle('window-maximize', () => {
  mainWindow.maximize();
});

ipcMain.handle('window-close', () => {
  mainWindow.close();
});
```

### レンダラープロセス API

```javascript
// システム情報取得
const systemInfo = await window.electronAPI.getSystemInfo();

// ファイル操作
const fileData = await window.electronAPI.readFile(filePath);
await window.electronAPI.writeFile(filePath, data);
```

## セキュリティガイドライン

### 1. Content Security Policy

```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https:;
">
```

### 2. プリロードスクリプト

```javascript
// 安全なAPI公開
contextBridge.exposeInMainWorld('electronAPI', {
  getSystemInfo: () => ipcRenderer.invoke('get-system-info'),
  // 必要最小限のAPIのみ公開
});
```

### 3. 入力検証

```javascript
// フォーム入力の検証
function validateInput(input) {
  // XSS対策
  const sanitized = DOMPurify.sanitize(input);
  // 長さ制限
  if (sanitized.length > 1000) {
    throw new Error('入力が長すぎます');
  }
  return sanitized;
}
```

## トラブルシューティング

### よくある問題

#### 1. アプリケーションが起動しない

```bash
# Node.jsバージョンの確認
node --version

# 依存関係の再インストール
rm -rf node_modules package-lock.json
npm install
```

#### 2. ビルドエラー

```bash
# キャッシュのクリア
npm run clean
npm install
npm run build
```

#### 3. フォントが表示されない

Google Fontsの読み込みを確認してください：

```html
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@100..900&family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet">
```

## 貢献

プロジェクトへの貢献を歓迎します！

### 貢献の手順

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'feat: 素晴らしい機能を追加'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

### コミットメッセージ規約

Conventional Commitsに従ってください：

```
feat: 新機能を追加
fix: バグを修正
docs: ドキュメントを更新
style: コードスタイルを修正
refactor: コードをリファクタリング
test: テストを追加・修正
chore: その他の変更
```

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルを参照してください。

## サポート

- **Issue**: [GitHub Issues](https://github.com/sasuke/sasuke-node-v1.0.0/issues)
- **Email**: sasuke@example.com
- **ドキュメント**: [Wiki](https://github.com/sasuke/sasuke-node-v1.0.0/wiki)

## 更新履歴

### v1.0.0 (2024-12-19)
- 初回リリース
- Handoテンプレートからの移行完了
- 日本語化対応
- セキュリティ機能の実装
- Electron統合

---

**Sasuke Node v1.0.0** - セキュアで美しいElectronアプリケーション開発のスタートライン 