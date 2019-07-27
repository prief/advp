module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.61.103:8081',
        bypass: function(req, res) {
          if (req.headers.accept.indexOf('html') !== -1) {
            return '/index.html';
          } else if (process.env.MOCK !== 'NO') {
            console.log(req.path);
            const name = req.path
              .split('/api/')[1]
              .split('/')
              .join('_');

            const mock = require(`./mock/${name}`);
            const result = mock(req.method);
            delete require.cache[require.resolve(`./mock/${name}`)];
            return res.send(result);
          }
        },
      },
    },
  },
};
