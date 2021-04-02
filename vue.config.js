// import Vue from 'vue';
module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  devServer: {
    sockHost: 'http://localhost:8081/',
    // transportMode: 'ws',
    disableHostCheck: true,
    // proxy: {
    //   '/ws': {
    //     target: 'wss://j.dvclab.com:50000/',
        
    //     pathRewrite: {'^/ws' : ''},
    //     changeOrigin: true,     // target是域名的话，需要这个参数，
    //     secure: false,          // 设置支持https协议的代理
    //     onProxyReq: function(proxyReq) {
    //       proxyReq.setHeader("Cookie", "X-Authorization=" + + 'Bearer ');
    //     }
    //   },
    // }
  }
}
