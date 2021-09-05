<template>
	<div class="hxy">
		<Photo />
		<Tab :tabIndex="tabIndex"></Tab>
		<div class="hxy-main">
			<div class="box">
				<div class="item" v-for="(item, index) in listData" :key="index" @click="openAlbum(item.id)">
					<galleryItem :infoData="item"></galleryItem>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import * as api from '@/api/api.js'
	import Tab from '../../component/tab.vue'
	import Photo from '../../component/photo.vue'
	import galleryItem from './gallery_item.vue'
	export default {
		name: 'Gallery',
		components: {
			Tab, Photo, galleryItem
		},
		data() {
			return {
				tabIndex: 3,
				listData: {}
			}
		},
		mounted() {
			this.loadData()
		},
		methods: {
			loadData(){
				api.getGalleryInfo().then(res=>{
					this.listData = res.data
				})
			},
			openAlbum(id){
				console.log(id)
				this.$router.push({
					name: 'album'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "~@/assets/styles/variables.scss";
	.hxy{
		.hxy-main {
			.box{
				display: flex;
				flex-wrap: wrap;
				padding: 0 10px;
				.item{
					margin-right: 20px;
					margin-bottom: 20px;
				}
				.item:nth-child(4n){
					margin-right: 0;
				}
			}
		}
	}
</style>
