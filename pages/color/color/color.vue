<template>
	<view>
		<view class="cu-card">
			<view class="cu-item bg-img shadow-blur color-item" @tap="preview(index)" v-for="(item, index) in list" :key="index">
				<image-cache loadingImage="'/static/avatar.jpg'" errorImage="'/static/avatar.jpg'" :src="item.image"></image-cache>
				<view class="cardTitle">
					<view class="text">￥{{ item.price }}</view>
				</view>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [],
			imageList: []
		};
	},
	onPullDownRefresh() {
		this.selectColors();
	},
	onLoad() {
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
				requestUrl: 'api/colors'
			});
			console.log('查询色板：', res);
			uni.stopPullDownRefresh();
			if (res) {
				this.list = res.data.data;
				this.imageList = [];
				for (let i of this.list) {
					this.imageList.push(i.image);
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	height: 100vh;
}

.cardTitle {
	color: #fff;
	padding: 20upx 60upx;
	font-size: 40upx;
	font-weight: 300;
	position: relative;
	text-shadow: 0px 0px 6upx rgba(0, 0, 0, 0.3);
}

.color-item {
	height: 200px;
	position: relative;
	overflow: hidden !important;
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
		background: rgba($color: #000000, $alpha: 0.2);
		
		.text {
			font-size: 40upx;
			transform: skew(-30deg, 0deg);
		}
	}
}
</style>
