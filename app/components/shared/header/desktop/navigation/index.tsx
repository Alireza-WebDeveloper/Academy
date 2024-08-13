import LinkContainer from '../../../ui/link-container';
import DropDownItem from '../../../ui/link-dropdown';
const Navigation = () => {
  return (
    <div className="flex items-center gap-14 ml-auto  z-10">
      <LinkContainer className="text-white">خانه</LinkContainer>
      <DropDownItem />
      <LinkContainer className="text-white">لورم ایپسوم</LinkContainer>
      <LinkContainer className="text-white">لورم ایپسوم</LinkContainer>
      <LinkContainer className="text-white">لورم ایپسوم</LinkContainer>
    </div>
  );
};

export default Navigation;
