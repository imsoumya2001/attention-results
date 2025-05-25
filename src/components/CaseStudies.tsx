
import { useState, useEffect } from 'react';
import ArizRestaurantCaseStudy from './case-studies/ArizRestaurantCaseStudy';
import KSARestaurantCaseStudy from './case-studies/KSARestaurantCaseStudy';
import RamagFurnitureCaseStudy from './case-studies/RamagFurnitureCaseStudy';
import FilterTags from './FilterTags';

export default function CaseStudies() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTags, setActiveTags] = useState<string[]>(['all']);

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

  useEffect(() => {
    // Filter case studies based on active tags
    const caseStudyElements = document.querySelectorAll('[data-tags]');
    
    caseStudyElements.forEach((element) => {
      const htmlElement = element as HTMLElement;
      const elementTags = htmlElement.getAttribute('data-tags')?.split(',') || [];
      
      if (activeTags.includes('all')) {
        htmlElement.style.display = 'block';
      } else if (activeTags.includes('apr-2025')) {
        // Special handling for Apr 2025 - show latest results
        const latestResults = htmlElement.querySelector('[data-latest-results]');
        if (latestResults) {
          htmlElement.style.display = 'block';
          // Show only latest results sections
          const phases = htmlElement.querySelectorAll('[data-phase]');
          phases.forEach((phase) => {
            const phaseElement = phase as HTMLElement;
            const phaseName = phaseElement.getAttribute('data-phase');
            if (phaseName?.toLowerCase().includes('april') || phaseName?.toLowerCase().includes('apr')) {
              phaseElement.style.display = 'block';
            } else {
              phaseElement.style.display = 'none';
            }
          });
        } else {
          htmlElement.style.display = 'none';
        }
      } else {
        // Check if any active tag matches element tags
        const hasMatchingTag = activeTags.some(tag => elementTags.includes(tag));
        htmlElement.style.display = hasMatchingTag ? 'block' : 'none';
      }
    });
  }, [activeTags]);

  return (
    <section id="case-studies" className="container mx-auto px-2 sm:px-4 pt-2 py-[25px]">
      <FilterTags onFilterChange={setActiveTags} />
      
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
    </section>
  );
}
