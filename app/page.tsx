import Categories from './components/_pages/home/categories';
import Introduction from './components/_pages/home/introduction';
import Latest from './components/_pages/home/latest';
import Populars from './components/_pages/home/populars';

const Page = () => {
  return (
    <div className="grid grid-cols-1 lg:gap-24 gap-12 place-content-center">
      <Introduction />
      <Categories />
      <Populars />
      <Latest />
    </div>
  );
};

export default Page;
