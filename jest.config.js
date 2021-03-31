module.exports = {
  testEnvironment: 'node',
  roots: ['./tests'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./setupTests.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['./.next/', './node_modules/', './.vscode/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transformIgnorePatterns: ['/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$'],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.jest.json',
    },
  },
};
