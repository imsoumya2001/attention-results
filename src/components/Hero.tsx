
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
    <section className="relative min-h-[30vh] flex items-center justify-center overflow-hidden grain-overlay">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-agency-light-blue/10 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-agency-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-agency-light-blue/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-12 relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight animate-fade-in opacity-0 tracking-wide" style={{ animationDelay: '0.2s' }}>
            We Turn <span className="gradient-text font-normal">Attention</span> <br /> 
            Into <span className="gradient-text font-normal">Results</span>
          </h1>
          
          <div className="pt-2 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => scrollToSection('case-studies')}
              className={cn(
                "group flex items-center justify-center mx-auto",
                "bg-agency-teal/10 hover:bg-agency-teal/20 text-agency-teal",
                "rounded-full w-12 h-12 transition-all"
              )}
            >
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
