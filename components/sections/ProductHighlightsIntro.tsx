"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ProductHighlightsIntro() {
  return (
    <div id="features" className="w-full flex flex-col items-center mb-4 md:mb-0 px-4">
      <ScrollReveal>
        <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34px] font-semibold text-foreground/90 text-center leading-tight tracking-tight">
          BOUNDだから、できること
        </h2>
      </ScrollReveal>
    </div>
  );
}
