<template>
	<view class="content">
		<view class="header">
			<image src="../../../static/logo.png"></image>
		</view>
		
		<view class="list">
			<view class="list-call">
				<input class="biaoti" v-model="account" type="text" maxlength="20" placeholder="输入账号,务必记住该账号" />
			</view>
			<view class="list-call">
				<input class="biaoti" v-model="question" type="text" maxlength="20" placeholder="请输入你的小学班主任姓名" />
			</view>
			<view class="list-call">
				<input class="biaoti" v-model="password" type="password" maxlength="20" placeholder="登录密码" />
			</view>
			<view class="list-call">
				<input class="biaoti" v-model="passwordAgain" type="password" maxlength="20" placeholder="再次输入密码" />
			</view>
		</view>
		
		<view class="dlbutton" hover-class="dlbutton-hover" @tap="bindRegister">
			<text>注册</text>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(){
		},
		data() {
			return {
				account:'',
				password:'',
				passwordAgain:'',
				question:'',
			};
		},
		methods: {
			bindRegister(){
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
				
				this.register();
			},
			async register(){
				const res = await this.$util.request({
					requestUrl: 'api/user',
					method: 'POST',
					data:{
						account:this.account,
						password:this.password,
						question:this.question
					}
				});
				console.log('注册', res);
				if(res){
					this.$util.toast('注册成功');
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		justify-content:center;
	}
	.header {
		width:161upx;
		height:161upx;
		// background:rgba(63,205,235,1);
		box-shadow:0upx 12upx 13upx 0upx rgba(63,205,235,0.47);
		border-radius:50%;
		margin-top: 30upx;
		margin-left: auto;
		margin-right: auto;
	}
	.header image{
		width:161upx;
		height:161upx;
		border-radius:50%;
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
	.yzm {
		color: #FF7D13;
		font-size: 24upx;
		line-height: 64upx;
		padding-left: 10upx;
		padding-right: 10upx;
		width:auto;
		height:64upx;
		border:1upx solid #FFA800;
		border-radius: 50upx;
	}
	.yzms {
		color: #999999 !important;
		border:1upx solid #999999;
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
	.xieyi{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
		margin-top: 80upx;
		color: #FFA800;
		text-align: center;
		height: 40upx;
		line-height: 40upx;
	}
	.xieyi image{
		width: 40upx;
		height: 40upx;
	}
</style>
