'use client'
import React, { useState } from 'react';
import { IAdd, IDel, INoti } from '../common/icon/Icon';

export default function WSearch() {
  // const [query, setQuery] = r.useState('');
  const[select, setSelect] = useState(false)
  const items = [
    {
      title: '2024년 3월 유렉카 설문조사 이벤트',
      isMain:true,
    },
    {
      title: 'sw캠프 pm코스 모집',
      isMain:false,
    },
    {
      title: '3월 유렉카 특집',
      isMain:false,
    },
    {
      title: '해커톤 설문조사 ',
      isMain:false,
    },
    {
      title: '2024년 3월 유렉카 설문조사 이벤트',
      isMain:false
    },
  ]
const itemsSelect =items[0] 
  const onSearch = (e: any) => {
    const searchV = e.target.query;
  };
  const onlyMain = items.find((i)=> i.isMain === true)
  console.log(onlyMain?.title)
  const selectHandle = () => {
    setSelect(!select)
  }
  return (

    <>
     
      <div className="w-[370px] h-[40px] px-2 border-solid border-[1px] border-[#e1e1e1] rounded-[4px] flex justify-between">
        <div className='flex'>
        {onlyMain?.title}
        {onlyMain?.isMain === true && <INoti bnw={'b'} w={30} h={8} />}
        </div>
        <div onClick={selectHandle}>
          <IDel fillColor={"black"}/>
        </div>
      </div>
      {select ? <div className='w-[370px] h-[300px] border-solid border-[1px] border-[#e1e1e1] bg-white absolute z-10'>
        {items.map((i, idx) =>
          <ul key={idx}>
            <li>{i.title}</li> 
        </ul>
        )}
      </div>: ''  }
  
    </>
  );
}
