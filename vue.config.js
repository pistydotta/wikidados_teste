const path = require('path')
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@axios', path.resolve(__dirname, './src/plugins/axios'))
  }

}


