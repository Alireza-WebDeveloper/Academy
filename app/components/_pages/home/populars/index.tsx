import React from 'react';
import Header from './header';
import Sections from './sections';

interface Props {}

const Populars: React.FC<Props> = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <Sections />
    </div>
  );
};

export default Populars;
