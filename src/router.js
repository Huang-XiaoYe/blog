import Vue from 'vue'
import Router from 'vue-router'


import Home from './page/home/home'
import Mine from './page/mine/mine'
import Comic from './page/comic/comic'
import Gallery from './page/gallery/gallery'
import Message from './page/message/message'
import Album from './page/gallery/album'

Vue.use(Router)

export default new Router({
	routes: [
		{path: '/home', name: 'home', component: Home},
		{path: '/mine', name: 'mine', component: Mine},
		{path: '/comic', name: 'comic', component: Comic},
		{path: '/gallery', name: 'gallery', component: Gallery},
		{path: '/album', name: 'album', component: Album},
		{path: '/message', name: 'message', component: Message}
	],
	// mode: "history"//去掉url中的#
})