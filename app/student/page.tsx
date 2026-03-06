import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "学生向けページ - BOUND",
  description: "BOUNDで企業のリアルなジョブチャレンジに挑戦しよう。",
};

export default function StudentPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold text-white">Coming Soon</h1>
        <p className="text-xl text-[#A0A0A0] leading-relaxed">
          学生向けページは現在準備中です。
          <br />
          企業のリアルなジョブチャレンジに挑戦できる新しい体験を、近日公開予定です。
        </p>
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-[#0891B2] hover:text-[#0E7490] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>企業向けページに戻る</span>
        </Link>
      </div>
    </div>
  );
}
