<template>
	<view class="flow-box" :style="'height: ' + loadingTop + 'px'">
		<view
			class="item"
			:class="left[index] == 1 ? 'left' : ''"
			:style="'top:' + top[index] + 'px;background-color:#fff;'"
			v-for="(item, index) in newList"
			:key="index"
			:data-index="index"
			@click="choose"
		>
			<view class="pic fall-item-container">
				<image class="item-image" src="../../../static/avatar2.jpg"></image>
				<image @tap="preview(item.image)" class="image item-image" mode="aspectFill" :src="item.image"></image>
			</view>
			<view class="content">
				<text>{{ item.name }}</text>
			</view>
		</view>
		<view class="loading" v-show="loading" :style="'top: ' + loadingTop + 'px'">
			<image src="/static/nairenk-waterfall-flow/loading.gif" style="width: 80upx; height: 80upx;"></image>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		// 数据列表
		list: {
			type: Array,
			default() {
				return [];
			}
		},
		// 加载动画
		loading: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			mark: 0,
			newList: [],
			boxHeight: [],
			top: [],
			left: [],
			loadingTop: 0
		};
	},
	watch: {
		// 数据
		list: function(newVal, oldVal) {
			this.mark = oldVal.length;
			if (newVal != oldVal) {
				this.newList = this.list;
				this.$nextTick(function() {
					setTimeout(() => {
						this.waterFall();
					}, 120);
				});
			}
		}
	},
	methods: {
		preview(image) {
			uni.previewImage({
				urls: [image]
			});
		},
		// 瀑布流定位
		waterFall() {
			const query = uni.createSelectorQuery().in(this);
			query
				.selectAll('.flow-box .item')
				.boundingClientRect(res => {
					let len = this.newList.length;
					let height = 0;
					for (let i = this.mark; i < len; i++) {
						height = res[i].height;
						if (i < 2) {
							this.$set(this.newList[i], 'top', 0);
							this.$set(this.newList[i], 'left', i);
							this.boxHeight.push(height);
							this.top.push(0);
							this.left.push(i);
						} else {
							let minHeight = this.boxHeight[0];
							let index = 0;
							if (minHeight > this.boxHeight[1]) {
								minHeight = this.boxHeight[1];
								index = 1;
							}
							this.boxHeight[index] = minHeight + height + 5;
							this.top.push(minHeight + 5);
							this.left.push(index);
							this.$set(this.newList[i], 'top', minHeight + 5);
							this.$set(this.newList[i], 'left', index);
							this.loadingTop = this.boxHeight[index];
						}
					}
				})
				.exec();
		},
		// 选中
		choose(e) {
			let index = e.currentTarget.dataset.index;
			this.$emit('click', this.newList[index]);
		}
	}
};
</script>

<style lang="scss" scoped>
.flow-box {
	position: relative;
	color: #1a1a1a;
	padding-bottom: var(--window-bottom);
}
.flow-box .item {
	position: absolute;
	left: 10upx;
	width: calc(50% - 20upx);
	border: 1upx solid #f9f9f9;
	background: #fff;
}
.flow-box .left {
	left: 380upx;
}
.flow-box .pic {
	background: #f6f6f6;
}
.flow-box .content {
	padding: 20upx;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.flow-box .content text {
	width: 100%;
	font-size: 24upx;
	margin-bottom: 20upx;
}
.flow-box .user {
	display: flex;
	width: 220upx;
	overflow: hidden;
	font-size: 26upx;
	color: #666;
}
.loading {
	position: absolute;
	width: 100%;
	text-align: center;
	padding: 20upx 0;
}
.fall-item-container {
	position: relative;
	height: 200px;
	.item-image {
		border-radius: 6px 6px 0 0;
		position: absolute;
		width: 100%;
		height: 100%;
	}
}
</style>
