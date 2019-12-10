<template>
	<view>
		<web-view :webview-styles="webviewStyles" src="https://www.meijiabang.cn/"></web-view>
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
