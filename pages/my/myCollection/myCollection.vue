<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:null,
				page:1,
			}
		},
		onLoad(){
			this.userInfo = uni.getStorageSync('userInfo');
			this.selectMyCollections();
		},
		methods: {
			async selectMyCollections(){
				const res = await this.$util.request({
					requestUrl: 'api/collections',
					data:{
						userId:this.userInfo.account,
						page:this.page,
						limit:10,
					}
				});
				console.log(res);
				if(res){
					this.list=res.data.data;
				}
			}
		}
	}
</script>

<style>

</style>
