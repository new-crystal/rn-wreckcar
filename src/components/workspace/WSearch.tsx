'use client'
import React, { useEffect, useRef, useState } from 'react';
import { IAdd, IDel, INoti } from '../common/icon/Icon';
import { usePathname } from 'next/navigation';

export default function WSearch() {
  const[select, setSelect] = useState(false)
  const[selId, setSelId] = useState('')
  const[isShow, setShow] = useState(false)
  const pathname = usePathname();
  const selecPath = pathname.split('/').pop()
  console.log(selecPath)
  const items = [
    {
      id: "1",
      title: '2024년 3월 유렉카 설문조사 이벤트',
      isMain:true,
    },
    {
      id:"2",
      title: 'sw캠프 pm코스 모집',
      isMain:false,
    },
    {
      id:"3",
      title: '3월 유렉카 특집',
      isMain:false,
    },
    {
      id:"4",
      title: '해커톤 설문조사 ',
      isMain:false,
    },
    {
      id: "5",
      title: '2024년 3월 유렉카 설문조사 이벤트',
      isMain:false
    },
  ]
  const onlyMain = items.find((i)=> i.isMain === true)
  console.log(onlyMain)
  const selectHandle = () => {
    setSelect(!select)
  }
  const listSelec = (e:React.MouseEvent<HTMLLIElement>) => {
    const refRes = (e.target as HTMLLIElement).id;
      setSelect(!select)
    setSelId(refRes)
    console.log(refRes)
    
  }
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

    <section className='ml-4 container relative'>
      <div className="w-[370px] h-[40px] px-2 border-solid border-[1px] border-[#e1e1e1] rounded-[4px] flex justify-between items-center cursor-pointer gap-3" onClick={selectHandle}>
        <div className='flex items-center gap-2'>
        {onlyMain?.title}
        {onlyMain?.isMain === true && <div className='flex items-center justify-center bg-blue w-[36px] h-[16px] rounded-[4px] text-[10px] text-white'>main</div>}
        </div>
          <IDel fillColor={"black"}/>
        </div>
      {select &&
      <div>
        <div className={' w-[370px]  border-solid border-[1px] border-[#e1e1e1] bg-white absolute  z-10 ' }>
        <ul className=' py-3 flex-col flex '>
        {items.map((i, idx) =>
          <li key={idx} onClick={listSelec} id={i.id} className={'hover:bg-blue hover:text-white cursor-pointer py-2 px-4 opacity-1 transition-all duration-500 ease-linear ' + (i.isMain === true ? 'bg-blue text-white' : '')} >{i.title}</li> 
            )}
            </ul>
            </div>
      </div>  }
  
    </section>
  );
}
