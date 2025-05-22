
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'py-3 bg-white/80 dark:bg-agency-navy/80 backdrop-blur-md shadow-md'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-agency-navy dark:text-white">
            Attention<span className="text-agency-teal">.social</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollTo('case-studies')}
            className="text-agency-navy/80 dark:text-white/80 hover:text-agency-teal transition-colors"
          >
            Case Studies
          </button>
          <button 
            onClick={() => scrollTo('contact')}
            className="text-agency-navy/80 dark:text-white/80 hover:text-agency-teal transition-colors"
          >
            Contact
          </button>
        </nav>

        <button 
          onClick={() => scrollTo('contact')}
          className="bg-agency-teal hover:bg-agency-teal/90 text-white py-2 px-4 md:px-6 rounded-lg transition-colors"
        >
          Get in Touch
        </button>
      </div>
    </header>
  );
}
