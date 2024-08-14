'use client';

import { useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/app/lib/utils/cn';

enum TabType {
  All = '',
  Section1 = '1',
  Section2 = '2',
}

const tabs = [
  { id: '1', text: 'همه', type: TabType.All },
  { id: '1', text: 'بخش 1', type: TabType.Section1 },
  { id: '2', text: 'بخش 2', type: TabType.Section2 },
];

const Tab = () => {
  const searchParams = useSearchParams();
  const active = searchParams.get('section') as TabType;
  const router = useRouter();

  const tabRefs = useRef<Record<TabType, HTMLButtonElement | null>>({
    [TabType.All]: null,
    [TabType.Section1]: null,
    [TabType.Section2]: null,
  });

  useEffect(() => {
    if (active && tabRefs.current[active]) {
      tabRefs.current[active]?.scrollIntoView({
        behavior: 'instant',
        block: 'center',
      });
    }
  }, [active]);

  const handleClick = (type: TabType, id: string) => {
    if (type === '') {
      router.push(`/`);
    } else {
      router.push(`?section=${id}`);
    }
  };

  return (
    <div className="flex gap-3">
      {tabs.map(({ id, text, type }) => (
        <button
          key={id}
          ref={(el) => (tabRefs.current[type] = el)} // Assign ref to each button
          className={cn(
            'text-xl',
            active === type && 'text-[#375CE7] border-b border-[#375CE7]',
            !active && type === '' && 'text-[#375CE7] border-b border-[#375CE7]'
          )}
          onClick={() => handleClick(type, id)}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default Tab;
