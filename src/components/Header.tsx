import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-orbitron font-bold neon-text">
              Factory Direct PC
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#" className="transition-colors hover:text-primary">
              Home
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Gaming PCs
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Computer Parts
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Support & Service
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Contact
            </a>
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-64 bg-muted border-border"
              />
              <Button size="sm" variant="ghost" className="h-9 w-9 p-0">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            
            <Button size="sm" variant="ghost" className="h-9 w-9 p-0 relative">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs flex items-center justify-center text-primary-foreground">
                0
              </span>
            </Button>

            {/* Mobile menu button */}
            <Button
              size="sm"
              variant="ghost"
              className="md:hidden h-9 w-9 p-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="transition-colors hover:text-primary">
                Home
              </a>
              <a href="#" className="transition-colors hover:text-primary">
                Gaming PCs
              </a>
              <a href="#" className="transition-colors hover:text-primary">
                Computer Parts
              </a>
              <a href="#" className="transition-colors hover:text-primary">
                Support & Service
              </a>
              <a href="#" className="transition-colors hover:text-primary">
                Contact
              </a>
              <div className="pt-4">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="bg-muted border-border"
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};