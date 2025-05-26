# 🚀 Electron Development Base

セキュアで拡張可能なElectronアプリケーションの開発ベースプロジェクトです。

## ✨ 特徴

- **🔒 セキュア**: contextIsolation有効化、nodeIntegration無効化
- **🎨 モダンUI**: レスポンシブデザインと美しいアニメーション
- **🛠️ 開発環境**: ESLint、Prettier、Jest設定済み
- **📦 ビルド対応**: Electron Builder設定済み
- **🧪 テスト対応**: Jest設定とテストサンプル
- **📚 ドキュメント**: 詳細なコメントとドキュメント

## 🏗️ プロジェクト構造

```
electron-development-base/
├── main.js              # メインプロセス
├── preload.js           # プリロードスクリプト
├── renderer/            # レンダラープロセス
│   ├── index.html       # メインHTML
│   ├── style.css        # スタイルシート
│   └── script.js        # レンダラースクリプト
├── package.json         # プロジェクト設定
├── .eslintrc.js         # ESLint設定
├── .prettierrc          # Prettier設定
├── .gitignore           # Git除外設定
└── README.md            # このファイル
```

## 🚀 クイックスタート

### 前提条件

- Node.js 18.0.0以上
- npm 8.0.0以上

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/electron-development-base.git
cd electron-development-base

# 依存関係をインストール
npm install
```

### 開発

```bash
# 開発モードで起動
npm run dev

# 通常モードで起動
npm start
```

### ビルド

```bash
# 全プラットフォーム向けビルド
npm run build

# プラットフォーム別ビルド
npm run build:win    # Windows
npm run build:mac    # macOS
npm run build:linux  # Linux
```

### 開発ツール

```bash
# コードの静的解析
npm run lint

# コードの自動修正
npm run lint:fix

# コードフォーマット
npm run format

# テスト実行
npm test

# テスト監視モード
npm run test:watch
```

## 🔧 設定

### 環境変数

開発環境では以下の環境変数を設定できます：

```bash
NODE_ENV=development  # 開発モード
```

### カスタマイズ

1. **アプリケーション情報**: `package.json`の`name`、`description`、`author`を更新
2. **ウィンドウ設定**: `main.js`の`BrowserWindow`オプションを調整
3. **UI/UX**: `renderer/style.css`でスタイルをカスタマイズ
4. **API**: `preload.js`でレンダラープロセス向けAPIを追加

## 🛡️ セキュリティ

このプロジェクトは以下のElectronセキュリティベストプラクティスを実装しています：

- ✅ Context Isolation有効化
- ✅ Node.js Integration無効化
- ✅ contextBridge使用
- ✅ セキュアなIPC通信
- ✅ CSP（Content Security Policy）対応準備

## 🧪 テスト

```bash
# 全テスト実行
npm test

# 特定のテストファイル実行
npm test -- --testPathPattern=main.test.js

# カバレッジ付きテスト実行
npm test -- --coverage
```

## 📦 配布

### 署名設定

本番環境では、アプリケーションに署名することを強く推奨します：

```json
// package.json
"build": {
  "mac": {
    "identity": "Developer ID Application: Your Name"
  },
  "win": {
    "certificateFile": "path/to/certificate.p12",
    "certificatePassword": "password"
  }
}
```

### 自動更新

Electron Builderの自動更新機能を使用する場合：

```bash
npm install electron-updater
```

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'feat: 素晴らしい機能を追加'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

### コミットメッセージ規約

Conventional Commitsに従ってください：

- `feat:` 新機能
- `fix:` バグ修正
- `docs:` ドキュメント更新
- `style:` コードスタイル修正
- `refactor:` リファクタリング
- `test:` テスト追加・修正
- `chore:` その他の変更

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルを参照してください。

## 🔗 関連リンク

- [Electron公式ドキュメント](https://www.electronjs.org/docs)
- [Electron Security](https://www.electronjs.org/docs/tutorial/security)
- [Electron Builder](https://www.electron.build/)

## 📞 サポート

問題や質問がある場合は、[Issues](https://github.com/yourusername/electron-development-base/issues)で報告してください。

---

⭐ このプロジェクトが役に立った場合は、スターを付けていただけると嬉しいです！ 