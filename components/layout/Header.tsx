"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 md:bg-background/80 md:dark:bg-black/50 md:backdrop-blur-md md:border-border md:dark:border-transparent ${
        scrolled
          ? "bg-background/80 dark:bg-black/50 backdrop-blur-md border-border dark:border-transparent"
          : "bg-transparent border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-full px-4 md:px-6 h-14 flex items-center justify-between">
        <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src="/contents/logos/brand.svg" 
              alt="BOUND" 
              width={100} 
              height={16} 
              className="h-4 w-auto dark:invert-0 invert"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-6 absolute left-1/2 -translate-x-1/2">
          <Link href="#features" className="text-[13px] text-foreground/70 hover:text-foreground transition-colors">
            機能
          </Link>
          <Link href="#usecases" className="text-[13px] text-foreground/70 hover:text-foreground transition-colors">
            活用例
          </Link>
          <Link href="#pricing" className="text-[13px] text-foreground/70 hover:text-foreground transition-colors">
            料金
          </Link>
          <Link href="#resources" className="text-[13px] text-foreground/70 hover:text-foreground transition-colors">
            コンテンツ
          </Link>
          <Link href="#contact" className="text-[13px] text-foreground/70 hover:text-foreground transition-colors">
            問合せ
          </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
          <ThemeToggle />
          <a href="https://boundai.tech/student" target="_blank" rel="noopener noreferrer" className="text-[13px] text-foreground/80 hover:text-foreground transition-colors border border-border dark:border-white/20 rounded-full px-4 py-1.5">
            学生の方へ
          </a>
          <Link href="https://app.boundai.tech/" className="text-[13px] bg-foreground text-background font-medium rounded-full px-4 py-1.5 hover:opacity-80 transition-colors">
            無料で作成
          </Link>
          </div>

          <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-foreground/70 hover:text-foreground transition-colors"
            aria-label="メニュー"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-background/95 dark:bg-black/95 backdrop-blur-md border-t border-border dark:border-white/10"
          >
            <nav className="px-6 py-4 space-y-3">
              <Link
                href="#features"
                onClick={closeMobileMenu}
                className="block text-[15px] text-foreground/70 hover:text-foreground transition-colors py-2"
              >
                機能
              </Link>
              <Link
                href="#usecases"
                onClick={closeMobileMenu}
                className="block text-[15px] text-foreground/70 hover:text-foreground transition-colors py-2"
              >
                活用例
              </Link>
              <Link
                href="#pricing"
                onClick={closeMobileMenu}
                className="block text-[15px] text-foreground/70 hover:text-foreground transition-colors py-2"
              >
                料金
              </Link>
              <Link
                href="#resources"
                onClick={closeMobileMenu}
                className="block text-[15px] text-foreground/70 hover:text-foreground transition-colors py-2"
              >
                コンテンツ
              </Link>
              <Link
                href="#contact"
                onClick={closeMobileMenu}
                className="block text-[15px] text-foreground/70 hover:text-foreground transition-colors py-2"
              >
                問合せ
              </Link>
              <div className="pt-3 space-y-2">
                <a
                  href="https://boundai.tech/student"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="block text-center text-[15px] text-foreground/80 hover:text-foreground transition-colors border border-border dark:border-white/20 rounded-full px-4 py-2"
                >
                  学生の方へ
                </a>
                <Link
                  href="https://app.boundai.tech/"
                  onClick={closeMobileMenu}
                  className="block text-center text-[15px] bg-foreground text-background font-medium rounded-full px-4 py-2 hover:opacity-80 transition-colors"
                >
                  無料で作成
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
