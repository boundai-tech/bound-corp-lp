"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { scaleIn } from "@/components/animations/variants";

export default function ProductPillar1() {
  return (
    <div className="w-full bg-[#f2f1ed] dark:bg-[#1a1a1a] rounded-[4px] border border-[rgba(0,0,0,0.03)] dark:border-[rgba(255,255,255,0.03)] overflow-hidden">
      {/* Desktop: Side by side layout */}
      <div className="hidden xl:block relative h-[715px]">
        {/* Text Content - Left Side */}
        <div className="absolute left-[30px] top-[280px] w-[382.5px] space-y-[14px]">
          <ScrollReveal>
            <h2 className="text-[18px] md:text-[22px] font-semibold text-foreground leading-[1.4] tracking-tight">
              AIで職種別ジョブ体験を<span className="text-[#0891B2]">自動生成</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-[14px] md:text-[15px] text-foreground/60 leading-[1.6]">
              入力するだけで、自社の実務に基づいたジョブチャレンジを生成。従来2ヶ月かかっていたインターン設計を30分に。
            </p>
          </ScrollReveal>
        </div>

        {/* Video - Right Side */}
        <div className="absolute left-[420.5px] top-[34.53px] w-[858px] h-[646px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            className="w-full h-full"
          >
            <div className="w-full h-full rounded-[10px] overflow-hidden relative">
              <div className="absolute inset-0 -left-[80px] w-[calc(100%+80px)] h-full">
                <video
                  src="/contents/screenshots/highlight1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-left"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile: Stacked layout */}
      <div className="xl:hidden flex flex-col">
        {/* Text Content */}
        <div className="px-4 pt-5 pb-3 sm:p-6 md:p-8 space-y-2 sm:space-y-4">
          <ScrollReveal>
            <h2 className="text-[16px] sm:text-[18px] md:text-[22px] font-semibold text-foreground leading-[1.4] tracking-tight">
              AIで職種別ジョブ体験を<span className="text-[#0891B2]">自動生成</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-[13px] sm:text-[14px] md:text-[15px] text-foreground/60 leading-[1.6]">
              入力するだけで、自社の実務に基づいたジョブチャレンジを生成。従来2ヶ月かかっていたインターン設計を30分に。
            </p>
          </ScrollReveal>
        </div>

        {/* Video */}
        <div className="px-3 pb-3 sm:p-4 md:p-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            className="w-full"
          >
            <div className="w-full aspect-[16/10] sm:aspect-[4/3] rounded-lg sm:rounded-[10px] overflow-hidden relative">
              <video
                src="/contents/screenshots/highlight1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-[35%_center] md:object-left"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
