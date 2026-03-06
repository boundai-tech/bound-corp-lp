# BOUND Landing Page

BOUNDの公式ランディングページ

## セットアップ

### 環境変数の設定

`.env.local` ファイルをプロジェクトルートに作成し、以下の環境変数を設定してください：

```bash
SLACK_WEBHOOK_URL=your_slack_webhook_url_here
```

`.env.example` ファイルをコピーして使用できます：

```bash
cp .env.example .env.local
```

### インストール

```bash
npm install
# または
yarn install
```

### 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## お問い合わせフォーム

お問い合わせフォームは以下のセキュリティ対策を実装しています：

- ✅ Webhook URLは環境変数で管理
- ✅ `.env.local` は `.gitignore` に追加済み
- ✅ レート制限（同一IPから1分間に3回まで）
- ✅ サーバーサイドAPIからのみSlackにPOST
- ✅ クライアントサイドから直接Webhookを叩かない

## デプロイ

Vercelにデプロイする場合は、環境変数 `SLACK_WEBHOOK_URL` を設定してください。

## ライセンス

Private
