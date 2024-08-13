'use client';

import { cn } from '@/app/lib/utils/cn';
import { useState } from 'react';

enum TabType {
  All = 'all',
  Section1 = 'section1',
  Section2 = 'section2',
}

const tabs = [
  { id: '1', text: 'همه', type: TabType.All },
  { id: '2', text: 'بخش 1', type: TabType.Section1 },
  { id: '3', text: 'بخش 2', type: TabType.Section2 },
];

const Tab = () => {
  const [active, setActive] = useState<TabType>(TabType.All);

  return (
    <div className="flex gap-3">
      {tabs.map(({ id, text, type }) => (
        <button
          key={id}
          className={cn(
            'text-xl',
            active === type && 'text-[#375CE7] border-b border-[#375CE7]'
          )}
          onClick={() => setActive(type)}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default Tab;
