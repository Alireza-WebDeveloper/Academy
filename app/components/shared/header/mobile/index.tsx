import { MenuIcon } from '../../ui/icons';
import Search from '../../ui/search';
import Sidebar from '../../ui/sidebar';
import SideBar from '../../ui/sidebar';
import Navigation from '../mobile/navigation';
import Logo from '../logo';

import SearchInput from '../search-input';

const Mobile = () => {
  return (
    <div className="flex flex-col h-full  w-full absolute z-10 p-5 lg:hidden">
      <div className="flex w-full justify-between z-10">
        <Logo />
        <Navigation />
      </div>
      <div className="flex flex-col  absolute w-full h-full gap-6  top-0 left-0 justify-center items-center text-white">
        <p className="text-3xl font-bold w-[80vw] text-center">
          لورم ایپسوم ساختگی
        </p>
        <p className="text-md text-center w-[80vw]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
        <SearchInput className="max-w-[80vw]" />
      </div>
    </div>
  );
};

export default Mobile;
