var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

function buildConfig() {
  return {
    context: path.resolve(__dirname, '..'),
    devtool: 'cheap-module-source-map',
    entry: {
      main: path.join(__dirname, '..', 'src', 'BrowserEntry.js'),
      vendor: [
        'prop-types',
        'react',
        'react-dom'
      ]
    },
    output: {
      path: path.join(__dirname, '..', 'dist'),
      filename: 'assets/js/[name].[chunkhash].js',
      publicPath: '/'
    },
    resolve: {
      modules: ['node_modules', 'src'],
      extensions: ['.js', '.json']
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
      new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor', 'manifest']
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
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
