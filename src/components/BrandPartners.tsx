export const BrandPartners = () => {
  const brands = [
    "Intel",
    "ASUS", 
    "NVIDIA",
    "Cooler Master",
    "Corsair",
    "Crucial",
    "Seagate",
    "MSI",
    "Thermaltake",
    "Western Digital",
    "Kingston"
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            <span className="neon-text">Premium Partners</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We work exclusively with industry-leading brands to ensure every component meets our high standards
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div
              key={brand}
              className="group cursor-pointer p-4 rounded-lg transition-all duration-300 hover:bg-card/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-24 h-16 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <span className="font-orbitron font-semibold text-sm text-center group-hover:text-primary transition-colors">
                  {brand}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Authorized retailer and certified partner for all major PC component brands
          </p>
        </div>
      </div>
    </section>
  );
};