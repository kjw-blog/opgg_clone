/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ddragon.leagueoflegends.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/champions',
        destination: `http://ddragon.leagueoflegends.com/cdn/12.9.1/data/ko_KR/champion.json?api_key=${process.env.RIOT_API_KEY}`,
      },
      {
        source: '/api/champion-rotations',
        destination: `https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${process.env.RIOT_API_KEY}`,
      },
      {
        source: '/api/champion/:path*',
        destination: `http://ddragon.leagueoflegends.com/cdn/12.9.1/data/ko_KR/champion/:path*.json?api_key=${process.env.RIOT_API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
