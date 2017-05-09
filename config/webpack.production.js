var webpack = require('webpack')
var path = require('path')

function buildConfig() {
  return {
    context: path.resolve(__dirname, '..'),
    devtool: 'cheap-module-source-ma',
    entry: {
      main: path.join(__dirname, '..', 'src', 'BrowserEntry.js')
    },
    output: {
      path: path.join(__dirname, '..', 'public'),
      filename: 'assets/js/[name].js',
      publicPath: '/',
      pathinfo: true
    },
    resolve: {
      modules: ['node_modules', 'src'],
      extensions: ['.js', '.json']
    },
    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
        umd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
        umd: 'react-dom'
      },
      'prop-types': {
        root: 'PropTypes',
        commonjs2: 'prop-types',
        commonjs: 'prop-types',
        amd: 'prop-types',
        umd: 'prop-types'
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true
        },
        output: {
          comments: false,
        }
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    }
  }
}

module.exports = (function(options) {
  return buildConfig(options)
})()
