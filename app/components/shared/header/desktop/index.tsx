import Search from '../../ui/search';
import Logo from '../logo';
import Navigation from './navigation';
import SearchInput from '../search-input';

const Desktop = () => {
  return (
    <div className="lg:flex flex-col h-full  w-full absolute z-10 p-5 hidden">
      <div className="flex w-full">
        <Logo />
        <Navigation />
      </div>
      <div className="flex flex-col  absolute w-full h-full gap-6  top-0 left-0 justify-center items-center text-white">
        <p className="text-3xl font-bold">لورم ایپسوم ساختگی</p>
        <p className="text-md">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
        <SearchInput />
      </div>
    </div>
  );
};

export default Desktop;
