import { LogoFooterIcon } from '../../ui/icons';

const Logo = () => {
  return (
    <section className="flex items-center gap-2 lg: ml-auto">
      <LogoFooterIcon />
      <h1 className="text-black text-xl leading-none font-bold tracking-tight">
        تینگز زیاد
      </h1>
    </section>
  );
};

export default Logo;
