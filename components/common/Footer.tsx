export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full h-[161px] bg-gray-200">
      <div className="flex justify-center">
        <ul className="flex w-[57%] space-x-6 mt-10 justify-start text-xs">
          <li className=" cursor-pointer">Clone OP.GG</li>
          <li className=" cursor-pointer">로고 히스토리</li>
          <li className="font-bold cursor-pointer">개인정보처리방침</li>
          <li className=" cursor-pointer">도움말</li>
          <li className=" cursor-pointer">제휴</li>
          <li className=" cursor-pointer">광고</li>
          <li className=" cursor-pointer">문의/피드백</li>
          <li className=" cursor-pointer">채용</li>
        </ul>
      </div>
    </footer>
  );
}
