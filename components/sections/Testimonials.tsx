"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-surface">
      <div className="max-w-[1000px] mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10 md:gap-16">
            
            {/* 左側：メッセージ */}
            <div className="flex-1 relative">
              {/* 引用符アイコン */}
              <svg className="absolute -top-3 -left-1 sm:-top-4 sm:-left-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#0891B2]/20 z-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
              
              <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] leading-[1.7] md:leading-[1.8] text-foreground/90 font-medium relative z-10">
                AIで自社のビジネスや職種を反映したジョブチャレンジを瞬時に作成できたので、<span className="text-[#0891B2] bg-[#ECFEFF] px-0.5 sm:px-1 mx-0.5 sm:mx-1 rounded text-[13px] sm:text-[15px] md:text-[17px] lg:text-[21px]">従来2ヶ月かかっていた設計が30分で完了</span>しました。学生がAIと共に取り組むことで、企業理解を深めた状態でのエンゲージメント強化が期待できます。
              </p>
            </div>

            {/* 右側：プロフィール情報 */}
            <div className="w-full md:w-[320px] flex flex-col items-center md:items-start md:border-l border-border/50 md:pl-10 pt-4 sm:pt-0 border-t sm:border-t-0 border-border/30">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-border overflow-hidden mb-3 sm:mb-5 relative">
                <Image
                  src="/contents/testimonials/otsubo.png"
                  alt="大坪拓巳様"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs sm:text-sm text-foreground/60 mb-1">
                  クロス・マーケティンググループ
                  <br />
                  コーポレート本部 採用統括部部長
                </p>
                <p className="text-base sm:text-lg font-bold text-foreground">
                  大坪拓巳 様
                </p>
              </div>
            </div>
            
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8 flex justify-center">
            <Link 
              href="https://youtu.be/K0rqZ0M1rQg?si=GaKFzrrHqAuK70Oc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] text-foreground/60 hover:text-[#0891B2] transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 8L16 12L10 16V8Z" fill="currentColor"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              </svg>
              詳細を動画で見る
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
