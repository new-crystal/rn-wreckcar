import Link from 'next/link';
import React from 'react';
interface PropsType {
  url: string;
  isBlank: boolean;
  children: React.ReactNode;
}

const ATag: React.FC<PropsType> = ({ children, url, isBlank }) => {
  return (
    <Link href={`${url}`} target={isBlank ? '_blank' : ''}>
      {children}
    </Link>
  );
};

export default ATag;
