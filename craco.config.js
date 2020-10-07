const path = require('path');

const resolve = arg => path.resolve(__dirname, arg);

module.exports = function cracoConfig() {
  return {
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
