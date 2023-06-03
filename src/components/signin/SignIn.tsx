'use client';
import Input from './local/LoInput';

export default function SignIn() {
  return (
    <div className="l_sign_in m-auto flex h-[520px] w-[800px] flex-col items-center rounded-[4px] bg-white p-10 pt-[100px] ">
      <h1 className="text-3xl font-bold ">Login</h1>
      <p className="mb-10">U렉카와 함께 쉽고 빠른 업무를 느껴보세요!</p>
      <Input />
    </div>
  );
}
