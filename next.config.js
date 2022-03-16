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
            "primary-color": "#09ADBF"
          }
        }
      }
    }
  ]
];

module.exports = withPlugins(plugins, {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
});