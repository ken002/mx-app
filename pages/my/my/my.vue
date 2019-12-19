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
				<view @tap="toNavigation" class="cu-item arrow">
					<view class="content"><text class="text-grey">导航（到303广场后电话联系店主）</text></view>
				</view>
				<view @tap="toChatUs" class="cu-item arrow">
					<view class="content"><text class="text-grey">联系店主</text></view>
				</view>
				<view @tap="toMoreResource" class="cu-item arrow">
					<view class="content"><text class="text-grey">更多款式</text></view>
				</view>
				<view @tap="toManageSystem" class="cu-item arrow">
					<view class="content"><text class="text-grey">后台管理（管理员专用）</text></view>
				</view>
				<view @tap="toAbout" class="cu-item arrow">
					<view class="content"><text class="text-grey">关于</text></view>
				</view>
				<view @tap="out" class="cu-item arrow">
					<view class="content"><text class="text-grey">退出登录</text></view>
				</view>
			</view>
		</view>

		<chunLei-modal v-model="value" :mData="inputData" :type="'input'" @onConfirm="onConfirm" @cancel="cancel" :navMask="false"></chunLei-modal>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userInfo: {},
			value: false,
			inputData: {
				title: '密码',
				content: [{ title: '', content: '', type: 'password', placeholder: '请输入米雪的平板密码' }]
			}
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
		onConfirm(e) {
			if (e[0].content === '112025') {
				this.value = false;
				this.$util.navigateTo('../manageSystem/manageSystem');
			} else {
				this.$util.toast('密码不正确');
				this.inputData.content[0].content = '';
			}
		},
		cancel() {},
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
		toMoreResource() {
			this.$util.navigateTo('../moreResource/moreResource');
		},
		toManageSystem() {
			this.inputData.content[0].content = '';
			this.value = true;
		},
		toMyCollection() {
			this.$util.navigateTo('../myCollection/myCollection');
		},
		toRecharge() {
			this.$util.navigateTo('../recharge/recharge');
		},
		toAbout() {
			//#ifdef APP-PLUS
			this.$util.navigateTo('../about/about');
			//#endif
			
			//#ifndef APP-PLUS
			this.$util.toast('仅app端可用');
			//#endif
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
	padding-bottom: 70px;
}
</style>
