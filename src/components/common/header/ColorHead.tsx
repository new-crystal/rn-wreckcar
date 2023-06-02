import React from 'react';
import { ILogo } from '../icon/Icon';
import ATag from '../link/ATag';

export default function ColorHead() {
  return (
    <div className="bg-deepBlue w-screen h-[60px] items-center text-white flex justify-between gap-10  px-[140px]">
      <ATag href={'/'} isBlank={false}>
        <ILogo />
      </ATag>
      <div className="flex-row shrink-0 hidden sm:flex gap-4">
        <ATag href={'/signin'} isBlank={false}>
          <div className="user ">로그인 </div>
        </ATag>
        /
        <ATag href={'/signup'} isBlank={false}>
          <div className="sign shrink-0">회원가입</div>
        </ATag>
      </div>
    </div>
  );
}
