import React from 'react';
import { INoti, IProfile } from '../icon/Icon';

export default function BaseHead() {
  return (
    <div className="h-[60px] w-full px-7 flex items-center gap-5 justify-between">
      <div className="flex items-center shrink-0 gap-2 ">
        <INoti bnw={'b'} w={16} h={16} />
        유렉카는 계속 발전합니다!
      </div>
      <div className="flex items-center shrink-0 mr-6 gap-2 ">
        <IProfile />
        <div>유렉카 님</div>
      </div>
    </div>
  );
}
