import { getAxios, jsonAxios, qsjsonAxios, formAxios } from '@/service/httpService.js'

export function getData(data, load, code){
	return getAxios('/static/home/list.json', {}, load)
}

export function getMineInfo(data, load, code){
	return getAxios('/static/mine/info.json', {}, load)
}

export function getComicInfo(data, load, code){
	return getAxios('/static/comic/list.json', {}, load)
}

export function getGalleryInfo(data, load, code){
	return getAxios('/static/gallery/list.json', {}, load)
}