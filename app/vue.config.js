module.exports = {
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          args[0].title = 'Robert\'s CV';
          return args;
        })
    }
  }