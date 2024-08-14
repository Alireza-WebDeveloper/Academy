'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Search from '../../ui/search';
import DropDown from './dropdown';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface Props {
  className?: string;
}

const SearchInput: React.FC<Props> = ({ className }) => {
  const [query, setQuery] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const searchQuery = searchParams.get('q') || '';
    setQuery(searchQuery);
  }, [searchParams]);

  const handleSearch = () => {
    router.push(`${pathname}?${createQueryString('q', query)}`);
  };

  return (
    <div className="relative">
      <Search
        handleSearch={handleSearch}
        className={`${query ? 'rounded-b-none border-b-2' : ''} ${className}`}
        query={query}
        setQuery={setQuery}
      />
      {query && <DropDown query={query} />}
    </div>
  );
};

export default SearchInput;
