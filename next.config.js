/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins")
const withLess = require("next-with-less")
const plugins = [
  [
    withLess,
    {
      lessLoaderOptions: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#09ADBF",
            "divider-color": "rgba(0, 0, 0, 0.15)",
          }
        }
      }
    }
  ]
];

module.exports = withPlugins(plugins, {
  async redirects () {
    return [
      {
        source: '/',
        destination: '/search',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
});