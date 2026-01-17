import heroImage from '@/assets/hero-image.jpg';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'var(--gradient-hero)' }}
      />

      {/* Decorative elements */}
      <div className="absolute top-32 left-10 w-64 h-64 rounded-full bg-leaf-light/30 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-mint/50 blur-3xl" />

      <div className="container-main px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-leaf-light text-primary text-sm font-medium mb-6">
              🌿 Free delivery on orders over $50
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Bring Nature
              <br />
              <span className="text-gradient">Into Your Home</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Discover our curated collection of air-purifying, low-maintenance
              houseplants that transform any space into a peaceful sanctuary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="btn-primary text-base px-8 py-6 rounded-full"
              >
                <a href="#catalog">
                  Shop Plants
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="btn-secondary text-base px-8 py-6 rounded-full"
              >
                <a href="#catalog">View Collection</a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">1,000+</p>
                <p className="text-sm text-muted-foreground">Happy Homes</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Plant Varieties</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">30 Day</p>
                <p className="text-sm text-muted-foreground">Guarantee</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Beautiful indoor plants in a modern living room"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-card animate-float hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-leaf-light flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Easy Care</p>
                  <p className="text-sm text-muted-foreground">Beginner friendly</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#why-plants" className="text-muted-foreground hover:text-foreground transition-colors">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
