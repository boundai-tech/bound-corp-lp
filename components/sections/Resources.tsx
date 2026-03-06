"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Card from "@/components/ui/Card";
import { resources } from "@/lib/data/resources";

export default function Resources() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;
  const maxIndex = resources.length - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const visibleResources = [
    resources[currentIndex],
    resources[(currentIndex + 1) % resources.length]
  ];

  return (
    <section id="resources" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <ScrollReveal>
          <h2 className="text-[18px] sm:text-[22px] md:text-[26px] font-semibold text-foreground/90 text-center mb-6 sm:mb-10 md:mb-14 lg:mb-16 leading-tight tracking-tight">
            採用の現場から、リアルな知見を
          </h2>
        </ScrollReveal>

        <div className="w-full relative mb-8 md:mb-10 lg:mb-12">
          {/* カルーセルコンテナ */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
              >
                {visibleResources.map((resource, index) => (
                  <a
                    key={currentIndex * itemsPerPage + index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="h-full bg-surface hover:bg-foreground/[0.02] overflow-hidden p-0 transition-all duration-300">
                      {/* サムネイル画像 */}
                      <div className="relative w-full aspect-video overflow-hidden bg-foreground/5">
                        <Image
                          src={resource.thumbnail}
                          alt={resource.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 50vw"
                          priority={currentIndex === 0 && index < 2}
                        />
                      </div>

                      {/* コンテンツ */}
                      <div className="p-3 sm:p-4 md:p-5">
                        <div className={`mb-2 inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium border w-fit ${
                          resource.type === "blog"
                            ? "bg-foreground/5 text-foreground/60 border-border"
                            : "bg-[#0891B2]/10 text-[#0891B2] border-[#0891B2]/20"
                        }`}>
                          {resource.type === "blog" ? "ブログ" : "ウェビナー"}
                        </div>

                        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-foreground mb-1.5 sm:mb-2 leading-tight group-hover:text-foreground/80 transition-colors line-clamp-2">
                          {resource.title}
                        </h3>

                        <p className="text-foreground/40 text-[10px] sm:text-xs md:text-sm">{resource.date}</p>
                      </div>
                    </Card>
                  </a>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ナビゲーションボタン */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-surface border border-border rounded-full p-2 md:p-3 hover:bg-foreground/5 transition-colors shadow-lg z-10"
            aria-label="前へ"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground/60" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-surface border border-border rounded-full p-2 md:p-3 hover:bg-foreground/5 transition-colors shadow-lg z-10"
            aria-label="次へ"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground/60" />
          </button>

          {/* インジケーター */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {resources.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-foreground/60"
                    : "w-2 bg-foreground/20 hover:bg-foreground/30"
                }`}
                aria-label={`スライド ${index + 1} へ移動`}
              />
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <a
              href="https://note.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-foreground/60 hover:text-foreground transition-colors"
            >
              <span>もっと見る</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
