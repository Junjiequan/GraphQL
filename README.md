# GraphQL

## Jest packages
`npm i -D @testing-library/react jest-dom jest-environment-jsdom react-test-renderer ts-jest identity-obj-proxy `

## Script > package.json 
```
"test:"jest"
```
jest config > package.json

```
  "jest": {
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(scss|sass|css)$": "identity-obj-proxy"
    },
    "transform": {
      "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"
    },
    "testEnvironment": "jsdom"
  },

```
