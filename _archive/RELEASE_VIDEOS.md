# 動画を GitHub Release にアップロードする手順

Vercel では大きな MP4 ファイルが正しく配信されないため、動画は GitHub Releases でホスティングしています。

## 手順

1. https://github.com/K0hei27/bound-lp/releases/new を開く

2. **Tag** に `v1.0.0` を入力（初回）または既存のリリースを編集

3. **Release title** に `v1.0.0` など任意のタイトルを入力

4. **Attach binaries** で以下の3ファイルをアップロード:
   - `public/contents/screenshots/hero-demo-4k.mp4`
   - `public/contents/screenshots/highlight1.mp4`
   - `public/contents/screenshots/screening.mp4`

5. **Publish release** をクリック

これで動画が表示されるようになります。
