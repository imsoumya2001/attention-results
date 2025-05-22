
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CaseStudies from '@/components/CaseStudies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-agency-navy text-agency-navy dark:text-white">
      <Header />
      <Hero />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
