module.exports = {
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  collectCoverageFrom: [
    '!src/main.ts',
    '!src/polyfills.ts',
    'src/**/*.ts',
    '!src/**/index.ts',
    '!src/__mocks__/*',
    '!src/@app/*'
  ]
}
