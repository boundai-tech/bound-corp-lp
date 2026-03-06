"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainer, staggerItem } from "@/components/animations/variants";

const steps = [
  {
    number: "1",
    title: "要件インプット",
    description: "事業内容、職種、求めるスキル・経験を入力",
  },
  {
    number: "2",
    title: "AI自動生成",
    description: "実務に近いチャレンジをAIが作成、カスタマイズ可能",
  },
  {
    number: "3",
    title: "オンライン公開",
    description: "学生が自分のペースで取り組み、アウトプットを提出",
  },
  {
    number: "4",
    title: "評価・アプローチ",
    description: "興味度・スキル・行動データを可視化、優先順位付け",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <ScrollReveal>
          <h2 className="text-[22px] md:text-[26px] font-semibold text-foreground/90 text-center mb-2 leading-tight tracking-tight">
            4ステップで公開
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-[14px] md:text-[15px] text-foreground/60 text-center mb-10 md:mb-14 lg:mb-16 max-w-xl mx-auto">
            AIが自動生成するから、工数をかけずに質の高いジョブ体験を提供できます。
          </p>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={staggerItem} className="relative p-5 md:p-6 rounded-xl border border-border bg-surface shadow-sm">
              <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm mb-3 md:mb-4">
                {step.number}
              </div>
              <h3 className="text-[15px] md:text-base font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-[13px] md:text-sm text-foreground/60 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
