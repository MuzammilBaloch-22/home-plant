import { useState, FormEvent } from 'react';
import { z } from 'zod';
import { Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email')
    .max(255, 'Email must be less than 255 characters'),
  message: z
    .string()
    .trim()
    .min(1, 'Message is required')
    .max(1000, 'Message must be less than 1000 characters'),
});

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      toast({
        title: 'Message sent! 🌿',
        description:
          'Your request has been submitted. We will contact you later.',
      });

      // Clear form
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-leaf-light/20 to-leaf-light/40 -z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-forest to-transparent -z-10" />

      <div className="container-main px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-leaf-light text-primary text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Go Green?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Have questions about our plants or need help choosing the perfect
              one? We'd love to hear from you.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-card rounded-3xl p-6 md:p-10 shadow-elevated">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`input-field ${
                      errors.name ? 'border-destructive ring-2 ring-destructive/20' : ''
                    }`}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`input-field ${
                      errors.email ? 'border-destructive ring-2 ring-destructive/20' : ''
                    }`}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your ideal plant or ask any questions..."
                  rows={5}
                  className={`input-field resize-none ${
                    errors.message ? 'border-destructive ring-2 ring-destructive/20' : ''
                  }`}
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  We'll get back to you within 24 hours 🌱
                </p>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary px-8 py-6 text-base w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <span className="ml-2 animate-spin">⟳</span>
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Or jump right in and explore our collection
            </p>
            <Button
              asChild
              className="btn-primary text-base px-8 py-6 rounded-full"
            >
              <a href="#catalog">
                Shop All Plants
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
