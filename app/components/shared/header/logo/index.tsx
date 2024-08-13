import { LogoHeaderIcon } from '../../ui/icons';

const Logo = () => {
  return (
    <section className="ml-auto flex items-center gap-2">
      <LogoHeaderIcon />
      <h1 className="text-white text-xl leading-none font-bold tracking-tight">
        تینگز زیاد
      </h1>
    </section>
  );
};

export default Logo;
