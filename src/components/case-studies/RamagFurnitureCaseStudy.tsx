
import { useState } from 'react';
import CaseStudy, { Phase } from '../CaseStudy';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

// Ramag Furniture Case Study Data
const beforeMetrics = {
  inquiries: { value: 18 },
  siteVisits: { value: 0 },
  projects: { value: 0 },
  cpi: { value: 24, prefix: '$' },
  marketingSpend: { value: 432, prefix: 'OMR ' }
};

const phases: Phase[] = [
  {
    name: 'Baseline (May-Jun 2024)',
    summary: 'Initial online presence metrics before implementing our comprehensive digital marketing strategy.',
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
    summary: 'Dramatic improvement in lead generation and cost efficiency through targeted digital campaigns and website optimization.',
    stats: [
      { id: 'inquiries', label: 'Monthly Online Inquiries', value: 89 },
      { id: 'siteVisits', label: 'Site Visits from Online', value: 29, isNew: true },
      { id: 'projects', label: 'Projects from Online Inquiries', value: 8, isNew: true },
      { id: 'cpi', label: 'Cost Per Inquiry', value: 6.80, prefix: '$' },
      { id: 'marketingSpend', label: 'Monthly Marketing Spend', value: 451, prefix: 'OMR ' }
    ]
  },
];

const latestPhase: Phase = {
  name: 'Further Growth (Apr 2025)',
  summary: 'Continued expansion with enhanced conversion rates and strategic marketing investment for long-term growth.',
  stats: [
    { id: 'inquiries', label: 'Monthly Online Inquiries', value: 156 },
    { id: 'siteVisits', label: 'Site Visits from Online', value: 28 },
    { id: 'projects', label: 'Projects from Online Inquiries', value: 9 },
    { id: 'cpi', label: 'Cost Per Inquiry', value: 5.50, prefix: '$' },
    { id: 'marketingSpend', label: 'Monthly Marketing Spend', value: 855, prefix: 'OMR ' }
  ]
};

export default function RamagFurnitureCaseStudy() {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <CaseStudy
        title="Ramag Furniture"
        subtitle="Oman"
        joinDate="Joined August 2024"
        phases={phases}
        beforeMetrics={beforeMetrics}
        tags={['furniture', 'contractors']}
      />
      <Collapsible open={open} onOpenChange={setOpen} className="mt-4">
        <CollapsibleTrigger className="w-full p-3 flex items-center justify-center gap-2 rounded-lg bg-agency-teal/10 text-agency-teal hover:bg-agency-teal/20 transition-all">
          <span>Latest Results from Ramag Furniture</span>
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
            tags={['furniture', 'contractors', 'apr-2025']}
          />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
