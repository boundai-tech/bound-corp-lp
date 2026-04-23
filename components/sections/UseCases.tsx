"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useCases } from "@/lib/data/useCases";

const EASE = [0.23, 1, 0.32, 1] as const;

export default function UseCases() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="usecases" className="py-12 md:py-24 lg:py-32 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6">
        <ScrollReveal>
          <p className="text-xs md:text-sm font-semibold text-[#0891B2] text-center uppercase tracking-widest mb-3 md:mb-4">
            Job Types
          </p>
          <h2 className="text-[22px] md:text-[28px] lg:text-[34px] font-semibold text-foreground/90 text-center mb-8 md:mb-14 lg:mb-16 leading-tight tracking-tight">
            あらゆる職種の採用に<br className="sm:hidden" />対応できる
          </h2>
        </ScrollReveal>
      </div>

      {/* モバイル：横スクロールカルーセル */}
      <div className="md:hidden overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-4 scrollbar-none pb-2"
          style={{
            scrollSnapType: "x mandatory",
            touchAction: "pan-x",
            overflowX: "scroll",
            paddingLeft: "5vw",
            paddingRight: "5vw",
          }}
        >
          {useCases.map((item, i) => (
            <div
              key={item.id}
              className="flex-none w-[78vw] bg-surface border border-border/60 rounded-2xl p-5 flex flex-col gap-4"
              style={{ scrollSnapAlign: "start" }}
            >
              <span className="text-xs font-semibold text-[#0891B2] uppercase tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[18px] font-bold text-foreground leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#0891B2] font-medium leading-snug">
                  {item.catchcopy}
                </p>
              </div>
              <p className="text-[13px] text-foreground/60 leading-relaxed flex-1">
                {item.description}
              </p>
              <ul className="space-y-1.5">
                {item.benefits.map((b, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#0891B2] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[12px] text-foreground/60">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#0891B2]/[0.08] text-[#0891B2]/80">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="flex-none" style={{ width: "calc(5vw - 16px)" }} aria-hidden />
        </div>
      </div>
      <p className="md:hidden text-center text-[11px] text-foreground/30 mt-4 tracking-wide">
        スワイプして見る →
      </p>

      {/* PC：クリック展開グリッド */}
      <div className="hidden md:grid md:grid-cols-4 gap-3 px-6 max-w-[1200px] mx-auto items-start">
        {useCases.map((item, i) => {
          const isOpen = openId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className={`text-left bg-surface border rounded-2xl p-6 flex flex-col gap-3 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2]/50 ${
                isOpen
                  ? "border-[#0891B2]/40 shadow-sm"
                  : "border-border/60 hover:border-[#0891B2]/25"
              }`}
              style={{ transition: "border-color 200ms ease-out, box-shadow 200ms ease-out" }}
            >
              {/* 常時表示部分 */}
              <div className="flex items-start justify-between gap-2">
                <span className="text-xs font-semibold text-[#0891B2] uppercase tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <motion.svg
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  className="w-4 h-4 text-foreground/30 flex-shrink-0 mt-0.5"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
                </motion.svg>
              </div>

              <div>
                <h3 className="text-[17px] font-bold text-foreground leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-[12px] text-[#0891B2] font-medium leading-snug">
                  {item.catchcopy}
                </p>
              </div>

              {/* 展開部分 */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <div className="pt-1 flex flex-col gap-3">
                      <p className="text-[13px] text-foreground/60 leading-relaxed">
                        {item.description}
                      </p>
                      <ul className="space-y-1.5">
                        {item.benefits.map((b, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <svg className="w-3.5 h-3.5 text-[#0891B2] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-[12px] text-foreground/60">{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span key={tag} className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#0891B2]/[0.08] text-[#0891B2]/80">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>
    </section>
  );
}
