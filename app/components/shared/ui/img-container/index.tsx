'use client';
// !! Package
import React from 'react';
import Image from 'next/image';
// !! Type

export type PropsType = {
  src: string;
  classes?: string;
  style?: any;
};

type LoadImage = {
  src: any;
  quality: any;
  width: any;
};

export type LoadPartialImageType = Partial<LoadImage>;

const loadImage = ({ src, width, quality }: LoadPartialImageType) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ImgContainer: React.FC<PropsType> = ({ src, classes, style }) => {
  return (
    <div className={`relative ${classes}`}>
      <Image
        loader={loadImage}
        src={src}
        alt={'image'}
        blurDataURL={src}
        loading="lazy"
        placeholder="blur"
        fill
        className={classes}
        sizes="(max-width: 1200px) 100vw"
      />
    </div>
  );
};

export default ImgContainer;
