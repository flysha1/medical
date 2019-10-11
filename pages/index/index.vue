<template>
	<view class="content">
		<view class="header">
			<view class="header-brand">
				<image class="logo" src="/static/logo.png"></image>
			</view>
			<button class="btn-collapse" @click="toggleBtnCollapse">
				<fa-icon type="bars" size="20"></fa-icon>
			</button>
			<view :class="collClass">
				<view class="collapse-item" @click="toPage('page1')">
					<text>医疗咨询</text>
				</view>
				<view class="collapse-item" @click="toPage('page2')">
					<text>处方药询</text>
				</view>
				<view class="collapse-item" @click="toPage('page3')">
					<text>赴日精密体检</text>
				</view>
			</view>
		</view>
		<view class="callout-section">
			<view class="overlay">
				<view class="container">
					<view class="h1">医疗咨询 ｜ 处方药询</view>
					<view class="p">日本での治療方法や、日本の薬についての相談などを承ります。お気軽にお問合せ下さい。</view>
					<view class="btn-area">
						<button class="btn" @click="toPage('page1')">医疗咨询</button>
						<button class="btn" @click="toPage('page2')">处方药询</button>
					</view>
					<view class="btn-area">
						<button class="btn" @click="toPage('page3')">赴日精密体检</button>
					</view>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="h1">
				联系我们
			</view>
			<view class="contact-list">
				<view class="contact-item">
					<fa-icon type="phone" size="45" color="#395ca3"></fa-icon>
					<view class="contact-item-message">
						<view class="contact-item-message-label">联系电话</view>
						<view>
							+81 92-791-8578
						</view>
					</view>
				</view>
				<view class="contact-item">
					<fa-icon type="clock-o" size="45" color="#395ca3"></fa-icon>
					<view class="contact-item-message">
						<view class="contact-item-message-label">工作时间（北京时间）</view>
						<view>
							周一〜周五 08:00-17:00
						</view>
					</view>
				</view>
				<view class="contact-item">
					<fa-icon type="envelope " size="45" color="#395ca3"></fa-icon>
					<view class="contact-item-message">
						<view class="contact-item-message-label">发送邮件</view>
						<view>
							info@j-imc.com
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	export default {
		components: {
			faIcon
		},
		data() {
			return {
				collClass: 'collapse collapseHide'
			}
		},
		onLoad() {

		},
		methods: {
			toPage(name){
				uni.redirectTo({
				    url: `../${name}/${name}`
				})
			},
			toggleBtnCollapse() {
				const liCon = this.$refs.liCon
				if (this.collClass === 'collapse collapseHide') {
					this.collClass = 'collapse collapseShow'
				} else {
					this.collClass = 'collapse collapseHide'
				}
			}
		}
	}
</script>

<style>
	.callout-section {
		background: no-repeat fixed 0 0 / cover rgba(0, 0, 0, 0.5);
		height: 100%;
		margin: 0;
		overflow: hidden;
		padding: 0;
		width: 100%;
	}

	.overlay {
		height: 100%;
		padding: 40px 0 40px;
		position: relative;
		width: 100%;
	}

	.overlay>.container {
		padding-right: 15px;
		padding-left: 15px;
		margin-right: auto;
		margin-left: auto;
	}

	.overlay>.container>.h1 {
		font-size: 28px;
		font-weight: 400;
		color: #ffffff;
		letter-spacing: 0px;
		margin: -5px 0 17px;
		text-align: center;
	}

	.overlay>.container>.p {
		color: #ffffff;
		font-family: 'Open Sans';
		font-weight: 400;
		font-size: 16px;
		letter-spacing: 0.2px;
		line-height: 25px;
		margin: 0;
		text-align: center;
	}

	.btn-area {
		display: flex;
		justify-content: center;
	}

	.btn-area>.btn {
		margin: 10px;
	}

	.footer>.h1 {
		text-align: center;
		font-size: 28px;
		margin: 25px 0;
	}

	.contact-list {
		padding: 0 20px;
	}

	.contact-item {
		display: flex;
		margin-bottom: 10px;
	}

	.contact-item-message {
		margin-left: 20px;
		font-size: 18px;
		color: #727272;
	}

	.contact-item-message-label {
		font-size: 14px;
	}
	.button-text{
		font-size: 12px;
	}
	.btn{
		font-size: 20px;
	}
</style>
