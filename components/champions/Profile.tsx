import classNames from 'classnames';
import Image from 'next/image';

import { tags_kor } from '@utils/client/getText';
import { ListType } from './ChampionList';
import { useRouter } from 'next/router';

interface ProfileProps {
  champion: ListType;
}

export default function Profile({ champion }: ProfileProps) {
  const router = useRouter();
  const handleLink = () => {
    router.push(`/champions/${champion.eng.toLowerCase()}`);
  };
  return (
    <div
      key={champion.eng}
      onClick={handleLink}
      className="relative w-[86px] grid grid-cols-1 space-y-1 cursor-pointer"
    >
      <div className="w-[86px] h-[86px] relative">
        <Image
          className="w-[86px] h-[86px] rounded-md bg-gray-300"
          src={`https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${champion.eng}.png`}
          width={86}
          height={86}
          alt={`${champion.kor}`}
        />
        {champion.tags.length > 0 && (
          <div className="bottom-1 right-1 absolute flex flex-col items-end space-y-1 text-xs">
            {champion.tags.map((tag) => (
              <p
                key={tag}
                className={classNames(
                  'content-center px-1 text-center text-white bg-gray-700',
                  tags_kor[tag].length === 2 ? 'w-[32px]' : 'w-[44px]'
                )}
              >
                {tags_kor[tag]}
              </p>
            ))}
          </div>
        )}
      </div>
      <span className="text-xs text-gray-600 h-[20px] overflow-ellipsis overflow-hidden whitespace-nowrap">
        {champion.kor}
      </span>
      {champion.rotation && (
        <div className=" bg-main-500 -left-2 -top-2 absolute flex items-center justify-center w-6 h-6 font-bold text-white rounded-full">
          !
        </div>
      )}
    </div>
  );
}
