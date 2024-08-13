import LinkContainer from '@/app/components/shared/ui/link-container';
import React from 'react';

interface Props {
  title: string;
}

const TitleSection: React.FC<Props> = ({ title }) => {
  return (
    <section className="flex flex-col gap-1 ">
      <h2 className="text-3xl font-bold">{title}</h2>
      <LinkContainer className="bottom-2   mr-auto border-b-2 text-[#0E1924] border-[#0E1924]">
        نمایش بیشتر
      </LinkContainer>
    </section>
  );
};

export default TitleSection;
