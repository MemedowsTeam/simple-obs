const fs = require("fs");
const path = require("path");

const tsConfig = "tsconfig.test.json";

module.exports = function buildConfig(packageDirectory, pkgConfig) {
  const packageName = require(`${packageDirectory}/package.json`).name;
  const packageTsconfig = path.resolve(packageDirectory, tsConfig);
  return {
    preset: "ts-jest",
    globals: {
      __DEV__: true,
      "ts-jest": {
        tsconfig: fs.existsSync(packageTsconfig)
          ? packageTsconfig
          : path.resolve(__dirname, tsConfig),
      },
    },
    testRegex: "tests/.*\\.ts$",
    coverageDirectory: "<rootDir>/coverage/",
    coverageReporters: ["lcov", "text"],
    collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}", "!**/node_modules/**"],
    displayName: packageName,
    ...pkgConfig,
  };
};
