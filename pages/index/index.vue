<template>
	<view>
		<swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
		 indicator-active-color="#0081ff">
			<swiper-item v-for="(item,index) in swiperArr" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item">
					<image :src="item.image" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	data() {
		return {
			page: 1,
			swiperArr:[],
			dotStyle:false,
			cardCur:0,
		};
	},
	onLoad() {
		this.selectHotProducts();

		this.selectProductsOnline();
	},
	methods: {
		cardSwiper(){
			
		},
		//广告位
		async selectHotProducts() {
			const res = await this.$util.request({
				requestUrl: 'api/products',
				data: {
					limit: 10,
					page: this.page,
					name: null,
					hot: 1,
					online: null
				}
			});
			console.log('广告位：', res);
			
			this.swiperArr=res.data.data;
		},
		//上架产品列表
		async selectProductsOnline() {
			const res = await this.$util.request({
				requestUrl: 'api/products',
				data: {
					limit: 10,
					page: this.page,
					name: null,
					hot: null,
					online: 1
				}
			});
			console.log('所有上架商品：', res);
		}
	}
};
</script>

<style lang="scss" scoped>
	.swiper-image{
		width: 100%;
		height: 100%;
	}
</style>
