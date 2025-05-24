
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

const latestPhase: Phase = {
  name: 'Further Growth (Apr 2025)',
  stats: [
    { id: 'inquiries', label: 'Monthly Online Inquiries', value: 291 },
    { id: 'siteVisits', label: 'Site Visits from Online', value: 28 },
    { id: 'projects', label: 'Projects from Online Inquiries', value: 14 },
    { id: 'cpi', label: 'Cost Per Inquiry', value: 2.2, prefix: '$' },
    { id: 'marketingSpend', label: 'Monthly Marketing Spend', value: 640, prefix: 'OMR ' }
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
          />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
