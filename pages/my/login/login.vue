<template>
	<view></view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {
		//#ifdef APP-PLUS
		this.weixinLogin();
		//#endif
		
		//#ifdef H5
		const userInfo={};
		this.weixinLoginConfirm(userInfo);
		//#endif
	},
	methods: {
		async weixinLoginConfirm(userInfo) {
			//测试
			userInfo = {
				openId: 'oRrdQt1PCt0pRj4hiGAAIyVoxZLs',
				nickName: 'M.X',
				gender: 1,
				city: '上饶',
				province: '江西',
				country: '中国',
				avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI2bm5Hwiax0EoPVIViaUmFNzjMl1C63unGFoJ9Ol9VKllB1LibrZibGByQfWo2nqPIbF2LoNmK6w8meA/132',
				unionId: 'oU5Yyty__tDp0m3-aq9VrgoSWw2Q'
			};
			const res = await this.$util.request({
				requestUrl: 'api/user/'+userInfo.openId
			});
			console.log('查询用户', res);
			if (res !== undefined) {
				if(res.data.data===null){
					this.addUser(userInfo);
				}else{
					this.modifyUser(userInfo);
				}
			}
		},
		async addUser(userInfo){
			const res = await this.$util.request({
				requestUrl: 'api/user',
				method: 'POST',
				data: userInfo
			});
			console.log('添加用户', res);
			if(res!==undefined){
				uni.switchTab({
					url:'/pages/index/index/index'
				})
			}
		},
		async modifyUser(userInfo){
			const res = await this.$util.request({
				requestUrl: 'api/user',
				method: 'PUT',
				data: userInfo
			});
			console.log('修改用户', res);
			if(res!==undefined){
				uni.switchTab({					
					url:'/pages/index/index/index'
				})
			}
		},
		weixinLogin() {
			var me = this;
			uni.getProvider({
				service: 'oauth',
				success: function(res) {
					console.log(res);
					if (~res.provider.indexOf('weixin')) {
						uni.login({
							provider: 'weixin',
							success: function(loginRes) {
								console.log(loginRes.authResult);

								uni.getUserInfo({
									provider: 'weixin',
									success: function(infoRes) {
										console.log(infoRes.userInfo);

										me.weixinLoginConfirm(infoRes.userInfo);
									}
								});
							}
						});
					}
				}
			});
		}
	}
};
</script>

<style></style>
