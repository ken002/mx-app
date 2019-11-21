<template>
	<view>
		<swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
		 indicator-active-color="#39b54a">
			<swiper-item v-for="(item,index) in swiperArr" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item">
					<image :src="item.image" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="waterfall-flow-view">
			<view class="title">- 当季流行 -</view>
			<waterfall-flow :list="list" :loading="loading" @click="choose"></waterfall-flow>
		</view>
	</view>
</template>

<script>
import WaterfallFlow from '../../../components/common/nairenk-waterfall-flow/nairenk-waterfall-flow.vue';
export default {
	 components: {
	            WaterfallFlow
	        },
	data() {
		return {
			page: 1,
			swiperArr:[],
			dotStyle:false,
			cardCur:0,
			list:[],
			loading:false,
		};
	},
	onLoad() {
		this.selectHotProducts();

		this.selectProductsOnline();
	},
	onReachBottom(){
		this.page++;
		this.selectProductsOnline();
	},
	methods: {
		choose(){
			
		},
		cardSwiper(){
			
		},
		//广告位
		async selectHotProducts() {
			const res = await this.$util.request({
				requestUrl: 'api/products',
				data: {
					limit: 5,
					page: 1,
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
			
			this.list=this.list.concat(res.data.data);
		}
	}
};
</script>

<style lang="scss" scoped>
	.swiper-image{
		width: 100%;
		height: 100%;
	}
	.waterfall-flow-view{
		padding-bottom: 20px;
		.title{
			text-align: center;
			margin: 20px 0;
			font-size: 16px;
		}
	}
	
</style>
