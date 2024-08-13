import List from './list';
import Tab from './tab';

const Sections = () => {
  return (
    <div className="flex flex-col gap-4">
      <Tab />
      <List />
    </div>
  );
};

export default Sections;
