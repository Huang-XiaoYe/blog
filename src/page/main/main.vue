<template>
	<div class="hxy">
		<Photo />
		<Tab :tabIndex="tabIndex"></Tab>
		<div class="hxy-main">
			
		</div>
	</div>
</template>

<script>
	import * as api from '@/api/api.js'
	import Tab from '../../component/tab.vue'
	import Photo from '../../component/photo.vue'
	export default {
		name: 'Mine',
		components:{
			Tab, Photo
		},
		data(){
			return {
				tabIndex: 1,
			}
		},
		mounted(){
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	@import "~@/assets/styles/variables.scss";
	.hxy{
		.hxy-main{
			padding: 20px;
			.hxy-main-item{
				.hxy-main-item-head{
					display: flex;
					align-items: center;
					font-weight: bold;
					padding: 10px 0;
					.icon{
						width: 4px;
						height: 14px;
						margin-right: 12px;
						border-radius: 2px;
						background: #333;
						display: block;
					}
				}
				.hxy-main-item-box{
					display: flex;
					flex-wrap: wrap;
					line-height: 30px;
					padding-left: 16px;
					margin-bottom: 30px;
					.hxy-main-item-box-item{
						width: 50%;
						height: 30px;
						display: flex;
						align-items: center;
						font-size: 14px;
						.hxy-main-item-box-item-tle{
							margin-right: 10px;
						}
					}
					.hxy-main-item-box-items{
						width: 100%;
						font-size: 14px;
						margin-bottom: 30px;
						.hxy-main-item-box-items-company{
							font-weight: bold;
						}
					}
					.hxy-main-item-box-skill{
						width: 100%;
						font-size: 14px;
					}
				}
			}
		}
	}
</style>
