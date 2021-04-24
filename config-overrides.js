const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    '@codesee/instrument',
    { hosted: true, includeLibs: ['@ui-devtools/tailwind'] },
  ])
);
