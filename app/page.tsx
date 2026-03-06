import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Problem from "@/components/sections/Problem";
import ProductHighlightsIntro from "@/components/sections/ProductHighlightsIntro";
import ProductPillar1 from "@/components/sections/ProductPillar1";
import ProductPillar2 from "@/components/sections/ProductPillar2";
import ProductPillar3 from "@/components/sections/ProductPillar3";
import HowItWorks from "@/components/sections/HowItWorks";
import UseCases from "@/components/sections/UseCases";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Resources from "@/components/sections/Resources";
import Contact from "@/components/sections/Contact";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <section className="py-8 md:py-12 lg:py-20 px-4 md:px-6">
          <div className="max-w-[1300px] mx-auto space-y-12 md:space-y-16 lg:space-y-[90px]">
            <ProductHighlightsIntro />
            <ProductPillar1 />
            <ProductPillar2 />
            <ProductPillar3 />
            <div className="flex justify-center">
              <a
                href="https://youtu.be/K0rqZ0M1rQg?si=GaKFzrrHqAuK70Oc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/20 text-foreground/80 hover:border-[#0891B2] hover:text-[#0891B2] transition-all text-sm font-medium"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                デモ動画を見る
              </a>
            </div>
          </div>
        </section>
        <HowItWorks />
        <UseCases />
        <Testimonials />
        <Pricing />
        <Resources />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
