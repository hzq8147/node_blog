const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    mode:'development',
    module:{
        rules:[
            {
                test:/\.js$/,use:'babel-loader'
            },
            {
                test:/\.vue$/,use:'vue-loader',
            }
        ]
    },
    devServer:{
        historyApiFallback:true,
        contentBase:'./',
        inline:true,
        progress:true,
        hot:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new VueLoaderPlugin()
    ]
}