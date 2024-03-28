const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.buttercms.com',
        port: '',
        pathname: '/*',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/files/[name].[hash][ext]',
      },
    });

    return config;
  },
};

module.exports = nextConfig;
