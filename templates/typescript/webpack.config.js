const path = require('path');
const fs = require('fs');
// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

// Required for babel-preset-react-app
process.env.NODE_ENV = 'development';



module.exports = {
    mode: 'development',
    entry: resolveAppPath('src'),
    output: {
      filename: 'src/index.js',
      libraryTarget: 'var',
      library: 'myEspruinoApp'
    },
    resolve: {
      extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader","sass-loader"],
          },
          {test: /\.tsx?$/, loader: 'ts-loader'}
        ],
    
      },
  }
  