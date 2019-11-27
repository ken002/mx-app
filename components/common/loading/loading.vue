<template>
	<view v-if="isShow" class="bg-white flex-sub radius shadow-lg loading">
		<image src="/static/loading-white.gif" mode="aspectFit" class="gif-white response" style="height:240upx"></image>
	</view>
</template>

<script>
	export default{
		props:{
			isShow:{
				type:Boolean,
				default:false
			}
		}
	}
</script>

<style scoped>
	.loading{
		position: fixed;
		width: 100%;
		top: 30%;
	}
</style>
