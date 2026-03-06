"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Card from "@/components/ui/Card";
import { useCases } from "@/lib/data/useCases";

export default function UseCases() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="usecases" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[18px] sm:text-[22px] md:text-[26px] font-semibold text-foreground/90 text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-tight tracking-tight">
            あらゆる職種に対応
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-2 md:gap-3 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          {useCases.map((useCase, index) => (
            <button
              key={useCase.id}
              onClick={() => setActiveTab(index)}
              className={`px-2.5 sm:px-3 md:px-5 py-2.5 sm:py-1.5 md:py-2.5 rounded-md sm:rounded-lg text-[11px] sm:text-xs md:text-sm font-medium transition-all w-full sm:w-[140px] md:w-[200px] text-center ${
                activeTab === index
                  ? "bg-foreground text-background shadow-sm"
                  : "bg-surface text-foreground/60 border border-border hover:border-foreground/20"
              }`}
            >
              {useCase.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card hover={false} className="max-w-3xl mx-auto bg-surface">
              <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                {useCases[activeTab].description}
              </p>
              <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
                {useCases[activeTab].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#0891B2] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs sm:text-sm md:text-base text-foreground/70">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
