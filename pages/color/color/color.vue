<template>
	<view>
		<scroll-view scroll-y class="page">
			<view class="cu-card">
				<view class="cu-item bg-img shadow-blur color-item" @tap="preview(index)" v-for="(item, index) in list" :key="index">
					<image-cache loadingImage="'/static/avatar.jpg'" errorImage="'/static/avatar.jpg'" :src="item.image"></image-cache>
					<view class="cardTitle">￥{{ item.price }}</view>
				</view>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [],
			imageList:[],
		};
	},
	onLoad(){
		this.selectColors();
	},
	methods: {
		preview(index) {
			uni.previewImage({
				current: index,
				urls: this.imageList
			});
		},
		async selectColors() {
			const res = await this.$util.request({
				requestUrl:'api/colors'
			});
			console.log('查询色板：',res);
			
			if(res){
				this.list = res.data.data;
				for(let i of this.list){
					this.imageList.push(i.image);
				}
			}
		},
	}
};
</script>

<style lang="scss" scoped>
.page {
	height: 100vh;
}

.cardTitle {
	color: #fff;
	padding: 90upx 60upx;
	font-size: 40upx;
	font-weight: 300;
	transform: skew(-20deg, 0deg);
	position: relative;
	text-shadow: 0px 0px 6upx rgba(0, 0, 0, 0.3);
}

.cardTitle::before {
	content: '';
	position: absolute;
	width: 60upx;
	height: 6upx;
	border-radius: 20upx;
	background-color: #fff;
	display: block;
	top: 60upx;
	left: 50upx;
	transform: skew(20deg, 0deg);
}

.cardTitle::after {
	content: '';
	position: absolute;
	width: 140upx;
	border-radius: 6upx;
	height: 24upx;
	background-color: #fff;
	display: block;
	bottom: 76upx;
	left: 90upx;
	transform: skew(20deg, 0deg);
	opacity: 0.1;
}

.color-item {
	height: 200px;
	position: relative;
	image {
		width: 100%;
		height: 100%;
	}
	.cardTitle {
		position: absolute;
		width: 100%;
		z-index: 100;
		top: 0;
		left: 0;
		background: rgba($color: #000000, $alpha: 0.5);
	}
}
</style>
