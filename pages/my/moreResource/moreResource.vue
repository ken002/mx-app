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
					progress:{
						color:'007AFF'
					}
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
