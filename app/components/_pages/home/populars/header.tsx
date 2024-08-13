import LinkContainer from '@/app/components/shared/ui/link-container';
const Header = () => {
  return (
    <section className="flex flex-col gap-1 ">
      <h2 className="text-3xl font-bold">محبوب ترین مطالب</h2>
      <LinkContainer className="bottom-2   mr-auto border-b-2 text-[#0E1924] border-[#0E1924]">
        نمایش بیشتر
      </LinkContainer>
    </section>
  );
};

export default Header;
