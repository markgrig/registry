const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/registry/frontend/dist/' // дли деплоя на гитхаб пейдж
  //? '/' // дли деплоя на бэк
  : '/'
})
