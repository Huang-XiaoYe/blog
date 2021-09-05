<template>
	<div class="container">
		<div class="box">
			<div class="box-item" v-for="(item, index) in comicData">
				<div class="box-item-left">
					<img :src="item.cover" alt="">
				</div>
				<div class="box-item-right">
					<div class="box-item-right-title">
						<div class="box-item-right-title-text">{{item.title}}</div>
						<div class="box-item-right-title-label">
							<span class="box-item-right-title-label-icon" v-for="icon in item.label">{{icon}}</span>
						</div>
					</div>
					<div class="box-item-right-info">
						<div class="box-item-right-info-time">{{item.staTime}}</div>
						<div class="box-item-right-info-season">{{item.season}}</div>
						<div class="box-item-right-info-text">{{item.playType}}，{{item.episodeAll}}</div>
					</div>
					<div class="box-item-right-text">
						<p>角色声优：</p>
						<ul>
							<li v-for="li in item.userList">{{li}}</li>
						</ul>
					</div>
					<div class="box-item-right-text">
						<span>{{item.text}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'comicItem',
		props: {
			comicData: Array
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		.box{
			.box-item{
				display: flex;
				cursor: pointer;
				padding: 20px 10px;
				margin-bottom: 20px;
				border-radius: 6px;
				transition: .3s;
				position: relative;
				.box-item-left{
					width: 200px;
					height: 268px;
					border: 3px solid #FFFFFF;
					box-sizing: border-box;
					border-radius: 6px;
					overflow: hidden;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.box-item-right{
					flex: 1;
					padding-left: 15px;
					.box-item-right-title{
						display: flex;
						.box-item-right-title-text{
							color: #333;
							font-size: 18px;
							font-weight: bold;
							margin-right: 30px;
						}
						.box-item-right-title-label{
							display: flex;
							align-items: flex-end;
							.box-item-right-title-label-icon{
								color: #555555;
								font-size: 12px;
								padding: 1px 3px;
								border: 1px solid #555555;
								border-radius: 4px;
								margin-right: 10px;
							}
						}
					}
					.box-item-right-info{
						display: flex;
						align-items: center;
						font-size: 12px;
						padding: 15px 0;
						color: #333;
						.box-item-right-info-time{
							margin-right: 15px;
						}
						.box-item-right-info-season{
							margin-right: 10px;
						}
						.box-item-right-info-text{
							
						}
					}
					.box-item-right-text{
						padding: 10px 50px 10px 0;
						font-size: 13px;
						line-height: 20px;
						p{
							font-size: 14px;
							margin-bottom: 5px;
						}
						ul{
							display: flex;
							flex-wrap: wrap;
							list-style-type: none;
						}
						ul li{
							margin-right: 15px;
						}
					}
				}
			}
			.box-item:hover{
				box-shadow: 0 0px 32px #bababa;
			}
		}
	}
</style>
