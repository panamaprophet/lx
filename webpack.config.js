module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                    }
                  },
                  'stylus-loader'
                ]
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.css'],
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './dist',
    },
};
