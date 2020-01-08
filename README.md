# eslint-config-typescript-basic

[![npm](https://img.shields.io/npm/v/eslint-config-typescript-basic.svg)](https://www.npmjs.com/package/eslint-config-typescript-basic)
[![npm](https://img.shields.io/npm/dm/eslint-config-typescript-basic.svg)](https://www.npmjs.com/package/eslint-config-typescript-basic)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [TypeScript](http://www.typescriptlang.org/)

This module is meant as a simple start for projects with JS and TS files that live side by side, with an existing config for the JS files that does not apply to the TS files.

## Install

```
npm install --save-dev eslint-config-typescript-basic
# OR
yarn add -D eslint-config-typescript-basic
```

## Usage

`.eslintrc`

```json
{
  "extends": ["typescript-basic"]
}
```

`package.json`

```json
{
  "eslintConfig": {
    "extends": ["typescript-basic"]
  }
}
```
