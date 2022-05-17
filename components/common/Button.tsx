import { useRouter } from 'next/router';

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  const router = useRouter();

  const onClick = () => {
    if (text === '홈') {
      router.replace('/');
    } else {
      router.back();
    }
  };

  return (
    <button
      onClick={onClick}
      className="bg-main-500 min-w-[120px] text-sm py-2 rounded-md text-white -mt-5"
    >
      {text}
    </button>
  );
}
