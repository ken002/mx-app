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
			<view class="cu-bar bg-white solid-bottom">
				<view class="action">
					<text class="cuIcon-titles text-orange"></text> 本店热款
				</view>
				<view class="action">
					<text>更多</text>
				</view>
			</view>
			<waterfall-flow :list="list2" :loading="false" @click="choose2"></waterfall-flow>
		</view>
		<view class="waterfall-flow-view">
			<view class="cu-bar bg-white solid-bottom">
				<view class="action">
					<text class="cuIcon-titles text-orange"></text> 当季流行
				</view>
				<view class="action">
					<text>更多</text>
				</view>
			</view>
			<waterfall-flow :list="list" :loading="false" @click="choose"></waterfall-flow>
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
			swiperArr:[{
				image:'/static/avatar.jpg'
			},{
				image:'/static/avatar2.jpg'
			}],
			dotStyle:false,
			cardCur:0,
			list:[],
			list2:[]
		};
	},
	onLoad() {
		this.selectAd();
		this.selectSelfProducts();
		
		setTimeout(()=>{
			this.selectCurrPopularProducts();
		},1000)
	},
	methods: {
		choose(){
			
		},
		choose2(){
			
		},
		cardSwiper(){
			
		},
		//广告位
		async selectAd() {
			
		},
		//本店
		async selectSelfProducts(){
			const res = await this.$util.request({
				requestUrl: 'api/products',
				data: {
					limit: 10,
					page: 1,
					name: null,
					pType: 1,
					online: 1
				}
			});
			console.log('本店：', res);
			if (res !== undefined) {
				this.list2=res.data.data;
			}
		},
		//流行
		async selectCurrPopularProducts() {
			const res = await this.$util.request({
				requestUrl: 'api/products',
				data: {
					limit: 10,
					page: 1,
					name: null,
					pType: 0,
					online: 1
				}
			});
			console.log('流行：', res);
			if (res !== undefined) {
				this.list=res.data.data;
			}
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
		margin-bottom: 20px;
	}
	
</style>
