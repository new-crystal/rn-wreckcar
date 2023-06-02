'use client';
import React, { useEffect, useState } from 'react';
import Option from './Option';

export default function Input() {
  const [email, setEmail] = useState('');
  const emailHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
  };
  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);

  console.log(isEmailValid);
  const getEmail = localStorage.getItem('userID');
  const getIsChecked = localStorage.getItem('uwreckcarLocalIdCheck');
  useEffect(() => {
    if (getEmail) {
      if (getIsChecked) {
        setEmail(getEmail);
      }
    }
  }, []);

  return (
    <div className="flex-col flex gap-2">
      <input
        type="email"
        className="w-[500px] h-[40px] px-2 border-solid border-[1px] border-[#e1e1e1] rounded-[4px]"
        defaultValue={getIsChecked === 'true' ? `${getEmail}` : undefined}
        placeholder="이메일을 입력해주세요"
        onChange={emailHandle}
      />
      {isEmailValid ? null : <div>one more</div>}
      <input
        type="password"
        className="px-2 h-[40px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px]"
        placeholder="비밀번호를 입력해주세요"
      />
      <Option />
    </div>
  );
}
