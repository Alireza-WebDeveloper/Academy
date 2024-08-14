import CardPost from '@/app/components/shared/ui/card-post';
import { Post } from '@/app/lib/actions/home/_types/shared';
import React from 'react';

interface Props {
  latest: Post[];
}

const List: React.FC<Props> = ({ latest }) => {
  const createLatestItem = () => {
    return latest.map((card) => {
      return <CardPost key={card.id} data={card} />;
    });
  };
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
      {createLatestItem()}
    </div>
  );
};

export default List;
