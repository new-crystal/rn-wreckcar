'use client';
import React, { useEffect, useState } from 'react';
import Option from './Option';
import Button from './Button';

export default function Input() {
  const [email, setEmail] = useState('');
  const emailHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
  };
  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  const getIsChecked = localStorage.getItem('uwreckcarLocalIdCheck');
  const getEmail = localStorage.getItem('uwreckcarLocalEmail');

  /**
   * Login Button
   */
  const loginHandle = () => {
    localStorage.setItem('uwreckcarLocalEmail', (email));

  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const getIsChecked = localStorage.getItem('uwreckcarLocalIdCheck');
      const getEmail = localStorage.getItem('uwreckcarLocalEmail');

      if (getEmail && getIsChecked) {
        setEmail(getEmail);
      }
    }
  }, []);

  return (
    <div className="flex-col flex gap-2">
      <input
    type="email"
        className="w-[500px] h-[40px] px-2 border-solid border-[1px] border-[#e1e1e1] rounded-[4px]"
        defaultValue={getIsChecked === 'true' ? `${email}` : undefined}
        placeholder="이메일을 입력해주세요"
        onChange={emailHandle}
      />
      <input
        type="password"
        className="px-2 h-[40px] border-solid border-[1px] border-[#e1e1e1] rounded-[4px] "
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
