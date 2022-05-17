import axios from 'axios';
import { NextApiRequest } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface Image {
  full: string;
  group: string;
  h: number;
  sprite: string;
  w: number;
  x: number;
  y: number;
}

interface ChampionInfo {
  champion: {
    allytips: string[];
    blurb: string;
    enemytips: string[];
    id: string;
    image: Image;
    info: {
      attack: number;
      defense: number;
      difficulty: number;
      magin: number;
    };
    key: string;
    lore: string;
    name: string;
    partype: string;
    passive: {
      description: string;
      image: Image;
      name: string;
    };
    recommended: string[];
    skins: {
      id: string;
      name: string;
      num: number;
      chromas: boolean;
    }[];
    spells: {
      cooldown: number[];
      cooldownBurn: string;
      cost: number[];
      costButn: string;
      costType: string;
      datavalues: any;
      description: string;
      effect: (null | number[])[];
      effectBurn: (null | string)[];
      id: string;
      image: Image;
      lebeltips: {
        effect: string[];
        label: string[];
      };
      maxammo: string;
      maxrank: number;
      name: string;
      range: number[];
      rangeBurn: string;
      resource: string;
      tooltip: string;
      vars: any[];
    }[];
    stats: { [key: string]: number };
    tags: string[];
    title: string;
  };
}

export default function Detail({ champion }: ChampionInfo) {
  const router = useRouter();

  useEffect(() => {
    if (!champion) {
      alert('해당 챔피언을 찾을 수 없습니다.');
      router.replace('/champions');
    }
  });

  return (
    <div className="">
      {champion.skins.map((skin) => (
        <div className="box" key={skin.id}>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${skin.num}.jpg`}
            width={1215 / 4}
            height={717 / 4}
            alt={skin.name}
          />
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(req: NextApiRequest) {
  const name =
    req.query.champion[0].toUpperCase() + req.query.champion.slice(1);

  try {
    const {
      data: { data },
    } = await axios.get(`http://localhost:3000/api/champion/${name}`);

    return {
      props: {
        champion: data[name],
      },
    };
  } catch (e) {
    return {
      props: {
        champion: null,
      },
    };
  }
}
