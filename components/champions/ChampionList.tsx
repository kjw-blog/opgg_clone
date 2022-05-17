import { useEffect } from 'react';
import { useState } from 'react';
import { chosung, chosungCheck, listSelects } from '@utils/client/getText';
import classNames from 'classnames';
import useSWR from 'swr';
import { useMemo } from 'react';
import Profile from './Profile';

export interface ListType {
  key: number;
  eng: string;
  kor: string;
  tags: string[];
  rotation: boolean;
}

export default function ChampionList({ data }: any) {
  const { data: rotations } = useSWR('/api/champion-rotations');

  const [list, setList] = useState<ListType[]>([]);
  const [listSelect, setListSelect] = useState<string>('all');
  const [searchChampion, setSearchChampion] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchChampion(value);
  };

  const resultList = useMemo(() => {
    if (searchChampion) {
      if (/^[a-zA-z]*$/.test(searchChampion)) {
        return list.filter((champion) =>
          champion.eng.toLowerCase().includes(searchChampion.toLowerCase())
        );
      } else if (
        chosung.filter((char) =>
          searchChampion.replaceAll(' ', '').split('').includes(char)
        ).length > 0
      ) {
        return list.filter((champion) =>
          chosungCheck({ champion: champion.kor, search: searchChampion })
        );
      } else {
        console.log('else');
        return list.filter((champion) =>
          champion.kor
            .replaceAll(' ', '')
            .includes(searchChampion.replaceAll(' ', ''))
        );
      }
    }

    if (listSelect === 'Rotation') {
      return list.filter((champion) => champion.rotation);
    } else if (listSelect !== 'all') {
      return list.filter((champion) => champion.tags.includes(listSelect));
    } else {
      return list;
    }
  }, [listSelect, list, searchChampion]);

  useEffect(() => {
    setSearchChampion('');
  }, [listSelect]);

  useEffect(() => {
    if (data && rotations && listSelect === 'all') {
      const sort = Object.values(data);
      const rotation = Object.values(rotations.freeChampionIds);
      sort.sort((a: any, b: any) => {
        if (a.name > b.name) {
          return 1;
        } else {
          return -1;
        }
      });
      const _list = sort.map((c: any) => {
        return {
          key: c.key,
          eng: c.id,
          kor: c.name,
          tags: c.tags,
          rotation: rotation.includes(+c.key),
        };
      });

      setList(_list);
    }
  }, [data, rotations, listSelect]);

  return (
    <div className="w-[32%] h-auto">
      <div className="flex flex-col justify-between w-full bg-white">
        <nav className="flex items-center justify-between">
          <ul className=" flex items-center h-12 ml-4 space-x-2 text-sm text-gray-600">
            {listSelects.map((items) => (
              <li
                key={items.eng}
                onClick={() => {
                  if (items.eng !== listSelect) setListSelect(items.eng);
                }}
                className={classNames(
                  'h-full flex items-center',
                  items.eng === listSelect
                    ? 'text-main-500 font-bold border-b-2 border-main-500 mt-1'
                    : 'cursor-pointer'
                )}
              >
                {items.kor}
              </li>
            ))}
          </ul>
          <input
            type="text"
            className="focus:outline-none h-7 px-2 mr-2 text-[0.8rem] w-48 bg-gray-100 placeholder-gray-500 text-gray-400"
            placeholder="챔피언 검색 (가렌, ㄱㄹ, ...)"
            onChange={handleSearch}
            value={searchChampion}
          />
        </nav>

        {resultList.length > 0 ? (
          <div className="gap-y-8 grid grid-cols-6 px-4 py-6 bg-gray-100">
            {resultList.map((champion: ListType) => (
              <Profile key={champion.key} champion={champion} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 space-y-2 bg-gray-100">
            <div className="flex items-center justify-center text-2xl border-gray-300 text-gray-300 font-bold rounded-full border-[1.5px] w-[2.4rem] h-[2.4rem]">
              !
            </div>
            <p className="text-sm text-gray-400">검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
