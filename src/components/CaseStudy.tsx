
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
      
      <div className="p-3 sm:p-4 space-y-4">
        {/* Joined marker line - made month name prominent */}
        {joinDate && (
          <div className="text-base font-medium text-agency-navy dark:text-white mb-2">
            {joinDate}
          </div>
        )}
        
        <div className="space-y-4 sm:space-y-6">
          {phases.map((phase, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-3 sm:pb-4 last:border-0 last:pb-0">
              <h4 className={cn(
                "font-bold text-base mb-2.5 sm:mb-3.5 py-1 px-2 inline-block rounded-md",
                index === 0 
                  ? "bg-gradient-to-r from-agency-navy/10 to-agency-teal/10 text-agency-navy dark:from-agency-teal/20 dark:to-agency-navy/20 dark:text-white"
                  : "bg-gradient-to-r from-agency-teal/10 to-agency-light-blue/10 text-agency-teal dark:from-agency-teal/20 dark:to-agency-light-blue/20"
              )}>
                {phase.name}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
                {phase.stats.map((stat) => {
                  const growth = calculateGrowth(stat.id, stat.value);
                  const isReduction = stat.id === 'marketingSpend' || stat.id === 'cpi';
                  
                  return (
                    <StatsCard
                      key={stat.id}
                      label={stat.label}
                      baseline={beforeMetrics[stat.id]?.value || '—'}
                      current={stat.value}
                      growth={index === 0 ? undefined : growth}
                      isPositive={growth ? growth > 0 : true}
                      isReduction={isReduction}
                      prefix={stat.prefix || beforeMetrics[stat.id]?.prefix || ''}
                      suffix={stat.suffix || beforeMetrics[stat.id]?.suffix || ''}
                      newMetric={stat.isNew}
                      metricId={stat.id}
                      isBaselinePhase={index === 0}
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
