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
            },
            {
                test: /three\/examples\/js/,
                use: 'imports-loader?THREE=three'
            }
        ]
    },

    resolve: {
        alias: {
            'three-examples': path.join(__dirname, './node_modules/three/examples/js')
        }
    }
};
