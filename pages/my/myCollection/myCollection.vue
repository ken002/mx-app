<template>
	<view>
		<view class="flow-container"><WaterfallFlow :list="list" :loading="false" @click="choose"></WaterfallFlow></view>
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
			userInfo: null,
			page: 1,
			list: []
		};
	},
	onReachBottom() {
		this.selectMyCollections('more');
	},
	onShow() {
		this.userInfo = uni.getStorageSync('userInfo');
		this.selectMyCollections();
	},
	methods: {
		choose(item) {
			this.$util.toProductDetail(item);
		},
		async selectMyCollections(param) {
			if(param==='more'){
				this.page++;
			}else{
				this.page=1;
			}
			const res = await this.$util.request({
				requestUrl: 'api/collections',
				data: {
					userId: this.userInfo.account,
					page: this.page,
					limit: 10
				}
			});
			console.log('我的收藏:',res);
			if (res) {
				if(param==='more'){
					this.list=this.list.concat(res.data.data);
				}else{
					this.list=res.data.data;
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
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
