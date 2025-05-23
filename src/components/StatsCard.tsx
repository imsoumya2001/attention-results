
import { cn } from '@/lib/utils';
import { 
  TrendingDown, 
  TrendingUp, 
  ShoppingBag, 
  DollarSign, 
  ShoppingCart, 
  Instagram, 
  Smartphone, 
  Users, 
  Store, 
  Target, 
  CreditCard
} from 'lucide-react';

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
  metricId?: string;
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
  newMetric = false,
  metricId = ''
}: StatsCardProps) {
  // Determine if the trend should be shown as positive (green) or negative (red)
  const showAsPositive = isReduction ? !isPositive : isPositive;
  
  // Get the appropriate icon based on the metric ID
  const getMetricIcon = (id: string) => {
    switch (id) {
      case 'takeaway':
        return <ShoppingBag className="w-3 h-3" />;
      case 'aggregatorOrders':
        return <ShoppingCart className="w-3 h-3" />;
      case 'aov':
        return <DollarSign className="w-3 h-3" />;
      case 'whatsappOrders':
        return <Smartphone className="w-3 h-3" />;
      case 'impressions':
        return <Instagram className="w-3 h-3" />;
      case 'marketingSpend':
        return <CreditCard className="w-3 h-3" />;
      case 'dailyTotal':
        return <ShoppingBag className="w-3 h-3" />;
      case 'dailyOrders':
        return <ShoppingBag className="w-3 h-3" />;
      case 'buffet':
        return <Users className="w-3 h-3" />;
      case 'siteVisits':
        return <Store className="w-3 h-3" />;
      case 'projects':
        return <Target className="w-3 h-3" />;
      case 'inquiries':
        return <Users className="w-3 h-3" />;
      case 'cpi':
        return <DollarSign className="w-3 h-3" />;
      default:
        return showAsPositive ? 
          <TrendingUp className="w-3 h-3" /> : 
          <TrendingDown className="w-3 h-3" />;
    }
  };
  
  return (
    <div className="glass-card rounded-lg p-2 w-full">
      <div className="flex items-center gap-1 mb-1">
        <div className={cn(
          "w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-r",
          showAsPositive ? 
            "from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30" : 
            "from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30"
        )}>
          <span className={cn(
            showAsPositive ? 
              "text-green-600 dark:text-green-400" : 
              "text-red-600 dark:text-red-400"
          )}>
            {getMetricIcon(metricId)}
          </span>
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
