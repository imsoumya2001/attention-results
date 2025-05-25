
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
    const caseStudyContainers = document.querySelectorAll('[data-case-study-container]');
    
    caseStudyContainers.forEach((container) => {
      const htmlContainer = container as HTMLElement;
      const caseStudyElements = htmlContainer.querySelectorAll('[data-tags]');
      
      if (activeTags.includes('all')) {
        htmlContainer.style.display = 'block';
        // Show all elements within the container
        caseStudyElements.forEach((element) => {
          (element as HTMLElement).style.display = 'block';
        });
      } else if (activeTags.includes('apr-2025')) {
        // Special handling for Apr 2025 - show only latest results
        let hasLatestResults = false;
        caseStudyElements.forEach((element) => {
          const htmlElement = element as HTMLElement;
          const elementTags = htmlElement.getAttribute('data-tags')?.split(',') || [];
          
          if (elementTags.includes('apr-2025')) {
            htmlElement.style.display = 'block';
            hasLatestResults = true;
          } else {
            htmlElement.style.display = 'none';
          }
        });
        htmlContainer.style.display = hasLatestResults ? 'block' : 'none';
      } else {
        // Check if any case study in this container matches active tags
        let hasMatchingCaseStudy = false;
        caseStudyElements.forEach((element) => {
          const htmlElement = element as HTMLElement;
          const elementTags = htmlElement.getAttribute('data-tags')?.split(',') || [];
          const hasMatchingTag = activeTags.some(tag => elementTags.includes(tag));
          
          if (hasMatchingTag) {
            htmlElement.style.display = 'block';
            hasMatchingCaseStudy = true;
          } else {
            htmlElement.style.display = 'none';
          }
        });
        htmlContainer.style.display = hasMatchingCaseStudy ? 'block' : 'none';
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
        <div data-case-study-container>
          <ArizRestaurantCaseStudy />
        </div>
        
        {/* KSA Restaurant */}
        <div data-case-study-container>
          <KSARestaurantCaseStudy />
        </div>
        
        {/* Ramag Furniture */}
        <div data-case-study-container>
          <RamagFurnitureCaseStudy />
        </div>
      </div>
    </section>
  );
}
