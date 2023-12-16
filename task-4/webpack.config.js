const path = require("path");
module.exports = {
    mode: "development",
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
            test: /\.(css)$/,
            use: ['style-loader','css-loader']
        }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output: {
        path:  path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: path.resolve(__dirname, './public'),
        hot: true
    },
}