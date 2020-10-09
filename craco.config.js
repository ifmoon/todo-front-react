const path = require('path');
const CracoLessPlugin = require('craco-less');

const resolve = arg => path.resolve(__dirname, arg);

module.exports = function cracoConfig() {
  return {
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: { '@primary-color': '#7466b3' },
              javascriptEnabled: true,
            },
          },
        },
      },
    ],
    webpack: {
      alias: {
        '@': resolve('src'),
      },
    },
    jest: {
      configure: {
        moduleNameMapper: {
          '^@/(.*)$': '<rootDir>/src/$1',
        },
      },
    },
  };
};
