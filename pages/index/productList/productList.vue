<template>
	<view>
		<WaterfallFlow :list="list" :loading="false" @click="choose"></WaterfallFlow>
	</view>
</template>

<script>
	import WaterfallFlow from '../../../components/common/nairenk-waterfall-flow/nairenk-waterfall-flow.vue';
	export default {
		components:{
			WaterfallFlow
		},
		data() {
			return {
				page:1,
				list:[],
				type:null,
			}
		},
		onReachBottom(){
			if(this.type==1){
				this.selectSelfProducts('more');
			}
			if(this.type==2){
				this.selectCurrPopularProducts('more');
			}
		},
		onLoad(option){
			this.type=option.type;
			if(option.type==1){
				uni.setNavigationBarTitle({
				    title: '本店热款'
				});
				this.selectSelfProducts();
			}
			if(option.type==2){
				uni.setNavigationBarTitle({
				    title: '当季流行'
				});
				this.selectCurrPopularProducts();
			}
		},
		methods: {
			choose(){
				
			},
			async selectSelfProducts(param) {
				if(param==='more'){
					this.page++;
				}else{
					this.page=1;
				}
				const res = await this.$util.request({
					requestUrl: 'api/products',
					data: {
						limit: 10,
						page: this.page,
						name: null,
						pType: 1,
						online: 1
					}
				});
				console.log('本店：', res);
				if (res !== undefined) {
					if(param==='more'){
						this.list=this.list.concat(res.data.data);
					}else{
						this.list=res.data.data;
					}
				}
			},
			async selectCurrPopularProducts(param) {
				if(param==='more'){
					this.page++;
				}else{
					this.page=1;
				}
				const res = await this.$util.request({
					requestUrl: 'api/products',
					data: {
						limit: 10,
						page: this.page,
						name: null,
						pType: 0,
						online: 1
					}
				});
				console.log('流行：', res);
				if (res !== undefined) {
					if(param==='more'){
						this.list=this.list.concat(res.data.data);
					}else{
						this.list=res.data.data;
					}
				}
			}
		}
	}
</script>

<style>

</style>
