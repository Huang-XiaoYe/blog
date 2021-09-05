<template>
	<div class="hxy">
		<Photo />
		<Tab :tabIndex="tabIndex"></Tab>
		<div class="hxy-main">
			<ComicItem :comicData="listData" />
		</div>
	</div>
</template>

<script>
	import * as api from '@/api/api.js'
	import Tab from '../../component/tab.vue'
	import Photo from '../../component/photo.vue'
	import ComicItem from './comic_item.vue'
	export default {
		name: 'comic',
		components: {
			Tab, Photo, ComicItem
		},
		data() {
			return {
				tabIndex: 2,
				listData: []
			}
		},
		mounted() {
			this.loadData()
		},
		methods: {
			loadData(){
				api.getComicInfo().then(res=>{
					this.listData = res.data
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "~@/assets/styles/variables.scss";
	.hxy{
		.hxy-main {
		}
	}
	
</style>
