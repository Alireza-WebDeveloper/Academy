import React from 'react';
import { CategoryState } from '@/app/lib/actions/home/_types/categories';

interface Props {
  category: CategoryState;
}

const CardCategory: React.FC<Props> = ({ category }) => {
  return (
    <div className="flex flex-col gap-3  p-4 rounded-xl border">
      <section className="p-2 h-[170px] gradient-box rounded w-full flex justify-center items-center flex-col gap-2 relative">
        <p className="text-3xl font-bold text-black">Lorem ipsum</p>
      </section>
      {/* Content */}
      <div className="flex flex-col gap-2">
        <p className="font-bold text-center">{category.title}</p>
        <p className="text-center text-sm">{category.description}</p>
      </div>
    </div>
  );
};

export default CardCategory;
