
//在build之前记得先把 .babelrc 里的 evn 参数删掉！！！！！！！

var webpack = require('webpack');


module.exports = {
    devtool: false,
    entry:  __dirname + '/app/main.js',
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]"
            },
            {
    　　　　　　test: /\.(png|jpg)$/,
    　　　　　　loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
    　　　　}
        ]
    },

};
