module.exports = {
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "src/Components/*.{js,jsx}",
    "src/Containers/*.{js,jsx}",
    "!src/Assets/*",
    "!src/index.js",
    "!src/utils/renderTest.js",
    "!src/reportWebVitals.js",
    '!src/**/mocks/*.{js,jsx}',
    "!jest.config.js*",
  ],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/src/Utils/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/Utils/mocks/image.js',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
