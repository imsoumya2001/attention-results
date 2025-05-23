
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
      
      <div className="p-4 space-y-4">
        {/* Joined marker line - made month name prominent */}
        {joinDate && (
          <div className="text-sm font-medium text-agency-teal mb-2">
            {joinDate}
          </div>
        )}
        
        <div className="space-y-6">
          {phases.map((phase, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
              <h4 className="font-medium text-base mb-3 bg-agency-teal/10 p-2 rounded-lg text-agency-teal">
                {phase.name}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {phase.stats.map((stat) => {
                  const growth = calculateGrowth(stat.id, stat.value);
                  const isReduction = stat.id === 'marketingSpend' || stat.id === 'cpi';
                  const isFirst = index === 0;
                  
                  // Modify label to include "After" for non-baseline stats
                  let displayLabel = stat.label;
                  if (!isFirst && !isLatestResults && !displayLabel.includes("After")) {
                    displayLabel = displayLabel.replace("Average", "After Average");
                    displayLabel = displayLabel.replace("Avg", "After Average");
                    
                    if (!displayLabel.startsWith("After")) {
                      displayLabel = "After " + displayLabel;
                    }
                  }
                  
                  // Fix abbreviated labels
                  displayLabel = displayLabel.replace("Avg ", "Average ");
                  
                  return (
                    <StatsCard
                      key={stat.id}
                      label={displayLabel}
                      baseline={isFirst || isLatestResults ? undefined : (beforeMetrics[stat.id]?.value || '—')}
                      current={stat.value}
                      growth={isFirst ? undefined : growth}
                      isPositive={growth ? growth > 0 : true}
                      isReduction={isReduction}
                      prefix={stat.prefix || beforeMetrics[stat.id]?.prefix || ''}
                      suffix={stat.suffix || beforeMetrics[stat.id]?.suffix || ''}
                      newMetric={stat.isNew}
                      metricId={stat.id}
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
