import CardPost from '@/app/components/shared/ui/card-post';

const List = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
      <CardPost />
      <CardPost />
      <CardPost />
      <CardPost />
    </div>
  );
};

export default List;
