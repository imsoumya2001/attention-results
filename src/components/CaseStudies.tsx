
import { useState, useEffect } from 'react';
import CaseStudy, { Phase } from './CaseStudy';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

export default function CaseStudies() {
  const [isVisible, setIsVisible] = useState(false);
  const [openAriz, setOpenAriz] = useState(false);
  const [openRamag, setOpenRamag] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
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

  // Ariz Restaurant Case Study Data
  const arizBeforeMetrics = {
    takeaway: { value: 13 },
    aggregatorOrders: { value: 8 },
    aov: { value: 2.1, prefix: 'OMR ' },
    whatsappOrders: { value: 27 },
    impressions: { value: 48000 },
    marketingSpend: { value: 380, prefix: 'OMR ' },
    dailyTotal: { value: 21 } // 13 + 8
  };

  const arizPhases: Phase[] = [
    {
      name: 'Baseline (Oct 2024)',
      stats: [
        { id: 'takeaway', label: 'Daily Takeaway', value: 13 },
        { id: 'aggregatorOrders', label: 'Daily Aggregator Orders', value: 8 },
        { id: 'aov', label: 'Average Order Value', value: 2.1, prefix: 'OMR ' },
        { id: 'whatsappOrders', label: 'Monthly WhatsApp Orders', value: 27 },
        { id: 'impressions', label: 'Monthly Instagram Impressions', value: 48000 },
        { id: 'marketingSpend', label: 'Monthly Marketing Spend', value: 380, prefix: 'OMR ' }
      ]
    },
    {
      name: 'After 3 Months (Jan 2025)',
      stats: [
        { id: 'takeaway', label: 'Daily Takeaway', value: 29 },
        { id: 'aggregatorOrders', label: 'Daily Aggregator Orders', value: 18 },
        { id: 'aov', label: 'Average Order Value', value: 2.8, prefix: 'OMR ' },
        { id: 'whatsappOrders', label: 'Monthly WhatsApp Orders', value: 122 },
        { id: 'impressions', label: 'Monthly Instagram Impressions', value: 119000 },
        { id: 'marketingSpend', label: 'Monthly Marketing Spend', value: 252, prefix: 'OMR ' }
      ]
    },
    {
      name: 'Ramadan (Feb-Mar 2025)',
      stats: [
        { id: 'buffet', label: 'Daily Buffet Orders', value: 61 },
        { id: 'takeaway', label: 'Daily Takeaway', value: 36 },
        { id: 'aggregatorOrders', label: 'Daily Aggregator Orders', value: 14 },
        { id: 'dailyTotal', label: 'Total Daily Orders', value: 111 },
        { id: 'aov', label: 'Average Order Value', value: 3.1, prefix: 'OMR ' },
        { id: 'whatsappOrders', label: 'Monthly WhatsApp Orders', value: 228 },
        { id: 'impressions', label: 'Monthly Instagram Impressions', value: 311000 },
        { id: 'marketingSpend', label: 'Monthly Marketing Spend', value: 328, prefix: 'OMR ' }
      ]
    },
  ];

  const arizLatestPhase: Phase = {
    name: 'April 2025',
    stats: [
      { id: 'dailyTotal', label: 'Daily Takeaway + Aggregators', value: 39 },
      { id: 'aov', label: 'Average Order Value', value: 3.3, prefix: 'OMR ' },
      { id: 'whatsappOrders', label: 'Monthly WhatsApp Orders', value: 414 },
      { id: 'impressions', label: 'Monthly Instagram Impressions', value: 221000 },
      { id: 'marketingSpend', label: 'Monthly Marketing Spend', value: 220, prefix: 'OMR ' }
    ]
  };

  // KSA Restaurant Case Study Data
  const ksaBeforeMetrics = {
    dailyOrders: { value: 26 },
    aov: { value: 30, prefix: 'SAR ' },
    whatsappOrders: { value: 0 },
    impressions: { value: 440000 },
    marketingSpend: { value: 680, prefix: 'OMR ' }
  };

  const ksaPhases: Phase[] = [
    {
      name: 'Baseline (Mar-Apr)',
      stats: [
        { id: 'dailyOrders', label: 'Daily Takeaway + Aggregators', value: 26 },
        { id: 'aov', label: 'Average Order Value', value: 30, prefix: 'SAR ' },
        { id: 'whatsappOrders', label: 'Monthly WhatsApp Orders', value: 0 },
        { id: 'impressions', label: 'Monthly Instagram Impressions', value: 440000 },
        { id: 'marketingSpend', label: 'Monthly Marketing Spend', value: 680, prefix: 'OMR ' }
      ]
    },
    {
      name: 'After Results (Apr-May, ~1 month)',
      stats: [
        { id: 'dailyOrders', label: 'Daily Takeaway + Aggregators', value: 36 },
        { id: 'aov', label: 'Average Order Value', value: 38, prefix: 'SAR ' },
        { id: 'whatsappOrders', label: 'Monthly WhatsApp Orders', value: 281, isNew: true },
        { id: 'impressions', label: 'Monthly Instagram Impressions', value: 512000 },
        { id: 'marketingSpend', label: 'Monthly Marketing Spend', value: 421, prefix: 'OMR ' }
      ]
    }
  ];

  // Ramag Furniture Case Study Data
  const ramagBeforeMetrics = {
    inquiries: { value: 18 },
    siteVisits: { value: 0 },
    projects: { value: 0 },
    cpi: { value: 24, prefix: '$' },
    marketingSpend: { value: 432, prefix: 'OMR ' }
  };

  const ramagPhases: Phase[] = [
    {
      name: 'Baseline (May-Jun 2024)',
      stats: [
        { id: 'inquiries', label: 'Monthly Online Inquiries', value: 18 },
        { id: 'siteVisits', label: 'Site Visits from Online', value: 0 },
        { id: 'projects', label: 'Projects from Online Inquiries', value: 0 },
        { id: 'cpi', label: 'Cost Per Inquiry', value: 24, prefix: '$' },
        { id: 'marketingSpend', label: 'Monthly Marketing Spend', value: 432, prefix: 'OMR ' }
      ]
    },
    {
      name: 'After 3 Months (Oct 2024)',
      stats: [
        { id: 'inquiries', label: 'Monthly Online Inquiries', value: 188 },
        { id: 'siteVisits', label: 'Site Visits from Online', value: 29, isNew: true },
        { id: 'projects', label: 'Projects from Online Inquiries', value: 8, isNew: true },
        { id: 'cpi', label: 'Cost Per Inquiry', value: 2.4, prefix: '$' },
        { id: 'marketingSpend', label: 'Monthly Marketing Spend', value: 451, prefix: 'OMR ' }
      ]
    },
  ];

  const ramagLatestPhase: Phase = {
    name: 'Further Growth (Apr 2025)',
    stats: [
      { id: 'inquiries', label: 'Monthly Online Inquiries', value: 291 },
      { id: 'siteVisits', label: 'Site Visits from Online', value: 28 },
      { id: 'projects', label: 'Projects from Online Inquiries', value: 14 },
      { id: 'cpi', label: 'Cost Per Inquiry', value: 2.2, prefix: '$' },
      { id: 'marketingSpend', label: 'Monthly Marketing Spend', value: 640, prefix: 'OMR ' }
    ]
  };

  return (
    <section id="case-studies" className="container mx-auto px-2 sm:px-4 pt-2">
      <div className={`space-y-6 sm:space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
        {/* Ariz Restaurant */}
        <div>
          <CaseStudy
            title="Ariz Restaurant"
            subtitle="Seeb, Oman"
            joinDate="Joined November 2024"
            phases={arizPhases}
            beforeMetrics={arizBeforeMetrics}
          />
          <Collapsible open={openAriz} onOpenChange={setOpenAriz} className="mt-3 sm:mt-4">
            <CollapsibleTrigger className="w-full p-2 sm:p-3 flex items-center justify-center gap-2 rounded-lg bg-agency-teal/10 text-agency-teal hover:bg-agency-teal/20 transition-all">
              <span>Latest Results from Ariz Restaurant</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openAriz ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2">
              <CaseStudy
                title=""
                subtitle=""
                joinDate=""
                phases={[arizLatestPhase]}
                beforeMetrics={arizBeforeMetrics}
                isLatestResults
              />
            </CollapsibleContent>
          </Collapsible>
        </div>
        
        {/* KSA Restaurant */}
        <div>
          <CaseStudy
            title="Premium Restaurant Chain"
            subtitle="Jeddah, KSA (Name under NDA)"
            joinDate="Joined April 14th, 2025"
            phases={ksaPhases}
            beforeMetrics={ksaBeforeMetrics}
          />
        </div>
        
        {/* Ramag Furniture */}
        <div>
          <CaseStudy
            title="Ramag Furniture"
            subtitle="Oman"
            joinDate="Joined August 2024"
            phases={ramagPhases}
            beforeMetrics={ramagBeforeMetrics}
          />
          <Collapsible open={openRamag} onOpenChange={setOpenRamag} className="mt-4">
            <CollapsibleTrigger className="w-full p-3 flex items-center justify-center gap-2 rounded-lg bg-agency-teal/10 text-agency-teal hover:bg-agency-teal/20 transition-all">
              <span>Latest Results from Ramag Furniture</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openRamag ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2">
              <CaseStudy
                title=""
                subtitle=""
                joinDate=""
                phases={[ramagLatestPhase]}
                beforeMetrics={ramagBeforeMetrics}
                isLatestResults
              />
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
}
