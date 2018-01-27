import webpack from 'webpack'
import path from 'path'
import glob from 'glob-all'

import CleanWebpackPlugin from 'clean-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import StyleLintPlugin from 'stylelint-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import WebpackPwaManifest from 'webpack-pwa-manifest'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import PurifyCSSPlugin from 'purifycss-webpack'
import OfflinePlugin from 'offline-plugin'

const extractSass = new ExtractTextPlugin({
  filename: 'styles.css',
  disable: process.env.NODE_ENV === 'development',
  publicPath: '/'
})

module.exports = [
  {
    context: path.resolve(__dirname, 'src'),
    entry: ['./app.js', './scss/styles.scss'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[chunkhash].js',
      publicPath: '/'
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      extractSass,
      new StyleLintPlugin({
        context: 'src',
        syntax: 'scss',
        quiet: false
      }),
      new HtmlWebpackPlugin({
        hash: true,
        title: 'My Awesome application',
        pageHeader: 'Hello World',
        template: './index.html',
        filename: './index.html',
        minify: {
          'removeComments': true,
          'removeScriptTypeAttributes': true,
          'collapseWhitespace': true
        }
      }),
      new FaviconsWebpackPlugin('./images/icon.png'),
      new WebpackPwaManifest({
        name: 'WebPack Boilerplate',
        short_name: 'WPB',
        description: 'An example WebPack setup to make a decent progressive web app (PWA).',
        background_color: '#ffffff',
        theme_color: '#32C658',
        icons: [
          {
            src: path.resolve('./src/images/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512]
          }
        ]
      }),
      new UglifyJsPlugin({
        uglifyOptions: {
          ie8: false,
          ecma: 5,
          mangle: true
        }
      }),
      new PurifyCSSPlugin({
        paths: glob.sync([
          path.join(__dirname, 'src/*.html'),
          path.join(__dirname, 'src/*.js')
        ]),
        minimize: true,
        purifyOptions: {
          resolveExtensions: ['.html'],
          // Whitelist ':not' for Bulma
          whitelist: ['*:not*']
        }
      }),
      new OfflinePlugin({
        caches: 'all',
        ServiceWorker: {
          navigateFallbackURL: 'index.html'
        }
      })
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: extractSass.extract({
            use: [{
              loader: 'css-loader'
            }, {
              loader: 'sass-loader'
            }],
            fallback: 'style-loader'
          })
        },
        {
          test: /\.js$/,
          include: path.resolve(__dirname, 'src'),
          exclude: [/node_modules/],
          use: [{
            loader: 'babel-loader',
            options: {
              'presets': [
                ['@babel/preset-env', {
                  'targets': {
                    'browsers': ['last 2 versions', 'safari >= 9']
                  }
                }]
              ]
            }
          }]
        },
        {
          test: /.(png|jpg|gif|ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {}
            }
          ]
        }
      ]
    }
  }
]