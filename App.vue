<script>
export default {
	onLaunch: function() {
		console.log('App Launch');

		// #ifdef APP-PLUS
		this.checkVersion();
		// #endif
	},
	onShow: function() {},
	onHide: function() {},
	methods: {
		judgeUpgrade(newVersionArr, versionArr) {
			//判断是否升级
			if (Number(newVersionArr[0]) > Number(versionArr[0])) {
				return true;
			} else if (Number(newVersionArr[0]) === Number(versionArr[0])) {
				if (Number(newVersionArr[1]) > Number(versionArr[1])) {
					return true;
				} else if (Number(newVersionArr[1]) === Number(versionArr[1])) {
					if (Number(newVersionArr[2]) > Number(versionArr[2])) {
						return true;
					} else {
						return false;
					}
				} else {
					return false;
				}
			} else {
				return false;
			}
		},
		async checkVersion() {
			var me = this;
			const systemType = plus.os.name; //系统类型
			var currVersion = plus.runtime.version; //当前版本
			currVersion=currVersion.split('.');
			var platform = 1;
			if (systemType === 'iOS') {
				platform = 0;
			}
			const res = await this.$util.request({
				requestUrl: 'api/versions',
				data: {
					checkVersion: true,
					platform: platform
				}
			});
			console.log('查询最新版本：', res);

			if (res) {
				if (res.data.data[0].length === 1) {
					const newVersionObj = res.data.data[0][0];
					var appVersion = newVersionObj.realAppVersion.split('.');
					console.log(appVersion);
					console.log(currVersion);
					var confirmUp=this.judgeUpgrade(appVersion,currVersion);
					if(confirmUp){
						if (newVersionObj.allUpdate===1) {
							uni.showModal({
								title: '升级',
								content: '检测到有新版本，是否更新',
								success: function(res) {
									if (res.confirm) {
										plus.runtime.openURL(newVersionObj.downloadUrl);
									}
								}
							});
						} else {
							me.downLoad(newVersionObj.downloadUrl);
						}
					}
				}
			}
		},
		downLoad(url) {
			var me = this;
			uni.downloadFile({
				url,
				success: downloadResult => {
					if (downloadResult.statusCode === 200) {
						plus.runtime.install(
							downloadResult.tempFilePath,
							{
								force: false
							},
							function() {
								uni.showModal({
									title: '升级',
									content: '新版本已更新，重启生效，是否立即重启',
									success: function(res) {
										if (res.confirm) {
											plus.runtime.restart();
										}
									}
								});
							},
							function(e) {
								console.log(e);
							}
						);
					}
				},
				fail: e => {}
			});
		}
	}
};
</script>

<style>
/*每个页面公共css */
@import 'common/uni.css';
@import 'colorui/main.css';
@import 'colorui/icon.css';
@import 'common/util.css';
page {
	height: 100%;
}
</style>
