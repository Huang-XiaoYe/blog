<template>
	<div class="hxy">
		<Photo />
		<Tab :tabIndex="tabIndex"></Tab>
		<div class="hxy-main">
			<div class="hxy-main-board">
				<textarea v-model="messageBoard"></textarea>
			</div>
			<div class="hxy-main-submit">
				<div class="hxy-main-submit-btn" @click="submit">发布</div>
			</div>
			<div class="hxy-main-title">条数（{{num}}）</div>
			<div class="list">
				<div class="item" v-for="(item, index) in list" :key="index">
					<div class="top">
						<div class="photo">
							<!-- <img :src="" alt=""> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Tab from '../../component/tab.vue'
	import Photo from '../../component/photo.vue'
	export default {
		name: 'Message',
		components: {
			Tab,
			Photo
		},
		data() {
			return {
				tabIndex: 4,
				messageBoard: '',
				num: 0,
				list: [{
					text: '呵呵哒',
				},{
					text: '滑滑蛋'
				}]
			}
		},
		methods: {
			submit(){
				if(this.messageBoard){
					
				}else{
					alert('能先填写吗 (╯‵□′)╯︵┻━┻')
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "~@/assets/styles/variables.scss";

	.hxy {
		.hxy-main {
			padding: 20px;

			.hxy-main-board {
				height: 200px;

				textarea {
					width: 100%;
					height: 100%;
					box-sizing: border-box;
					border-radius: 4px;
					padding: 5px 10px;
					box-shadow: 0 0 2px #bbb;
					resize: none;
				}
			}

			.hxy-main-submit {
				display: flex;
				justify-content: flex-end;
				padding: 15px 0;

				.hxy-main-submit-btn {
					padding: 10px 15px;
					border-radius: 4px;
					background-color: rgba(37, 164, 187, 1);
					color: #FFFFFF;
					cursor: pointer;
				}

				.hxy-main-submit-btn:hover {
					background-color: rgba(37, 164, 187, .8);
				}

				.hxy-main-submit-btn:active {
					background-color: rgba(37, 164, 187, 1);
				}
			}

			.hxy-main-title {
				font-size: 20px;
				font-weight: bold;
				padding: 15px 0;
				border-bottom: 1px solid #555555;
			}
		}
	}
</style>
