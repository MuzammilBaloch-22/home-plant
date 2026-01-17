import { CartProvider } from '@/hooks/useCart';
import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import { CartDrawer } from '@/components/Shared/CartDrawer';
import { Hero } from '@/components/Sections/Hero';
import { WhyPlants } from '@/components/Sections/WhyPlants';
import { Catalog } from '@/components/Sections/Catalog';
import { HowItWorks } from '@/components/Sections/HowItWorks';
import { Testimonials } from '@/components/Sections/Testimonials';
import { Contact } from '@/components/Sections/Contact';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <CartDrawer />
        <main className="flex-1">
          <Hero />
          <WhyPlants />
          <Catalog />
          <HowItWorks />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
