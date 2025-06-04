
import CaseStudy, { Phase } from '../CaseStudy';

// Diamond Jewelry Store Case Study Data
const beforeMetrics = {
  websiteTraffic: { value: 112 },
  instagramReach: { value: 86000 },
  inquiries: { value: 32 },
  storeTraffic: { value: 224 },
  marketingSpend: { value: 2500, prefix: 'QAR ' },
  cpi: { value: 78, prefix: 'QAR ' }
};

const phases: Phase[] = [
  {
    name: 'Baseline (Apr 2025)',
    stats: [
      { id: 'websiteTraffic', label: 'Website Traffic', value: 112 },
      { id: 'instagramReach', label: 'Instagram Reach', value: 86000 },
      { id: 'inquiries', label: 'Inquiries in DM', value: 32 },
      { id: 'storeTraffic', label: 'Store Traffic on G Maps', value: 224 },
      { id: 'marketingSpend', label: 'Monthly Ads Spend', value: 2500, prefix: 'QAR ' },
      { id: 'cpi', label: 'Cost Per Inquiry', value: 78, prefix: 'QAR ' }
    ]
  },
  {
    name: 'After Results (May 2025)',
    stats: [
      { id: 'websiteTraffic', label: 'Website Traffic', value: 4648 },
      { id: 'instagramReach', label: 'Instagram Reach', value: 148000 },
      { id: 'inquiries', label: 'Inquiries in DM', value: 198 },
      { id: 'storeTraffic', label: 'Store Traffic on G Maps', value: 2891 },
      { id: 'marketingSpend', label: 'Monthly Ads Spend', value: 2105, prefix: 'QAR ' },
      { id: 'cpi', label: 'Cost Per Inquiry', value: 12.7, prefix: 'QAR ' }
    ]
  }
];

export default function DiamondJewelryCaseStudy() {
  return (
    <div>
      <CaseStudy
        title="Diamond Jewelry Store"
        subtitle="Qatar"
        joinDate="Joined May 2025"
        phases={phases}
        beforeMetrics={beforeMetrics}
        tags={['qatar', 'b2c']}
      />
    </div>
  );
}
