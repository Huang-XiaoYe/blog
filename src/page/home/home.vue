<template>
	<div class="hxys">
		<div class="box" :style="{height: pageHeight + 'px'}">
			<div class="hxy-video">
				<div class="hxy-video-shade"></div>
				<video class="hxy-video-bg" muted="muted" autoplay preload="auto" loop="loop" src="../../assets/video/1.mp4"></video>
			</div>
			<div class="hxy-mains">
				<div class="hxy-main-photo">
					<img src="../../assets/images/tx.jpg" alt="">
				</div>
				<div class="hxy-main-tab">
					<div class="hxy-main-tab-item" v-for="(item, index) in tabList">
						<div class="hxy-main-tab-item-text" @click="goItem(item.url)">{{item.text}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import * as api from '@/api/api.js'
	export default {
		name: 'Home',
		data() {
			return {
				tabList: [],
				pageHeight: `${document.documentElement.clientHeight}`,
			}
		},
		mounted(){
			api.getData().then(res=>{
				this.tabList = res.data
			})
		},
		methods: {
			goItem(url) {
				this.$router.push({
					name: url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "~@/assets/styles/variables.scss";
	.hxys{
		.box {
			position: relative;
			.hxy-video {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				.hxy-video-shade{
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-color: rgba(0,0,0,.4);
				}
				.hxy-video-bg {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
			.hxy-mains {
				width: $mainWidth;
				padding: 200px;
				margin: 0 auto;
				position: relative;
				z-index: 1;
				.hxy-main-photo {
					width: 200px;
					height: 200px;
					margin: 0 auto;
					border-radius: 50%;
					overflow: hidden;
					img {
						width: 100%;
						height: 100%;
						opacity: .8;
					}
				}
				.hxy-main-name {
					font-size: 18px;
					color: #fff;
					text-align: center;
					padding: 15px 0;
				}
				.hxy-main-tab {
					margin-top: 100px;
					display: flex;
					justify-content: space-around;
					.hxy-main-tab-item {
						flex: 1;
						color: #FFFFFF;
						font-size: 14px;
						text-align: center;
						display: flex;
						align-items: center;
						justify-content: center;
						.hxy-main-tab-item-text {
							width: 50%;
							height: 100%;
							line-height: 30px;
							border-radius: 20px;
							box-shadow: 0 0 20px #555555;
							background: rgba(0, 0, 0, .5);
							cursor: pointer;
						}
						.hxy-main-tab-item-text:hover {
							box-shadow: 0 0 20px #999999;
							background: rgba(0, 0, 0, .7);
						}
					}
				}
			}
		}
	}
</style>
