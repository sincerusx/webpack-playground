const webpack = require('webpack');
const path    = require('path');

const isDev = (process.env.NODE_ENV === 'production');

/** Plugin: ExtractTextPlugin */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractText       = new ExtractTextPlugin({
	filename: 'css/[name].css',
	disable: env === 'development'
});
/** Plugin: BrowserSync */
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const browserSync       = new BrowserSyncPlugin({
			host: 'localhost',
			port: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
			server: {baseDir: path.resolve(__dirname, 'public')},
			//proxy: 'http://localhost:3100/'
			files: [
				'./public/.htaccess',
				'./public/*.html',
				'./public/*.php'
			]
		},
		{
			reload: true
		}
);

module.exports = {

	entry: path.resolve(__dirname, 'resources/js/app.js'),

	output: {
		path: path.resolve(__dirname, 'public/assets'),
		publicPath: '/resources',
		filename: 'js/bundle.mix.js'
	},

	module: {
		rules: [
			// ES6
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /(node_modules|bower_components)/,
				options: {
					presets: ['es2015']
				}
			},
			// Vue.js
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			// CSS
			{
				test: /\.css$/,
				use: ['css-loader']
			},
			// Sass
			{
				test: /\.scss$/,
				use: extractText.extract({
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},

	//
	resolve: {
		alias: {
			// Resolving the vue var for standalone build
			'vue$': 'vue/dist/vue.esm.js'
		}
	},

	//
	devServer: {
		// where to serve content from
		contentBase: path.resolve(__dirname, 'public'),
		//
		inline: true,
		// Enable Hot Module Replacement feature
		hot: true,
		//
		proxy: {},
		// whitelisted services that are allowed to access the dev server
		allowedHosts: [],
		clientLogLevel: 'info',
		open: true
	},

	watch: true,

	plugins: [
		extractText,
		browserSync
		/*new HtmlWebpackPlugin({
			template: 'public/index.html'
		}),*/
		//new CleanWebpackPlugin(['resources'])
	]
};
