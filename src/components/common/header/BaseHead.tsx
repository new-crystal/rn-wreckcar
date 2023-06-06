'use client';
import React, { useEffect, useState } from 'react';
import { INoti, IProfile } from '../icon/Icon';
export default function BaseHead() {
  return (
    <div
      className="
        flex h-[60px] w-full 
        items-center 
        justify-between
        gap-5 px-7"
    >
      <div className="flex shrink-0 items-center gap-2 ">
        <INoti bnw={'b'} w={16} h={16} />
        유렉카는 계속 발전합니다!
      </div>
      <div className="mr-6 flex shrink-0 items-center gap-2 ">
        <IProfile />
        <div>유렉카 님</div>
      </div>
    </div>
  );
}
