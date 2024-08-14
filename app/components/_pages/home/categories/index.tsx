import CardCategory from '@/app/components/shared/ui/card-category';
import { CategoryState } from '@/app/lib/actions/home/_types/categories';
import React from 'react';

interface Props {
  categories: CategoryState[];
}

const Categories: React.FC<Props> = ({ categories }) => {
  const createCategoryItem = () => {
    return categories.map((category) => {
      return <CardCategory category={category} key={category.id} />;
    });
  };

  return (
    <div className="grid lg:grid-cols-3 gap-3 grid-cols-1">
      {createCategoryItem()}
    </div>
  );
};

export default Categories;
