'use client';
import React from 'react';
import ColorHead from './ColorHead';
import BaseHead from './BaseHead';
import { usePathname } from 'next/navigation';
export default function Header() {
  const pathname = usePathname();
  return (
    <>
      {(pathname === '/' ||
        pathname === '/login' ||
        pathname === '/signup' ||
        pathname === '/signin') && <ColorHead />}
      {(pathname === '/management' || pathname === '/creating') && <BaseHead />}
    </>
  );
}
