const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/RosyRivas/Blog_vue/'
    : '/',
  pluginOptions: {
    //vuetify: {
    //  https:/github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    //}
  },
  chainWebpack: config => {
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: '[name].[ext]'
      });
  }
});
