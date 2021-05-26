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
            pages:path.resolve(__dirname,'../src/pages'),
            components:path.resolve(__dirname,"../src/components"),

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
                test: /\.less/,
                use:[
                    'vue-style-loader',
                    'css-loader',
                    'less-loader',
                ]
            },
            {
                test: /\.(png|jpg|ico|gif)$/i,
                use:[
                    {
                        loader:'url-loader',
                        options: {
                            limit: 10000,
                            name: 'static/media/[name].[hash:8].[ext]',
                            esModule: false
                        },
                    }
                ],
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
