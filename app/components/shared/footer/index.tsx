import About from './about';
import Company from './company';

const Footer = () => {
  return (
    <div className="flex flex-col gap-4">
      <About />
      <Company />
    </div>
  );
};

export default Footer;
