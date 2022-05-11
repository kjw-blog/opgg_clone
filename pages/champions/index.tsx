import Loading from '@components/common/Loading';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Champions() {
  const [champions, setChampions] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get('/api/champions')
      .then(({ data: { data } }) => setChampions(data));
  }, []);

  return <>{champions.length === 0 ? <Loading /> : <>GOOD</>}</>;
}
