/**
 * @file
 * @author cjw
 * Created by cjw on 2017/10/11.
 */
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.base.config.js');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
/*const HtmlCriticalPlugin = require("html-critical-webpack-plugin");*/
let path = require('path');


//const critical = require("critical");
/*
critical.generate({

    /!* Webpack打包输出的路径 *!/
    base: path.join(path.resolve(__dirname), 'dist/'),
    src:  path.resolve(__dirname, 'src', 'demo.html'),
    dest: 'b.html',
    inline: true,
    extract: true,

    /!* iPhone6的尺寸，你可以按需要修改 *!/
    width: 375,
    height: 565,

    /!* 确保调用打包后的JS文件 *!/
    penthouse: {
        blockJSRequests: false,
    }
});
*/



module.exports = merge(webpackConfig, {
    devtool: false,
    plugins:[
     //   new HtmlWebpackInlineSourcePlugin(),
        new CleanWebpackPlugin(['dist']),
       /* new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: './index.html',//由output输出位置决定
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new HtmlWebpackPlugin({
            //inlineSource: '.(js|css)$',
            filename: './a.html',//由output输出位置决定
            template: path.resolve(__dirname, 'src', 'a.html')
        })*/

    ]
});
