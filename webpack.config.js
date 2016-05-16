var path = require('path')

var webpack = require('webpack')

var webpackMajorVersion = require('webpack/package.json').version.split('.')[0]

var htmlWebpackPlugin = require('html-webpack-plugin')

var extractTextPlugin = require('extract-text-webpack-plugin')

//

var autoprefixer = require('autoprefixer')
var postcssShort = require('postcss-short')

//

var babelLoader = {
	test: /\.(js)$/,
	loader: 'babel',
	query: {
		presets: ['es2015', 'stage-3']
	},
	exclude: /node_modules/
}

var cssLoader = {
	test: /\.(css|styl)$/,
	loader: 'style!css!postcss!stylus'
}

var jsonLoader = {
	test: /\.(json)$/,
	loader: 'json'
}

module.exports = {

	entry: {
		vendor: ['jquery'],
		app: ['babel-polyfill', './index.js']
	},

	output: {
		path: path.join(__dirname, '/bundle/webpack' + webpackMajorVersion),
		filename: 'bundle.js',
		publicPath: ''
	},

	resolve: {
		extensions: ['', '.js', '.css', '.styl'],
		root: [
			path.resolve(__dirname)
		]
	},

	module: {
		loaders: [
			babelLoader,
			cssLoader,
			jsonLoader
		]
	},

	plugins: [

		new htmlWebpackPlugin({
			template: 'index.html',
			inject: true,
			hash: true
		}),

		new extractTextPlugin('bundle.css'),

		new webpack.ProvidePlugin({
			_: 'lodash',
			moment: 'moment',
			$: 'jquery',
			jQuery: 'jquery',
			Redux: 'redux'
		}),

		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'jquery.js'
		})

	],

	stylus: {
		use: [require('nib')()],
		import: ['~nib/lib/nib/index.styl']
	},

	postcss: function () {
		return [autoprefixer, postcssShort]
	}

}
