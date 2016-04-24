var path = require('path');
var webpack = require('webpack');

const IPCONFIG = 'http://0.0.0.0:3000';

module.exports = {
    entry: [
        'webpack-dev-server/client?' + IPCONFIG,
        'webpack/hot/only-dev-server',
        './src/js/app.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/www/dist'),
        publicPath: IPCONFIG + '/www/dist'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery"
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel-loader'],
                include: path.join(__dirname, 'src'),
                exclude: path.join(__dirname, 'node_modules')
            }
        ],
        noParse: /validate\.js/
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    devtool: "#inline-source-map"
};