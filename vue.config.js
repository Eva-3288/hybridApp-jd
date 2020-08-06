const path = require('path');

module.exports = { 
  devServer:{
    port:9000
  },
    lintOnSave: false,

  configureWebpack:config =>{
    return {
      resolve:{
        alias:{
          '@js':path.resolve(__dirname,'./src/assets/js'),
          '@css':path.resolve(__dirname,'./src/assets/css'),
          '@img':path.resolve(__dirname,'./src/assets/img'),
          '@comp':path.resolve(__dirname,'./src/components')
        }
      }
    }
  }
}
                              
