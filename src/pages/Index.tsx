import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { BrandPartners } from "@/components/BrandPartners";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <BrandPartners />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
