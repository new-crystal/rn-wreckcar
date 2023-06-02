import { SBtn } from "@/components/common/ui/SBtn";
import React from "react";
interface PropsType {
  onClick: () => void;
}
export default function Button({ onClick }: PropsType) {
  return (
    <SBtn size={"lg"} color={'blue'} onClick={onClick}>
      로그인
    </SBtn>
  );
}
