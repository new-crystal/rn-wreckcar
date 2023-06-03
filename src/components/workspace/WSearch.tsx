'use client';
import React, { useEffect, useRef, useState } from 'react';
import { IAdd, IDel, INoti } from '../common/icon/Icon';
import { usePathname } from 'next/navigation';
import ATag from '../common/link/ATag';

export default function WSearch() {
  const [select, setSelect] = useState(false);
  const [selId, setSelId] = useState('');
  const [isShow, setShow] = useState(false);
  const pathname = usePathname();
  const selecPath = pathname.split('/').pop();
  const items = [
    {
      id: '1',
      title: '2024년 3월 유렉카 설문조사 이벤트',
      isMain: false,
    },
    {
      id: '2',
      title: 'sw캠프 pm코스 모집',
      isMain: false,
    },
    {
      id: '3',
      title: '3월 유렉카 특집',
      isMain: true,
    },
    {
      id: '4',
      title: '해커톤 설문조사 ',
      isMain: false,
    },
    {
      id: '5',
      title: '2024년 3월 유렉카 설문조사 이벤트',
      isMain: false,
    },
  ];
  const onlyMain = items.find((i) => i.isMain === true);
  console.log(onlyMain);
  const selectHandle = () => {
    setSelect(!select);
  };
  const listSelec = (e: React.MouseEvent<HTMLLIElement>) => {
    const refRes = (e.target as HTMLLIElement).id;
    setSelect(!select);
    setSelId(refRes);
    console.log(refRes);
  };
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (select && !event.target.closest('.container')) {
        setSelect(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [select]);
  return (
    <section className="container relative ml-4">
      <div
        className="flex h-[40px] w-[370px] cursor-pointer items-center justify-between gap-3 rounded-[4px] border-[1px] border-solid border-[#e1e1e1] px-2"
        onClick={selectHandle}
      >
        <div className="flex items-center gap-2">
          {onlyMain?.isMain === true && onlyMain?.title}
          {onlyMain?.isMain === true && (
            <div
              className="
            bg-blue flex h-[16px] w-[36px]
            items-center justify-center
            rounded-[4px]
            text-[10px] text-white"
            >
              main
            </div>
          )}
        </div>
        <IDel fillColor={'black'} />
      </div>
      {select && (
        <div>
          <div
            className={
              ' absolute  z-10 w-[370px] border-[1px] border-solid border-[#e1e1e1]  bg-white '
            }
          >
            <ul className=" flex flex-col py-3 ">
              {items.map((i, idx) => (
                <ATag key={idx} href={`/workspace/${i.id}`} isBlank={false}>
                  <li
                    onClick={listSelec}
                    id={i.id}
                    className={
                      'hover:bg-blue opacity-1 flex cursor-pointer items-center justify-between px-4 py-2 transition-all duration-500 ease-linear hover:text-white ' +
                      (i.id === selecPath ? 'bg-blue text-white' : '')
                    }
                  >
                    {i.title}{' '}
                    {i?.isMain === true && (
                      <div
                        className={
                          'flex h-[16px] w-[36px] items-center justify-center rounded-[4px]  text-[10px] ' +
                          (i.id === selecPath
                            ? ' bg-white text-black'
                            : ' bg-blue text-white')
                        }
                      >
                        main
                      </div>
                    )}
                  </li>
                </ATag>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
