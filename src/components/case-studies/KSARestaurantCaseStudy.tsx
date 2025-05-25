
import CaseStudy, { Phase } from '../CaseStudy';

// KSA Restaurant Case Study Data
const beforeMetrics = {
  dailyOrders: { value: 26 },
  aov: { value: 30, prefix: 'SAR ' },
  whatsappOrders: { value: 0 },
  impressions: { value: 440000 },
  marketingSpend: { value: 680, prefix: 'OMR ' }
};

const phases: Phase[] = [
  {
    name: 'Baseline (Mar-Apr)',
    summary: 'Starting metrics for the premium restaurant chain before our engagement.',
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
    summary: 'Rapid improvement through WhatsApp integration and enhanced social media presence within just one month.',
    stats: [
      { id: 'dailyOrders', label: 'Daily Takeaway + Aggregators', value: 36 },
      { id: 'aov', label: 'Average Order Value', value: 38, prefix: 'SAR ' },
      { id: 'whatsappOrders', label: 'Monthly WhatsApp Orders', value: 281, isNew: true },
      { id: 'impressions', label: 'Monthly Instagram Impressions', value: 512000 },
      { id: 'marketingSpend', label: 'Monthly Marketing Spend', value: 421, prefix: 'OMR ' }
    ]
  }
];

export default function KSARestaurantCaseStudy() {
  return (
    <div>
      <CaseStudy
        title="Premium Restaurant Chain"
        subtitle="Jeddah, KSA (Name under NDA)"
        joinDate="Joined April 14th, 2025"
        phases={phases}
        beforeMetrics={beforeMetrics}
        tags={['restaurant', 'uae']}
      />
    </div>
  );
}
