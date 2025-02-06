const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/lib/monaco/monaco.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'src/lib/monaco/generated'),
        library: {
            name: 'monaco',
            type: 'global',
            export: 'default',
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.ttf$/,
                type: 'asset/resource'
            }
        ]
    },
    // optimization: {
    //     minimize: true,
    //     minimizer: [new TerserPlugin()]
    // },
    plugins: [new MonacoWebpackPlugin({
        languages: ['typescript', 'javascript', 'css']
    })]
};

