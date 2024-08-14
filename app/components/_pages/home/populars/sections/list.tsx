import CardState from '@/app/components/shared/ui/card-state';
import React from 'react';
import { Post } from '@/app/lib/actions/home/_types/shared';

interface Props {
  populars: Post[];
}

const List: React.FC<Props> = ({ populars }) => {
  const createPopularItem = () => {
    return populars.map((popular) => {
      return <CardState key={popular.id} data={popular} />;
    });
  };
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
      {createPopularItem()}
    </div>
  );
};

export default List;
