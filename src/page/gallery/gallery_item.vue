<template>
	<div class="container">
		<div class="box">
			<div class="shade">
				<div class="name">{{infoData.title}}</div>
			</div>
			<div class="cover">
				<img :src="infoData.cover" alt="">
			</div>
			<div class="list">
				<div class="item" v-for="(item, index) in infoData.smail" :key="index">
					<img :src="item" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'hhd',
		props: {
			infoData: Object
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		.box {
			width: 208px;
			padding: 10px 7px 10px 10px;
			border-radius: 3px;
			background-color: #FFFFFF;
			box-shadow: 0 1px 3px #CACACA;
			position: relative;
			top: 0;
			cursor: pointer;
			transition: .24s;

			.shade {
				width: 205px;
				height: 275px;
				box-sizing: border-box;
				position: absolute;
				left: 10px;
				top: 10px;
				/* Safari 5.1 - 6.0 */
				background: -webkit-linear-gradient(rgba(0,0,0,.4), rgba(50,50,50,.1), rgba(80,80,80,.1), rgba(100,100,100,.1));
				/* Opera 11.1 - 12.0 */
				background: -o-linear-gradient(rgba(0,0,0,.4), rgba(50,50,50,.1), rgba(80,80,80,.1), rgba(100,100,100,.1));
				/* Firefox 3.6 - 15 */
				background: -moz-linear-gradient(rgba(0,0,0,.4), rgba(50,50,50,.1), rgba(80,80,80,.1), rgba(100,100,100,.1));
				/* 标准的语法 */
				background: linear-gradient(rgba(0,0,0,.4), rgba(50,50,50,.1), rgba(80,80,80,.1), rgba(100,100,100,.1));
				.name {
					color: #FFFFFF;
					margin: 12px 10px;
				}
			}
			
			.shade:hover {
				/* Safari 5.1 - 6.0 */
				background: -webkit-linear-gradient(rgba(0,0,0,.4), rgba(50,50,50,.1), rgba(80,80,80,.2), rgba(100,100,100,.1));
				/* Opera 11.1 - 12.0 */
				background: -o-linear-gradient(rgba(0,0,0,.4), rgba(50,50,50,.1), rgba(80,80,80,.2), rgba(100,100,100,.1));
				/* Firefox 3.6 - 15 */
				background: -moz-linear-gradient(rgba(0,0,0,.4), rgba(50,50,50,.1), rgba(80,80,80,.2), rgba(100,100,100,.1));
				/* 标准的语法 */
				background: linear-gradient(rgba(0,0,0,.4), rgba(50,50,50,.1), rgba(80,80,80,.2), rgba(100,100,100,.1));
			}

			.cover {
				width: 203px;
				height: 203px;
				box-shadow: 0 0 2px #dddddd;
				border: 1px solid #EAEAEA;
				margin: 0 3px 3px 0;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			.list {
				display: flex;

				.item {
					width: 65px;
					height: 65px;
					margin-right: 3px;
					border: 1px solid #EAEAEA;

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}
			}
		}

		.box:hover {
			top: -1px;
			box-shadow: 0 16px 32px #bababa;
		}
	}
</style>
