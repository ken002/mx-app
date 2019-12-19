<template>
	<view class="content">
		
		<view class="list">
			<view class="tishi">若您忘记了密码，可在此重新设置新密码。</view>
			<view class="list-call">
				<input class="biaoti" type="text" v-model="account" maxlength="20" placeholder="输入账号" />
			</view>
			<view class="list-call">
				<input class="biaoti" v-model="question" type="text" maxlength="20" placeholder="请输入你的小学班主任姓名" />
			</view>
			<view class="list-call">
				<input class="biaoti" type="password" v-model="password" maxlength="20" placeholder="输入新密码" />
			</view>
			<view class="list-call">
				<input class="biaoti" type="password" v-model="passwordAgain" maxlength="20" placeholder="请再次输入密码" />
			</view>
		</view>
		<view class="dlbutton" hover-class="dlbutton-hover" @tap="bindModify">
			<text>修改密码</text>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				account:'',
				password:'',
				passwordAgain:'',
				question:'',
			}
		},
		onLoad(){
		},
		methods: {
			bindModify() {
				if(this.account===''){
					this.$util.toast('请输入账号');
					return;
				}
				if(this.question===''){
					this.$util.toast('请回答密保问题');
					return;
				}
				if(this.password===''){
					this.$util.toast('请输入密码');
					return;
				}
				if(this.passwordAgain===''){
					this.$util.toast('请再次输入密码');
					return;
				}
				if(this.password!==this.passwordAgain){
					this.$util.toast('两次密码输入不一致');
					return;
				}
				
				this.modify();
			},
			async modify(){
				const res = await this.$util.request({
					requestUrl: 'api/user',
					method: 'PUT',
					data:{
						account:this.account,
						password:this.password,
						question:this.question
					}
				});
				console.log('找回密码:', res);
				if(res){
					this.$util.toast('修改成功');
					setTimeout(() => {
						uni.navigateBack();
					}, 500);
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.tishi {
		color: #999999;
		font-size: 28upx;
		line-height: 50upx;
		margin-bottom: 50upx;
	}
    .list {
    	display: flex;
    	flex-direction: column;
    	padding-top: 50upx;
    	padding-left: 70upx;
    	padding-right: 70upx;
    }
    .list-call{
    	display: flex;
    	flex-direction: row;
    	justify-content: space-between;
    	align-items: center;
    	height: 100upx;
    	color: #333333;
    	border-bottom: 1upx solid rgba(230,230,230,1);
    }
    .list-call .img{
    	width: 40upx;
    	height: 40upx;
    }
    .list-call .biaoti{
    	flex: 1;
    	text-align: left;
    	font-size: 32upx;
    	line-height: 100upx;
    	margin-left: 16upx;
    }
	.dlbutton {
		color: #FFFFFF;
		font-size: 34upx;
		width:470upx;
		height:100upx;
		background:linear-gradient(-90deg,rgba(63,205,235,1),rgba(188,226,158,1));
		box-shadow:0upx 0upx 13upx 0upx rgba(164,217,228,0.2);
		border-radius:50upx;
		line-height: 100upx;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 100upx;
	}
	.dlbutton-hover {
		background:linear-gradient(-90deg,rgba(63,205,235,0.9),rgba(188,226,158,0.9));
	}
	.yzm {
		color: #FF7D13;
		font-size: 24upx;
		line-height: 64upx;
		padding-left: 10upx;
		padding-right: 10upx;
		width:auto;
		height:64upx;
		border:1upx solid rgba(255,131,30,1);
		border-radius: 50upx;
	}
	.yzms {
		color: #999999 !important;
		border:1upx solid #999999;
	}
</style>
