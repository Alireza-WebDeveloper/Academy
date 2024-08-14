import React from 'react';
import TitleSection from '../title-section';
import List from './list';
import { Post } from '@/app/lib/actions/home/_types/shared';

interface Props {
  latest: Post[];
}

const Latest: React.FC<Props> = ({ latest }) => {
  return (
    <div className="flex flex-col gap-5">
      <TitleSection title="آخرین مطالب" />
      <List latest={latest}/>
    </div>
  );
};

export default Latest;
