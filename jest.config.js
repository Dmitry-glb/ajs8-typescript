module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/js/movie.ts',
    'src/ts/service/Cart.ts'
  ],
  coverageThreshold: {
    global: {
      lines: 100
    }
  }
};