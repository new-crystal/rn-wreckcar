'use client';
import React, { useState } from 'react';
import ATag from '../link/ATag';
import {
  IAdd,
  ICreate,
  IGuide,
  ILogo,
  IMore,
  INoti,
  ISlim,
  Imanage,
} from '../icon/Icon';
import { usePathname } from 'next/navigation';
// import { SlimProps } from './AsideType';
export default function Base({ slimHandle }: SlimProps) {
  const pathName = usePathname();

  return (
    <aside
      className={
        'w-[270px] min-w-[270px] text-white h-screen' +
        (pathName == '/' || pathName == '/signin' || pathName === '/signup'
          ? ' hidden'
          : '')
      }
    >
      <div className="bg-blue w-[270px] min-w-[270px] fixed pt-3 pb-5 ">
        <div className="logo_slide flex justify-between px-3 mt-1">
          <ATag href={'/'} isBlank={false}>
            <div className="logo ml-3 h-[70px]">
              <ILogo />
            </div>
          </ATag>
          <div onClick={slimHandle} className="mr-2 cursor-pointer">
            <ISlim fillColor={'white'} />
          </div>
        </div>

        <div className="w_nav h-screen flex flex-col justify-between px-3 pb-4">
          <ul className="top_nav flex-col flex mt-10 gap-2 ">
            <p className="mb-5 ml-2 font-extrabold text-xl">MY UTM</p>
            <ATag href={'/management'} isBlank={false}>
              <li
                className={
                  'flex flex-row gap-2  p-2 hover:bg-hblue rounded-[4px]' +
                  (pathName == '/management'
                    ? 'bg-orange p-2 rounded-[4px]'
                    : '')
                }
              >
                <Imanage fillColor={'white'} />
                UTM 관리하기
              </li>
            </ATag>
            <ATag href={'/creating'} isBlank={false}>
              <li
                className={
                  'flex flex-row gap-2 p-2 hover:bg-hblue ' +
                  (pathName == '/creating' ? 'bg-hblue p-2 rounded-[4px]' : '')
                }
              >
                <ICreate fillColor={'white'} />새 UTM 생성하기
              </li>
            </ATag>

            <ATag href={'https://naver.com'} isBlank={false}>
              <li className="flex flex-row gap-2 p-2 rounded-[4px] hover:bg-hblue ">
                <IAdd fillColor={'white'} />
                기존 UTM 추가하기
              </li>
            </ATag>
          </ul>
          <ul className="flex flex-col gap-3 mb-20 pb-12  ">
            <p className=" font-extrabold text-xl ml-2">유렉카</p>
            <ATag href={'https://utm.works'} isBlank={true}>
              <li className="flex flex-row gap-2  rounded-[4px] hover:bg-hblue p-2">
                <INoti bnw={'w'} w={24} h={24} />
                공지사항
              </li>
            </ATag>

            <ATag href={'https://naver.com'} isBlank={true}>
              <li className="flex flex-row gap-2 rounded-[4px] hover:bg-hblue p-2">
                <IGuide fillColor={'white'} />
                가이드
              </li>
            </ATag>

            <ATag href={'https://naver.com'} isBlank={true}>
              <li className="flex flex-row gap-2  rounded-[4px] hover:bg-hblue p-2">
                <IMore fillColor={'white'} />
                문의하기
              </li>
            </ATag>
          </ul>
        </div>
      </div>
    </aside>
  );
}
