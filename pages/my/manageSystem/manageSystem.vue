<template>
	<view>
		<web-view :webview-styles="webviewStyles" src="http://180.76.175.210:8082/back"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles:{
					progress:true
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
