import React from 'react';
import TitleSection from '../title-section';
import List from './list';

interface Props {}

const Latest: React.FC<Props> = () => {
  return (
    <div className="flex flex-col gap-5">
      <TitleSection title="آخرین مطالب" />
      <List />
    </div>
  );
};

export default Latest;
