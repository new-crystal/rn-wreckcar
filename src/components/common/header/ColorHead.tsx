import React from 'react';
import { ILogo } from '../icon/Icon';

export default function ColorHead() {
  return (
    <div className="bg-deepBlue w-screen h-[60px] text-white flex justify-between px-[240px]">
      <ILogo />
      <div>
        <div className="user">로그인</div>
        <div className="user">회원가입</div>
      </div>
    </div>
  );
}
