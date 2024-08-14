'use client';
import React, { useState } from 'react';
import { SearchIcon } from '../icons';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  query: string;
  setQuery(value: string): void;
  handleSearch(): void;
}

const Search: React.FC<Props> = ({
  placeholder = 'جستجو',
  className,
  query,
  setQuery,
  handleSearch,
  ...rest
}) => {
  return (
    <section className="relative flex w-fit">
      <span
        className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
        onClick={handleSearch}
      >
        <SearchIcon />
      </span>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        className={`rounded-xl px-6 py-4 w-[680px] bg-[#FFFF] text-black border ${className}`}
        placeholder={placeholder}
        {...rest}
      />
    </section>
  );
};

export default Search;
