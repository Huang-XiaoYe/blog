<template>
	<div class="container">
		<div class="hxy-main-music" @click="musicClick">
			<div class="hxy-main-music-icon"></div>
			<div class="hxy-main-music-hand stop" v-if="musicType"></div>
			<div class="hxy-main-music-hand play" v-else></div>
			<audio id="musicEl" :src="musicList[playIndex]"></audio>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Audio',
		data() {
			return {
				musicType: false,
				playType: true,
				playIndex: 0,
				musicList: [
					require('../assets/images/music/6.mp3'),
					require('../assets/images/music/1.mp3'),
					require('../assets/images/music/2.mp3'),
					require('../assets/images/music/3.mp3'),
					require('../assets/images/music/4.mp3'),
					require('../assets/images/music/5.mp3')
				],
			}
		},
		mounted() {
			this.play()
		},
		methods: {
			musicClick() {
				const audio = document.querySelector('#musicEl')
				this.musicType = !this.musicType
				if (this.musicType) {
					audio.play()
				} else {
					audio.pause()
				}
			},
			playNext() {
				const audio = document.querySelector('#musicEl')
				this.playIndex = Math.round(Math.random() * (this.musicList.length - 1));
				audio.pause();
			},
			play() {
				const audio = document.querySelector('#musicEl')
				let times = setInterval(() => {
					if (audio.paused) {
						// audio.play();
					} else {
						this.musicType = !this.musicType
						clearInterval(times)
					}
				}, 100)

			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		.hxy-main-music {
			width: 124px;
			height: 124px;
			position: fixed;
			bottom: 50px;
			left: 50px;
			cursor: pointer;

			.hxy-main-music-icon {
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				background-image: url(../assets/images/icon/kon.png);
			}

			.hxy-main-music-hand {
				width: 88px;
				height: 88px;
				position: absolute;
				left: 18px;
				top: 25px;
				z-index: 1;
			}

			.stop {
				background-image: url(../assets/images/icon/stop@dis.png);
				background-size: 100% 100%;
			}

			.play {
				background-image: url(../assets/images/icon/play@dis.png);
				background-size: 100% 100%;
			}

		}

		.hxy-main-music:hover .stop {
			background-image: url(../assets/images/icon/stop@show.png);
		}

		.hxy-main-music:hover .play {
			background-image: url(../assets/images/icon/play@show.png);
		}
	}
</style>
