<template>
	<view>
		<scroll-view @scroll="scroll" scroll-y="true" :scroll-top="scrollTop" class="scroll-Y">
			<view class="header">
				<view class="header-brand" @click="toPage('index')">
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
						<text>精密体检咨询</text>
					</view>
				</view>
			</view>
			<view class="pageName">
				<view class="main-title">
					Privacy Policy
				</view>
				<view class="sub-title">
					<text>ホーム &nbsp; / &nbsp;Privacy Policy</text>
				</view>
			</view>
			<view class="form">
				<view class="form-label">
					本公司对个人信息将按照个人信息保护法或其他法令等予以妥善保管
				</view>
				<view class="form-label">
					有关个人信息保护的同意书
				</view>
				<view class="form-label">
					对本公司在提供服务过程中获取的您的个人信息，本公司将按照个人信息保护法或其他法令予以妥善保管。请您务必认真阅读以下内容后再签字。
				</view>
				<view class="form-label">
					<view>本同意书包括以下内容：</view>
					<view>1．个人信息管理：</view>
					<view>您所提供的个人信息，将由以下人员负责管理。</view>
					<view>负责管理的公司：株式会社日本国际医疗中心</view>
					<view>联系人：总务部经理</view>
					<view>电话号码：092-791-8578</view>
					<view>邮政编码：810-0001</view>
					<view>地 址：福岡市中央区天神2-13-18　天神ホワイトビル6階</view>
					<view>联系电话：info@j-imc.co.jp</view>
					<view>接待时间：9：00～17：00（周一至周五）</view>
				</view>
				<view class="form-label">
					<view>２．使用个人信息的目的</view>
					<view>本公司将获取的个人信息主要用于本公司在海外开展的以下【１】所述业务范围内，并仅限于以下【2】所述使用目的。除法令另有规定外，将不会用于本同意书所述目的之外，为此将采取必要措施。</view>
				</view>
				<view class="form-label">
					<view>【１】业务内容</view>
					<view>① 医疗咨询业务及医疗机构的代理预订服务业务</view>
					<view>② 紧急运送遭受疾病、灾害、交通事故等的人员的援助服务</view>
					<view>③ 对在道路上发生故障的机动车、事故车等提供救援及拖移服务</view>
					<view>④ 交通工具、住宿设施、餐馆、演唱会等特别活动等的代理预订服务业务</view>
					<view>⑤ 购物、房屋维修、搬家、家政服务等的服务业务</view>
					<view>⑥ 按旅行业法的规定开展旅行业以及有关旅行的综合咨询服务业务</view>
					<view>⑦ 上述各项业务所附带的所有业务</view>
				</view>
				<view class="form-label">
					<view>【２】使用目的</view>
					<view>① 为进行与上述业务相关的合理业务使用个人信息， 比如，提供所申请的服务、进行各种联络、 处理账单及结算、接待询问及委托等</view>
					<view>② 为开展与上述业务相关的工作使用个人信息，比如， 告知商品及服务信息、提供情报、进行问卷调查、数据积累及分析</view>
					<view>③ 为妥善且圆满执行受其他企业委托的业务</view>
				</view>
				<view class="form-label">
					<view>3. 关于提供给第三方</view>
					<view>除以下情况外，本公司不会在未经您同意的情况下，擅自将您的个人信息提供给第三方。</view>
					<view>①按个人信息保护法的规定使用时</view>
					<view>②在本公司执行业务所必要的范围内，提供给包括当地业务合作公司在内的受托方时</view>
					<view>③与本公司的集团公司、合作企业共同使用时</view>
				</view>
				<view class="form-label">
					<view>4. 关于委托</view>
					<view>本公司有可能在处理业务时向已与本公司签订保密协议的合作公司进行业务委托。</view>
				</view>
				<view class="form-label">
					<view>5. 敏感信息的处理</view>
					<view>本公司绝对不会将患者的健康状态及病例等敏感信息擅自获取、利用或提供给第三方。个人信息保护法或其他法令、指导方针另有规定时除外。</view>
					<view>（注）敏感信息为，《有关金融领域的个人信息保护指导方针》第6条所指的隐私信息。</view>
				</view>
				<view class="form-label">
					<view>６．关于公开个人信息</view>
					<view>在您要求本公司对您已提供给本公司的个人信息进行公开、修改、追加或删除、停止使用、清除及停止提供给第三方使用时，本公司将采取相应措施。</view>
				</view>
				<view class="hr">

				</view>
				<view class="form-label">
					当社が取得したお客様の個人情報については、個人情報保護法その他の法令等にもとづき適切に管理いたします。
				</view>
				<view class="form-label">
					記
				</view>
				<view class="form-label">
					<view>1. 個人情報の管理について</view>
					<view>ご提供いただきます個人情報の管理については、下記の者が責任を負います。</view>
					<view>事業者：株式会社日本国際医療センター</view>
					<view>管理者： 総務責任者</view>
					<view>連絡先 ： 092-791-8578</view>
					<view>所在地 ：福岡市中央区天神2-13-18　天神ホワイトビル6階</view>
					<view>電話：092-791-8578</view>
					<view>E-mail: info@j-imc.co.jp</view>
					<view>受付時間：9：00～17：00（月～金）</view>
				</view>
				<view class="form-label">
					<view>2. 個人情報の利用目的</view>
					<view>弊社では、取得した個人情報を、弊社が主として海外で行う下記【１】に記す業務の範囲内で、下記【２】に記す利用目的に限って利用します。</view>
					<view>法令で定める場合を除き、目的外には利用しないこととし、そのために必要な措置を講じます。</view>
				</view>
				<view class="form-label">
					<view>【１】業務内容</view>
					<view>① 医療に関するコンサルティング業務および医療機関に対する予約代行業務</view>
					<view>② 疾病、災害、交通事故等を受けた者に対しての緊急移送等の援助サービス</view>
					<view>③ 道路上における故障車、事故車等の救援および移動の受託</view>
					<view>④ 交通機関、宿泊施設、飲食店、コンサート等の催事等の予約代行業務</view>
					<view>⑤ 物品購入、住宅営繕、引っ越し、家事手伝いの受託業務</view>
					<view>⑥ 旅行業法に基づく旅行業、ならびに旅行に関する総合コンサルティング業務</view>
					<view>⑦ 前各号に付帯する一切の業務</view>
				</view>
				<view class="form-label">
					<view>【２】利用目的</view>
					<view>① 上記の各業務に関し、お申込みいただいたサービスの実施、各種のご連絡、請求・決済、お問い合わせ・ご依頼への対応等適正な業務を遂行するため</view>
					<view>② 上記の各業務の事業に関し、商品・サービスのお知らせ、情報提供、アンケートの調査・データ集積・分析を実施するため</view>
					<view>③ 他の事業者等から委託された業務を適切かつ円滑に遂行するため</view>
				</view>
				<view class="form-label">
					<view>3. 第三者提供について</view>
					<view>弊社は、次の場合を除き、ご本人の同意なく第三者に個人情報を提供することはありません。</view>
					<view>① 個人情報保護法の規定による場合</view>
					<view>② 弊社の業務遂行上必要な範囲で、現地アシスタンス会社を含む委託先に提供する場合</view>
					<view>③ 弊社のグループ会社・提携先企業との間で共同利用を行う場合</view>
				</view>
				<view class="form-label">
					<view>4. 委託について</view>
					<view>当社では、業務処理上当社が選定し秘密保持契約を締結した協力会社に業務を委託する場合があります。</view>
				</view>
				<view class="form-label">
					<view>5. センシティブ情報のお取扱い</view>
					<view>弊社は、健康状態・病歴等のセンシティブ情報を、個人情報保護法その他の法令・ガイドラインに規定する場合を除くほか、 取得、利用または第三者提供を行いません。</view>
					<view>（注）センシティブ情報とは、「金融分野における個人情報保護に関するガイドライン第6条」に定める機微情報を言います。</view>
				</view>
				<view class="form-label">
					<view>6. 個人情報の開示等について</view>
					<view>当社にご提供いただいた個人情報の開示、内容の訂正、追加または削除、利用の停止、消去および第三者への提供の停止の求めがあった場合には、対応させて頂きます</view>
				</view>
				<view class="hr">
					
				</view>
			</view>
			<view @tap="goTop" class="backTop" v-if="showBackTop">
				<fa-icon type="arrow-up" size="35" color="#fff"></fa-icon>
			</view>
		</scroll-view>
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
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				collClass: 'collapse collapseHide'
			}
		},
		computed: {
			showBackTop() {
				return this.old.scrollTop >= 300 ? true : false
			}
		},
		methods: {
			toPage(name) {
				uni.redirectTo({
					url: `../${name}/${name}`
				})
			},
			goTop(e) {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				this.old.scrollTop = 0
			},
			scroll(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			toggleBtnCollapse() {
				const liCon = this.$refs.liCon
				if (this.collClass === 'collapse collapseHide') {
					this.collClass = 'collapse collapseShow'
				} else {
					this.collClass = 'collapse collapseHide'
				}
			},
		}
	}
</script>

<style>
	.pageName {
		margin-bottom: 50px;
	}

	.form-label {
		margin: 25px 0 25px 0;
	}
</style>
