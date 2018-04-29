const path = require( 'path' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const webpack = require( 'webpack' );
// const config = require( './config' );

module.exports = env => {
	let webpackConfig = {
		entry: ['babel-polyfill', './src/frontend/app.js'],
		output: {
			path: path.resolve( __dirname, 'build' ),
			filename: 'bundle.js',
			publicPath: '/'
		},
		devServer: { historyApiFallback: true },
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: 'babel-loader'
				},
				{
					test: /\.sass$/,
					exclude: /node_modules/,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: [
							{ loader: 'css-loader' },
							{ loader: 'sass-loader' }
						]
					})
				},
				{
					test: /\.(jpe?g|png|gif|svg)$/i,
					use: [
						{
							loader: 'file-loader',
							options: {name: 'assets/[name].[ext]'}
						},
						'img-loader'
					]
				},
				{
					test: /\.(eot|svg|ttf|woff|woff2)$/i,
					use: [
						{
							loader: 'file-loader',
							options: { name: 'assets/fonts/[name].[ext]' }
						}
					]

				}
			]
		},
		resolve: {
			alias: {
				// Mocks: path.resolve( __dirname, 'mock/' ),
				// PageObjects: path.resolve( __dirname, 'test/page-objects' )
			}
		},
		plugins: [
			new webpack.DefinePlugin({
				// FEED_API_BASE_URL: JSON.stringify( config[environment].api.feed ),
				// USER_PREF_API_BASE_URL: JSON.stringify( config[environment].api.userPreferences ),
				// ONBOARDING_CONFIG_URL: JSON.stringify( config[environment].onboardingConfig ),
				// SW_ENV: env.SW_ENV
			}),
			new CleanWebpackPlugin( 'build' ),
			new HtmlWebpackPlugin({template: './src/frontend/index.html'}),
			new ExtractTextPlugin({filename: 'app.css'})
		]
	};
	// env.SW_ENV ? webpackConfig.plugins.push( new WorkboxPlugin.InjectManifest( config.serviceWorker ),
	// 	new CopyWebpackPlugin([{from: 'src/app/manifest.json', to: ''}]) ) : console.log( 'no service worker' );
	return webpackConfig;
};
