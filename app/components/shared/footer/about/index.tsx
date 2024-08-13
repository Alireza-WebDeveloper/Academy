import React from 'react';
import ContactUs from './contact-us';
import Form from './form';

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <div
      className="p-8 text-white"
      style={{
        background:
          'linear-gradient(95.19deg, #0E1924 33.25%, #375CE7 304.44%)',
      }}
    >
      <section className="mx-auto container grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10">
        <ContactUs />
        <Form />
      </section>
    </div>
  );
};

export default About;
