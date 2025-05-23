
import { cn } from '@/lib/utils';
import { TrendingDown, TrendingUp } from 'lucide-react';

interface StatsCardProps {
  label: string;
  baseline?: string | number;
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
  // Determine if the trend should be shown as positive (green) or negative (red)
  const showAsPositive = isReduction ? !isPositive : isPositive;
  
  return (
    <div className="glass-card rounded-lg p-2 w-full">
      <div className="flex items-center gap-1 mb-1">
        <div className={cn(
          "w-5 h-5 rounded-full flex items-center justify-center",
          showAsPositive ? "bg-green-100 dark:bg-green-900/30" : "bg-red-100 dark:bg-red-900/30"
        )}>
          {showAsPositive ? (
            <TrendingUp className="w-3 h-3 text-green-600 dark:text-green-400" />
          ) : (
            <TrendingDown className="w-3 h-3 text-red-600 dark:text-red-400" />
          )}
        </div>
        <h4 className="text-xs text-agency-navy/70 dark:text-white/70 font-medium truncate">
          {label}
        </h4>
      </div>
      
      <div className="flex justify-between items-baseline">
        <div>
          {baseline !== undefined && (
            <div className="flex items-baseline mb-1">
              <span className="text-xs opacity-60 mr-1">Before:</span>
              <span className="text-xs font-medium">
                {newMetric ? '—' : `${prefix}${baseline}${suffix}`}
              </span>
            </div>
          )}
          
          <div className="flex items-baseline">
            <span className={cn(
              "text-sm font-bold",
              baseline !== undefined && "text-agency-teal"
            )}>
              {prefix}{current}{suffix}
            </span>
          </div>
        </div>
        
        {growth !== undefined && !newMetric && (
          <div 
            className={cn(
              "text-xs font-bold rounded-full py-0.5 px-1.5",
              showAsPositive 
                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" 
                : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
            )}
          >
            {isReduction ? '-' : '+'}{Math.abs(growth)}%
          </div>
        )}
        
        {newMetric && (
          <div className="text-xs font-bold rounded-full py-0.5 px-1.5 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
            New
          </div>
        )}
      </div>
    </div>
  );
}
