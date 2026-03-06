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
              学生が<span className="text-[#0891B2]">「やってみたい」</span>と思う<br />リアル課題
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-[14px] md:text-[15px] text-foreground/60 leading-[1.6]">
              企業の実際の業務データや意思決定をもとに、自社ならではのジョブ体験を提供。単なるワークではなく、リアルな仕事の面白さを伝えます。
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
                alt="学生がやってみたいと思うリアル課題"
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
        <div className="px-4 pt-5 pb-3 sm:p-6 md:p-8 space-y-2 sm:space-y-4">
          <ScrollReveal>
            <h2 className="text-[16px] sm:text-[18px] md:text-[22px] font-semibold text-foreground leading-[1.4] tracking-tight">
              学生が<span className="text-[#0891B2]">「やってみたい」</span>と思う<br />リアル課題
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-[13px] sm:text-[14px] md:text-[15px] text-foreground/60 leading-[1.6]">
              企業の実際の業務データや意思決定をもとに、自社ならではのジョブ体験を提供。単なるワークではなく、リアルな仕事の面白さを伝えます。
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
                alt="学生がやってみたいと思うリアル課題"
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
