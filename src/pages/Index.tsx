
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CaseStudies from '@/components/CaseStudies';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button'; 
import { WhatsappIcon } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-agency-navy text-agency-navy dark:text-white">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-6">
        <a 
          href="https://wa.me/96876990710" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 py-2 px-6 bg-[#25D366] hover:bg-[#20BC5C] text-white rounded-full transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
            <path d="M9 10a.5.5 0 0 1 1 0c0 1.97 1.35 3 3 3a.5.5 0 0 1 0 1"></path>
          </svg>
          WhatsApp Us
        </a>
      </div>
      <CaseStudies />
      <Footer />
    </div>
  );
};

export default Index;
