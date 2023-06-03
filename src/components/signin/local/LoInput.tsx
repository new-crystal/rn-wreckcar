'use client';
import React, { useEffect, useState } from 'react';
import Option from './LoOption';
import Button from './LoButton';

export default function Input() {
  const [email, setEmail] = useState('');
  const [check, setCheck] = useState<string>();
  const emailHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
  };
  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);

  /**
   * Login Button
   */
  const loginHandle = () => {
    localStorage.setItem('uwreckcarLocalEmail', email);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const getIsChecked = localStorage.getItem('uwreckcarLocalIdCheck') || '';
      const getEmail = localStorage.getItem('uwreckcarLocalEmail') || '';

      if (getEmail && getIsChecked) {
        setEmail(getEmail);
      }
      if (getIsChecked) {
        setCheck(getIsChecked);
      }
    }
  }, [email, check]);

  return (
    <div className="flex flex-col gap-2">
      <input
        type="email"
        className="
        h-[40px] w-[500px] 
        rounded-[4px] border-[1px] border-solid border-[#e1e1e1] 
        px-2"
        defaultValue={check === 'true' ? `${email}` : undefined}
        placeholder="이메일을 입력해주세요"
        onChange={emailHandle}
      />
      <input
        type="password"
        className="
        h-[40px] 
        rounded-[4px] border-[1px] border-solid border-[#e1e1e1]
        px-2 "
        placeholder="비밀번호를 입력해주세요"
      />
      <div className="h-[16px]">
        {isEmailValid ? null : <div>유효한 이메일을 입력하세요</div>}
      </div>
      <Option />
      <Button onClick={loginHandle} />
    </div>
  );
}
