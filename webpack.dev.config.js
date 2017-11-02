/**
 * @file
 * @author cjw
 * Created by cjw on 2017/10/11.
 */
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.base.config.js');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let path = require('path');

module.exports = merge(webpackConfig, {
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].[hash:3].js',
        publicPath: '/'
    },
    plugins:[
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            port: 8888
        }),
        // new webpack.HotModuleReplacementPlugin(),
        //new BundleAnalyzerPlugin()
        new HtmlWebpackPlugin({
            filename: 'index.html',//由output输出位置决定
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'a.html',//由output输出位置决定
            template: path.resolve(__dirname, 'src', 'a.html')
        })
      /*  new HtmlWebpackPlugin({
            inject: true,
            filename: 'b.html',//由output输出位置决定
            template: path.resolve(__dirname, 'src', 'demo.html')
        })*/
    ]
});
