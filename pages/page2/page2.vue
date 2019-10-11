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
					<view class="collapse-item collapse-item-active">
						<text>处方药询</text>
					</view>
					<view class="collapse-item" @click="toPage('page3')">
						<text>赴日精密体检</text>
					</view>
				</view>
			</view>
			<view class="pageName">
				<view class="main-title">
					处方药询
				</view>
				<view class="sub-title">
					<text>ホーム &nbsp; / &nbsp;处方药询</text>
				</view>
			</view>
			<view class="beforeInput">
				<image src="../../static/WS000076.jpg" class="main-image"></image>
				<view class="beforeInput-info">
					<view class="beforeInput-info-item">
						1）请如实填写以下事项后，点击【发送】
					</view>
					<view class="beforeInput-info-item">
						2）原则上，负责人会在接到患者咨询申请后24小时内尽快给出回复。(周六、周日和日本节假日除外)
					</view>

					<view class="beforeInput-info-item">
						<text class="stressIcon">*</text>
						<text class="text-underline">印是必须填写的项目（如有未填写项目，则无法送信）</text>
					</view>
					<view class="hr">

					</view>
				</view>
			</view>
			<view class="form">
				<view class="form-title">
					【基本信息】
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[1]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">姓名</text>
					</view>
					<view class="form-input-wrap">
						<fa-icon type="user" size="22" color="#395ca3" class="form-input-icon"></fa-icon>
						<input class="form-input" type="text" v-model="form['1-1'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[2]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">姓名（拼音）</text>
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['1-2'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[3]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">微信号</text>
					</view>
					<view class="form-input-wrap">
						<fa-icon type="wechat" size="22" color="#395ca3" class="form-input-icon"></fa-icon>
						<input class="form-input" type="text" v-model="form['1-3'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[4]</text>
						<text class="form-label-text">邮政编码</text>
					</view>
					<view>
						<input class="form-input" type="number" v-model="form['1-4'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[5]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">邮寄地址</text>
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['1-5'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[6]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">电话号码</text>
					</view>
					<view class="form-input-wrap">
						<fa-icon type="phone" size="22" color="#395ca3" class="form-input-icon"></fa-icon>
						<input class="form-input" type="number" v-model="form['1-6'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[7]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">性别</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'1-7')" class="radio-group">
							<label v-for="(item, index) in radios.sexs" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['1-7'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[8]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">生日</text>
					</view>
					<view class="form-input-wrap">
						<fa-icon type="calendar" size="22" color="#395ca3" class="form-input-icon"></fa-icon>
						<picker mode="date" :value="birthday" :start="startDate" :end="endDate" @change="birthdayChange">
							<input class="form-input" type="text" :value="birthday" :disabled="true" />
						</picker>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[9]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">年龄</text>
					</view>
					<view>
						<input class="form-input" type="number" v-model="form['1-9'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[10]</text>
						<text class="form-label-text">您对药物/食物是否有过过敏症状？</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'2-1')" class="radio-group">
							<label v-for="(item, index) in radios.flag" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['2-1'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
					<view class="form-label">
						⇒如有，请将药物/食物名称和出现过敏的大概时间填写于此
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['2-2'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[11]</text>
						<text class="form-label-text">到目前为止，在您服用药物后是否出现过过敏之外的其他副作用？</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'2-3')" class="radio-group">
							<label v-for="(item, index) in radios.flag" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['2-3'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
					<view class="form-label">
						⇒如有，请将该药物名称填写于此
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['2-4'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[12]</text>
						<text class="form-label-text">您有使用保健品或营养品吗？</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'2-')" class="radio-group">
							<label v-for="(item, index) in radios.flag" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['2-5'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
					<view class="form-label">
						⇒回答【有】的，请详细填写名称、作用等。
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['2-6'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[13]</text>
						<text class="form-label-text">您吸烟吗？</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'2-7')" class="radio-group">
							<label v-for="(item, index) in radios.isSmoke" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['2-7'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
					<view class="form-label">
						⇒回答【吸烟】的，请填写一天吸烟多少支。
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['2-8'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[14]</text>
						<text class="form-label-text">您饮酒吗？</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'2-9')" class="radio-group">
							<label v-for="(item, index) in radios.isDrink" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['2-9'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[15]</text>
						<text class="form-label-text">仅限女性　是否有怀孕？</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'2-10')" class="radio-group">
							<label v-for="(item, index) in radios.isPregnant" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['2-10'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
					<view class="form-label">
						⇒回答【有】的，请详细填写第几周。
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['2-11'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[16]</text>
						<text class="form-label-text">仅限女性　您现在是在哺乳期吗？</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'2-12')" class="radio-group">
							<label v-for="(item, index) in radios.isLactation" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['2-12'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[17]</text>
						<text class="form-label-text">疾病名称（务必准确，建议参考诊断书填写）</text>
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['2-13'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[18]</text>
						<text class="form-label-text">请准确填写现在使用中的药物名称</text>
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['2-14'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[19]</text>
						<text class="form-label-text">请上传诊断书</text>
					</view>
					<view>
						<button @click="showChooseFile">请选择文件</button>
						<view class="form-label" v-if="showFileName">
							<view class="file-item" v-for="(item,index) in files" :key="index">
								{{item.name}}
								<fa-icon type="trash" size="28" color="#395ca3" :style="{float:'right'}" class="form-selectfile-icon" @click="deleteFile(index)"></fa-icon>
							</view>
						</view>
						<view class="imgs" v-if="showFileImg" :style="{display:'flex',padding:'10px'}">
							<view class="file-item" v-for="(item,index) in imgs" :key="index">
								<image :src="item.path" style="width: 200px; height: 200px;" :style="{marginRight:'20px'}" />
								<fa-icon type="trash" size="28" color="#395ca3" :style="{float:'right'}" class="form-selectfile-icon" @click="deleteImg(index)"></fa-icon>
							</view>
						</view>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[20]</text>
						<text class="form-label-text">如有其他追加事宜，请在此处填写</text>
					</view>
					<view>
						<textarea class="form-input form-input-textarea" type="text" v-model="form['2-16'].txt" />
						</view>
				</view>
				<view class="form-label">
					<text class="form-label-text">■关于个人信息保护</text>
					<text class="form-label-text text-inline">
						在使用本表格时，您必须同意、
					</text>
					<navigator url="../policy/policy" class="a_link">「个人信息保护方针」</navigator>
					<text class="form-label-text text-inline">
						如果您同意，请在上述“同意”的地方点击划√之后再使用。
					</text>
				</view>
				<view class="form-label">
					<label class="form-label-subtext" @click="changeIsAgree">
					    <checkbox color="#395ca3"/>同意
					</label>
				</view>
				<view class="form-submit">
					<button class="submit-btn" @click="submit" :disabled="!isAgree">送信</button>
				</view>
			</view>
			
			<view @tap="goTop" class="backTop" v-if="showBackTop">
				<fa-icon type="arrow-up" size="35" color="#fff"></fa-icon>
			</view>
		</scroll-view>
		<uni-popup ref="popup" type="center" class="popup">
		     <view>{{popupText}}</view>
		</uni-popup>
		<uni-popup ref="choosefile" type="bottom" class="popup">
		     <view @click="chooseLoaclFile" class="choosefile-item"><fa-icon type="file" size="20" class="choosefile-icon" color="#395ca3" :style="{marginRight:'10px'}"/>本地文件</view>
			 <view @click="chooseLoaclImage('camera')" class="choosefile-item"><fa-icon type="camera" size="20" class="choosefile-icon" color="#395ca3" :style="{marginRight:'6px'}"/>拍照</view>
			 <view @click="chooseLoaclImage('album')" class="choosefile-item"><fa-icon type="ellipsis-h" size="20" class="choosefile-icon" color="#395ca3" :style="{marginRight:'10px'}"/>浏览图片</view>
		</uni-popup>
	</view>
</template>

<script>
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components: {
			faIcon,
			uniPopup
		},
		data() {
			return {
				submitRes:'',
				showFileName:false,
				showFileImg:false,
				imgs:[],
				files:[],
				imgSrc:'',
				fileName:'',
				isAgree:false,
				birthday: null,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				collClass: 'collapse collapseHide',
				popupText:'',
				form: {
					'1-1':{label:'姓名',txt:'',isNeed:true},
					'1-2':{label:'姓名（拼音）',txt:'',isNeed:true},
					'1-3':{label:'微信号',txt:'',isNeed:true},
					'1-4':{txt:''},
					'1-5':{label:'邮寄地址',txt:'',isNeed:true},
					'1-6':{label:'电话号码',txt:'',isNeed:true},
					'1-7':{label:'性别',value:'M'},
					'1-8':{label:'生日',txt:'',isNeed:true},
					'1-9':{label:'年龄',txt:'',isNeed:true},
					'2-1':{value:'N'},
					'2-2':{txt:''},
					'2-3':{value:'N'},
					'2-4':{txt:''},
					'2-5':{value:'N'},
					'2-6':{txt:''},
					'2-7':{value:'N'},
					'2-8':{txt:''},
					'2-9':{value:'N'},
					'2-10':{value:'N'},
					'2-11':{txt:''},
					'2-12':{value:'N'},
					'2-13':{txt:''},
					'2-14':{txt:''},
					'2-15':{txt:''},
					'2-16':{txt:''}
				},
				radios: {
					flag: [{
						name: '没有',
						value: 'N'
					}, {
						name: '有',
						value: 'Y'
					}],
					isSmoke: [{
						name: '不吸',
						value: 'N'
					}, {
						name: '吸烟',
						value: 'Y'
					}],
					isDrink: [{
						name: '不喝',
						value: 'N'
					}, {
						name: '每天',
						value: 'D'
					}, {
						name: '偶尔',
						value: 'S'
					}],
					isPregnant: [{
						name: '没有',
						value: 'N'
					}, {
						name: '有',
						value: 'Y'
					}, {
						name: '不知道',
						value: 'D'
					}],
					isLactation: [{
						name: '不是',
						value: 'N'
					}, {
						name: '是',
						value: 'Y'
					}],
					sexs: [{
						name: '男',
						value: 'M'
					}, {
						name: '女',
						value: 'F'
					}]
				}
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			},
			showBackTop() {
				return this.old.scrollTop >= 300 ? true : false
			}
		},
		methods: {
			deleteFile(index){
				this.files.splice(index,1)
			},
			deleteImg(index){
				this.imgs.splice(index,1)
			},
			closePopup(){
			    this.$refs.popup.close()
			},
			changeIsAgree(){
				this.isAgree=!this.isAgree
			},
			submit(){
				let _this = this
				let submitFlag = false
				for (let i in _this.form) {
					if(_this.form[i].isNeed){
						if(_this.form[i].txt===''){
							_this.popupText = _this.form[i].label+'不能为空！'
							_this.$refs.popup.open()
							break
						}else{
							if(i==='1-9') {
								submitFlag = true
								break
							}
						}
					}
				}
				if(submitFlag){
					let param = {group:'q2',anser:[],fileName:[]} 
					for(let i in _this.form){
						if(_this.form[i].value!==undefined){
							param.anser.push({step:i,value:_this.form[i].value})
						}else{
							param.anser.push({step:i,txt:_this.form[i].txt})
						}
					}
					if(_this.imgs.length>0){
						let uploadArr = []
						uni.showLoading({
							mask:true,
						    title: '文件上传中'
						});
						_this.imgs.forEach(e=>{
							uploadArr.push(new Promise(function(resolve,reject){
								uni.uploadFile({
								    url: 'https://www.shengkunhealth.com/med/up',
								    filePath: e.path,
								    name: 'file',
								        success: (res) => {
										let data = JSON.parse(res.data)
										param.fileName.push(data.fileName)
										resolve('OK')
								    }
								})	
							})
						)})
						
						Promise.all(uploadArr).then(
							res=>{
								param.fileName = param.fileName.join(",")
								uni.request({
									method:'POST',
								    url: 'https://www.shengkunhealth.com/med/post', //仅为示例，并非真实接口地址。
								    data: param,
								    header: {
								        'content-type':'application/json'
								    },
								    success: (res) => {
										uni.hideLoading()
										uni.showToast({
										    title: '提交成功',
											duration: 2000
										});
								    }
								});	
							}
						)
					}else{
						let uploadArr = []
						uni.showLoading({
							mask:true,
						    title: '文件上传中'
						});
						_this.files.forEach(e=>{
							uploadArr.push(new Promise(function(resolve,reject){
								uni.uploadFile({
								    url: 'https://www.shengkunhealth.com/med/up',
								    filePath: e.path,
								    name: 'file',
								        success: (res) => {
										let data = JSON.parse(res.data)
										param.fileName.push(data.fileName)
										resolve('OK')
								    }
								})	
							})
						)})
						
						Promise.all(uploadArr).then(
							res=>{
								param.fileName = param.fileName.join(",")
								uni.request({
									method:'POST',
								    url: 'https://www.shengkunhealth.com/med/post', //仅为示例，并非真实接口地址。
								    data: param,
								    header: {
								        'content-type':'application/json'
								    },
								    success: (res) => {
										uni.hideLoading()
										if(res.statusCode===200){
											uni.showToast({
											    title: '提交成功',
												duration: 2000
											});
										}else{
											uni.showToast({
												icon:'none',
											    title: '提交失败',
												duration: 2000
											});
										}
								    }
								});	
							}
						)
					}
				}
			},
			birthdayChange(e) {
				let year = new Date()
				this.form['1-8'].txt = this.birthday = e.target.value
				this.form['1-9'].txt = year.getFullYear()-parseInt(this.birthday.slice(0,5))
			},
			toPage(name) {
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
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			radioChange(e, name) {
				this.form[name].value = e.target.value
			},
			showChooseFile(){
				this.$refs.choosefile.open()
			},
			chooseLoaclFile(){
				let _this = this
				_this.imgs = []
				_this.files = []
				wx.chooseMessageFile({
				    count: 5, //默认9
				    type: 'file',
				    success: function (res) {
						_this.showFileImg = false
						_this.files = res.tempFiles
						_this.showFileName = true
				    }
				});
				_this.$refs.choosefile.close()
			},
			chooseLoaclImage(e){
				let _this = this
				_this.imgs = []
				_this.files = []
				uni.chooseImage({
				    count: 5, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: [e],
				    success: function (res) {
						_this.showFileName = false
						_this.imgs = res.tempFiles
						_this.showFileImg = true
				    }
				});
				_this.$refs.choosefile.close()
			}
		}
	}
</script>

<style>
.choosefile-item{
	font-size:18px;
	font-weight:400;
	letter-spacing:0.2px;
	line-height:25px;
	word-wrap:break-word;
	padding:5px;
	color:#395ca3;
}
.imgs{
	flex-wrap: wrap;
}
.file-item{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
