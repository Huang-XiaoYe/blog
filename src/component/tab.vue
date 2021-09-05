<template>
	<div class="container">
		<div class="hxy-tab">
			<div class="hxy-tab-item" :class="{'show' : tabIndex == index}" v-for="(item, index) in tabList" @click="toTab(index)">
				{{item.text}}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Tab',
		data() {
			return {
				tabList: [{
						text: '首页',
						url: 'home'
					},{
						text: '关于我',
						url: 'mine'
					},
					{
						text: '番剧推荐',
						url: 'comic'
					},
					{
						text: '壁纸收藏',
						url: 'gallery'
					},
					{
						text: '碎碎念',
						url: 'message'
					}
				]
			}
		},
		props: {
			tabIndex: {
				type: [String, Number]
			},
		},
		methods: {
			toTab(index){
				this.$router.push({
					name: this.tabList[index].url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		.hxy-tab {
			display: flex;
			align-items: center;
			justify-content: center;
			.hxy-tab-item {
				margin: 0 20px;
				font-size: 12px;
				color: #DDDDDD;
				cursor: pointer;
			}
			
			.hxy-tab-item:hover {
				color: #1890ff;
				text-decoration: underline;
			}
			
			.show {
				color: #DDDDDD !important;
				text-decoration: underline;
			}
		}
	}
</style>
