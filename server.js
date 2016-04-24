var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev.js');

const PORT = 3000;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    headers: [{ "Access-Control-Allow-Origin": "*" }]
}).listen(PORT, '0.0.0.0', function (err, result) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at 0.0.0.0:' + PORT);
});