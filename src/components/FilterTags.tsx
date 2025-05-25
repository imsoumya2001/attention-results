
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { X, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FilterTag {
  id: string;
  label: string;
  type: 'all' | 'industry' | 'location' | 'date';
}

const availableTags: FilterTag[] = [
  { id: 'all', label: 'All', type: 'all' },
  { id: 'restaurant', label: 'Restaurant', type: 'industry' },
  { id: 'furniture', label: 'Furniture', type: 'industry' },
  { id: 'contractors', label: 'Contractors', type: 'industry' },
  { id: 'apr-2025', label: 'Apr 2025', type: 'date' },
  { id: 'oman', label: 'Oman', type: 'location' },
  { id: 'uae', label: 'UAE', type: 'location' },
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
        case 'industry':
          return 'bg-agency-teal text-white hover:bg-agency-teal/90';
        case 'location':
          return 'bg-agency-light-blue/70 text-agency-navy hover:bg-agency-light-blue/80';
        case 'date':
          return 'bg-gradient-to-r from-agency-teal to-agency-light-blue text-white hover:from-agency-teal/90 hover:to-agency-light-blue/90';
        default:
          return 'bg-agency-teal text-white hover:bg-agency-teal/90';
      }
    }
    return 'bg-white/80 text-agency-navy border border-agency-navy/20 hover:bg-agency-navy/10';
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4">
      <div className="flex flex-wrap justify-center gap-2">
        {availableTags.map((tag) => {
          const isActive = activeTags.includes(tag.id);
          return (
            <button
              key={tag.id}
              onClick={() => handleTagClick(tag.id)}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                getTagColor(tag.type, isActive),
                "hover:scale-105 active:scale-95"
              )}
            >
              <Tag className="w-3 h-3" />
              <span>{tag.label}</span>
              {isActive && tag.id !== 'all' && (
                <X className="w-3 h-3 ml-1" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
