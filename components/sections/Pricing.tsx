"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { pricingPlans } from "@/lib/data/pricing";
import { staggerContainer, staggerItem } from "@/components/animations/variants";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 border-t border-border">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <ScrollReveal>
          <h2 className="text-[22px] md:text-[26px] font-semibold text-foreground/90 text-center mb-2 leading-tight tracking-tight">
            料金
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-[14px] md:text-[15px] text-foreground/60 text-center mb-10 md:mb-14 lg:mb-16 max-w-xl mx-auto">
            初期は無料で開始でき、採用フェーズに合わせて段階的に機能や枠を拡張できます。
          </p>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div key={index} variants={staggerItem} className="h-full">
              <Card hover={plan.highlighted} className={`h-full flex flex-col justify-between ${plan.highlighted ? "border-[#0891B2]/40 bg-[#0891B2]/[0.02]" : "bg-surface"}`}>
                <div>
                  <h3 className="text-lg md:text-xl font-normal text-foreground mb-1">{plan.name}</h3>
                  <p className="text-foreground/50 text-xs md:text-sm mb-4">{plan.description}</p>

                  <div className="mb-1">
                    <span className="font-mono text-2xl md:text-3xl font-medium text-foreground">{plan.price}</span>
                    {plan.priceUnit && <span className="text-foreground/50 text-xs md:text-sm ml-1">{plan.priceUnit}</span>}
                  </div>
                  
                  <div className="h-4 mb-4">
                    {plan.subPrice && (
                      <span className="text-foreground/50 text-xs">（{plan.subPrice}）</span>
                    )}
                  </div>

                  <ul className="space-y-2 md:space-y-2.5">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        {feature.included ? (
                          <svg className="w-4 h-4 text-[#0891B2] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        )}
                        <span className={`text-[11px] md:text-[12px] leading-relaxed ${feature.included ? "text-foreground/70" : "opacity-30 text-foreground"}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button href={plan.ctaLink} variant={plan.highlighted ? "primary" : "secondary"} className={`w-full py-2.5 text-xs md:text-sm mt-8 ${plan.highlighted ? "bg-foreground text-background hover:opacity-80" : ""}`}>
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
