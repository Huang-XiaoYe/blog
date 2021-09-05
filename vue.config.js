module.exports = {
	lintOnSave: false,
	assetsDir: "static",
	devServer: {
		overlay: {
			warnings: false,
			errors: false
		},
		// proxy: {
		// 	'/': { //访问路径，可以自己设置，
		// 		target: process.env.VUE_APP_BASE_API, //代理接口，即后端运行所在的端口
		// 		changeOrigin: true, //设置是否跨域
		// 		pathRewrite: { //访问路径重写
		// 			'^/': ''
		// 		}
		// 	}
		// }
	}
}
