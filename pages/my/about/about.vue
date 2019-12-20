<template>
	<view>
		<view class="text-xl version">
			<view style="text-align: left;margin-bottom: 30px;">
				<text class="text-bold">
					这是一款个人开发的美甲应用，旨在为杭州市西湖区三墩镇附近想做美甲的顾客提供最好的服务。<br>应用不断优化完善中，如果有好的建议可以联系我们，电话：18070509562。
				</text>
			</view>
			
			<!-- #ifdef APP-PLUS -->
			<text class="text-bold">当前版本：{{ currVersion }}</text>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			currVersion: '',
		};
	},
	onLoad() {
		// #ifdef APP-PLUS
		this.getCurrVersion();
		// #endif
	},
	methods: {
		getCurrVersion() {
			this.currVersion = plus.runtime.version;
		}
	}
};
</script>

<style lang="scss" scoped>
.version {
	padding: 30px;
	text-align: center;
}
</style>
