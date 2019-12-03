<template>
	<view>
		<view class="avatar-container">
			<view class="cu-avatar xl round" :style="{ 'background-image': 'url(' + userInfo.avatarUrl + ')' }"></view>
			<view class="nickname">{{ userInfo.nickName }}</view>
		</view>

		<view class="cu-list menu sm-border card-menu">
			<view @tap="toMyCollection" class="cu-item arrow">
				<view class="content">
					<text class="text-grey">我的收藏</text>
				</view>
			</view>
			<view @tap="toRecharge" class="cu-item arrow">
				<view class="content">
					<text class="text-grey">充值优惠</text>
				</view>
			</view>
			<view @tap="toPriceExplain" class="cu-item arrow">
				<view class="content">
					<text class="text-grey">价格说明</text>
				</view>
			</view>
			<view @tap="toFeedback" class="cu-item arrow">
				<view class="content">
					<text class="text-grey">反馈建议</text>
				</view>
			</view>
			<view @tap="out" class="cu-item arrow">
				<view class="content">
					<text class="text-grey">退出登录</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userInfo: {}
		};
	},
	onLoad() {
		this.userInfo = uni.getStorageSync('userInfo');
	},
	methods: {
		toMyCollection(){
			
		},
		toRecharge(){
			
		},
		toPriceExplain(){
			
		},
		toFeedback(){
			
		},
		out() {
			uni.showModal({
			    title: '提示',
			    content: '确定要退出登录',
			    success: function (res) {
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
</style>
