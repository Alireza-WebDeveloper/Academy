'use client';
import React, { useState } from 'react';
import Search from '../../ui/search';
import DropDown from './dropdown';

interface Props {
  className?: string;
}

const SearchInput: React.FC<Props> = ({ className }) => {
  const [query, setQuery] = useState('');
  return (
    <div className="relative">
      <Search
        className={`${query && `rounded-b-none border-b-2`} ${className}`}
        query={query}
        setQuery={setQuery}
      />
      {query && <DropDown query={query} />}
    </div>
  );
};

export default SearchInput;
