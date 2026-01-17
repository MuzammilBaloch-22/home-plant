import { ShoppingCart } from 'lucide-react';
import { plants } from '@/data/plants';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function Catalog() {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (plant: (typeof plants)[0]) => {
    addToCart(plant);
    toast({
      title: 'Added to cart!',
      description: `${plant.name} has been added to your cart.`,
    });
  };

  return (
    <section id="catalog" className="section-padding">
      <div className="container-main px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-leaf-light text-primary text-sm font-medium mb-4">
            Our Collection
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Your Perfect Plant
          </h2>
          <p className="text-lg text-muted-foreground">
            Each plant is carefully selected and comes with detailed care
            instructions to help you succeed.
          </p>
        </div>

        {/* Plant Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {plants.map((plant, index) => (
            <div
              key={plant.id}
              className="group card-plant"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-secondary/50">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Care badge */}
                <span className="absolute top-4 left-4 badge-care">
                  {plant.careLevel}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {plant.name}
                  </h3>
                  <p className="text-lg font-bold text-primary">
                    ${plant.price}
                  </p>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {plant.description}
                </p>
                <Button
                  onClick={() => handleAddToCart(plant)}
                  className="w-full btn-primary rounded-xl py-5"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
