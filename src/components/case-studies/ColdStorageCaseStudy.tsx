
import CaseStudy, { Phase } from '../CaseStudy';

// B2B Cold Storage Case Study Data
const beforeMetrics = {
  websiteTraffic: { value: 0 },
  onlineInquiries: { value: 2 },
  emailResponseRate: { value: 0, suffix: '%' },
  callsFromMaps: { value: 18 },
  marketingSpend: { value: 1500, prefix: 'QAR ' },
  costPerLead: { value: 75, prefix: 'QAR ' }
};

const phases: Phase[] = [
  {
    name: 'Baseline (Apr 2025)',
    stats: [
      { id: 'websiteTraffic', label: 'Website Traffic', value: 0 },
      { id: 'onlineInquiries', label: 'Online Inquiries (DM)', value: 2 },
      { id: 'emailResponseRate', label: 'Email Response Rate', value: 0, suffix: '%' },
      { id: 'callsFromMaps', label: 'Calls from G Maps', value: 18 },
      { id: 'marketingSpend', label: 'Monthly Marketing Spend', value: 1500, prefix: 'QAR ' },
      { id: 'costPerLead', label: 'Cost Per Lead', value: 75, prefix: 'QAR ' }
    ]
  },
  {
    name: 'After Results (May 2025)',
    stats: [
      { id: 'websiteTraffic', label: 'Website Traffic', value: 480 },
      { id: 'onlineInquiries', label: 'Online Inquiries (DM)', value: 18 },
      { id: 'emailResponseRate', label: 'Email Response Rate', value: 24, suffix: '%', isNew: true },
      { id: 'callsFromMaps', label: 'Calls from G Maps', value: 42 },
      { id: 'marketingSpend', label: 'Monthly Marketing Spend', value: 2000, prefix: 'QAR ' },
      { id: 'costPerLead', label: 'Cost Per Lead', value: 33.3, prefix: 'QAR ' }
    ]
  }
];

export default function ColdStorageCaseStudy() {
  return (
    <div>
      <CaseStudy
        title="B2B Cold Storage"
        subtitle="Qatar"
        joinDate="Joined May 2025"
        phases={phases}
        beforeMetrics={beforeMetrics}
        tags={['qatar', 'b2b']}
      />
    </div>
  );
}
