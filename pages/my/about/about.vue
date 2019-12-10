<template>
	<view>
		<view class="text-xl version">
			<text class="text-bold">当前版本：{{ currVersion }}</text>
		</view>
		<view class="padding flex flex-direction"><button @tap="getNewVersion" class="cu-btn bg-blue lg">检查更新</button></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			currVersion: '',
			intro: ''
		};
	},
	onLoad() {
		//#ifdef APP-PLUS
		this.getCurrVersion();
		//#endif
	},
	methods: {
		getCurrVersion() {
			this.currVersion = plus.runtime.version;
		},
		getNewVersion(){
			
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
