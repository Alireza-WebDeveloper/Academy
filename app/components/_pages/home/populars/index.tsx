import React from 'react';
import TitleSection from '../title-section';
import Sections from './sections';
import { Post } from '@/app/lib/actions/home/_types/shared';

interface Props {
  populars: Post[];
}

const Populars: React.FC<Props> = ({ populars }) => {
  return (
    <div className="flex flex-col gap-5">
      <TitleSection title="محبوب ترین مطالب" />
      <Sections populars={populars}/>
    </div>
  );
};

export default Populars;
