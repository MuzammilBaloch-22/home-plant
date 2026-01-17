import { Search, ShoppingCart, Package, Truck } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Choose Your Plant',
    description: 'Browse our collection and find the perfect plant for your space and lifestyle.',
  },
  {
    icon: ShoppingCart,
    title: 'Add to Cart',
    description: 'Select your favorites and add them to your cart with just one click.',
  },
  {
    icon: Package,
    title: 'Place Order',
    description: 'Complete your purchase securely. We handle everything from there.',
  },
  {
    icon: Truck,
    title: 'Delivered to You',
    description: 'Your plants arrive safely packaged and ready to thrive in their new home.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-secondary/30">
      <div className="container-main px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-leaf-light text-primary text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting your dream plants delivered is easier than ever. Here's how
            we make it happen.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
              )}

              <div className="text-center">
                {/* Step number and icon */}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-card shadow-card flex items-center justify-center">
                    <step.icon className="w-9 h-9 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
