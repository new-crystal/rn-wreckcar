'use client';
import React, { useState } from 'react';
import Base from './Base';
import Slim from './Slim';

export default function Aside() {
  const [folding, setFolding] = useState(true);
  const slimHandle = () => {
    setFolding(!folding);
  };
  return (
    <>
      {folding && <Base slimHandle={slimHandle} />}
      {folding || <Slim slimHandle={slimHandle} />}
    </>
  );
}
