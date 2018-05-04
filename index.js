module.exports = {
  overrides: [
    {
      files: '**/*.ts',
      parser: 'typescript-eslint-parser',
      parserOptions: {
        typescript: true
      },
      plugins: ['typescript']
    }
  ]
};
