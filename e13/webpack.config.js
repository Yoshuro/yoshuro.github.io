const path = require('path')
const poststylus = require('poststylus')
const ExtractText = require('extract-text-webpack-plugin')

module.exports = {
  entry: './public/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
      {
        test: /\.styl$/,
        use: ExtractText.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'stylus-loader',
              options: {
                use: [poststylus(['postcss-font-family-system-ui'])],
              },
            },
          ],
        }),
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ExtractText('style.css'),
  ],
}
