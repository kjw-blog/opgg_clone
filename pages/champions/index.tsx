import ChampionList from '@components/champions/ChampionList';
import Loading from '@components/common/Loading';
import useSWR from 'swr';

export default function Champions() {
  const { data } = useSWR('/api/champions');

  return (
    <>
      {data?.data?.length === 0 ? (
        <Loading />
      ) : (
        <div className="flex items-center justify-center w-full h-auto pt-10 bg-gray-200">
          <ChampionList data={data?.data} />
          <div className="border-2 border-red-500 w-[25%]" />
          {/* <svg
            id="Icons"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="#5383E8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <path d="M13.553,16.105A1,1,0,0,0,13,17v3a1,1,0,0,0,.293.707l2,2A1,1,0,0,0,16,23a1.011,1.011,0,0,0,.447-.105l4-2A1,1,0,0,0,21,20V10A9,9,0,0,0,3,10V20a1,1,0,0,0,.553.895l4,2a1,1,0,0,0,1.154-.188l2-2A1,1,0,0,0,11,20V17a1,1,0,0,0-.553-.895L9,15.382V12.618L11.553,13.9a1,1,0,0,0,.894,0L15,12.618v2.764Zm2.972-5.956a1,1,0,0,0-.972-.044L12,11.882,8.447,10.105A1,1,0,0,0,7,11v5a1,1,0,0,0,.553.895L9,17.618v1.968l-1.2,1.2L5,19.382V10a7,7,0,0,1,14,0v9.382l-2.8,1.4-1.2-1.2V17.618l1.447-.723A1,1,0,0,0,17,16V11A1,1,0,0,0,16.525,10.149Z" />
            <path d="M14,6H10a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Z" />
          </svg> */}
        </div>
      )}
    </>
  );
}
