
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CaseStudies from '@/components/CaseStudies';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Whatsapp } from 'lucide-react';

const Index = () => {
  return <div className="min-h-screen bg-white dark:bg-agency-navy text-agency-navy dark:text-white">
      <Header />
      <Hero />
      
      <CaseStudies />
      <Footer />
    </div>;
};
export default Index;
