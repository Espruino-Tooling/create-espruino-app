const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  entry : "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader","sass-loader"],
      },
      {test: /\.ts?$/, loader: 'ts-loader'}
    ],
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  output : {
    path: path.resolve(__dirname, "./bin"),
    libraryTarget: 'var',
    library: 'myEspruinoApp'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
}
