import React from 'react';
import { ILogo } from '../icon/Icon';

export default function ColorHead() {
  return (
    <div className="bg-deepBlue w-screen h-[60px] items-center text-white flex justify-between gap-10  px-[140px]">
      <ILogo />
      <div className="flex-row shrink-0 hidden sm:flex gap-4">
        <div className="user ">로그인 </div>/
        <div className="sign shrink-0">회원가입</div>
      </div>
    </div>
  );
}
