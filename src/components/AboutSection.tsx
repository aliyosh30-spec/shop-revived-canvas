import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Wrench, Clock } from "lucide-react";

export const AboutSection = () => {
  const stats = [
    {
      icon: Clock,
      value: "25+",
      label: "Years Experience",
      description: "IT Service & Support"
    },
    {
      icon: Users,
      value: "10K+",
      label: "Happy Customers",
      description: "Nationwide"
    },
    {
      icon: Wrench,
      value: "3",
      label: "Year Warranty",
      description: "Parts & Labor"
    },
    {
      icon: Award,
      value: "100%",
      label: "Quality Guarantee",
      description: "Premium Components"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
              We love what we do!
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We take pride in offering only the best products and services. With over 25 years of IT Service and Support experience we have the technical knowledge to maintain your business or personal computers.
            </p>
            <p className="text-lg font-semibold text-primary mt-4">
              All custom PC builds include our exclusive three (3) year parts and labor warranty!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card 
                  key={index} 
                  className="glow-card text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-orbitron font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="font-semibold mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};