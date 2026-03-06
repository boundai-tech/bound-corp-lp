import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(request: Request) {
  try {
    // IPアドレスを取得（レート制限用）
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : request.headers.get("x-real-ip") || "unknown";

    // レート制限チェック（同一IPから1分間に3回まで）
    if (!rateLimit(ip, 3, 60000)) {
      return NextResponse.json(
        { error: "送信回数が多すぎます。しばらく待ってから再度お試しください。" },
        { status: 429 }
      );
    }

    const { name, company, email, category, message } = await request.json();

    // バリデーション
    if (!name || !company || !email || !category) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    // 環境変数からWebhook URLを取得
    const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

    if (!SLACK_WEBHOOK_URL) {
      console.error("SLACK_WEBHOOK_URL is not configured");
      return NextResponse.json(
        { error: "サーバーの設定エラーが発生しました" },
        { status: 500 }
      );
    }

    // Slackメッセージの整形
    const slackMessage = {
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "🔔 新しいお問い合わせ",
            emoji: true,
          },
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*お名前:*\n${name}`,
            },
            {
              type: "mrkdwn",
              text: `*会社名:*\n${company}`,
            },
          ],
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*メールアドレス:*\n${email}`,
            },
            {
              type: "mrkdwn",
              text: `*カテゴリ:*\n${category}`,
            },
          ],
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*お問い合わせ内容:*\n${message || "（内容なし）"}`,
          },
        },
      ],
    };

    // Slackに送信
    const slackResponse = await fetch(SLACK_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(slackMessage),
    });

    if (!slackResponse.ok) {
      throw new Error("Slack notification failed");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "送信に失敗しました" },
      { status: 500 }
    );
  }
}
