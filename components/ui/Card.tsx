"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      className={`bg-surface border border-border rounded-xl p-5 md:p-6 lg:p-8 ${className}`}
      whileHover={hover ? { borderColor: "var(--foreground)", opacity: 0.8, y: -4 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
