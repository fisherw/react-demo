var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: {
        'cycle': './entry/cycle.js',
        'base': './entry/base.js',
        'state': './entry/state.js',
        'redux': './entry/redux.js',
        'route': './entry/route.js',
        'redux-route': './entry/redux-route.js',
        'redux-route-async': './entry/redux-route-async.js'
    },
    output: {
        path: 'public',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/'
    },
    module: {
        resolveLoader: {
            root: path.join(__dirname, 'node_modules')
        },
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: {
                presets: ['es2015', 'react']
            }},

            {test: /\.css$/, loader: 'style!css'},

            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            { test: /\.(png|jp?g|gif|svg)$/i, loader: 'url-loader?limit=8192'}
        ]
    },
    resolve: {
        alias: {
            // 'jquery': path.join(__dirname, 'bower_components/jquery/dist/jquery')
            // 'react-router': path.join(__dirname, 'bower_components/react-router/modules')
            // 'react': path.join(__dirname, 'bower_components/react/react.js'),
            // 'react-dom': path.join(__dirname, 'bower_components/react/react-dom.js')
        }
    },
    plugins: [
        // 处理react的模式
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),

        // 公共js提取插件
        new webpack.optimize.CommonsChunkPlugin('common.js'),

        // js处理插件(负责压缩混淆)
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        warnings: false
        //    }
        //}),

        // 添加注释信息
        new webpack.BannerPlugin('This file is created by fisher')
    ]
};
