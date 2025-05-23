
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
  isLatestResults?: boolean;
}

export default function CaseStudy({ 
  title, 
  subtitle, 
  joinDate, 
  phases,
  beforeMetrics,
  isLatestResults = false
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
    <div className={cn(
      "glass-card rounded-xl overflow-hidden",
      !isLatestResults && "mb-4"
    )}>
      {!isLatestResults && title && (
        <div className="bg-agency-navy p-4 text-white">
          <h3 className="text-lg md:text-xl font-bold">{title}</h3>
          <p className="text-white/70 text-sm">{subtitle}</p>
        </div>
      )}
      
      <div className="relative before-after-divider">
        {/* Joined marker line */}
        {joinDate && (
          <div className="absolute left-0 top-0 h-full w-1 bg-agency-teal flex items-center justify-center z-10">
            <div className="absolute -left-[42px] top-16 w-20 h-8 bg-agency-teal text-white text-xs font-medium flex items-center justify-center rounded-r-lg">
              {joinDate}
            </div>
          </div>
        )}
        
        <div className="pl-6 p-4 space-y-4">
          {phases.map((phase, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
              <h4 className="font-medium text-base mb-3">{phase.name}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {phase.stats.map((stat) => {
                  const growth = calculateGrowth(stat.id, stat.value);
                  const isReduction = stat.id === 'marketingSpend' || stat.id === 'cpi';
                  const isFirst = index === 0 && !isLatestResults;
                  
                  return (
                    <StatsCard
                      key={stat.id}
                      label={stat.label}
                      baseline={isFirst ? undefined : (beforeMetrics[stat.id]?.value || '—')}
                      current={stat.value}
                      growth={isFirst ? undefined : growth}
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
