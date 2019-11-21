<template>
	<view>
		<view class="VerticalBox">
			<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop" style="height:calc(100vh - 375upx)">
				<view class="cu-item" :class="index == tabCur ? 'text-green cur' : ''" v-for="(item, index) in list" :key="index" @tap="TabSelect" :data-id="index">
					{{ item.name }}
				</view>
			</scroll-view>
			<scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:calc(100vh - 375upx)" :scroll-into-view="'main-' + mainCur" @scroll="VerticalMain">
				<view class="padding-top padding-lr" v-for="(item, index) in list" :key="index" :id="'main-' + index">
					<view class="cu-bar solid-bottom bg-white">
						<view class="action">
							<text class="cuIcon-title text-green"></text>
							{{ item.name }}
						</view>
					</view>
					<view class="cu-list menu-avatar">
						<view v-for="(item, index) in list2" :key="index" class="cu-item">{{item.name}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [],
			list2:[],
			tabCur: 0,
			mainCur: 0,
			verticalNavTop: 0
		};
	},
	onLoad(){
		this.selectCategory();
	},
	methods: {
		async selectCategory() {
			const res = await this.$util.request({
				requestUrl:'api/category'
			});
			console.log('查询所有类别：',res);
			
			if(res!==undefined){
				this.list = res.data.data;
			}
		},
		TabSelect(e) {
			this.tabCur = e.currentTarget.dataset.id;
			this.mainCur = e.currentTarget.dataset.id;
			this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50;
		},
		VerticalMain(e) {
			let that = this;
			let tabHeight = 0;

			for (let i = 0; i < this.list.length; i++) {
				let view = uni.createSelectorQuery().select('#main-' + i);
				view.fields(
					{
						size: true
					},
					data => {
						this.list[i].top = tabHeight;
						tabHeight = tabHeight + data.height;
						this.list[i].bottom = tabHeight;
					}
				).exec();
			}

			let scrollTop = e.detail.scrollTop + 10;
			for (let i = 0; i < this.list.length; i++) {
				if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
					this.verticalNavTop = (this.list[i].id - 1) * 50;
					this.tabCur = this.list[i].id;
					return false;
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.VerticalNav.nav {
	width: 200upx;
	white-space: initial;
}

.VerticalNav.nav .cu-item {
	width: 100%;
	text-align: center;
	background-color: #fff;
	margin: 0;
	border: none;
	height: 50px;
	position: relative;
}

.VerticalNav.nav .cu-item.cur {
	background-color: #f1f1f1;
}

.VerticalNav.nav .cu-item.cur::after {
	content: '';
	width: 8upx;
	height: 30upx;
	border-radius: 10upx 0 0 10upx;
	position: absolute;
	background-color: currentColor;
	top: 0;
	right: 0upx;
	bottom: 0;
	margin: auto;
}

.VerticalBox {
	display: flex;
}

.VerticalMain {
	background-color: #f1f1f1;
	flex: 1;
}
</style>
