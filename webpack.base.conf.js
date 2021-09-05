// webpack.config.js
'use strict'

module.exports = {
	mode: 'development',
	module: {
		rules: [{
			test: /\.sass$/,
			loaders: ['style', 'css', 'sass']
		}, ]
	},
}
