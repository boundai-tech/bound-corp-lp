"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import { staggerContainer, staggerItem } from "@/components/animations/variants";

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-8 md:pb-12 px-4 md:px-6 flex flex-col items-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[1200px] space-y-6 md:space-y-8 mb-8 md:mb-12 text-center"
      >
        {/* キャッチコピー */}
        <motion.div variants={staggerItem} className="space-y-3 md:space-y-4">
          <h1 className="text-[32px] md:text-[42px] lg:text-[52px] font-bold text-foreground leading-[1.2] tracking-tight">
            実務体験コンテンツで
            <br />
            本当に活躍する人材を見極める
          </h1>
          
          <p className="text-[16px] md:text-[18px] lg:text-[20px] text-foreground/60 leading-relaxed max-w-[700px] mx-auto">
            AIが実務体験を自動生成。学生のポテンシャルを可視化し、
            <br className="hidden md:block" />
            ジョブ型採用の質とスピードを向上させます
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={staggerItem}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link 
            href="https://app.boundai.tech/" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0891B2] text-white text-[15px] md:text-[16px] font-semibold hover:bg-[#0891B2]/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto gap-2"
          >
            無料で試す
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          
          <Link 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-foreground/20 text-foreground text-[15px] md:text-[16px] font-medium hover:border-foreground/40 hover:bg-foreground/5 transition-all w-full sm:w-auto"
          >
            資料請求・問合せ
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1200px]"
      >
        <div className="relative rounded-md md:rounded-lg overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.1)] dark:shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-border bg-surface p-1.5 md:p-2">
          <YouTubeEmbed videoId="q04fcKvjre8" title="BOUND デモ動画" />
        </div>
      </motion.div>
    </section>
  );
}
