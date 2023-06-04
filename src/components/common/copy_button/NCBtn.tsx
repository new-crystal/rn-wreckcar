import { Tooltip } from '@mui/material';
import React, { useState } from 'react';

interface CopyDataType {
  copyData: string;
  children?: React.ReactNode;
  setIsCopy?: any;
}
export default function NCBtn({ copyData, children }: CopyDataType) {
  const [isCopy, setIsCopy] = useState(false);
  const copyHandle = () => {
    if (navigator.clipboard) {
      console.log('복사 작동여부');
      navigator.clipboard.writeText(copyData);
      setIsCopy(true);
    }
  };
  return (
    <>
      <Tooltip
        title={
          `${copyData} ` + (isCopy === false ? ' CLICK COPY!' : 'SUCCESS COPY!')
        }
      >
        <button className="text-lRed cursor-pointer" onClick={copyHandle}>
          {children}
        </button>
      </Tooltip>
    </>
  );
}
