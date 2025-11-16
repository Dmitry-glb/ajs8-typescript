module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/js/movie.ts',
    'src/js/cart.ts',
  ],
  coverageThreshold: {
    global: {
      lines: 100,
    },
  },
};