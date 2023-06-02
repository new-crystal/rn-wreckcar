"use client";
import React, { useEffect, useState } from "react";

type SizeType = "sm" | "md" | "lg";
type ColorType = "white" | "blue";

interface BtnPropsType {
  onClick: () => void;
  size: SizeType;
  color: ColorType;
  children: string;
}
export const SBtn: React.FC<BtnPropsType> = (props) => {
  const { onClick, size, children, color } = props;
  const [cusSize, setCusSize] = useState<SizeType>("md");

  useEffect(() => {
    setCusSize(size);
  }, [size]);
  return (
    <>
      <button
        className={
          "bg-blue rounded-[4px] h-[38px] " +
          ((cusSize === "sm" && " w-[50px] ") ||
            (cusSize === "md" && "w-[81px]") ||
            (cusSize === "lg" && " w-[500px] ")) + (color === 'white' ? "" : " text-white hover:bg-hblue active:bg-blue duration-150")
        }
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};
