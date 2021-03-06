import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  roots: ["<rootDir>/test", "<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(jpg)$": "<rootDir>/test/mockFile.ts",
    "\\.(css)$": "<rootDir>/test/mockFile.ts",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    // ignore these
    "!src/services/**",
    "!src/react-app-env.d.ts",
    "!src/originalTest.tsx",
    "!src/reportWebVitals.ts",
  ],
};
export default config;
