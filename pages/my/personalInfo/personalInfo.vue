<template>
	<view>
		<form>
			<view @tap="uploadImage" class="cu-form-group margin-top">
				<view class="title">头像</view>
				<view class="avatar">
					<!-- #ifdef APP-PLUS -->
					<image-cache ref="imageCache" :src="userInfo.avatar"></image-cache>
					<!-- #endif -->
					<!-- #ifndef APP-PLUS -->
					<image :src="userInfo.avatar"></image>
					<!-- #endif -->
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">账号</view>
				<input v-model="userInfo.account" disabled></input>
			</view>
		</form>
		<cpimg ref="cpimg" @result="cpimgOk"></cpimg>
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
			async cpimgOk(res){
				console.log(res);
				
				const backPath = await this.$util.uploadImage(res[0]);
				this.userInfo.avatar = backPath;
				this.toModifyAvatar();
			},
			async uploadImage() {
				// #ifdef APP-PLUS
				const path = await this.$util.selectImage();
				const backPath = await this.$util.uploadImage(path);
				this.userInfo.avatar = backPath;
				this.toModifyAvatar();
				// #endif
				
				// #ifndef APP-PLUS
					this.$refs.cpimg._changImg();
				// #endif
			},
			async toModifyAvatar(){
				const res = await this.$util.request({
					requestUrl: 'api/user',
					method: 'PUT',
					data:{
						id:this.userInfo.id,
						avatar:this.userInfo.avatar
					}
				});
				if(res){
					uni.setStorageSync('userInfo', this.userInfo);
					this.$util.toast('修改成功');
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.avatar{
		width: 32px;height: 32px;border-radius: 50%;
		image{
			width: 100%;height: 100%;
		}
	}
	
</style>
