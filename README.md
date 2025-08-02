# San Diego High School Study Abroad Landing Page

アメリカ・サンディエゴ中学・高校短期留学プログラムのランディングページ

## 技術スタック

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod
- **Email**: Nodemailer
- **Icons**: Heroicons

## 開発環境のセットアップ

### 前提条件
- Node.js 18以上
- npm または yarn

### インストール手順

```bash
# 依存関係のインストール
npm install

# 環境変数の設定
cp .env.example .env.local
# .env.localファイルを編集してSMTP設定を入力

# 開発サーバーの起動
npm run dev
```

開発サーバーは `http://localhost:3000` で起動します。

## 環境変数

`.env.local` ファイルに以下の環境変数を設定してください：

```bash
# SMTP設定（サクラVPS用）
SMTP_HOST=your-sakura-smtp-server.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
SMTP_FROM=noreply@intraxjp.com

# お問い合わせ先メールアドレス
CONTACT_EMAIL=intrax@intraxjp.com

# 環境設定
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## プロジェクト構成

```
src/
├── app/
│   ├── api/contact/route.ts    # お問い合わせAPI
│   ├── globals.css             # グローバルスタイル
│   ├── layout.tsx              # レイアウト・SEO設定
│   └── page.tsx                # メインページ
└── components/
    ├── Header.tsx              # ヘッダー・ナビゲーション
    ├── HeroSection.tsx         # ヒーローセクション
    ├── HighlightSection.tsx    # プログラムハイライト
    ├── FAQSection.tsx          # よくある質問
    ├── ContactForm.tsx         # お問い合わせフォーム
    └── Footer.tsx              # フッター
```

## 機能

### コンポーネント
- **Header**: レスポンシブナビゲーション（モバイルメニュー対応）
- **HeroSection**: プログラム概要とキー情報
- **HighlightSection**: プログラムの特徴（SVGアイコン付き）
- **FAQSection**: アコーディオン式FAQ
- **ContactForm**: バリデーション付きお問い合わせフォーム
- **Footer**: 企業情報・リンク集

### お問い合わせフォーム
- リアルタイムバリデーション（Zod + React Hook Form）
- メール送信機能（Nodemailer）
- 自動返信メール
- 送信状態表示（ローディング・成功・エラー）

### アニメーション
- スクロール連動アニメーション（Framer Motion）
- ホバーエフェクト
- ページ遷移アニメーション

## Sakura VPS デプロイ手順

### 1. サーバー準備

```bash
# Node.js・PM2のインストール
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g pm2

# Nginx設定
sudo apt-get install nginx
sudo nano /etc/nginx/sites-available/san-diego-lp
# nginx.confの内容をコピー
sudo ln -s /etc/nginx/sites-available/san-diego-lp /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 2. プロジェクトデプロイ

```bash
# プロジェクトをサーバーにアップロード
scp -r san-diego-lp/ user@your-server:/var/www/

# サーバーにSSH接続
ssh user@your-server

# デプロイスクリプト実行
cd /var/www/san-diego-lp
chmod +x deploy.sh
./deploy.sh
```

### 3. 環境設定

```bash
# 環境変数の設定
nano .env
# SMTP設定を入力

# PM2で起動
pm2 start ecosystem.config.js
pm2 save
```

### 4. SSL証明書設定（推奨）

```bash
# Let's Encryptでssl証明書取得
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d www.intraxjp.com
```

## 運用コマンド

```bash
# PM2ステータス確認
pm2 status

# ログ確認
pm2 logs san-diego-lp

# アプリケーション再起動
pm2 restart san-diego-lp

# 設定リロード
pm2 reload ecosystem.config.js

# プロセス停止
pm2 stop san-diego-lp
```

## トラブルシューティング

### メール送信ができない場合
1. SMTP設定を確認
2. サクラVPSのファイアウォール設定を確認
3. ログを確認: `pm2 logs san-diego-lp`

### Next.jsビルドエラー
1. Node.jsバージョン確認（18以上必要）
2. 依存関係の再インストール: `rm -rf node_modules && npm install`
3. TypeScriptエラー確認: `npm run build`

### Nginx設定エラー
1. 設定ファイルの構文確認: `sudo nginx -t`
2. ポート競合確認: `sudo netstat -tlnp | grep :3001`
3. プロキシ設定確認

## ライセンス

© 2024 Ayusa International. All rights reserved.