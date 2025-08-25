import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Zap, Shield } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative hero-bg py-20 lg:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary animate-glow-pulse mb-6">
            <Zap className="mr-2 h-4 w-4" />
            Custom build PCs, Premium Parts and Exceptional Service
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 animate-slide-up">
            <span className="neon-text">High Performance</span>
            <br />
            <span className="text-foreground">PCs & Parts</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Over 25 years of IT expertise. Let us build your next gaming powerhouse with our exclusive 3-year warranty.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" variant="neon" className="text-lg px-8 py-6">
              Build Your PC
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Browse Parts
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-orbitron font-semibold mb-2">Custom Builds</h3>
              <p className="text-sm text-muted-foreground">Tailored to your exact specifications</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-orbitron font-semibold mb-2">Premium Parts</h3>
              <p className="text-sm text-muted-foreground">Only the best components from top brands</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-orbitron font-semibold mb-2">3-Year Warranty</h3>
              <p className="text-sm text-muted-foreground">Full parts and labor coverage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};