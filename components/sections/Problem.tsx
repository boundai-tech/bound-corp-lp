"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Card from "@/components/ui/Card";
import { staggerContainer, staggerItem } from "@/components/animations/variants";

const problems = [
  {
    title: "職種別コンテンツ設計の負担",
    description: "職種ごとにインターンやジョブ体験を設計する必要があり、事業部や採用担当に大きな工数が発生する。特に専門職では、業務理解がないとコンテンツ設計が難しい。",
  },
  {
    title: "ニッチ職種の母集団形成",
    description: "職種別採用では、適切なスキル・志向を持つ学生にリーチする必要がある。しかし専門職ほど学生の母集団は小さく、企業認知が弱い場合は学生を集めること自体が難しい。",
  },
  {
    title: "職種別スキル評価の難しさ",
    description: "ジョブ型採用では、ポテンシャルではなく職種スキルを評価する必要がある。評価軸設計、面接官ごとの評価ブレ、大量応募のスクリーニングなどが課題になる。",
  },
];

export default function Problem() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <ScrollReveal>
          <h2 className="text-[24px] md:text-[28px] lg:text-[34px] font-semibold text-foreground/90 text-center mb-10 md:mb-14 lg:mb-16 leading-tight tracking-tight">
            なぜ、ジョブ型採用は難しいのか？
          </h2>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full"
        >
          {problems.map((problem, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className="h-full bg-surface hover:bg-foreground/[0.02]">
                <div className="mb-3 md:mb-4 text-[#0891B2] text-xs md:text-sm font-semibold">
                  課題 {index + 1}
                </div>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2">{problem.title}</h3>
                <p className="text-[13px] md:text-sm text-foreground/60 leading-relaxed">{problem.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
