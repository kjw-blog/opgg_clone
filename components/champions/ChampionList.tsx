import { useEffect } from 'react';
import { useState } from 'react';
import { listSelects } from '@utils/client/getText';
import classNames from 'classnames';
import Champions from 'pages/champions';

interface ListType {
  eng: string;
  kor: string;
  tags: string[];
}

export default function ChampionList({ data }: any) {
  const [list, setList] = useState<ListType[]>([]);
  const [listSelect, setListSelect] = useState<string>('all');

  useEffect(() => {
    if (data) {
      const sort = Object.values(data);
      sort.sort((a: any, b: any) => {
        if (a.name > b.name) {
          return 1;
        } else {
          return -1;
        }
      });
      const _list = sort.map((c: any) => {
        return {
          eng: c.id,
          kor: c.name,
          tags: c.tags,
        };
      });
      setList(_list);
    }
  }, [data]);

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
          {list.map((champion: ListType) => (
            <div key={champion.eng} className="w-86 grid grid-cols-1">
              <img
                className="w-[86px] h-[86px]"
                src={'https://via.placeholder.com/86'}
              />
              <span className="text-sm text-gray-600 h-[20px]">
                {champion.kor}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
