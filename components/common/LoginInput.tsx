interface InputProps {
  type: 'id' | 'password';
}

export default function LoginInput({ type }: InputProps) {
  return (
    <label className="border-main-400 flex h-12 overflow-hidden border-2 rounded-md">
      <div className="bg-main-400 w-[20%] flex items-center justify-center">
        {type === 'id' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 h-9"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <input
        type={type == 'id' ? 'text' : 'password'}
        className="focus:outline-none w-full px-3"
        placeholder={type === 'id' ? '아이디' : '비밀번호'}
      />
    </label>
  );
}
