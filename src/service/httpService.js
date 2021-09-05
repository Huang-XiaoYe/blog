import axios from 'axios';
import qs from 'qs'
import { Loading } from 'element-ui';
import { Message } from 'element-ui';
// loading样式
const options = {
	lock: true,
	text: '加载中...',
	spinner: 'el-icon-loading',
	background: 'rgba(0, 0, 0, 0.7)',
	customClass: 'loadClass'
}

/* ajax-get */
export const getAxios = (url, param, load, code) => {
	return new Promise((resolve, reject) => {
		if (!load) {
			var loadingInstance = Loading.service(options);
		}
		axios({
			method: 'get',
			url: url,
			// baseURL: process.env.VUE_APP_BASE_API,
			params: param,
			timeout: 10000
		}).then(res => {
			console.log(res.data)
			if (!load) {
				loadingInstance.close()
			}
			if(res.data.code == 200){
				resolve(res.data)
			}else if(code){
				resolve(res.data)
			}else{
				Message({
					message: '操作失败！',
					type: 'error',
					duration: 2000
				})
			}
		}).catch(err=>{
			reject(err)
			console.log('打印错误信息：',err)
			if (!load) {
				loadingInstance.close()
			}
		})
	})
}

/* json-post */
export const jsonAxios = (url, param, load, code) => {
	return new Promise((resolve, reject) => {
		if (!load) {
			var loadingInstance = Loading.service(options);
		}
		axios({
			method: 'post',
			url: url,
			// baseURL: process.env.VUE_APP_BASE_API,
			data: param,
			timeout: 10000
		}).then(res => {
			console.log(res.data)
			if (!load) {
				loadingInstance.close()
			}
			if(res.data.code == 0){
				resolve(res.data)
			}else if(code){
				resolve(res.data)
			}else{
				Message({
					message: '操作失败！',
					type: 'error',
					duration: 2000
				})
			}
		}).catch(err=>{
			reject(err)
			console.log('打印错误信息：',err)
			if (!load) {
				loadingInstance.close()
			}
		})
	})
}

/* qs-json-post */
export const qsjsonAxios = (url, param, load, code) => {
	return new Promise((resolve, reject) => {
		if (!load) {
			var loadingInstance = Loading.service(options);
		}
		axios({
			method: 'post',
			url: url,
			baseURL: process.env.VUE_APP_BASE_API,
			data: qs.stringify(param),
			timeout: 10000
		}).then(res => {
			if (!load) {
				loadingInstance.close()
			}
			if(res.data.code == 0){
				resolve(res.data)
			}else if(code){
				resolve(res.data)
			}else{
				Message({
					message: '操作失败！',
					type: 'error',
					duration: 2000
				})
			}
		}).catch(err=>{
			reject(err)
			console.log('打印错误信息：',err)
			if (!load) {
				loadingInstance.close()
			}
		})
	})
}

/* form-post */
export const formAxios = (url, param, load, code) => {
	return new Promise((resolve, reject) => {
		if (!load) {
			var loadingInstance = Loading.service(options);
		}
		axios({
			method: 'post',
			url: url,
			baseURL: process.env.VUE_APP_BASE_API,
			data: param,
			timeout: 10000,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
			},
		}).then(res => {
			if (!load) {
				loadingInstance.close()
			}
			if(res.data.code == 0){
				resolve(res.data)
			}else if(code){
				resolve(res.data)
			}else{
				Message({
					message: '操作失败！',
					type: 'error',
					duration: 2000
				})
			}
		}).catch(err=>{
			reject(err)
			console.log('打印错误信息：',err)
			if (!load) {
				loadingInstance.close()
			}
		})
	})
}
