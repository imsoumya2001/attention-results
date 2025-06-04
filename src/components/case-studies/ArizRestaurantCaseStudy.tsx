
import { useState } from 'react';
import CaseStudy from '../CaseStudy';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { Phase } from '../CaseStudy';

// Ariz Restaurant Case Study Data
const beforeMetrics = {
  takeaway: { value: 13 },
  aggregatorOrders: { value: 8 },
  aov: { value: 2.1, prefix: 'OMR ' },
  whatsappOrders: { value: 27 },
  impressions: { value: 48000 },
  marketingSpend: { value: 380, prefix: 'OMR ' },
  dailyTotal: { value: 21 } // 13 + 8
};

const phases: Phase[] = [
  {
    name: 'Baseline (Oct 2024)',
    summary: 'Initial performance metrics before implementing our marketing strategy.',
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
    summary: 'Significant growth achieved through targeted social media campaigns and customer engagement strategies.',
    stats: [
      { id: 'takeaway', label: 'Daily Takeaway', value: 22 },
      { id: 'aggregatorOrders', label: 'Daily Aggregator Orders', value: 15 },
      { id: 'aov', label: 'Average Order Value', value: 2.8, prefix: 'OMR ' },
      { id: 'whatsappOrders', label: 'Monthly WhatsApp Orders', value: 95 },
      { id: 'impressions', label: 'Monthly Instagram Impressions', value: 119000 },
      { id: 'marketingSpend', label: 'Monthly Marketing Spend', value: 252, prefix: 'OMR ' }
    ]
  },
  {
    name: 'Ramadan (Feb-Mar 2025)',
    summary: 'Special Ramadan menu launch with buffet service drove exceptional growth during the holy month.',
    stats: [
      { id: 'buffet', label: 'Daily Buffet Orders', value: 45 },
      { id: 'takeaway', label: 'Daily Takeaway', value: 28 },
      { id: 'aggregatorOrders', label: 'Daily Aggregator Orders', value: 12 },
      { id: 'dailyTotal', label: 'Total Daily Orders', value: 85 },
      { id: 'aov', label: 'Average Order Value', value: 2.9, prefix: 'OMR ' },
      { id: 'whatsappOrders', label: 'Monthly WhatsApp Orders', value: 135 },
      { id: 'impressions', label: 'Monthly Instagram Impressions', value: 311000 },
      { id: 'marketingSpend', label: 'Monthly Marketing Spend', value: 328, prefix: 'OMR ' }
    ]
  },
];

const latestPhase: Phase = {
  name: 'April 2025',
  summary: 'Sustained growth with optimized marketing spend and enhanced customer retention strategies.',
  stats: [
    { id: 'dailyTotal', label: 'Daily Takeaway + Aggregators', value: 32 },
    { id: 'aov', label: 'Average Order Value', value: 3.0, prefix: 'OMR ' },
    { id: 'whatsappOrders', label: 'Monthly WhatsApp Orders', value: 165 },
    { id: 'impressions', label: 'Monthly Instagram Impressions', value: 221000 },
    { id: 'marketingSpend', label: 'Monthly Marketing Spend', value: 220, prefix: 'OMR ' }
  ]
};

export default function ArizRestaurantCaseStudy() {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <CaseStudy
        title="Ariz Restaurant"
        subtitle="Seeb, Oman"
        joinDate="Joined November 2024"
        phases={phases}
        beforeMetrics={beforeMetrics}
        tags={['restaurant']}
      />
      <Collapsible open={open} onOpenChange={setOpen} className="mt-3 sm:mt-4">
        <CollapsibleTrigger className="w-full p-2 sm:p-3 flex items-center justify-center gap-2 rounded-lg bg-agency-teal/10 text-agency-teal hover:bg-agency-teal/20 transition-all">
          <span>Latest Results from Ariz Restaurant</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2">
          <CaseStudy
            title=""
            subtitle=""
            joinDate=""
            phases={[latestPhase]}
            beforeMetrics={beforeMetrics}
            isLatestResults
            tags={['restaurant', 'apr-2025']}
          />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
