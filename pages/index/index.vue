<template>
	<view class="content">
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				page:1,
			}
		},
		onLoad() {
			this.selectHotProducts();
			
			this.selectProductsOnline();
		},
		methods: {
			async selectHotProducts(){
				const res = await this.$util.request({
					requestUrl: 'api/products',
					data: {
						limit: 10,
						page: this.page,
						name: null,
						hot:1,
						online:null,
					}
				});
				console.log('广告位：', res);
			},
			async selectProductsOnline(){
				const res = await this.$util.request({
					requestUrl: 'api/products',
					data: {
						limit: 10,
						page: this.page,
						name: null,
						hot:null,
						online:1,
					}
				});
				console.log('所有上架商品：', res);
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
