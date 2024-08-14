import React from 'react';
import List from './list';
import Tab from './tab';
import { Post } from '@/app/lib/actions/home/_types/shared';

interface Props {
  populars: Post[];
}

const Sections: React.FC<Props> = ({ populars }) => {
  return (
    <div className="flex flex-col gap-4">
      <Tab />
      <List populars={populars} />
    </div>
  );
};

export default Sections;
