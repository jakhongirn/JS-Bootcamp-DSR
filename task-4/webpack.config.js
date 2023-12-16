const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, './src/index.js'),
    devtool: "inline-source-map",
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
              process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader'
            ],
          },
          
         {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: ['file-loader'],
          },
        ],
    },
      resolve: {
        extensions: ['.*', '.js', '.jsx']
    },
    devServer: {
        static: path.resolve(__dirname, './public'),
        hot: true
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
          }),],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },   
}