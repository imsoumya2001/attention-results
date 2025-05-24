import { useState, useEffect } from 'react';
import ArizRestaurantCaseStudy from './case-studies/ArizRestaurantCaseStudy';
import KSARestaurantCaseStudy from './case-studies/KSARestaurantCaseStudy';
import RamagFurnitureCaseStudy from './case-studies/RamagFurnitureCaseStudy';
export default function CaseStudies() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });
    observer.observe(document.getElementById('case-studies')!);
    return () => {
      observer.disconnect();
    };
  }, []);
  return <section id="case-studies" className="container mx-auto px-2 sm:px-4 pt-2 py-[25px]">
      <div className={`space-y-6 sm:space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
      animationDelay: '0.2s'
    }}>
        {/* Ariz Restaurant */}
        <ArizRestaurantCaseStudy />
        
        {/* KSA Restaurant */}
        <KSARestaurantCaseStudy />
        
        {/* Ramag Furniture */}
        <RamagFurnitureCaseStudy />
      </div>
    </section>;
}