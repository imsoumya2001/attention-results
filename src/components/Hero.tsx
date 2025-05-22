
import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-agency-light-blue/10 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-agency-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-agency-light-blue/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            We Turn <span className="gradient-text">Attention</span> <br /> 
            Into <span className="gradient-text">Results</span>
          </h1>
          
          <p className="text-lg md:text-xl text-agency-navy/80 dark:text-white/80 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            Your expert marketing partner in crafting success stories 
            through data-driven strategies and measurable outcomes.
          </p>
          
          <div className="pt-8 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => scrollToSection('case-studies')}
              className={cn(
                "group flex items-center justify-center mx-auto",
                "bg-agency-teal/10 hover:bg-agency-teal/20 text-agency-teal",
                "rounded-full w-14 h-14 transition-all"
              )}
            >
              <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            </button>
            <span className="block mt-3 text-sm font-medium text-agency-navy/70 dark:text-white/70">
              See Our Impact
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
