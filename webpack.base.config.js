/**
 * @file
 * @author cjw
 * Created by cjw on 2017/10/11.
 */
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlCriticalPlugin = require("html-critical-webpack-plugin");
const webpack = require('webpack');
let autoprefixer = require('autoprefixer');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src', 'js/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].[hash:3].js',
        publicPath: './'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src')
            },

            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.(woff2?|eot|svg|ttf|otf)(\?.*)?$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        name:'[name].[ext]',
                        limit:100,
                        outputPath: 'fonts/',
                        publicPath: '../'


                    }
                }]
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        name:'[name].[ext]',
                        limit:100,
                        outputPath: 'imgs/',
                        publicPath: '../'


                    }
                }]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader:'css-loader'
                        },{
                            loader:'sass-loader'
                        }
                    ]
                }),
                include: path.resolve(__dirname, 'src/assert')
            },
            {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader:'css-loader',
                            options: { autoprefixer: true, sourceMap: true, importLoaders: 1 }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: () => [autoprefixer({ browsers: ['last 2 versions'] })],
                            },
                        },
                        {
                            loader:'less-loader'
                        }
                    ]
                }),
                include: path.resolve(__dirname, 'src/css')
            }
        ]
    },
  /*  postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ],*/
    plugins:[
        new ExtractTextPlugin("css/index.css"),
        /*new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    require('autoprefixer')()
                ]
            }
        }),*/
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css\.less$/g,
            cssProcessor: require('cssnano'),
            // 避免 cssnano 重新计算 z-index safe: true
            cssProcessorOptions: { discardComments: { removeAll: true }, safe: true },
            canPrint: true
        }),
       /* new OptimizeCssAssetsPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),*/
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            minChunks: function (module, count) {
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'demo.html',//由output输出位置决定
            template: path.resolve(__dirname, 'src', 'demo.html')
        })
        /*new HtmlCriticalPlugin({
            base: path.join(path.resolve(__dirname), 'dist/'),
            src: 'demo.html',
            dest: 'critical.html',
            inline: true,
            minify: true,
            extract: true,
            width: 375,
            height: 565,
            penthouse: {
                blockJSRequests: false,
            }
        })*/
    ]

};