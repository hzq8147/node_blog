const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias:{
            pages:path.resolve(__dirname,'../src/pages')
        },
        extensions: [ '.ts', '.tsx', '.js', '.json','.vue']
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader:'babel-loader'
            },
            {
                test:/\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    onlyCompileBundledFiles: true,
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.css/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
        ]
    },
    devServer:{
        historyApiFallback:true,
        contentBase:'./',
        inline:true,
        progress:true,
        hot:true,
        port:3001
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new VueLoaderPlugin()
    ]
}
