const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => ({
  mode: "development",
  entry: {
    app: "./src/index.ts",
  },
  devServer: {
    host: "localhost",
    port: 8080,
    historyApiFallback: true,
    hot: true,
    proxy: {
      "/api": "http://localhost:9999/",
    },
  },
  devtool: argv.mode === "production" ? "none" : "inline-source-map",
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
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
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
        test: /\.s[a|c]ss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
});
