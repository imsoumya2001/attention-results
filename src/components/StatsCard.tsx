
import { cn } from '@/lib/utils';

interface StatsCardProps {
  label: string;
  baseline: string | number;
  current: string | number;
  growth?: number;
  isPositive?: boolean;
  isReduction?: boolean;
  prefix?: string;
  suffix?: string;
  newMetric?: boolean;
}

export default function StatsCard({ 
  label, 
  baseline, 
  current, 
  growth,
  isPositive = true,
  isReduction = false,
  prefix = '',
  suffix = '',
  newMetric = false
}: StatsCardProps) {
  return (
    <div className="glass-card rounded-lg p-4 w-full">
      <h4 className="text-sm text-agency-navy/70 dark:text-white/70 mb-2 font-medium">
        {label}
      </h4>
      
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <div className="flex items-baseline">
            <span className="text-sm opacity-60 mr-2">Before:</span>
            <span className="font-medium">
              {newMetric ? '—' : `${prefix}${baseline}${suffix}`}
            </span>
          </div>
          
          <div className="flex items-baseline">
            <span className="text-sm opacity-60 mr-2">After:</span>
            <span className="text-xl font-bold">
              {prefix}{current}{suffix}
            </span>
          </div>
        </div>
        
        {growth !== undefined && !newMetric && (
          <div 
            className={cn(
              "text-sm font-bold rounded-full py-1 px-3",
              isPositive && !isReduction && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
              !isPositive && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
              isReduction && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
            )}
          >
            {isReduction ? '-' : '+'}{Math.abs(growth)}%
          </div>
        )}
        
        {newMetric && (
          <div className="text-sm font-bold rounded-full py-1 px-3 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
            New
          </div>
        )}
      </div>
    </div>
  );
}
