import { useForm } from 'react-hook-form';
import LoginInput from './LoginInput';

export default function Login() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-[3.5rem] font-bold text-main-500">OP.GG</h1>
      <form className="flex flex-col justify-center w-[90%] mt-24 space-y-12">
        <div className=" flex flex-col space-y-2">
          <LoginInput type="id" />
          <LoginInput type="password" />
        </div>
        <button className="bg-main-400 hover:bg-main-500 w-full h-12 text-lg text-white transition-colors duration-200 rounded-md">
          로그인
        </button>
      </form>
    </div>
  );
}
