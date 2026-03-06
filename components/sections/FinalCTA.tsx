"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FinalCTA() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="max-w-[900px] mx-auto">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-br from-foreground/[0.03] via-foreground/[0.02] to-transparent border border-border/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.02),transparent_50%)]" />
            
            <div className="relative px-5 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20 text-center">
              <div className="mb-5 sm:mb-6 md:mb-8 flex flex-col items-center space-y-3 sm:space-y-4 md:space-y-5">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90 leading-tight tracking-tight">
                  今すぐ試す
                </h2>
                <div className="flex items-center justify-center">
                  <Image 
                    src="/contents/logos/brand.svg" 
                    alt="BOUND" 
                    width={160} 
                    height={32} 
                    className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto dark:invert-0 invert opacity-90" 
                  />
                </div>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-foreground/50 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-[600px] mx-auto">
                まずは1つ、ジョブチャレンジを作ってみましょう。
                <span className="block mt-1 sm:mt-1.5">無料で作成・公開まで完結。クレジットカード不要。</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                <Button 
                  href="https://app.boundai.tech/" 
                  variant="primary" 
                  className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 bg-foreground text-background hover:opacity-90 transition-opacity text-xs sm:text-sm md:text-base font-medium rounded-lg shadow-sm w-full sm:w-auto"
                >
                  無料でジョブチャレンジを1つ作成
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
