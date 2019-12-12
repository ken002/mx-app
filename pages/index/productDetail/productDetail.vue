<template>
	<view>
		<view class="image-container">
			<image-cache @tap="toPreview" v-if="productDetail.showType===0" :src="productDetail.image" mode="aspectFill"></image-cache>
			<video-cache v-else :src="productDetail.video"></video-cache>
		</view>
		<view class="padding">
			<view>{{productDetail.name}}</view>
			<view>{{productDetail.intro}}</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			productDetail: null
		};
	},
	onLoad(option) {
		let params = JSON.parse(option.params);
		this.productDetail = params.productDetail;
	},
	methods: {
		toPreview(){
			uni.previewImage({
				current: this.productDetail.image,
				urls: [this.productDetail.image]
			});
		}
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
