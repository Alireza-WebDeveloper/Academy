import Form from './form';
import IconPosition from './icon-position';

const Contact = () => {
  return (
    <div
      className="relative overflow-hidden flex justify-center items-center text-white  h-[320px] rounded-xl"
      style={{
        background:
          'linear-gradient(98.28deg, #0E1924 41.65%, #375CE7 161.39%)',
      }}
    >
      <Form />
      <IconPosition />
    </div>
  );
};

export default Contact;
