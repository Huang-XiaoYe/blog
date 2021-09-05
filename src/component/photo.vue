<template>
	<div class="container">
		<div class="hxy-info">
			<div class="hxy-info-photo">
				<img src="../assets/images/tx.jpg" alt="">
			</div>
			<div class="hxy-info-name">{{name}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Photo',
		data(){
			return {
				name: '黄小叶'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		.hxy-info-photo{
			width: 150px;
			height: 150px;
			margin: 0 auto;
			border-radius: 50%;
			overflow: hidden;
			img{
				width: 100%;
				height: 100%;
				opacity: .8;
			}
		}
		
		.hxy-info-name{
			margin: 30px 0;
			text-align: center;
			font-size: 16px;
			color: #FFFFFF;
		}
	}
</style>
