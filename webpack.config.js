var path = require('path');
module.exports = {
    target: 'web',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'dist/public'),
        filename: 'js/bundle.js',
        devtoolModuleFilenameTemplate: function (info) {
            return info.absoluteResourcePath;
        }
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    externals: [
        // Don't bundle pixi.js, assume it'll be included in the HTML via a script
        // tag, and made available in the global variable PIXI.
        {
            "jquery": "jQuery",
            "react": "React",
            "react-dom": "ReactDOM"
        }
    ],
    module: {
        rules: [{
                test: /\.(jpg|png|svg|xml|lol)$/,
                loader: 'file-loader',

                options: {
                    name: 'data/images/img-[hash].[ext]'
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
                
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
            ,
            {
                test: /\.html/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }

        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist/public"),
        compress: true,
        port: 3000,
        historyApiFallback: {
            index: 'index.html'
          }
    }
}