import { HeroSection } from "@/components/landing/HeroSection";
import { PainPointsSection } from "@/components/landing/PainPointsSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { GuideContentSection } from "@/components/landing/GuideContentSection";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { OfferSection } from "@/components/landing/OfferSection";
import { GuaranteeSection } from "@/components/landing/GuaranteeSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { Footer } from "@/components/landing/Footer";
import { FadeInSection } from "@/components/landing/FadeInSection";

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl p-4 md:p-8">
      <main className="flex flex-col gap-24 md:gap-32">
        <FadeInSection>
          <HeroSection />
        </FadeInSection>
        
        <FadeInSection>
          <PainPointsSection />
        </FadeInSection>

        <FadeInSection>
          <SolutionSection />
        </FadeInSection>

        <FadeInSection>
          <GuideContentSection />
        </FadeInSection>

        <FadeInSection>
          <TestimonialSection />
        </FadeInSection>

        <FadeInSection>
          <OfferSection />
        </FadeInSection>
        
        <FadeInSection>
          <GuaranteeSection />
        </FadeInSection>
        
        <FadeInSection>
          <FaqSection />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
}
