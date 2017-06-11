const path = require('path');

module.exports = {
    entry: './assets/index.js',

    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: 'build'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader', 'eslint-loader']
            }
        ]
    }
};
