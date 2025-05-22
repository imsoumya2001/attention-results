
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section bg-agency-navy/5 dark:bg-white/5 relative overflow-hidden grain-overlay">
      {/* Decorative elements */}
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-agency-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-agency-light-blue/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-agency-navy/70 dark:text-white/70">
            Let's discuss how we can help grow your business with our data-driven marketing strategies.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 md:p-8">
            <div className="mb-5">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 focus:ring-2 focus:ring-agency-teal focus:border-transparent outline-none transition-all"
                placeholder="Enter your name"
              />
            </div>
            
            <div className="mb-5">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 focus:ring-2 focus:ring-agency-teal focus:border-transparent outline-none transition-all"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 focus:ring-2 focus:ring-agency-teal focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your business and goals"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full py-3 rounded-lg font-medium transition-all",
                "bg-agency-teal hover:bg-agency-teal/90 text-white",
                isSubmitting && "opacity-70 cursor-not-allowed"
              )}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
