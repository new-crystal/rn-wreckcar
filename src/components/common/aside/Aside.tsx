'use client';
import React, { useState } from 'react';
import Base from './Base';
import Slim from './Slim';

export default function Aside() {
  const [folding, setFolding] = useState();
  return (
    <>
      <Base />
      <Slim />
    </>
  );
}
