import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/Brand.svg" 
                alt="BOUND" 
                width={120} 
                height={20} 
                className="h-5 w-auto dark:invert-0 invert"
              />
            </Link>
            <p className="text-sm text-foreground/60 leading-relaxed">
              実務体験ジョブチャレンジで
              <br />
              採用を変革する
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">プロダクト</h4>
            <ul className="space-y-3">
              <li>
                <Link href="https://app.boundai.tech/" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  ジョブチャレンジ作成
                </Link>
              </li>
              <li>
                <Link href="/student" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  学生向けページ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">リソース</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://note.com" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  ブログ
                </a>
              </li>
              <li>
                <a href="https://peatix.com" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  ウェビナー
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">お問い合わせ</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:bound.datact@gmail.com" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  bound.datact@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-foreground/40 text-center">
            © {new Date().getFullYear()} BOUND. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
