import React from 'react';
import { BadgeHeartVacantIcon, DetailIcon, PlayIcon } from '../icons';
import LinkContainer from '../link-container';

interface Props {}

const CardState: React.FC<Props> = () => {
  return (
    <div className="flex flex-col gap-3  p-4 rounded-xl border">
      <section className="p-2 h-[170px] bg-[#384D60] rounded w-full flex justify-center items-center flex-col gap-2 relative">
        <span className="absolute top-3 right-3">
          <BadgeHeartVacantIcon />
        </span>
        <p className="text-white text-2xl font-bold">Lorem ipsum</p>
        <p className="text-[#6EAAC7]">dolor sit amet</p>
      </section>
      {/* Content */}
      <div className="flex flex-col gap-2">
        <LinkContainer className={'text-[#375CE7] text-bold'}>
          بخش 1
        </LinkContainer>
        <p className="font-bold">لورم ایپسوم متن ساختگی</p>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم صنعت چاپ، برای استفاده
          طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر
          آنچنان که لازم است.
        </p>
      </div>
      {/* Detail */}
      <div className="flex justify-between items-center flex-wrap gap-3">
        <section>
          <span>26 مشاهده</span>
        </section>
        <section className="flex items-center gap-4">
          <PlayIcon />
          <DetailIcon />
        </section>
      </div>
    </div>
  );
};

export default CardState;
