import CardState from '@/app/components/shared/ui/card-state';

const List = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
      <CardState />
      <CardState />
      <CardState />
      <CardState />
    </div>
  );
};

export default List;
