"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    category: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "お名前を入力してください";
    }

    if (!formData.company.trim()) {
      newErrors.company = "会社名を入力してください";
    }

    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "有効なメールアドレスを入力してください";
    }

    if (!formData.category) {
      newErrors.category = "お問い合わせカテゴリを選択してください";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", company: "", email: "", category: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 lg:py-32 px-6 md:px-6 bg-surface">
      <div className="max-w-[600px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[18px] sm:text-[22px] md:text-[26px] font-semibold text-foreground/90 text-center mb-3 sm:mb-4 leading-tight tracking-tight">
            お問い合わせ
          </h2>
          <p className="text-center text-foreground/60 text-[13px] sm:text-[15px] mb-6 sm:mb-8 md:mb-12">
            BOUNDに関するご質問やご相談は、こちらからお気軽にお問い合わせください。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            {/* 名前 */}
            <div>
              <label htmlFor="name" className="block text-xs md:text-sm font-medium text-foreground/80 mb-2">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border ${
                  errors.name ? "border-red-500" : "border-border"
                } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#0891B2] focus:border-transparent transition-all`}
                placeholder="山田太郎"
              />
              {errors.name && <p className="mt-1 text-xs md:text-sm text-red-500">{errors.name}</p>}
            </div>

            {/* 会社名 */}
            <div>
              <label htmlFor="company" className="block text-xs md:text-sm font-medium text-foreground/80 mb-2">
                会社名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={`w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border ${
                  errors.company ? "border-red-500" : "border-border"
                } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#0891B2] focus:border-transparent transition-all`}
                placeholder="株式会社サンプル"
              />
              {errors.company && <p className="mt-1 text-xs md:text-sm text-red-500">{errors.company}</p>}
            </div>

            {/* メールアドレス */}
            <div>
              <label htmlFor="email" className="block text-xs md:text-sm font-medium text-foreground/80 mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border ${
                  errors.email ? "border-red-500" : "border-border"
                } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#0891B2] focus:border-transparent transition-all`}
                placeholder="example@company.com"
              />
              {errors.email && <p className="mt-1 text-xs md:text-sm text-red-500">{errors.email}</p>}
            </div>

            {/* お問い合わせカテゴリ */}
            <div>
              <label htmlFor="category" className="block text-xs md:text-sm font-medium text-foreground/80 mb-2">
                お問い合わせカテゴリ <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border ${
                  errors.category ? "border-red-500" : "border-border"
                } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#0891B2] focus:border-transparent transition-all`}
              >
                <option value="">選択してください</option>
                <option value="デモを見たい">デモを見たい</option>
                <option value="資料請求">資料請求</option>
                <option value="料金プランの相談">料金プランの相談</option>
                <option value="導入の相談">導入の相談</option>
                <option value="その他の質問">その他の質問</option>
              </select>
              {errors.category && <p className="mt-1 text-xs md:text-sm text-red-500">{errors.category}</p>}
            </div>

            {/* お問い合わせ内容 */}
            <div>
              <label htmlFor="message" className="block text-xs md:text-sm font-medium text-foreground/80 mb-2">
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#0891B2] focus:border-transparent transition-all resize-none"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>

            {/* 送信ボタン */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-foreground text-background text-sm md:text-base font-medium hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "送信中..." : "送信する"}
            </button>

            {/* ステータスメッセージ */}
            {submitStatus === "success" && (
              <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <p className="text-green-800 dark:text-green-200 text-sm text-center">
                  送信しました。お問い合わせありがとうございます。
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                <p className="text-red-800 dark:text-red-200 text-sm text-center">
                  送信に失敗しました。もう一度お試しください。
                </p>
              </div>
            )}
          </form>

          {/* SNS Links */}
          <div className="mt-8 sm:mt-10 flex justify-center gap-4">
            <a
              href="https://x.com/BOUND_datact"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border hover:border-foreground/40 hover:bg-foreground/5 transition-all"
              aria-label="X (Twitter)"
            >
              <svg className="w-5 h-5 text-foreground/60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/106913560"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border hover:border-foreground/40 hover:bg-foreground/5 transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 text-foreground/60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
