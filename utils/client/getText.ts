interface ChosungParams {
  champion: string;
  search: string;
}

export const tags_kor = {
  Fighter: '근딜',
  Tank: '탱커',
  Mage: '메이지',
  Marksman: '원딜',
  Assassin: '암살자',
  Support: '서포터',
};

export const listSelects = [
  { eng: 'all', kor: '전체' },
  { eng: 'Fighter', kor: '근딜' },
  { eng: 'Tank', kor: '탱커' },
  { eng: 'Mage', kor: '메이지' },
  { eng: 'Marksman', kor: '원딜' },
  { eng: 'Assassin', kor: '암살자' },
  { eng: 'Support', kor: '서포터' },
  { eng: 'Rotation', kor: '로테이션' },
];

export const chosung = [
  'ㄱ',
  'ㄲ',
  'ㄴ',
  'ㄷ',
  'ㄸ',
  'ㄹ',
  'ㅁ',
  'ㅂ',
  'ㅃ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅉ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
];
export const chosungCheck = ({ champion, search }: ChosungParams) => {
  let result = '',
    code;

  const _champion = champion.replaceAll(' ', '');
  const _search = search.replaceAll(' ', '');

  for (let i = 0; i < _champion.length; i++) {
    code = _champion.charCodeAt(i) - 44032;
    if (code > -1 && code < 11172) result += chosung[Math.floor(code / 588)];
  }

  return result.includes(_search);
};
