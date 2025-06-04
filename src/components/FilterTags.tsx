
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { X, Globe, Building2, ShoppingBag, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FilterTag {
  id: string;
  label: string;
  type: 'all' | 'location' | 'business';
  icon: React.ReactNode;
}

const availableTags: FilterTag[] = [
  { id: 'all', label: 'All', type: 'all', icon: <Globe className="w-3 h-3" /> },
  { id: 'oman', label: 'Oman', type: 'location', icon: <MapPin className="w-3 h-3" /> },
  { id: 'qatar', label: 'Qatar', type: 'location', icon: <MapPin className="w-3 h-3" /> },
  { id: 'uae', label: 'UAE', type: 'location', icon: <MapPin className="w-3 h-3" /> },
  { id: 'ksa', label: 'KSA', type: 'location', icon: <MapPin className="w-3 h-3" /> },
  { id: 'b2b', label: 'B2B', type: 'business', icon: <Building2 className="w-3 h-3" /> },
  { id: 'b2c', label: 'B2C', type: 'business', icon: <ShoppingBag className="w-3 h-3" /> },
];

interface FilterTagsProps {
  onFilterChange: (activeTags: string[]) => void;
}

export default function FilterTags({ onFilterChange }: FilterTagsProps) {
  const [activeTags, setActiveTags] = useState<string[]>(['all']);

  const handleTagClick = (tagId: string) => {
    let newActiveTags: string[];
    
    if (tagId === 'all') {
      newActiveTags = ['all'];
    } else {
      if (activeTags.includes(tagId)) {
        // Remove tag
        newActiveTags = activeTags.filter(tag => tag !== tagId);
        if (newActiveTags.length === 0) {
          newActiveTags = ['all'];
        }
      } else {
        // Add tag
        newActiveTags = activeTags.filter(tag => tag !== 'all').concat(tagId);
      }
    }
    
    setActiveTags(newActiveTags);
    onFilterChange(newActiveTags);
  };

  const getTagColor = (type: string, isActive: boolean) => {
    if (isActive) {
      switch (type) {
        case 'all':
          return 'bg-agency-navy text-white hover:bg-agency-navy/90';
        case 'location':
          return 'bg-agency-teal text-white hover:bg-agency-teal/90';
        case 'business':
          return 'bg-gradient-to-r from-agency-teal to-agency-light-blue text-white hover:from-agency-teal/90 hover:to-agency-light-blue/90';
        default:
          return 'bg-agency-teal text-white hover:bg-agency-teal/90';
      }
    }
    return 'bg-white/80 text-agency-navy border border-agency-navy/20 hover:bg-agency-navy/10';
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
      <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-4">
        {availableTags.map((tag) => {
          const isActive = activeTags.includes(tag.id);
          return (
            <button
              key={tag.id}
              onClick={() => handleTagClick(tag.id)}
              className={cn(
                "inline-flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-3 py-0.5 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200",
                getTagColor(tag.type, isActive),
                "hover:scale-105 active:scale-95"
              )}
            >
              {tag.icon}
              <span>{tag.label}</span>
              {isActive && tag.id !== 'all' && (
                <X className="w-2 h-2 sm:w-3 sm:h-3 ml-0.5 sm:ml-1" />
              )}
            </button>
          );
        })}
      </div>
      
      <div className="text-center text-xs sm:text-sm text-agency-navy/70 dark:text-white/70">
        <span className="font-medium">Strategies Implemented:</span> B2B Lead Generation and Outreach, Email Marketing, WhatsApp Marketing, LinkedIn Ads, Google Ads and SEO, Cold Calling.
      </div>
    </div>
  );
}
