module.exports = {
  testEnvironment: 'node',
  roots: ['./src/tests'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./setupTests.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['./.next/', './node_modules/', './.vscode/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  globals: { 
    'ts-jest': {
      tsConfig: './tsconfig.jest.json',
    },
  },
};
