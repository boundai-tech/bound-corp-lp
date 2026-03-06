"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Card from "@/components/ui/Card";
import { staggerContainer, staggerItem } from "@/components/animations/variants";

const problems = [
  {
    title: "コンテンツ設計の工数",
    description: "職種別のインターン・ジョブ型コンテンツをゼロから設計するのは難しく、現場の工数が逼迫している。",
  },
  {
    title: "スクリーニングの限界",
    description: "インターン枠・社員リソースに限りがあり、大量応募を効率よく、かつフェアに評価できない。",
  },
  {
    title: "母集団の広がらなさ",
    description: "ブランド認知の弱い職種・事業でも、リアルな業務体験をスケールさせたいが、コストとリスクが大きすぎる。",
  },
];

export default function Problem() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <ScrollReveal>
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34px] font-semibold text-foreground/90 text-center leading-tight tracking-tight mb-8 sm:mb-10 md:mb-14 lg:mb-16">
            なぜ、ジョブ型採用は難しいのか？
          </h2>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-full"
        >
          {problems.map((problem, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className="h-full bg-surface hover:bg-foreground/[0.02]">
                <div className="mb-2 sm:mb-3 md:mb-4 text-[#0891B2] text-[10px] sm:text-xs md:text-sm font-semibold">
                  課題 {index + 1}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-1.5 sm:mb-2">{problem.title}</h3>
                <p className="text-[12px] sm:text-[13px] md:text-sm text-foreground/60 leading-relaxed">{problem.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
