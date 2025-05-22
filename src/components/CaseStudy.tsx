
import { cn } from '@/lib/utils';
import StatsCard from './StatsCard';

export interface Phase {
  name: string;
  stats: {
    id: string;
    label: string;
    value: string | number;
    prefix?: string;
    suffix?: string;
    isNew?: boolean;
  }[];
}

interface CaseStudyProps {
  title: string;
  subtitle: string;
  joinDate: string;
  phases: Phase[];
  beforeMetrics: Record<string, { value: string | number; prefix?: string; suffix?: string }>;
}

export default function CaseStudy({ 
  title, 
  subtitle, 
  joinDate, 
  phases,
  beforeMetrics
}: CaseStudyProps) {
  
  const calculateGrowth = (id: string, currentValue: string | number) => {
    const baselineMetric = beforeMetrics[id];
    if (!baselineMetric) return undefined;
    
    const baseValue = Number(baselineMetric.value);
    const currentNumValue = Number(currentValue);
    
    if (isNaN(baseValue) || isNaN(currentNumValue) || baseValue === 0) return undefined;
    
    return Math.round((currentNumValue - baseValue) / baseValue * 100);
  };
  
  return (
    <div className="glass-card rounded-xl overflow-hidden mb-16">
      <div className="bg-agency-navy p-6 text-white">
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        <p className="text-white/70 mt-1">{subtitle}</p>
      </div>
      
      <div className="relative before-after-divider">
        {/* Joined marker line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-agency-teal flex items-center justify-center z-10">
          <div className="absolute -left-[42px] top-20 w-20 h-8 bg-agency-teal text-white text-xs font-medium flex items-center justify-center rounded-r-lg">
            {joinDate}
          </div>
        </div>
        
        <div className="pl-8 p-6 space-y-6">
          {phases.map((phase, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
              <h4 className="font-medium text-lg mb-4">{phase.name}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {phase.stats.map((stat) => {
                  const growth = calculateGrowth(stat.id, stat.value);
                  const isReduction = stat.id === 'marketingSpend' || stat.id === 'cpi';
                  
                  return (
                    <StatsCard
                      key={stat.id}
                      label={stat.label}
                      baseline={beforeMetrics[stat.id]?.value || '—'}
                      current={stat.value}
                      growth={growth}
                      isPositive={growth ? growth > 0 : true}
                      isReduction={isReduction}
                      prefix={stat.prefix || beforeMetrics[stat.id]?.prefix || ''}
                      suffix={stat.suffix || beforeMetrics[stat.id]?.suffix || ''}
                      newMetric={stat.isNew}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
