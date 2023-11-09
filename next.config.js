/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.weather.gov',
        port: '',
        pathname: '/icons/**'
      }
    ]
  }
};
