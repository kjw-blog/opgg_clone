export default function Loading() {
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-full">
      <div className="bg-opacity-40 backdrop-blur-sm fixed top-0 left-0 z-40 w-screen h-full bg-gray-300" />
      <div className="animate-spin top-[45%] left-1/2 absolute z-50">
        <div className="left-1/2 top-1/2 border-main-500 absolute w-16 h-5 -translate-x-1/2 -translate-y-1/2 border-[5px] border-t-0 border-b-0 rounded-full" />
        <div className="left-1/2 top-1/2 border-main-500 absolute w-5 h-16 -translate-x-1/2 -translate-y-1/2 border-[5px] border-l-0 border-r-0 rounded-full" />
      </div>
    </div>
  );
}
