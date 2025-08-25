import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-orbitron font-bold neon-text">
              Factory Direct PC
            </div>
            <p className="text-muted-foreground">
              Custom build PCs, Premium Parts and Exceptional Service. Your trusted partner for high-performance computing solutions.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="w-9 h-9 p-0">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="w-9 h-9 p-0">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="w-9 h-9 p-0">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="w-9 h-9 p-0">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-orbitron font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Gaming PCs
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Computer Parts
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Custom Builds
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Support & Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Warranty
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-orbitron font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>1-800-FACTORY</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@factorydirectpc.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Nationwide U.S. Service</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-orbitron font-semibold text-lg">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Get the latest deals and product announcements delivered to your inbox.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-muted border-border"
              />
              <Button className="w-full" variant="neon">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2025 Factory Direct PC. All rights reserved.
            </p>
            <nav className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Shipping Info
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};