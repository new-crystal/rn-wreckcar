import React from 'react';
import ATag from '../link/ATag';
import { usePathname } from 'next/navigation';
export default function Slim() {
  const pathName = usePathname();
  return (
    <aside
      className={
        'w-[80px] min-w-[80px] text-white h-screen' +
        (pathName == '/' || pathName == '/login' ? ' hidden' : '')
      }
    >
      <div className="bg-blue w-[80px] min-w-[80px] fixed">
        <div className="logo_slide flex justify-between">
          <div className="folding">🍚</div>
        </div>

        <div className="w_nav h-screen flex flex-col justify-between">
          <div className="top_nav flex-col flex bg-green mt-14 gap-3">
            <p className="mb-1 ">내 UTM</p>
            <ATag url={'/management'} isBlank={false} />
            <ATag text={'새 UTM 생성하기'} url={'/creating'} isBlank={false} />
            <ATag
              text={'기존 UTM 추가하기'}
              url={'https://naver.com'}
              isBlank={false}
            />
          </div>
          <div className="flex flex-col gap-3 bottom_nav bg-orange mb-20 ">
            <p>유렉카</p>
            <ATag url={'https://utm.works'} isBlank={true}>
              공지사항
            </ATag>
            <ATag url={'https://naver.com'} isBlank={true}>
              가이드
            </ATag>
            <ATag url={'https://naver.com'} isBlank={true}>
              문의하기
            </ATag>
          </div>
        </div>
      </div>
    </aside>
  );
}
