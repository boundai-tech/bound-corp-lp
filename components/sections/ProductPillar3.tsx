"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { scaleIn } from "@/components/animations/variants";
import { getVideoUrl } from "@/lib/config/videos";
import AutoplayVideo from "@/components/ui/AutoplayVideo";

export default function ProductPillar3() {
  return (
    <div className="w-full bg-[#f2f1ed] dark:bg-[#1a1a1a] rounded-[4px] border border-[rgba(0,0,0,0.03)] dark:border-[rgba(255,255,255,0.03)] overflow-hidden">
      {/* Desktop: Side by side layout */}
      <div className="hidden xl:block relative h-[685px]">
        {/* Text Content - Left Side */}
        <div className="absolute left-[30px] top-[265px] w-[382.5px] space-y-[14px]">
          <ScrollReveal>
            <h2 className="text-[18px] md:text-[22px] font-semibold text-foreground leading-[1.4] tracking-tight">
              結果だけでなく、<span className="text-[#0891B2]">プロセス</span>で評価
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-[14px] md:text-[15px] text-foreground/60 leading-[1.6]">
              思考力、AI活用力、取り組み姿勢を定量化。入社後に本当に活躍する人材を、フェアに見極めます。
            </p>
          </ScrollReveal>
        </div>

        {/* Video - Right Side */}
        <div className="absolute right-[17.5px] top-[17.5px] w-[840px] h-[650px] rounded-[4px] overflow-hidden">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            className="w-full h-full"
          >
            <div className="w-full h-full rounded-[10px] overflow-hidden relative">
              <video
                src={getVideoUrl("screening")}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
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
              結果だけでなく、<span className="text-[#0891B2]">プロセス</span>で評価
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-[13px] sm:text-[14px] md:text-[15px] text-foreground/60 leading-[1.6]">
              思考力、AI活用力、取り組み姿勢を定量化。入社後に本当に活躍する人材を、フェアに見極めます。
            </p>
          </ScrollReveal>
        </div>

        {/* Video */}
        <div className="px-3 pb-3 sm:p-4 md:p-6">
          <div className="w-full aspect-[16/10] sm:aspect-[4/3] rounded-lg sm:rounded-[10px] overflow-hidden relative">
            <AutoplayVideo
              src={getVideoUrl("screeningMobile")}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
