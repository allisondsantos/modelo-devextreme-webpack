const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),    
    filename: 'main-bundle-[hash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
    alias: {
      '@': path.join(__dirname, 'src'),
      '@pages': path.join(__dirname, 'src/presentation/pages'),
      '@components': path.join(__dirname, 'src/presentation/components'),
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: './public/img', to: 'img' }]
    })
  ]
}
