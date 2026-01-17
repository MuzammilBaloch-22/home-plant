import { Leaf, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-forest text-primary-foreground py-12 md:py-16">
      <div className="container-main px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-semibold">Leafy</span>
            </div>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Bringing nature into your home, one plant at a time. We believe everyone
              deserves a greener, healthier living space.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#catalog"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Shop Plants
                </a>
              </li>
              <li>
                <a
                  href="#why-plants"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Why Plants
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>hello@leafy.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Green Street, Nature City</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/50 text-sm">
          <p>© 2024 Leafy. All rights reserved. Made with 🌱 for plant lovers.</p>
        </div>
      </div>
    </footer>
  );
}
