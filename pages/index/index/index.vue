<template>
	<view>
		<view class="uni-swiper-msg">
			<view class="uni-swiper-msg-icon cuIcon-notificationfill"></view>
			<swiper vertical="true" autoplay="true" circular="true" interval="3000">
				<swiper-item v-for="(item, index) in msg" :key="index">
					<text>{{ item.title }}</text>
				</swiper-item>
			</swiper>
		</view>
		<swiper
			class="card-swiper"
			:class="dotStyle ? 'square-dot' : 'round-dot'"
			:indicator-dots="true"
			:circular="true"
			:autoplay="true"
			interval="5000"
			duration="500"
			@change="cardSwiper"
			indicator-color="#8799a3"
			indicator-active-color="#39b54a"
		>
			<swiper-item @tap.stop="preview(index, 'swiper')" v-for="(item, index) in swiperArr" :key="index" :class="cardCur == index ? 'cur' : ''">
				<view class="swiper-item"><image-cache loadingImage="'/static/avatar.jpg'" errorImage="'/static/avatar.jpg'" :src="item.image"></image-cache></view>
			</swiper-item>
		</swiper>

		<view class="waterfall-flow-view">
			<view class="cu-bar bg-white solid-bottom">
				<view class="action">
					<text class="cuIcon-titles text-orange"></text>
					本店热款
				</view>
				<view class="action"><text @tap="toMore(1)">更多</text></view>
			</view>
			<view class="sample-show">
				<view style="background-color:#fff;" v-for="(item, index) in list" :key="index" class="item">
					<view class="image-container">
						<image-cache v-if="item.showType === 0" loadingImage="'/static/avatar.jpg'" errorImage="'/static/avatar.jpg'" :src="item.image"></image-cache>
						<view class="jly-video-container" v-else>
							<image-cache loadingImage="'/static/avatar.jpg'" errorImage="'/static/avatar.jpg'" :src="item.image"></image-cache>
							<video-play></video-play>
						</view>
					</view>
					<view>
						<text class="jly-text-overflow-two">{{ item.name }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="waterfall-flow-view">
			<view class="cu-bar bg-white solid-bottom">
				<view class="action">
					<text class="cuIcon-titles text-orange"></text>
					当季流行
				</view>
				<view class="action"><text @tap="toMore(2)">更多</text></view>
			</view>
			<view class="sample-show">
				<view style="background-color:#fff;" v-for="(item, index) in list2" :key="index" class="item">
					<view class="image-container">
						<image-cache v-if="item.showType === 0" loadingImage="'/static/avatar.jpg'" errorImage="'/static/avatar.jpg'" :src="item.image"></image-cache>
						<view class="jly-video-container" v-else>
							<image-cache loadingImage="'/static/avatar.jpg'" errorImage="'/static/avatar.jpg'" :src="item.image"></image-cache>
							<video-play></video-play>
						</view>
					</view>
					<view>
						<text class="jly-text-overflow-two">{{ item.name }}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			swiperArr: [],
			swiperImageArr: [],
			dotStyle: false,
			cardCur: 0,
			list: [],
			imageList: [],
			list2: [],
			imageList2: [],
			msg: []
		};
	},
	onShow() {
		
	},
	onHide(){
		
	},
	onLoad() {
		this.selectNotice();
		this.selectAd();
		this.selectSelfProducts();
		this.selectCurrPopularProducts();
	},
	onPullDownRefresh() {
		this.selectNotice();
		this.selectAd();
		this.selectSelfProducts();
		this.selectCurrPopularProducts();
	},
	methods: {
		preview(index, type) {
			var urls = [];
			if (type === 'swiper') {
				urls = this.swiperImageArr;
			}
			uni.previewImage({
				current: index,
				loop: true,
				indicator: 'default',
				urls: urls
			});
		},
		toMore(type) {
			uni.navigateTo({
				url: `../productList/productList?type=${type}`
			});
		},
		cardSwiper(e) {
			this.cardCur = e.detail.current;
		},
		//公告
		async selectNotice() {
			const res = await this.$util.request({
				requestUrl: 'api/notices'
			});
			console.log('公告：', res);
			if (res !== undefined) {
				this.msg = res.data.data;
			} else {
				uni.stopPullDownRefresh();
			}
		},
		//广告位
		async selectAd() {
			const res = await this.$util.request({
				requestUrl: 'api/ads'
			});
			console.log('广告：', res);
			if (res !== undefined) {
				this.swiperArr = res.data.data;

				this.swiperImageArr = [];
				for (let i of this.swiperArr) {
					this.swiperImageArr.push(i.image);
				}
			} else {
				uni.stopPullDownRefresh();
			}
		},
		//本店
		async selectSelfProducts() {
			const res = await this.$util.request({
				requestUrl: 'api/products',
				data: {
					limit: 6,
					page: 1,
					name: null,
					pType: 1,
					online: 1
				}
			});
			console.log('本店：', res);
			if (res !== undefined) {
				this.list = res.data.data;

				this.imageList = [];
				for (let i of this.list) {
					this.imageList.push(i.image);
				}
			} else {
				uni.stopPullDownRefresh();
			}
		},
		//流行
		async selectCurrPopularProducts() {
			const res = await this.$util.request({
				requestUrl: 'api/products',
				data: {
					limit: 6,
					page: 1,
					name: null,
					pType: 0,
					online: 1
				}
			});
			uni.stopPullDownRefresh();
			console.log('流行：', res);
			if (res !== undefined) {
				this.list2 = res.data.data;

				this.imageList2 = [];
				for (let i of this.list2) {
					this.imageList2.push(i.image);
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.uni-swiper-msg {
	padding: 0 20rpx;
	margin-top: 20px;
}
.swiper-image {
	width: 100%;
	height: 100%;
}
.waterfall-flow-view {
	margin-bottom: 20px;
}
.sample-show {
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	.item {
		width: 50%;
		padding: 10px;
		.image-container {
			height: 200px;
			border-radius: 6px;
			overflow: hidden;
		}
	}
}

</style>
