import React from 'react';
import ATag from '../link/ATag';
import { usePathname } from 'next/navigation';
import {
  IAdd,
  ICreate,
  IGuide,
  IMenu,
  IMore,
  INoti,
  Imanage,
} from '../icon/Icon';
import Image from 'next/image';
export default function Slim() {
  const pathName = usePathname();
  return (
    <aside
      className={
        'w-[80px] min-w-[60px] text-white h-screen' +
        (pathName == '/' || pathName == '/login' ? ' hidden' : '')
      }
    >
      <div className="bg-blue w-[60px] min-w-[60px] fixed pt-3 ">
        <div className="logo_slide flex justify-center">
          <IMenu fillColor={'white'} />
        </div>

        <div className="w_nav h-screen flex flex-col justify-between">
          <div className="top_nav flex-col flex bg-green mt-14 gap-4 items-center">
            <ATag url={'/management'} isBlank={false}>
              <Imanage fillColor={'white'} />
            </ATag>
            <ATag url={'/creating'} isBlank={false}>
              <ICreate fillColor={'white'} />
            </ATag>
            <ATag url={'https://naver.com'} isBlank={false}>
              <IAdd fillColor={'white'} />
            </ATag>
          </div>
          <div className="flex flex-col gap-3 bottom_nav bg-orange mb-20 items-center ">
            <ATag url={'https://utm.works'} isBlank={true}>
              <INoti fillColor={'white'} />
            </ATag>
            <ATag url={'https://naver.com'} isBlank={true}>
              <IGuide fillColor={'white'} />
            </ATag>
            <ATag url={'https://naver.com'} isBlank={true}>
              <IMore fillColor={'white'} />
            </ATag>
          </div>
        </div>
      </div>
    </aside>
  );
}
