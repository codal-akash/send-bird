/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf')

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {

    const federationConfig = {
      name: 'remote',
      filename: "static/chunks/remoteEntry.js",
      exposes: {
        "./child": './components/Child',
        "./chat": './components/Chat.tsx',
      },
      library: { type: 'var', name: 'remote' },
      shared: {
        // specify shared dependencies
        // read more in Shared Dependencies section
      },
      extraOptions: {},
    };
    config.plugins.push(
      new NextFederationPlugin(federationConfig),
    );

    // config.optimization = {
    //   splitChunks: false,
    //   runtimeChunk: false,
    //   emitOnErrors: true,
    // }

    return config;
  }
}
module.exports = nextConfig
