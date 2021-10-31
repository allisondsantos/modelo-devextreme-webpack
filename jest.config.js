module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/main/**/*',
    '!<rootDir>/src/**/test/*',
    '!<rootDir>/src/**/router/*',
    '!<rootDir>/src/**/index*',
    '!**/*.d.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/src/main/config/jest-setup.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/main/test/cypress'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.scss$': 'identity-obj-proxy'
  }
}
