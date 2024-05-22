const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/script.js',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html', // исходный файл
        filename: 'index.html', // выходной файл
      }),
    ],
    module: {
      rules: [
          {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
          },
          // {
          //     test: /\.svg$/,
          //     loader: 'svg-inline-loader',
          // },
          {
              test: /\.(jpg|png|svg|gif)$/,
              type: 'asset/resource',
          },
      ],
  },


  };
  