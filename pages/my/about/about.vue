<template>
	<view>
		<view class="text-xl version">
			<text class="text-bold">当前版本：{{ currVersion }}</text>
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
		this.getCurrVersion();
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
