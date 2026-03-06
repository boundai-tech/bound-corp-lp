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
              <Card hover={plan.highlighted} className={`h-full min-h-[600px] flex flex-col ${plan.highlighted ? "border-[#0891B2]/40 bg-[#0891B2]/[0.02]" : "bg-surface"}`}>
                <h3 className="text-lg md:text-xl font-normal text-foreground mb-2">{plan.name}</h3>
                <p className="text-foreground/60 text-xs md:text-sm mb-5 md:mb-6">{plan.description}</p>

                <div className="mb-2">
                  <span className="font-mono text-2xl md:text-3xl font-medium text-foreground">{plan.price}</span>
                  {plan.priceUnit && <span className="text-foreground/60 text-xs md:text-sm ml-1">{plan.priceUnit}</span>}
                </div>
                
                <div className="h-5 md:h-6 mb-5 md:mb-6">
                  {plan.subPrice && (
                    <span className="text-foreground/60 text-xs">（{plan.subPrice}）</span>
                  )}
                </div>

                <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2.5 md:space-x-3">
                      {feature.included ? (
                        <svg className="w-4 h-4 text-[#0891B2] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-foreground/20 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      )}
                      <span className={`text-[12px] md:text-[13px] ${feature.included ? "text-foreground/80" : "text-foreground/40"}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button href={plan.ctaLink} variant={plan.highlighted ? "primary" : "secondary"} className={`w-full py-2.5 text-xs md:text-sm ${plan.highlighted ? "bg-foreground text-background hover:opacity-80" : ""}`}>
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
