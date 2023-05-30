import Link from 'next/link';
import React from 'react';

type propsType = {
  text: string;
  linkUrl: string;
};

const ATag: React.FC<propsType> = ({ text, linkUrl }) => {
  return (
    <Link href={`${linkUrl}`} target="_blank">
      {text}
    </Link>
  );
};

export default ATag;
