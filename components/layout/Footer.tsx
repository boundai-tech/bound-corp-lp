import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="inline-block mb-3 sm:mb-4">
              <Image 
                src="/contents/logos/brand.svg" 
                alt="BOUND" 
                width={120} 
                height={20} 
                className="h-4 sm:h-5 w-auto dark:invert-0 invert"
              />
            </Link>
            <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">
              実務体験ジョブチャレンジで
              <br />
              採用を変革する
            </p>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">プロダクト</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="https://app.boundai.tech/" className="text-xs sm:text-sm text-foreground/60 hover:text-foreground transition-colors">
                  ジョブチャレンジ作成
                </Link>
              </li>
              <li>
                <a href="https://boundai.tech/student" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-foreground/60 hover:text-foreground transition-colors">
                  学生向けページ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">リソース</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="https://note.com" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-foreground/60 hover:text-foreground transition-colors">
                  ブログ
                </a>
              </li>
              <li>
                <a href="https://peatix.com" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-foreground/60 hover:text-foreground transition-colors">
                  ウェビナー
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">お問い合わせ</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="mailto:bound.datact@gmail.com" className="text-xs sm:text-sm text-foreground/60 hover:text-foreground transition-colors break-all">
                  bound.datact@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-3 sm:mt-4">
              <a
                href="https://x.com/BOUND_datact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/40 hover:text-foreground/70 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/106913560"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/40 hover:text-foreground/70 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-border">
          <p className="text-xs sm:text-sm text-foreground/40 text-center">
            © {new Date().getFullYear()} BOUND. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
