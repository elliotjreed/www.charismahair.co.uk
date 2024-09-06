import webpack from "webpack";
import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import WebpackPwaManifest from "webpack-pwa-manifest";
import CopyWebpackPlugin from "copy-webpack-plugin";

module.exports = [
  {
    context: path.resolve(__dirname, "src"),
    entry: ["./app.js", "./scss/styles.scss"],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[chunkhash].js",
      publicPath: "./",
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
      new WebpackPwaManifest({
        name: "Charisma Hair",
        short_name: "Charisma",
        description:
          "Hair stylists in Onehouse, Stowmarket. Call 01449 677202 to book an appointment.",
        background_color: "#f5f5f5",
        theme_color: "#a07dac",
        icons: [
          {
            sizes: [72, 96, 128, 144, 192, 256, 384, 512],
            src: path.resolve("./src/images/icon.png"),
          },
          {
            sizes: [120, 180, 167, 152, 1024],
            src: path.resolve("./src/images/icon.png"),
            ios: true,
          },
          {
            src: path.resolve("./src/images/icon.png"),
            size: "600x600",
            purpose: "maskable",
          },
        ],
        inject: true,
        ios: true,
      }),
      new CopyWebpackPlugin({ patterns: [{ from: "./static", to: "./" }] }),
    ],
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
                postcssOptions: {
                  plugins: ["postcss-preset-env"],
                },
              },
            },
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
