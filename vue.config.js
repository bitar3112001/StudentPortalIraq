const path = require('path');
const { defineConfig } = require('@vue/cli-service');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/studentDash/': '/',
  css: {
    extract: true,
    sourceMap: false
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('swiper$', 'swiper/js/swiper.js')
      .end();
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.ico$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      ]
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    }
  }
});