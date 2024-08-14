'use client';
import React from 'react';
import {
  BadgeHeartFillIcon,
  BadgeHeartVacantIcon,
  DetailIcon,
  PlayIcon,
} from '../icons';
import LinkContainer from '../link-container';
import { Post } from '@/app/lib/actions/home/_types/shared';
import { updateLikePost } from '@/app/lib/actions/home';

interface Props {
  data: Post;
}

const CardState: React.FC<Props> = ({ data }) => {
  const handleLike = async () => {
    await updateLikePost({ id: String(data.id) });
  };
  return (
    <div className="flex flex-col gap-3  p-4 rounded-xl border">
      <section className="p-2 h-[170px] bg-[#384D60] rounded w-full flex justify-center items-center flex-col gap-2 relative">
        <span
          className="absolute top-3 right-3 cursor-pointer"
          onClick={handleLike}
        >
          {data.liked ? <BadgeHeartFillIcon /> : <BadgeHeartVacantIcon />}
        </span>
        <p className="text-white text-2xl font-bold">Lorem ipsum</p>
        <p className="text-[#6EAAC7]">dolor sit amet</p>
      </section>
      {/* Content */}
      <div className="flex flex-col gap-2">
        <LinkContainer
          href={`?section=${data.section.id}`}
          className={'text-[#375CE7] text-bold'}
        >
          {data.section.name}
        </LinkContainer>
        <p className="font-bold">لورم ایپسوم متن ساختگی</p>
        <p>{data.abstract}</p>
      </div>
      {/* Detail */}
      <div className="flex justify-between items-center flex-wrap gap-3">
        <section>
          <span> {data.views} مشاهده</span>
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
