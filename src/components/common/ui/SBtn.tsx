'use client';
import React, { useEffect, useState } from 'react';

type SizeType = 'sm' | 'md' | 'lg';
type ColorType = 'white' | 'blue';

interface BtnPropsType {
  propsHandle: () => void;
  size: SizeType;
}
export const SBtn: React.FC<BtnPropsType> = (props) => {
  const { propsHandle, size } = props;
  const [cusSize, setCusSize] = useState<SizeType>('md');

  useEffect(() => {
    setCusSize(size);
  }, [size]);
  return (
    <>
      <button
        className={
          'bg-blue ' +
          ((cusSize === 'sm' && 'w-[120px] rounded-md') ||
            (cusSize === 'lg' && ' bg-orange'))
        }
        onClick={propsHandle}
      >
        button
      </button>
    </>
  );
};
