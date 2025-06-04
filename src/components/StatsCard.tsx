
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
  CreditCard,
  Globe,
  MessageCircle,
  Mail,
  Phone,
  MapPin
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
  isBaselinePhase?: boolean;
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
  metricId = '',
  isBaselinePhase = false
}: StatsCardProps) {
  // Determine if the trend should be shown as positive (green) or negative (red)
  const showAsPositive = isReduction ? !isPositive : isPositive;
  
  // Format numbers with k for thousands (for Instagram impressions)
  const formatValue = (value: string | number) => {
    if ((metricId === 'impressions' || metricId === 'instagramReach') && typeof value === 'number' && value >= 1000) {
      return `${Math.round(value / 1000)}k`;
    }
    return value;
  };

  // Get the appropriate icon based on the metric ID
  const getMetricIcon = (id: string) => {
    switch (id) {
      case 'takeaway':
        return <ShoppingBag className="w-3 h-3 text-agency-teal" />;
      case 'aggregatorOrders':
        return <ShoppingCart className="w-3 h-3 text-agency-teal" />;
      case 'aov':
        return <DollarSign className="w-3 h-3 text-agency-teal" />;
      case 'whatsappOrders':
        return <Smartphone className="w-3 h-3 text-agency-teal" />;
      case 'impressions':
      case 'instagramReach':
        return <Instagram className="w-3 h-3 text-agency-teal" />;
      case 'marketingSpend':
        return <CreditCard className="w-3 h-3 text-agency-teal" />;
      case 'dailyTotal':
      case 'dailyOrders':
        return <ShoppingBag className="w-3 h-3 text-agency-teal" />;
      case 'buffet':
        return <Users className="w-3 h-3 text-agency-teal" />;
      case 'siteVisits':
        return <Store className="w-3 h-3 text-agency-teal" />;
      case 'projects':
        return <Target className="w-3 h-3 text-agency-teal" />;
      case 'inquiries':
      case 'onlineInquiries':
        return <MessageCircle className="w-3 h-3 text-agency-teal" />;
      case 'cpi':
      case 'costPerLead':
        return <DollarSign className="w-3 h-3 text-agency-teal" />;
      case 'websiteTraffic':
        return <Globe className="w-3 h-3 text-agency-teal" />;
      case 'storeTraffic':
        return <MapPin className="w-3 h-3 text-agency-teal" />;
      case 'emailResponseRate':
        return <Mail className="w-3 h-3 text-agency-teal" />;
      case 'callsFromMaps':
        return <Phone className="w-3 h-3 text-agency-teal" />;
      default:
        return showAsPositive ? 
          <TrendingUp className="w-3 h-3 text-agency-teal" /> : 
          <TrendingDown className="w-3 h-3 text-agency-teal" />;
    }
  };
  
  return (
    <div className="glass-card rounded-lg p-1.5 sm:p-2 w-full">
      <div className="flex items-center gap-1 mb-0.5 sm:mb-1">
        <div className={cn(
          "w-5 h-5 rounded-full flex items-center justify-center bg-agency-teal/10"
        )}>
          {getMetricIcon(metricId)}
        </div>
        <h4 className="text-xs text-agency-navy/70 dark:text-white/70 font-medium leading-tight">
          {label}
        </h4>
      </div>
      
      <div className="space-y-0.5 sm:space-y-1">
        {/* Only show before/after on non-baseline phases */}
        {!isBaselinePhase && baseline !== undefined && (
          <div className="flex items-baseline">
            <span className="text-xs opacity-60 mr-1">Before:</span>
            <span className="text-xs font-medium">
              {newMetric ? '—' : `${prefix}${formatValue(baseline)}${suffix}`}
            </span>
          </div>
        )}
        
        <div className="flex justify-between items-baseline">
          <div className="flex items-baseline">
            {/* For baseline phase, don't show "After:" label */}
            {!isBaselinePhase && <span className="text-xs opacity-60 mr-1">After:</span>}
            <span className={cn(
              "text-sm font-bold text-agency-teal",
            )}>
              {prefix}{formatValue(current)}{suffix}
            </span>
          </div>
          
          {growth !== undefined && !newMetric && !isBaselinePhase && (
            <div 
              className={cn(
                "text-xs font-bold rounded-full py-0.5 px-1.5",
                showAsPositive 
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" 
                  : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
              )}
            >
              {growth < 0 ? "-" : "+"}{Math.abs(growth)}%
            </div>
          )}
          
          {newMetric && (
            <div className="text-xs font-bold rounded-full py-0.5 px-1.5 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              New
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
