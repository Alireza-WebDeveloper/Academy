import React from 'react';
import { BadgeHeartVacantIcon, DetailIcon, PlayIcon } from '../icons';
import LinkContainer from '../link-container';

interface Props {}

const CardCategory: React.FC<Props> = () => {
  return (
    <div className="flex flex-col gap-3  p-4 rounded-xl border">
      <section className="p-2 h-[170px] gradient-box rounded w-full flex justify-center items-center flex-col gap-2 relative">
        <p className="text-3xl font-bold text-black">Lorem ipsum</p>
      </section>
      {/* Content */}
      <div className="flex flex-col gap-2">
        <p className="font-bold text-center">لورم ایپسوم متن ساختگی</p>
        <p className="text-center text-sm">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
        </p>
      </div>
    </div>
  );
};

export default CardCategory;
