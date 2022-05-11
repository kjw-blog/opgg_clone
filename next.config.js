/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/champions',
        destination: `http://ddragon.leagueoflegends.com/cdn/12.9.1/data/ko_KR/champion.json?api_key=${process.env.RIOT_API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
