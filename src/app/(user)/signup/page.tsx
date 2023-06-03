import SignUp from '@/components/signup/SignUp';
import React from 'react';

export default function SingUpPage() {
  return (
    <>
      <div className="bg-deepBlue h-[calc(100%-60px)] overflow-y-hidden">
        <SignUp />{' '}
      </div>
    </>
  );
}
