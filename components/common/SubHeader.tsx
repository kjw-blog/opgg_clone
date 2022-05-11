import { useRouter } from 'next/router';
import classNames from 'classnames';
import Link from 'next/link';

export default function SubHeader() {
  const router = useRouter();
  const headerKinds = [
    {
      title: '홈',
      link: '/',
    },
    {
      title: '챔피언 분석',
      link: '/champions',
    },
    {
      title: '칼바람',
      link: '/modes/aram',
    },
    {
      title: '우르프',
      link: '/modes/urf',
    },
    {
      title: '통계',
      link: '/statistics/champions',
    },
    {
      title: '랭킹',
      link: '/leaderboards/tier',
    },
    {
      title: '프로관전',
      link: '/spectate/live/pro-gamer',
    },
    {
      title: '멀티서치',
      link: '/multisearch',
    },
    {
      title: 'OP셜',
      link: '/news',
    },
    {
      title: '커뮤니티',
      link: '/community',
    },
  ];

  const getColor = (link: string) => {
    const path = router.pathname;
    const category = link.split('/')[1];

    if (category === 'modes') {
      return 'text-teal-300 border-main-500';
    } else if (path === link) {
      return 'text-white border-white';
    } else {
      return 'text-main-300 border-main-500';
    }
  };

  return (
    <div className="bg-main-500 flex items-center w-full h-12 pl-64">
      <nav>
        <ul className="flex items-center justify-center space-x-8">
          {headerKinds.map((kind) => (
            <li
              className={classNames(
                'hover:border-white hover:text-white flex items-center h-12 text-[0.95rem] border-b-4 cursor-pointer',
                getColor(kind.link)
              )}
              key={kind.title}
            >
              <Link href={kind.link}>
                <a>{kind.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
