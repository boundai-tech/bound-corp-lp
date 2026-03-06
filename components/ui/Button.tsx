"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "cyan";
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium text-sm transition-all duration-150";

  const variantClasses = {
    primary: "bg-foreground text-background hover:opacity-90 shadow-sm",
    secondary: "bg-transparent text-foreground border border-border hover:border-foreground/20",
    cyan: "bg-[#0891B2] text-white hover:bg-[#0E7490] shadow-sm",
  };

  const Component = motion.a;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </Component>
  );
}
