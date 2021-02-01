const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;
  
const envKeys = env ? Object.keys(env).reduce((prev, next) => {  prev[`process.env.${next}`] = JSON.stringify(env[next]);  return prev;}, {}) : {};

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ process: { env: envKeys } })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: "/",
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development"
};