<template>
	<view>
		<view @tap="toPreview" class="image-container">
			<image-cache v-if="productDetail.showType===0" :src="productDetail.image"></image-cache>
			<video-cache v-else :src="productDetail.video"></video-cache>
		</view>
		<view class="padding">
			<view>{{productDetail.name}}</view>
			<view>{{productDetail.intro}}</view>
			<button @tap="toCollect" class="cu-btn block bg-blue margin-tb-sm lg" type="primary">{{collectionName}}</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			productDetail: null,
			userInfo:null,
			collected:false,
			collection:null,
		};
	},
	computed:{
		collectionName(){
			if(!this.collected){
				return '收藏';
			}
			return '取消收藏';
		}
	},
	onLoad(option) {
		let params = JSON.parse(option.params);
		this.productDetail = params.productDetail;
	},
	onShow() {
		this.userInfo = uni.getStorageSync('userInfo');	
		
		if (!(this.userInfo === null || this.userInfo === '')) {
			this.selectIsCollected();
		}
	},
	methods: {
		async selectIsCollected(){
			const res = await this.$util.request({
				requestUrl: 'api/isCollected',
				data:{
					userId:this.userInfo.account,
					productId:this.productDetail.id
				}
			});
			console.log('是否已收藏:',res);
			if(res){
				if(res.data.data.length===1){
					this.collected=true;
					this.collection=res.data.data[0];
				}else{
					this.collected=false;
				}
			}
		},
		toPreview(){
			if(this.productDetail.showType===0){
				uni.previewImage({
					current: 0,
					urls: [this.productDetail.image]
				});
			}
		},
		async toCollect(){
			if (this.userInfo === null || this.userInfo === '') {
				this.$util.toLogin();
			}else{
				if(!this.collected){
					const res = await this.$util.request({
						requestUrl: 'api/collection',
						method: 'POST',
						data:{
							userId:this.userInfo.account,
							productId:this.productDetail.id
						}
					});
					console.log('收藏:',res);
					if(res){
						this.$util.toast('收藏成功');
						this.collected=true;
						this.collection=res.data.data;
					}
				}else{
					const res = await this.$util.request({
						requestUrl: `api/collection/${this.collection.id}`,
						method: 'DELETE',
					});
					console.log('取消收藏:',res);
					if(res){
						this.$util.toast('已从收藏中移除');
						this.collected=false;
						this.collection=null;
					}
				}
			}
		},
	}
};
</script>

<style lang="scss" scoped>
.image-container {
	height: 200px;
}
.padding{
	padding: 20px;
}
</style>
