const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
// const json = require('json-loader');

module.exports = (env, argv) => ({
  mode: "development",
  entry: "./src/index.ts",
  devServer: {
    host: "localhost",
    port: 8080,
    historyApiFallback: true,
    hot: true,
    proxy: {
      "/api": "http://localhost:9999/",
    },
  },
  devtool: argv.mode === "production" ? false : "inline-source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    // new CopyWebpackPlugin([
    //   {
    //     context: "node_modules/@webcomponents/webcomponentsjs",
    //     from: "**/*.js",
    //     to: "webcomponents",
    //   },
    //   {
    //     from: "./src/assets/img/*",
    //     to: "./",
    //     flatten: true,
    //   },
    // ]),
  ],
  output: {
    filename: "[name].js",
    assetModuleFilename: 'src/assets/images/[name].[ext]',
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      // {
      //   test: /\.json$/,
      //   loader: 'json-loader'
      // },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "lit-css-loader"
            },
            {
                loader: "sass-loader",
                options: {
                    sassOptions: {
                        outputStyle: "compressed"
                    },
                },
            }
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // limite de poids de l'image (en octet)
              fallback: 'file-loader',
              name: '[path][name]-[hash].[ext]',
              outputPath: 'assets/images/',
              publicPath: 'assets/images/',

            }
          }
        ],
        // type: 'asset/resource',

      },
    //   {
    //     test: /\.(jpe?g|png|gif|svg)$/i, 
    //     loader: 'file-loader',
    //     options: {
    //       name: '/public/icons/[name].[ext]'
    //     }
    // }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
});
