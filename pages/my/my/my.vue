<template>
	<view>
		<view class="avatar-container">
			<view class="cu-avatar xl round" :style="{ 'background-image': 'url(' + userInfo.avatarUrl + ')' }"></view>
			<view class="nickname">{{ userInfo.nickName }}</view>
		</view>

		<view class="items">
			<view class="cu-list menu sm-border card-menu">
				<view @tap="toMyCollection" class="cu-item arrow">
					<view class="content"><text class="text-grey">我的收藏</text></view>
				</view>
				<view @tap="toRecharge" class="cu-item arrow">
					<view class="content"><text class="text-grey">充值优惠</text></view>
				</view>
				<view @tap="toMoreResource" class="cu-item arrow">
					<view class="content"><text class="text-grey">更多款式</text></view>
				</view>
				<!-- #ifdef APP-PLUS -->
				<view @tap="toAbout" class="cu-item arrow">
					<view class="content"><text class="text-grey">关于</text></view>
				</view>
				<!-- #endif -->
				<view @tap="toManageSystem" class="cu-item arrow">
					<view class="content"><text class="text-grey">后台管理</text></view>
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
				content: [
					{ title: '', content: '', type: 'password', placeholder: '请输入平板密码' }
				]
			}
		};
	},
	onPullDownRefresh() {
		setTimeout(() => {
			uni.stopPullDownRefresh();
		}, 500);
	},
	onLoad() {
		this.userInfo = uni.getStorageSync('userInfo');
		if (this.userInfo === null || this.userInfo === '') {
			uni.reLaunch({
				url: '../login/login'
			});
		}
	},
	methods: {
		onConfirm(e) {
			if(e[0].content==='112025'){
				this.value=false;
				this.$util.navigateTo('../manageSystem/manageSystem');
			}else{
				this.$util.toast('密码不正确');
				this.inputData.content[0].content='';
			}
		},
		cancel() {
			
		},
		toMoreResource() {
			this.$util.navigateTo('../moreResource/moreResource');
		},
		toManageSystem() {
			this.inputData.content[0].content='';
			this.value=true;
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
				success: function(res) {
					if (res.confirm) {
						uni.removeStorageSync('userInfo');
						uni.reLaunch({
							url: '../login/login'
						});
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
