import LinkContainer from '../../../ui/link-container';
import DropDownItem from '../../../ui/link-dropdown';
import Sidebar from '../../../ui/sidebar';
const Navigation = () => {
  return (
    <Sidebar>
      <div className="flex flex-col gap-4">
        <LinkContainer>خانه</LinkContainer>
        <DropDownItem />
        <LinkContainer>لورم ایپسوم</LinkContainer>
        <LinkContainer>لورم ایپسوم</LinkContainer>
        <LinkContainer>لورم ایپسوم</LinkContainer>
      </div>
    </Sidebar>
  );
};

export default Navigation;
