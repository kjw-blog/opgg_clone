import Link from 'next/link';
import { useState } from 'react';
import Items from './Items';
import Login from './Login';
import ModalPortal from './ModalPotal';

export default function GameHeader() {
  const [onModal, setOnModal] = useState(false);

  const headerKinds = [
    'Duo',
    'QWER(이스포츠 전적)',
    '발로란트',
    '배틀그라운드',
    '오버워치',
    '이터널 리턴',
    '톡피지지',
    '데스크톱',
  ];

  return (
    <>
      <div className="flex items-center w-full h-10 bg-gray-800">
        <Link href="http://op.gg">
          <a className="flex items-center text-[1.4rem] font-bold text-white bg-main-500 px-5 h-full">
            OP.GG
          </a>
        </Link>
        <div className="bg-main-500 min-w-[7rem] flex items-center h-full px-3 text-xs font-semibold text-white">
          <span>리그오브레전드</span>
        </div>
        <div className="flex items-center justify-between w-full mr-5">
          <nav className="ml-2">
            <ul className="space-x- flex">
              {headerKinds.map((kind) => (
                <Items key={kind} kind={kind} />
              ))}
            </ul>
          </nav>
          <div>
            <ul className="flex space-x-4">
              <li className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="#81ACFF"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs text-gray-300">한국어</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" w-3 h-3 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </li>
              <li className="flex">
                <button
                  onClick={() => setOnModal(true)}
                  className="bg-main-500 px-4 py-[0.3rem] text-[0.7rem] text-white rounded-md"
                >
                  로그인
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {onModal && (
        <ModalPortal closePortal={() => setOnModal(false)}>
          <Login />
        </ModalPortal>
      )}
    </>
  );
}
