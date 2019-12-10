<template>
	<view>
		<view v-for="(item, index) in items" :key="index" class="text-xl padding">
			<text>{{item.intro}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items:[],
			}
		},
		onLoad(){
			this.selectRecharges();
		},
		methods: {
			async selectRecharges() {
				const res = await this.$util.request({
					requestUrl: 'api/recharges'
				});
				console.log('查询所有充值优惠：', res);
			
				if (res) {
					this.items = res.data.data;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.padding{
		padding: 10px 30px;
	}
</style>
