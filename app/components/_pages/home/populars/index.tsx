import React from 'react';
import TitleSection from '../title-section';
import Sections from './sections';

interface Props {}

const Populars: React.FC<Props> = () => {
  return (
    <div className="flex flex-col gap-5">
      <TitleSection title="محبوب ترین مطالب" />
      <Sections />
    </div>
  );
};

export default Populars;
