import { Star, Shield, Package, Truck } from 'lucide-react';
import { testimonials } from '@/data/plants';

const trustBadges = [
  { icon: Shield, label: 'Healthy Plant Guarantee' },
  { icon: Package, label: 'Safe Packaging' },
  { icon: Truck, label: 'Fast Delivery' },
];

export function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-main px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-leaf-light text-primary text-sm font-medium mb-4">
            Reviews
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loved by Plant Parents
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of happy customers who have transformed their homes
            with our plants.
          </p>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-leaf-light/50"
            >
              <badge.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {badge.label}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-leaf-light flex items-center justify-center">
                  <span className="font-semibold text-primary">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-secondary/50">
            <div className="flex -space-x-3">
              {['SM', 'JC', 'ET', 'RK'].map((initials, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-leaf-light border-2 border-background flex items-center justify-center text-xs font-semibold text-primary"
                >
                  {initials}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">1,000+ Happy Homes</p>
              <p className="text-sm text-muted-foreground">
                Trusted by plant lovers everywhere
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
