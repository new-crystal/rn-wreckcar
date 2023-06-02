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
export default function Slim({ slimHandle }: SlimProps) {
  const pathName = usePathname();
  return (
    <aside
      className={
        'w-[80px] min-w-[60px] text-white h-screen ' +
        (pathName == '/' || pathName == '/signin' || pathName === '/signup'
          ? 'hidden'
          : '')
      }
    >
      <div className="bg-blue w-[60px] min-w-[60px] fixed pt-3 ">
        <div
          className="logo_slide flex justify-center cursor-pointer"
          onClick={slimHandle}
        >
          <IMenu fillColor={'white'} />
        </div>

        <div className="w_nav h-screen flex flex-col justify-between pb-4">
          <ul className="top_nav flex-col flex mt-20 gap-4 items-center">
            <ATag href={'/management'} isBlank={false}>
              <li
                className={
                  'flex flex-row gap-2 p-2 hover:bg-hblue ' +
                  (pathName == '/management'
                    ? 'bg-hblue p-2 rounded-[4px]'
                    : '')
                }
              >
                <Imanage fillColor={'white'} />
              </li>
            </ATag>
            <ATag href={'/creating'} isBlank={false}>
              <li
                className={
                  'flex flex-row gap-2 p-2 hover:bg-hblue rounded-[4px] ' +
                  (pathName == '/creating' ? 'bg-hblue p-2 rounded-[4px]' : '')
                }
              >
                <ICreate fillColor={'white'} />
              </li>
            </ATag>
            <ATag href={'https://naver.com'} isBlank={false}>
              <li className=" flex flex-row gap-2 p-2 hover:bg-hblue rounded-[4px] ">
                <IAdd fillColor={'white'} />
              </li>
            </ATag>
          </ul>
          <div className="flex flex-col gap-3 bottom_nav  mb-20 items-center ">
            <ATag href={'https://utm.works'} isBlank={true}>
              <li className=" flex flex-row gap-2 p-2 hover:bg-hblue rounded-[4px] ">
                <INoti bnw={'w'} w={24} h={24} />
              </li>
            </ATag>
            <ATag href={'https://naver.com'} isBlank={true}>
              <li className=" flex flex-row gap-2 p-2 hover:bg-hblue rounded-[4px] ">
                <IGuide fillColor={'white'} />
              </li>
            </ATag>
            <ATag href={'https://naver.com'} isBlank={true}>
              <li className=" flex flex-row gap-2 p-2 hover:bg-hblue rounded-[4px] ">
                <IMore fillColor={'white'} />
              </li>
            </ATag>
          </div>
        </div>
      </div>
    </aside>
  );
}
