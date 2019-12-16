<template>
	<view>
		<form>
			<view @tap="uploadImage" class="cu-form-group margin-top">
				<view class="title">头像</view>
				<view class="cu-avatar radius bg-gray">
					<image class="avatar" :src="userInfo.avatar"></image>
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">账号</view>
				<input v-model="userInfo.account" disabled></input>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:null,
			}
		},
		onLoad(){
			this.userInfo = uni.getStorageSync('userInfo');
		},
		methods: {
			async uploadImage() {
				// const path = await this.$util.selectImage();
				// const backPath = await this.$util.uploadImage(path);
				// this.userInfo.avatar = backPath;
				// this.toModifyAvatar();
			},
			async toModifyAvatar(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.avatar{
		width: 100%;height: 100%;
	}
</style>
