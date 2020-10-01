const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const styleLoader = (extra) => {
    const array = [{
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr: !isDev,
            reloadAll: true,
        }
    }, 'css-loader'];
    extra && array.push(extra);
    return array;
};

module.exports = {
    optimization: {
        minimize: true,
        minimizer: [new TerserJSPlugin()],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'chat.bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.png'],
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        alias: {
            react: path.join(__dirname, 'node_modules', 'react'),
        },
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,

    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.css$/,
                use: styleLoader(),
            },
            {
                test: /\.s[ac]ss$/,
                use: styleLoader('sass-loader'),
            }
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
        }),
        new CleanWebpackPlugin(),
        // new CopyWebpackPlugin({
        //     patterns: [{
        //         from: path.resolve(__dirname, 'src/image'),
        //         to: path.resolve(__dirname, 'build')
        //     }]
        // }),
        new FaviconsWebpackPlugin('./src/favicon.ico'),
        new MiniCssExtractPlugin({ filename: '[name].css', chunkFilename: '[id].css' })
    ],
};