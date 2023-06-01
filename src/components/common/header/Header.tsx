'use client';
import React from 'react';
import ColorHead from './ColorHead';
import BaseHead from './BaseHead';
import { usePathname } from 'next/navigation';
export default function Header() {
  const pathname = usePathname();
  return (
    <>
      {pathname === '/' && '/login' && '/singup' && <ColorHead />}
      {(pathname === '/management' || pathname === '/creating') && <BaseHead />}
    </>
  );
}
