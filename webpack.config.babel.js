import webpack from "webpack";
import path from "path";
import glob from "glob-all";

import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import StyleLintPlugin from "stylelint-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import FaviconsWebpackPlugin from "favicons-webpack-plugin";
import WebpackPwaManifest from "webpack-pwa-manifest";
import PurifyCSSPlugin from "purifycss-webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";
import OfflinePlugin from "offline-plugin";

module.exports = [
  {
    context: path.resolve(__dirname, "src"),
    entry: ["./app.js", "./scss/styles.scss"],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[chunkhash].js",
      publicPath: "/",
    },
    optimization: {
      minimize: true,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
        ignoreOrder: false,
      }),
      new StyleLintPlugin({
        syntax: "scss",
        quiet: false,
      }),
      new HtmlWebpackPlugin({
        hash: true,
        template: "./index.html",
        filename: "./index.html",
        minify: {
          removeComments: true,
          removeScriptTypeAttributes: true,
          collapseWhitespace: true,
        },
      }),
      new FaviconsWebpackPlugin({
        logo: "./images/icon.png",
        inject: true,
        background: "#f5f5f5",
        title: "Charisma Hair",
      }),
      new WebpackPwaManifest({
        name: "Charisma Hair",
        short_name: "Charisma",
        description:
          "Hair stylists in Onehouse, Stowmarket. Call 01449 677202 to book an appointment.",
        background_color: "#f5f5f5",
        theme_color: "#a07dac",
        icons: [
          {
            src: path.resolve("./src/images/icon.png"),
            sizes: [96, 128, 192, 256, 384, 512],
          },
        ],
      }),
      new PurifyCSSPlugin({
        paths: glob.sync([
          path.join(__dirname, "src/*.html"),
          path.join(__dirname, "src/**/*.js"),
        ]),
        minimize: true,
        purifyOptions: {
          resolveExtensions: [".html"],
          // Whitelist ':not' for Bulma
          whitelist: ["*:not*"],
        },
      }),
      new CopyWebpackPlugin({ patterns: [{ from: "./static", to: "./" }] }),
      new OfflinePlugin({
        caches: "all",
        ServiceWorker: {
          navigateFallbackURL: "index.html",
        },
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.js$/,
          include: path.resolve(__dirname, "src"),
          exclude: /node_modules\/(?!(autotrack|dom-utils))/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  [
                    "@babel/preset-env",
                    {
                      targets: {
                        browsers: ["last 2 versions"],
                      },
                    },
                  ],
                ],
                plugins: ["@babel/syntax-dynamic-import"],
              },
            },
          ],
        },
        {
          test: /.(png|jpg|gif|webp|ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {},
            },
          ],
        },
      ],
    },
  },
];
