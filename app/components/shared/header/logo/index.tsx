import { LogoHeaderIcon } from '../../ui/icons';
import LinkContainer from '../../ui/link-container';

const Logo = () => {
  return (
    <LinkContainer href={'/'}>
      <section className="ml-auto flex items-center gap-2">
        <LogoHeaderIcon />
        <h1 className="text-white text-xl leading-none font-bold tracking-tight">
          تینگز زیاد
        </h1>
      </section>
    </LinkContainer>
  );
};

export default Logo;
