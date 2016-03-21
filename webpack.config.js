var path = require('path');
var webpack = require('webpack');
//console.log(process.env.NODE_ENV);

module.exports = {
    context: path.join(__dirname + '/app'),
    entry: './index.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            ON_TEST: process.env.NODE_ENV === 'development'
        })
    ],
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /(node_modules)/},
            {test: /\.html$/, loader: 'raw', exclude: /(node_modules)/},
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.styl$/, loader: 'style!css!stylus'}
        ]
    }
}