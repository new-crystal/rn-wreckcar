'use client';
import React, { useState } from 'react';
import ATag from '../link/ATag';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import test from '@/public/assets/test.svg';
export default function Base() {
  const pathName = usePathname();

  return (
    <aside
      className={
        'w-[270px] min-w-[270px] text-white h-screen' +
        (pathName == '/' || pathName == '/login' ? ' hidden' : '')
      }
    >
      <div className="bg-blue w-[270px] min-w-[270px] fixed">
        <div className="logo_slide flex justify-between">
          <div className="logo">logo</div>
          <Image src={test} alt={''} />
        </div>

        <div className="w_nav h-screen flex flex-col justify-between">
          <div className="top_nav flex-col flex bg-green mt-14 gap-3">
            <p className="mb-1 ">내 UTM</p>
            <ATag url={'/management'} isBlank={false}>
              UTM 관리하기
            </ATag>
            <ATag url={'/creating'} isBlank={false}>
              새 UTM 생성하기
            </ATag>
            <ATag url={'https://naver.com'} isBlank={false}>
              기존 UTM 추가하기
            </ATag>
          </div>
          <div className="flex flex-col gap-3 bottom_nav bg-orange mb-20 ">
            <p>유렉카</p>
            <ATag url={'https://utm.works'} isBlank={true} />
            <ATag url={'https://naver.com'} isBlank={true} />
            <ATag url={'https://naver.com'} isBlank={true} />
          </div>
        </div>
      </div>
    </aside>
  );
}
