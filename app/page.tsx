import Categories from './components/_pages/home/categories';
import Contact from './components/_pages/home/contact';
import Gallery from './components/_pages/home/gallery';
import Introduction from './components/_pages/home/introduction';
import Latest from './components/_pages/home/latest';
import Populars from './components/_pages/home/populars';

const Page = async () => {
  return (
    <div className="grid grid-cols-1 lg:gap-24 gap-12 place-content-center">
      <Introduction />
      <Categories />
      <Populars />
      <Latest />
      <Contact />
      <Gallery />
    </div>
  );
};

export default Page;
