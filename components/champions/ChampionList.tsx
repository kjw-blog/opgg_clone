import { useEffect } from 'react';
import { useState } from 'react';
import { listSelects } from '@utils/client/getText';
import classNames from 'classnames';
import useSWR from 'swr';
import Image from 'next/image';
import { useMemo } from 'react';

interface ListType {
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

  const resultList = useMemo(() => {
    if (listSelect === 'Rotation') {
      return list.filter((champion) => champion.rotation);
    } else if (listSelect !== 'all') {
      return list.filter((champion) => champion.tags.includes(listSelect));
    } else {
      return list;
    }
  }, [listSelect, list]);

  return (
    <div className="w-[32%] h-auto">
      <div className="flex flex-col justify-between w-full bg-white">
        <nav>
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
        </nav>
        <div className="gap-y-8 grid grid-cols-6 px-4 py-6 bg-gray-100">
          {resultList.map((champion: ListType) => (
            <div
              key={champion.eng}
              className="relative w-[86px] grid grid-cols-1 space-y-1 cursor-pointer"
            >
              <img
                className="w-[86px] h-[86px] rounded-md"
                src={'https://via.placeholder.com/86'}
              />
              <span className="text-[0.8rem] text-gray-600 h-[20px] overflow-ellipsis overflow-hidden whitespace-nowrap">
                {champion.kor}
              </span>
              {champion.rotation && (
                <div className=" bg-main-500 -left-2 -top-2 absolute flex items-center justify-center w-6 h-6 font-bold text-white rounded-full">
                  !
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
