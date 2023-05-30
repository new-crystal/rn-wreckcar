'use client';
import React from 'react';
import ATag from '../link/ATag';
import { usePathname } from 'next/navigation';

export default function Aside() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <aside
      className={
        'bg-blue w-[270px] min-w-[270px] text-white fixed' +
        (pathName == '/' || pathName == '/login' ? ' hidden' : '')
      }
    >
      <div className="">logo</div>
      <div className="w_nav h-screen flex flex-col justify-between">
        <div className="top_nav flex-col flex bg-green mt-14 gap-3">
          <p className="mb-1 ">내 UTM</p>
          <a href="/management" className="block">
            UTM 관리하기
          </a>
          <ATag text={'UTM'} linkUrl={'https://naver.com'} />
          <a href="/creating" className="block">
            새 UTM 생성하기
          </a>
          <div>기존 UTM 추가하기</div>
        </div>
        <div className="flex flex-col gap-3 bottom_nav bg-orange mb-20 ">
          <p>유렉카</p>
          <a href="https://naver.com" target="_blank" className="block">
            공지사항
          </a>
          <a href="https://naver.com" target="_blank" className="block">
            가이드
          </a>
          <a href="https://naver.com" target="_blank" className="block">
            문의하기{' '}
          </a>
        </div>
      </div>
    </aside>
  );
}
