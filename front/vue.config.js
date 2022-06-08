const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV !== 'production' ? '/' : '/encre-nous/',
  transpileDependencies: true,
  devServer: {
    proxy: 'http://localhost:8080/',
}
})
