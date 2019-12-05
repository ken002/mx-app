<template>
	<view>
		<view class="bottom">
			<view>--第三方登录--</view>
			<view>
				<image @tap="weixinLogin" src="../../../static/weixin.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {
		const userInfo = uni.getStorageSync('userInfo');
		console.log(userInfo);
		if (userInfo !== null && userInfo !== '') {
			uni.switchTab({
				url: '/pages/index/index/index'
			});
		}
	},
	methods: {
		async weixinLoginConfirm(userInfo) {
			const res = await this.$util.request({
				requestUrl: 'api/user/' + userInfo.openId
			});
			console.log('查询用户', res);
			if (res) {
				if (res.data.data === null) {
					this.addUser(userInfo);
				} else {
					this.modifyUser(userInfo);
				}
			}
		},
		async addUser(userInfo) {
			const res = await this.$util.request({
				requestUrl: 'api/user',
				method: 'POST',
				data: userInfo
			});
			console.log('注册', res);
			if (res) {
				this.loginSucc(userInfo);
			}
		},
		loginSucc(userInfo) {
			uni.hideLoading();
			uni.setStorageSync('userInfo', userInfo);

			this.$util.toast('登录成功');

			setTimeout(() => {
				uni.switchTab({
					url: '/pages/index/index/index'
				});
			}, 500);
		},
		async modifyUser(userInfo) {
			const res = await this.$util.request({
				requestUrl: 'api/user',
				method: 'PUT',
				data: userInfo
			});
			console.log('登录', res);
			if (res) {
				this.loginSucc(userInfo);
			}
		},
		weixinLogin() {
			//提供本人测试账号登录
			const userInfo = {
				openId: 'oRrdQt1PCt0pRj4hiGAAIyVoxZLs',
				nickName: 'M.X',
				gender: 1,
				city: '上饶',
				province: '江西',
				country: '中国',
				avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI2bm5Hwiax0EoPVIViaUmFNzjMl1C63unGFoJ9Ol9VKllB1LibrZibGByQfWo2nqPIbF2LoNmK6w8meA/132',
				unionId: 'oU5Yyty__tDp0m3-aq9VrgoSWw2Q'
			};
			this.weixinLoginConfirm(userInfo);
		}
	}
};
</script>

<style lang="scss" scoped>
.bottom {
	position: fixed;
	bottom: 30px;
	width: 100%;
	text-align: center;

	image {
		width: 49px;
		height: 40px;
	}
}
</style>
