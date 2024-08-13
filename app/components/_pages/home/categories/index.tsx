import CardCategory from '@/app/components/shared/ui/card-category';

const Categories = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-3 grid-cols-1">
      <CardCategory />
      <CardCategory />
      <CardCategory />
      <CardCategory />
      <CardCategory />
    </div>
  );
};

export default Categories;
