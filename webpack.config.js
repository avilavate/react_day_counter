var path = require('path');
var config = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {

        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            query:
            {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        },
        {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        }
        ]
    },

};

module.exports = config;
// module.exports = {
//     debug: true,
//     entry: {
//         javascript: "./src/index.js",
//         html: "./index.html",
//     },
//     output: {
//         path: __dirname + 'dist',
//         filename: 'bundle.js'
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 loaders: ["babel-loader"],
//             },
//             {
//                 test: /\.html$/,
//                 loader: "file?name=[name].[ext]",
//             },
//         ],
//         query:
//         {
//             presets: ['react']
//         }

//     },
// };