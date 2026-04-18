import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "BOUND - 実務体験ジョブチャレンジで採用を変革",
  description:
    "自社のビジネス課題を実務に近いジョブチャレンジとして開放し、学生のアウトプットを通じてスキル・志向・フィット感を可視化する採用プラットフォーム。",
  icons: {
    icon: "/contents/logos/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="bg-background text-foreground min-h-screen font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
