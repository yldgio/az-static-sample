module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://ibl-dev-02.westeurope.cloudapp.azure.com',
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
