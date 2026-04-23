import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyFooter from "@/components/layout/MobileStickyFooter";
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
      <main className="pb-20 md:pb-0">
        <Hero />
        <SocialProof />
        <Problem />
        <section className="py-8 md:py-12 lg:py-20 px-4 md:px-6">
          <div className="max-w-[1300px] mx-auto space-y-12 md:space-y-16 lg:space-y-[90px]">
            <ProductHighlightsIntro />
            <ProductPillar1 />
            <ProductPillar2 />
            <ProductPillar3 />
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
      <MobileStickyFooter />
    </>
  );
}
