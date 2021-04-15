const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const HWP = require('html-webpack-plugin');
const CWP = require('clean-webpack-plugin').CleanWebpackPlugin;
const minify = require('optimize-css-assets-webpack-plugin');

module.exports = {
        mode: 'development',
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/'
        },
    devServer: {
        overlay: true,
        contentBase: './dist',
        watchContentBase: true,
        hot: true,
        inline: true,
        port: 8080,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            // этот блок будет отлавливать именно .css файлы
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            // этот только sass/scss файлы
            {
                test:/.(s*)css$/,
                use: [
                    miniCss.loader,
                    'css-loader?url=false',
                    'sass-loader',
                ]
            }
        ]
    },
    optimization: {
		minimizer: [
			new minify({})
		],
	},
    plugins: [
        new CWP({ cleanStaleWebpackAssets: true }),
        new HWP({
            template: "./src/pug/index.pug"
        }),
        new miniCss('style.css')
    ],
};
