const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  entry : "./src/index.js",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader","sass-loader"],
      },
    ],
  },
  output : {
    path: path.resolve(__dirname, "build"),
    libraryTarget: 'var',
    library: 'myEspruinoApp'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
}
