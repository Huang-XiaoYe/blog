<template>
	<div id="app">
		<router-view></router-view>
		<Audio />
	</div>
</template>

<script>
	import Audio from './component/audio.vue'
	export default {
		name: 'app',
		components: {
			Audio
		}
	}
</script>

<style lang="scss">
	@import "~@/assets/styles/variables.scss";
	* {
		margin: 0;
		padding: 0;
	}

	#app {
		width: 100%;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		overflow: auto;
		background-image: url(./assets/images/gallery/bg.jpg);
		background-size: cover;
		background-position: center;
	}
	
	.hxy{
		padding-top: 100px;
	}
	
	.hxy-main{
		width: $mainWidth;
		padding: 20px 10px;
		background-color: rgba(255,255,255,.95);
		border-radius: 4px;
		box-shadow: 0 0 8px rgba(0,0,0,.5);
		box-sizing: border-box;
		margin: 30px auto;
		overflow: hidden;
	}
</style>
