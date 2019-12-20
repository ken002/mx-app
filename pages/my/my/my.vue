<template>
	<view>
		<view @tap="toPersonalInfo" class="avatar-container">
			<view class="cu-avatar xl round" :style="{ 'background-image': 'url(' + userInfo.avatar + ')' }"></view>
			<view class="nickname">{{ userInfo.account }}</view>
		</view>

		<view class="items">
			<view class="cu-list menu sm-border card-menu">
				<view @tap="toMyCollection" class="cu-item arrow">
					<view class="content"><text class="text-grey">我的收藏</text></view>
				</view>
				<view @tap="toRecharge" class="cu-item arrow">
					<view class="content"><text class="text-grey">充值优惠</text></view>
				</view>
				<!-- #ifdef APP-PLUS -->
				<view @tap="toNavigation" class="cu-item arrow">
					<view class="content"><text class="text-grey">导航（到303广场后电话联系店主）</text></view>
				</view>
				<!-- #endif -->
				<view @tap="toChatUsWeixin" class="cu-item arrow">
					<view class="content"><text class="text-grey">添加店主微信</text></view>
				</view>
				<view @tap="toChatUs" class="cu-item arrow">
					<view class="content"><text class="text-grey">紧急联系店主</text></view>
				</view>
				<view @tap="toMoreResource" class="cu-item arrow">
					<view class="content"><text class="text-grey">更多款式</text></view>
				</view>
				<view v-if="userInfo.isManager" @tap="toManageSystem" class="cu-item arrow">
					<view class="content"><text class="text-grey">后台管理</text></view>
				</view>
				<view @tap="toAbout" class="cu-item arrow">
					<view class="content"><text class="text-grey">关于</text></view>
				</view>
				<view @tap="out" class="cu-item arrow">
					<view class="content"><text class="text-grey">退出登录</text></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userInfo: {},
		};
	},
	onPullDownRefresh() {
		setTimeout(() => {
			uni.stopPullDownRefresh();
		}, 500);
	},
	onShow() {
		this.userInfo = uni.getStorageSync('userInfo');
		if (this.userInfo === null || this.userInfo === '') {
			this.$util.toLogin();
		}
	},
	onLoad() {},
	methods: {
		toNavigation() {
			//#ifdef APP-PLUS
			var dst = new plus.maps.Point(null, null);
			var src = new plus.maps.Point(null, null);
			plus.maps.openSysMap(dst, '303生活广场', src);
			//#endif
			
			//#ifndef APP-PLUS
				this.$util.toast('仅app端可用');
			//#endif
		},
		toPersonalInfo() {
			this.$util.navigateTo('../personalInfo/personalInfo');
		},
		toChatUs() {
			uni.makePhoneCall({
				phoneNumber: '15180699664'
			});
		},
		toChatUsWeixin(){
			this.$util.navigateTo('../masterWeixin/masterWeixin');
		},
		toMoreResource() {
			this.$util.navigateTo('../moreResource/moreResource');
		},
		toManageSystem() {
			this.$util.navigateTo('../manageSystem/manageSystem');
		},
		toMyCollection() {
			this.$util.navigateTo('../myCollection/myCollection');
		},
		toRecharge() {
			this.$util.navigateTo('../recharge/recharge');
		},
		toAbout() {
			this.$util.navigateTo('../about/about');
		},
		out() {
			uni.showModal({
				title: '提示',
				content: '确定要退出登录',
				success: res => {
					if (res.confirm) {
						uni.removeStorageSync('userInfo');
						this.$util.toLogin();
					}
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.avatar-container {
	padding: 50px 0;
	background: #fff;
	text-align: center;
	margin-bottom: 30px;
	.cu-avatar {
	}
	.nickname {
		margin-top: 10px;
	}
}

.items {
	padding-bottom: 60px;
}
</style>
