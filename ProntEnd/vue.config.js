module.exports = {
    configureWebpack: {
      module: {
        rules: [
          {
            test: /.html$/,
            loader: "vue-template-loader",
            exclude: /index.html/,
            // use: [
            //   'vue-style-loader',
            //   {
            //     loader: 'css-loader',
            //     options: {
            //       // enable CSS Modules
            //       modules: true,
            //       // customize generated class names
            //       localIdentName: '[local]_[hash:base64:8]'
            //     }
            //   }
            // ]
          }
        ]
      }
    }
  }