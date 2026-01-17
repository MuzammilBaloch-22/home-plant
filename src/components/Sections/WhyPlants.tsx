import { Wind, Heart, Palette, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Wind,
    title: 'Air Purification',
    description:
      'Plants naturally filter toxins and release fresh oxygen, improving your indoor air quality.',
  },
  {
    icon: Heart,
    title: 'Stress Relief',
    description:
      'Studies show indoor plants reduce stress and anxiety, promoting a sense of calm and well-being.',
  },
  {
    icon: Palette,
    title: 'Home Décor Upgrade',
    description:
      'Add life, color, and texture to any room with our carefully curated selection of plants.',
  },
  {
    icon: Sparkles,
    title: 'Easy Care',
    description:
      'Our plants are selected for their resilience—perfect for beginners and busy lifestyles.',
  },
];

export function WhyPlants() {
  return (
    <section id="why-plants" className="section-padding bg-secondary/30">
      <div className="container-main px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-leaf-light text-primary text-sm font-medium mb-4">
            Benefits
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Room Plants?
          </h2>
          <p className="text-lg text-muted-foreground">
            Transform your living space into a healthier, happier environment
            with the natural benefits of indoor greenery.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-leaf-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
