const {override,fixBaelImports,addWebpackAlias} = require('customize-cra');
const path = require('path')
module.exports = override(
  fixBaelImports('import',{
    libraryName:'antd-module',
    style:'css',
  }),
addWebpackAlias({
  assets:path.resolve(__dirname,'./src/assets')
})
)