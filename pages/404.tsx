import Button from '@components/common/Button';
import Seo from '@components/common/Seo';
import Image from 'next/image';

export default function NotFound() {
  return (
    <>
      <Seo title="없는 페이지입니다." />
      <div className="w-full h-[74.4vh] space-y-10  text-gray-700 bg-gray-200 flex flex-col items-center justify-center">
        <p className="text-2xl font-bold">
          찾고 있는 페이지를 찾을 수 없습니다!
        </p>
        <div className="flex flex-col items-center text-sm text-gray-700">
          <p>URL을 확인하거나 이전 페이지로 돌아가십시오.</p>
          <p>도움이 필요하시면 연락주세요.</p>
        </div>
        <Image
          src={'/azir.png'}
          width={380}
          height={271}
          quality={100}
          alt="azir"
        />
        <div className="flex items-center justify-center space-x-5">
          <Button text="이전 페이지" />
          <Button text="홈" />
        </div>
      </div>
    </>
  );
}
