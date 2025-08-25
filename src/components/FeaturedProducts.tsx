import { ProductCard } from "./ProductCard";
import { featuredProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            <span className="neon-text">2025 Best Sellers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our most popular components chosen by gamers and enthusiasts worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.slice(0, 8).map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};