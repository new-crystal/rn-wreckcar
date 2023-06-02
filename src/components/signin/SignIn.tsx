import { SBtn } from '@/components/common/ui/SBtn';
import React from 'react';
import Input from './local/Input';

export default function SignIn() {
  return (
    <div className="l_sign_in w-[800px] h-[520px] bg-white m-auto rounded-[4px] p-10 flex-col flex items-center pt-[150px] ">
      <h1>Login</h1>
      <p>U렉카와 함께 쉽고 빠른 업무를 느껴보세요!</p>
      <Input />
    </div>
  );
}
