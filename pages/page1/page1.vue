<template>
	<view class="page">
		<scroll-view @scroll="scroll" scroll-y="true" :scroll-top="scrollTop" class="scroll-Y">
			<view class="header">
				<view class="header-brand" @click="toPage('index')">
					<image class="logo" src="/static/logo.png"></image>
				</view>
				<button class="btn-collapse" @click="toggleBtnCollapse">
					<fa-icon type="bars" size="20"></fa-icon>
				</button>
				<view :class="collClass">
					<view class="collapse-item collapse-item-active">
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
			<view class="pageName">
				<view class="main-title">
					医疗咨询
				</view>
				<view class="sub-title">
					<text>ホーム &nbsp; / &nbsp;医疗咨询</text>
				</view>
			</view>
			<view class="beforeInput">
				<image src="../../static/WS000075.jpg" class="main-image"></image>
				<view class="beforeInput-info">
					<view class="beforeInput-info-item">
						1）请如实填写以下事项后，点击【发送】
					</view>
					<view class="beforeInput-info-item">
						2）原则上，负责人会在接到患者咨询申请后24小时内尽快给出回复。(周六、周日和日本节假日除外)
					</view>
					<view class="beforeInput-info-item">
						3）确认汇款后，将在1～3个工作日内由负责人联络回复。(周六、周日和日本节假日除外。我们会尽量在短时间内给出回复，但是由于患者病情等不同，处理的时间也会有所不同，请谅解)
					</view>
					<view class="beforeInput-info-item">
						*原则上，仅需要提供患者的准确的疾病名称即可；因病情而异，后期有可能需要追加提供其他医疗相关信息（如：诊断书，影像数据，血液检查报告等）。
					</view>
					<view class="hr">

					</view>
					<view class="beforeInput-info-item">
						<text class="stressIcon">*</text>
						<text class="text-underline">印是必须填写的项目（如有未填写项目，则无法送信）</text>
					</view>
				</view>
			</view>
			<view class="form">
				<view class="form-title">
					①联系人信息
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[1-1]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">联系人姓名</text>
					</view>
					<view class="form-input-wrap">
						<fa-icon type="user" size="22" color="#395ca3" class="form-input-icon"></fa-icon>
						<input class="form-input" type="text" v-model="form['1-1'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[1-2]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">与患者的关系</text>
					</view>
					<view class="form-input-wrap">
						<fa-icon type="users" size="22" color="#395ca3" class="form-input-icon"></fa-icon>
						<input class="form-input" type="text" v-model="form['1-2'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[1-3]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">联系人微信号</text>
					</view>
					<view class="form-input-wrap">
						<fa-icon type="wechat" size="22" color="#395ca3" class="form-input-icon"></fa-icon>
						<input class="form-input" type="text" v-model="form['1-3'].txt" />
					</view>
				</view>
				<view class="hr">

				</view>

				<view class="form-title">
					②患者基本信息（与身份证信息保持一致）
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[2-1]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">姓名</text>
					</view>
					<view class="form-input-wrap">
						<fa-icon type="user" size="22" color="#395ca3" class="form-input-icon"></fa-icon>
						<input class="form-input" type="text" v-model="form['1-4'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[2-2]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">拼音</text>
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['1-5'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[2-3]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">性别</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'1-6')" class="radio-group">
							<label v-for="(item, index) in radios.Sex" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['1-6'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[2-4]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">出生年月日</text>
					</view>
					<view class="form-input-wrap">
						<fa-icon type="calendar" size="22" color="#395ca3" class="form-input-icon"></fa-icon>
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<input class="form-input" type="text" :value="date" :disabled="true" />
						</picker>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[2-5]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">年龄</text>
					</view>
					<view>
						<input class="form-input" type="number" v-model="form['1-8'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[2-6]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">国籍</text>
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['1-9'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[2-7]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">长期居住城市</text>
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['1-10'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[2-8]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">是否有使用的常用药物？</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'2-1')" class="radio-group">
							<label v-for="(item, index) in radios.flag1" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['2-1'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
					<view class="form-label">
						<text class="form-label-text">如有常用药物，最好填写英文药物名称，中文也可以？</text>
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['2-2'].txt" />
					</view>
				</view>
				<view class="hr">

				</view>
				<view class="form-title">
					③有关病情
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[3-1]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">精准病名</text>
						<text class="form-label-subtext">(请务必填写正规医院/医师诊断给出的正确的标准疾病名称,仅症状描述或病名不准确等情况是无法给出回复的)</text>
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['2-3'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[3-2]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">診断医療機関名</text>
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['2-4'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[3-3]</text>
						<text class="form-label-text">请记述既往史及针对既往史的治疗史。（半年以内住过院的话，请务必记述。）</text>
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['2-5'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[3-4]</text>
						<text class="form-label-text">你希望咨询什么事情?</text>
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['2-6'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[3-5]</text>
						<text class="form-label-text">现在在住院吗?</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'2-7')" class="radio-group">
							<label v-for="(item, index) in radios.flag1" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['2-7'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
					<view class="form-label">
						<text class="form-label-text">
							回答「是」的患者，请告知收住院的医疗机构名称</text>
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['2-8'].txt" />
					</view>
					<view class="form-label">
						<text class="form-label-text">
							诊疗科名
						</text>
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['2-9'].txt" />
					</view>
					<view class="form-label">
						<text class="form-label-text">
							回答「否」的患者，在过去的３个月以内是否有住院史？
						</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'2-10')" class="radio-group">
							<label v-for="(item, index) in radios.flag1" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['2-10'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
					<view class="form-label">
						<text class="form-label-text">
							回答「是」的患者、什么时候住院的？
						</text>
					</view>
					<view>
						<picker mode="date" :value="hospitalizationDate" :start="startDate" :end="endDate" @change="hospitalizationDateChange">
							<input class="form-input" type="text" :value="hospitalizationDate" :disabled="true" />
						</picker>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[3-6]</text>
						<text class="form-label-text">现在，你是否患有结核、多药耐药菌、其他的传染病?</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'2-12')" class="radio-group">
							<label v-for="(item, index) in radios.IsSick" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['2-12'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
					<view class="form-label">
						<text class="form-label-text">
							回答「是」的患者、传染病名
						</text>
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['2-13'].txt" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[3-7]</text>
						<text class="form-label-text">日常生活能力</text>
					</view>
					<view class="form-label">
						<text class="form-label-text">步行</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'3-1')" class="radio-group">
							<label v-for="(item, index) in radios.flag2" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['3-1'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
					<view class="form-label">
						<text class="form-label-text">坐姿</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'3-2')" class="radio-group">
							<label v-for="(item, index) in radios.flag2" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['3-2'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
					<view class="form-label">
						<text class="form-label-text">饮食</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'3-3')" class="radio-group">
							<label v-for="(item, index) in radios.flag2" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['3-3'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
					<view class="form-label">
						<text class="form-label-text">排泄</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'3-4')" class="radio-group">
							<label v-for="(item, index) in radios.flag2" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['3-4'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="hr">

				</view>
				<view class="form-title">
					④请简明描述病情并填写想咨询的内容
				</view>
				<view>
					<textarea class="form-input form-input-textarea" type="text" v-model="form['3-5'].txt" />
					</view>
				<view class="hr">
				
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
			const currentDate = this.getDate({
				format: true
			})
			return {
				submitRes:'',
				scrollTop: 0,
				old: {
				     scrollTop: 0
				 },
				hospitalizationDate: null,
				date: null,
				isAgree:false,
				radios:{
					flag1:[{
					name: '否',
					value: '0'
				}, {
					name: '是',
					value: '1'
				}],flag2:[{
					name: '独立',
					value: '0'
				}, {
					name: '需要帮助',
					value: '1'
				}],
					IsSick:[{
					name: '否',
					value: '0'
				}, {
					name: '不知道',
					value: '-1'
				}, {
					name: '是',
					value: '1'
				}],
					Sex:[{
					name: '男',
					value: 'M'
				}, {
					name: '女',
					value: 'F'
				}]
				},
				form: {
					'1-1':{label:'联系人姓名',txt:'',value:'',isNeed:true},
					'1-2':{label:'与患者的关系',txt:'',value:'',isNeed:true},
					'1-3':{label:'联系人微信号',txt:'',value:'',isNeed:true},
					'1-4':{label:'姓名',txt:'',value:'',isNeed:true},
					'1-5':{label:'拼音',txt:'',value:'',isNeed:true},
					'1-6':{label:'性別',txt:'',value:'M'},
					'1-7':{label:'出生年月日',txt:'',value:'',isNeed:true},
					'1-8':{label:'年齢',txt:'',value:'',isNeed:true},
					'1-9':{label:'国籍',txt:'',value:'',isNeed:true},
					'1-10':{label:'长期居住城市',txt:'',value:'',isNeed:true},
					'2-1':{txt:'',value:'0'},
					'2-2':{txt:'',value:''},
					'2-3':{label:'精准病名',txt:'',value:'',isNeed:true},
					'2-4':{label:'診断医療機関名',txt:'',value:'',isNeed:true},
					'2-5':{txt:'',value:''},
					'2-6':{txt:'',value:''},
					'2-7':{txt:'',value:'0'},
					'2-8':{txt:'',value:''},
					'2-9':{txt:'',value:''},
					'2-10':{txt:'',value:'0'},
					'2-11':{txt:'',value:''},
					'2-12':{txt:'',value:'0'},
					'2-13':{txt:'',value:''},
					'3-1':{txt:'',value:'0'},
					'3-2':{txt:'',value:'0'},
					'3-3':{txt:'',value:'0'},
					'3-4':{txt:'',value:'0'},
					'3-5':{txt:'',value:''},
				},
				collClass: 'collapse collapseHide',
				popupText:''
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			},showBackTop(){
				return this.old.scrollTop>=300?true:false
			}
		},
		methods: {
			closePopup(){
			    this.$refs.popup.close()
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
							if(i==='2-4') {
								submitFlag = true
								break
							}
						}
					}
				}
				if(submitFlag){
					let param = {group:'q1',anser:[]} 
					for(let i in _this.form){
						if(_this.form[i].value!==''){
							param.anser.push({step:i,value:_this.form[i].value})
						}else{
							param.anser.push({step:i,txt:_this.form[i].txt})
						}
					}
					uni.request({
						method:'POST',
					    url: 'https://www.shengkunhealth.com/med/post',
					    data: param,
					    header: {
					        'content-type':'application/json'
					    },
					    success: (res) => {
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
					    },
						fail:(err)=>{
							uni.showToast({
								icon:'none',
							    title: '提交失败',
								duration: 2000
							});
						}
					});
				}
			},
			toPage(name){
				uni.redirectTo({
				    url: `../${name}/${name}`
				})
			},
			goTop(e) {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop=0
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
			radioChange(e, name) {
				this.form[name].value = e.target.value
			},
			bindDateChange(e) {
				let year = new Date()
				this.date = e.target.value
				this.form['1-7'].txt = this.date
				this.form['1-8'].txt = year.getFullYear()-parseInt(this.date.slice(0,5))
			},
			hospitalizationDateChange(e) {
				this.form['2-11'].txt = this.hospitalizationDate = e.target.value
				
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},changeIsAgree(){
				this.isAgree=!this.isAgree
			}
		}
	}
</script>

<style>
	
</style>
