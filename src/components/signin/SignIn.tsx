'use client'
import Input from './local/LoInput';

export default function SignIn() {
  return (
    <div className="l_sign_in w-[800px] h-[520px] bg-white m-auto rounded-[4px] p-10 flex-col flex items-center pt-[100px] ">
      <h1 className="font-bold text-3xl ">Login</h1>
      <p className='mb-10'>U렉카와 함께 쉽고 빠른 업무를 느껴보세요!</p>
      <Input />
    </div>
  );
}
