import Banner from '../../_pages/home/banner';
import Desktop from './desktop';
import Mobile from './mobile';

const Header = () => {
  return (
    <div className="relative">
      <Desktop />
      <Mobile />
      <Banner />
    </div>
  );
};

export default Header;
