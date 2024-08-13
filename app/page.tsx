import Categories from './components/_pages/home/categories';
import Introduction from './components/_pages/home/introduction';
import Populars from './components/_pages/home/populars';

const Page = () => {
  return (
    <div className="grid grid-cols-1 lg:gap-4 gap-10 place-content-center">
      <Introduction />
      <Categories />
      <Populars />
    </div>
  );
};

export default Page;
