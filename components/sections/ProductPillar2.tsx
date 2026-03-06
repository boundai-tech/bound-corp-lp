"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { scaleIn } from "@/components/animations/variants";

export default function ProductPillar2() {
  return (
    <div className="w-full bg-[#f2f1ed] dark:bg-[#1a1a1a] rounded-[4px] border border-[rgba(0,0,0,0.03)] dark:border-[rgba(255,255,255,0.03)] overflow-hidden">
      {/* Desktop: Side by side layout */}
      <div className="hidden xl:block relative h-[685px]">
        {/* Text Content - Right Side */}
        <div className="absolute right-[30px] top-[265px] w-[382.5px] space-y-[14px]">
          <ScrollReveal>
            <h2 className="text-[18px] md:text-[22px] font-semibold text-foreground leading-[1.4] tracking-tight">
              母集団形成から内定まで<span className="text-[#0891B2]">一気通貫</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-[14px] md:text-[15px] text-foreground/60 leading-[1.6]">
              実務体験を軸に、インターンから内定後まで学生との接点を継続。志望度を高め、内定辞退を防ぎます。
            </p>
          </ScrollReveal>
        </div>

        {/* Image - Left Side */}
        <div className="absolute left-[17.5px] top-[17.5px] w-[840px] h-[650px] rounded-[4px] overflow-hidden">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            className="w-full h-full"
          >
            <div className="w-full h-full rounded-[10px] overflow-hidden relative">
              <Image
                src="/contents/screenshots/highlight2-new.png"
                alt="インターンから内定まで切れ目のないエンゲージメント"
                fill
                className="object-cover"
                sizes="840px"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile: Stacked layout */}
      <div className="xl:hidden flex flex-col">
        {/* Text Content */}
        <div className="p-6 md:p-8 space-y-4">
          <ScrollReveal>
            <h2 className="text-[18px] md:text-[22px] font-semibold text-foreground leading-[1.4] tracking-tight">
              母集団形成から内定まで<span className="text-[#0891B2]">一気通貫</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-[14px] md:text-[15px] text-foreground/60 leading-[1.6]">
              実務体験を軸に、インターンから内定後まで学生との接点を継続。志望度を高め、内定辞退を防ぎます。
            </p>
          </ScrollReveal>
        </div>

        {/* Image */}
        <div className="p-4 md:p-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            className="w-full"
          >
            <div className="w-full aspect-[4/3] rounded-[10px] overflow-hidden relative">
              <Image
                src="/contents/screenshots/highlight2-new.png"
                alt="インターンから内定まで切れ目のないエンゲージメント"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 840px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
