<template>
	<view class="content">
		<view class="header">
			<image src="../../../static/logo.png"></image>
		</view>
		
		<view class="list">
			<view class="list-call">
				<input class="biaoti" v-model="account" maxlength="20" type="text" placeholder="输入账号" />
			</view>
			<view class="list-call">
				<input class="biaoti" v-model="password" type="password" maxlength="20" placeholder="输入密码" password="true" />
			</view>
			
		</view>
		
		<view class="dlbutton" hover-class="dlbutton-hover" @tap="bindLogin()">
			<text>登录</text>
		</view>
		
		<view class="xieyi">
			<navigator url="../retrievePassword/retrievePassword" open-type="navigate">忘记密码</navigator>
			<text>|</text>
			<navigator url="../register/register" open-type="navigate">注册账号</navigator>
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
				password:''
			};
		},
		methods: {
			bindLogin(){
				if(this.account===''){
					this.$util.toast('请输入账号');
					return;
				}
				if(this.password===''){
					this.$util.toast('请输入密码');
					return;
				}
				
				this.login();
			},
			async login(){
				const res = await this.$util.request({
					requestUrl: 'api/userByAccountAndPass',
					data:{
						account:this.account,
						password:this.password
					}
				});
				console.log('登录', res);
				if(res){
					uni.setStorageSync('userInfo', res.data.data);
					
					this.$util.toast('登录成功');
					
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
		justify-content:center;
	}
	.header {
		width:161upx;
		height:161upx;
		/* background:rgba(63,205,235,1); */
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
	.xieyi text{
		font-size: 24upx;
		margin-left: 15upx;
		margin-right: 15upx;
	}
</style>
