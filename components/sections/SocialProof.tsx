"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function SocialProof() {
  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 md:px-6 border-b border-border/50">
      <div className="max-w-[1135px] mx-auto flex flex-col items-center">
        <ScrollReveal>
          <div className="flex flex-col items-center">
            {/* スポンサー */}
            <div className="flex flex-col items-center justify-center">
              <span className="text-[10px] text-foreground/40 font-mono uppercase tracking-widest mb-2">Sponsored by</span>
              <div className="flex items-center space-x-2 text-foreground/40 text-2xl md:text-3xl font-semibold tracking-wide grayscale hover:grayscale-0 transition-all duration-300 cursor-default [&_svg]:hover:grayscale-0">
                <svg width="28" height="28" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#F25022" d="M1 1h10v10H1z"/>
                  <path fill="#7FBA00" d="M12 1h10v10H12z"/>
                  <path fill="#00A4EF" d="M1 12h10v10H1z"/>
                  <path fill="#FFB900" d="M12 12h10v10H12z"/>
                </svg>
                <span className="text-[#737373]">Microsoft</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
