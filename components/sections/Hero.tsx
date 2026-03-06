"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { staggerContainer, staggerItem } from "@/components/animations/variants";

export default function Hero() {
  return (
    <section className="relative pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-10 md:pb-12 px-4 md:px-6 flex flex-col items-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[1200px] space-y-5 sm:space-y-6 md:space-y-8 mb-8 sm:mb-10 md:mb-12 text-center"
      >
        {/* キャッチコピー */}
        <motion.div variants={staggerItem} className="space-y-3 sm:space-y-4 md:space-y-5">
          <h1 className="text-[26px] sm:text-[32px] md:text-[42px] lg:text-[52px] font-bold text-foreground leading-[1.15] tracking-tight">
            実務体験コンテンツで
            <br />
            本当に活躍する人材を見極める
          </h1>
          
          <p className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-foreground/60 leading-[1.7] max-w-[700px] mx-auto px-2 sm:px-0">
            AIで実務体験を生成。
            <br />
            学生のポテンシャルを、より深く知る。
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={staggerItem}
          className="flex flex-row items-center justify-center gap-2.5 sm:gap-3"
        >
          <Link 
            href="https://app.boundai.tech/" 
            className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#0891B2] text-white text-[13px] sm:text-[15px] md:text-[16px] font-semibold hover:bg-[#0891B2]/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 gap-1.5 sm:gap-2"
          >
            無料で試す
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          
          <Link 
            href="#contact" 
            className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-foreground/20 sm:border-2 text-foreground text-[13px] sm:text-[15px] md:text-[16px] font-medium hover:border-foreground/40 hover:bg-foreground/5 transition-all"
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
        {/* グロー効果 */}
        <div className="relative">
          <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#0891B2]/20 via-[#0891B2]/10 to-[#0891B2]/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-60" />
          
          <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl shadow-black/20 dark:shadow-black/50 border border-border/50 bg-surface">
            <div className="overflow-hidden" style={{ marginLeft: '-6%', marginRight: '-6%', width: '112%' }}>
              <video
                src="/contents/screenshots/hero-demo-4k.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
