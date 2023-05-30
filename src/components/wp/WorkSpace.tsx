'use client';
import React, { useEffect } from 'react';
import axios from 'axios';
export default function WorkSpace() {
  const listData = async () => {
    const result = await axios.get('http://localhost:4001/getData');
    console.log(result);
  };
  useEffect(() => {
    listData();
  }, []);
  return (
    <>
      <h1>WorkSpace</h1>;
    </>
  );
}
