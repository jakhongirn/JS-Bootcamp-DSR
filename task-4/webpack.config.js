const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',  //Source Map — is the JSON file that keeps the information about how to transpile the minifed code into the original code.
  plugins: [
    new HTMLWebpackPlugin({  
      template: './src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
        filename: 'styles.scss',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',     
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',  
        options: {
          minimize: {             /* minimize - Default: true in production mode*/
            minifyCSS: true,      //<style> internal
            minifyJS: true,   
          }
        }
      }
    ],
  },
}