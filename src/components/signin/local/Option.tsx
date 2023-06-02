'use client';
import ATag from '@/components/common/link/ATag';
import React, { useEffect, useState } from 'react';

export default function Option() {
  const [remember, setRemember] = useState<boolean>();

  /**
   * @param event checked boolean
   */
  const checkboxHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setRemember(isChecked);
    localStorage.setItem('uwreckcarLocalIdCheck', JSON.stringify(isChecked));
  };

  /**
   * 로컬에서 boolean값 가져오기
   */
  const getIsChecked = localStorage.getItem('uwreckcarLocalIdCheck');

  return (
    <div className="flex justify-between">
      <input
        type="checkbox"
        onChange={checkboxHandle}
        checked={getIsChecked === 'true' ? true : false}
      />
      <div className="flex">
        <ATag href={'/signup'} isBlank={false}>
          <span>회원가입</span>
        </ATag>
        <span className="mx-2"> | </span> <span> 비밀번호를 잊으셨나요?</span>
      </div>
    </div>
  );
}
