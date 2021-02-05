var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)/, 
                use: 'babel-loader' 
            },
            { 
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'] 
            },
            {
                test: /\.(png|svg|jpg|jpeg|GIF|webp)$/i,
                type: 'asset/resource'
            }
        ]
    },
    devServer: {
      publicPath: 'http://localhost:8080/img/',
      openPage: 'http://localhost:8080/img/',
    },
    output: {
        publicPath: 'http://localhost:8080/img/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}