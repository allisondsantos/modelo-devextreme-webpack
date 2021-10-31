const path = require('path')
const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',        
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {    
    historyApiFallback: true,
    open: true,
    port: 3000
  },
  plugins: [
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify(
        'http://'
      )
    }),
    new HtmlWebpackPlugin({
      template: 'template.dev.html'
    })
  ]
})
