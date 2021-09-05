import Vue from 'vue'

// 不传token的请求名
const list = ['loginInto']

// 检测请求名是否需要传token
function checkUrl(url){
    let arr = url.split('/')
	for(let i=0; i<list.length; i++){
		if(list[i] == arr[arr.length-1]){
		    return false
		}
	}
    return true
}

export const request = function(config){
	// 检测请求名是否需要传token
	if(checkUrl(config.url)){
		config.headers.authorization = localStorage.getItem('token')
	}
	
	return config;
}
