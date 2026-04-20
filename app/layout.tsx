import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "BOUND クリエーター | 実務体験ジョブチャレンジで採用を変革",
  description:
    "書類・面接だけでは見えない「本当の実力」を見極める。自社の実務課題をジョブチャレンジとして公開し、学生のアウトプットからスキル・志向・フィット感を可視化する新しい採用体験。",
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
