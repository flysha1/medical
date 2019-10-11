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
					<view class="collapse-item  collapse-item-active">
						<text>赴日精密体检</text>
					</view>
				</view>
			</view>
			<view class="pageName">
				<view class="main-title">
					赴日精密体检
				</view>
				<view class="sub-title">
					<text>ホーム &nbsp; / &nbsp;赴日精密体检</text>
				</view>
			</view>
			<view class="beforeInput">
				<image src="../../static/WS000077.jpg" class="main-image"></image>
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
					【1】请体检申请人填写以下信息
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[1-1]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">体检人姓名</text>
					</view>
					<view class="form-input-wrap">
						<fa-icon type="user" size="22" color="#395ca3" class="form-input-icon"></fa-icon>
						<input class="form-input" type="text" v-model="form['1-1'].txt"/>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[1-2]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">姓名（拼音）</text>
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['1-2'].txt"/>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[1-3]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">手机号码</text>
					</view>
					<view class="form-input-wrap">
						<fa-icon type="phone" size="22" color="#395ca3" class="form-input-icon"></fa-icon>
						<input class="form-input" type="number" v-model="form['1-3'].txt"/>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[1-4]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">微信号</text>
					</view>
					<view class="form-input-wrap">
						<fa-icon type="wechat" size="22" color="#395ca3" class="form-input-icon"></fa-icon>
						<input class="form-input" type="text" v-model="form['1-4'].txt"/>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[1-5]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">家庭地址</text>
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['1-5'].txt"/>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[1-6]</text>
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
						<text class="form-label-no">[1-7]</text>
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
						<text class="form-label-no">[1-8]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">年龄</text>
					</view>
					<view>
						<input class="form-input" type="number" v-model="form['1-8'].txt"/>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[1-9]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">国籍</text>
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['1-9'].txt"/>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[1-10]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">母语</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'1-10')" class="radio-group">
							<label v-for="(item, index) in radios.Language" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['1-10'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
					<view class="form-label">
						⇒如选择【其它语言】，请填写语种
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['1-10-1'].txt"/>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[1-11]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">可使用的语言（可多选）</text>
					</view>
					<view>
						<checkbox-group @change="changeCheckBox($event,'1-11')" class="radio-group">
							<label v-for="(item, index) in checkBoxs['1-11']" :key="index" class="radio-group-item">
								<view>
									<checkbox :value="item.value" :checked="item.checked" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</checkbox-group>
					</view>
					<view class="form-label">
						⇒如选择【其它语言】，请填写语种
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['1-11-1'].txt"/>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[1-12]</text>
						<text class="form-label-text">宗教</text>
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['1-12'].txt"/>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[1-13]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">身高(cm)</text>
					</view>
					<view>
						<input class="form-input" type="number" v-model="form['1-13'].txt"/>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[1-14]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">体重(kg)</text>
					</view>
					<view>
						<input class="form-input" type="number" v-model="form['1-14'].txt"/>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[1-15]</text>

						<text class="form-label-text">护照号码</text>
					</view>
					<view>
						<input class="form-input" type="number" v-model="form['1-15'].txt"/>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[1-16]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">日本签证</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'1-16')" class="radio-group">
							<label v-for="(item, index) in radios.flag" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['1-16'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
					<view class="" v-if="form['1-16'].value==='Y'">
						<view class="form-label">
							⇒若有，请选择签证种类
						</view>
						<view>
							<radio-group @change="radioChange($event,'1-16-1')" class="radio-group">
								<label v-for="(item, index) in radios.VisaType" :key="index" class="radio-group-item">
									<view>
										<radio :value="item.value" :checked="item.value === form['1-16-1'].value" color="#395ca3" />
									</view>
									<view>{{item.name}}</view>
								</label>
							</radio-group>
						</view>
						<view class="form-label">
							⇒若有, 请填写签证有効期限
						</view>
						<view>
							<input class="form-input" type="text" v-model="form['1-16-2'].txt"/>
						</view>
					</view>
					<view class="" v-else>
						<view class="form-label">
							⇒若没有，请填写签证预计拿到的日期
						</view>
						<view class="form-input-wrap">
							<fa-icon type="calendar" size="22" color="#395ca3" class="form-input-icon"></fa-icon>
							<picker mode="date" :start="startDate" @change="pickerChange($event,'1-16-3')">
								<input class="form-input" type="text" :value="form['1-16-3'].txt" :disabled="true" />
							</picker>
						</view>
						<view class="form-label">
							⇒若没有，请填写预计申请的签证种类
						</view>
						<view>
							<radio-group @change="radioChange($event,'1-16-4')" class="radio-group">
								<label v-for="(item, index) in radios.VisaType" :key="index" class="radio-group-item">
									<view>
										<radio :value="item.value" :checked="item.value === form['1-16-4'].value" color="#395ca3" />
									</view>
									<view>{{item.name}}</view>
								</label>
							</radio-group>
						</view>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[1-17]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">刺青·纹身</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'1-17')" class="radio-group">
							<label v-for="(item, index) in radios.flag" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['1-17'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
					<view class="form-label">
						⇒若有，请填写具体部位
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['1-17-1'].txt"/>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[1-18]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">体内金属（通过手术或其他方式植入体内）</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'1-18')" class="radio-group">
							<label v-for="(item, index) in radios.flag" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['1-18'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
					<view class="form-label">
						⇒如有，请填写材质名称
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['1-18-1'].txt"/>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[1-19]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">牙齿假牙</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'1-19')" class="radio-group">
							<label v-for="(item, index) in radios.flag" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['1-19'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
					<view class="form-label">
						⇒如有，请填写材质名称
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['1-19-1'].txt"/>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[1-20]</text>

						<text class="form-label-text">避孕环（仅女性）</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'1-20')" class="radio-group">
							<label v-for="(item, index) in radios.flag" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['1-20'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
					<view class="form-label">
						⇒如有，请填写材质名称
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['1-20-1'].txt"/>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[1-21]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">您有没有在一年内接受过或今后一年内计划接受PET-CT检查？</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'1-21')" class="radio-group">
							<label v-for="(item, index) in radios.flag" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['1-21'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
					<view class="form-label">
						⇒若有，请填写日期
					</view>
					<view class="form-input-wrap">
						<fa-icon type="calendar" size="22" color="#395ca3" class="form-input-icon"></fa-icon>
						<picker mode="date" :start="startDate" @change="pickerChange($event,'1-21-1')">
							<input class="form-input" type="text" :value="form['1-21-1'].txt" :disabled="true" />
						</picker>
					</view>
				</view>
				<view class="hr">

				</view>
				<view class="form-title">
					【2】体检人病例
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[2-1]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">糖尿病(必填)</text>
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
					<view class="" v-if="form['2-1'].value==='Y'">
						<view class="form-label">
							⇒若有，现在是否有服用药物
						</view>
						<view>
							<radio-group @change="radioChange($event,'2-1-1')" class="radio-group">
								<label v-for="(item, index) in radios.flag" :key="index" class="radio-group-item">
									<view>
										<radio :value="item.value" :checked="item.value === form['2-1-1'].value" color="#395ca3" />
									</view>
									<view>{{item.name}}</view>
								</label>
							</radio-group>
						</view>
						<view class="form-label">
							⇒若有，现在是否有使用胰岛素
						</view>
						<view>
							<radio-group @change="radioChange($event,'2-1-2')" class="radio-group">
								<label v-for="(item, index) in radios.flag" :key="index" class="radio-group-item">
									<view>
										<radio :value="item.value" :checked="item.value === form['2-1-2'].value" color="#395ca3" />
									</view>
									<view>{{item.name}}</view>
								</label>
							</radio-group>
						</view>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[2-2]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">高血压</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'2-2')" class="radio-group">
							<label v-for="(item, index) in radios.flag" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['2-2'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
					<view class="form-label">
						⇒若有，现在是否有服用药物
					</view>
					<view>
						<radio-group @change="radioChange($event,'2-2-1')" class="radio-group">
							<label v-for="(item, index) in radios.flag" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['2-2-1'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[2-3]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">青光眼</text>
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
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[2-4]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">幽闭恐惧症</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'2-4')" class="radio-group">
							<label v-for="(item, index) in radios.flag" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['2-4'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[2-5]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">隐形眼镜</text>
					</view>
					<view>
						<radio-group @change="radioChange($event,'2-5')" class="radio-group">
							<label v-for="(item, index) in radios.flag" :key="index" class="radio-group-item">
								<view>
									<radio :value="item.value" :checked="item.value === form['2-5'].value" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[2-6]</text>
						<text class="form-label-text">如有使用上述药物之外的其它药物，请填写药物名称和作用</text>
					</view>
					<view>
						<input class="form-input" type="text" v-model="form['2-6'].txt"/>
					</view>
				</view>
				<view class="form-title">
					【3】希望检查的项目
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[3-1]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">希望检查的项目（可多选）</text>
					</view>
					<view>
						<checkbox-group @change="changeCheckBox($event,'3-1')" class="radio-group">
							<label v-for="(item, index) in checkBoxs['3-1']" :key="index" class="radio-group-item">
								<view>
									<checkbox :value="item.value" :checked="item.checked" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</checkbox-group>
					</view>
					<view class="form-label">
						如有其它的希望检查项目，请详细填写
					</view>
					<view>
						<textarea class="form-input form-input-textarea" type="text" />
						</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-no">[3-2]</text>
						<text class="stressIcon">*</text>
						<text class="form-label-text">请填写比较担心或在意的部位（可多选）</text>
					</view>
					<view>
						<checkbox-group @change="changeCheckBox($event,'3-2')" class="radio-group">
							<label v-for="(item, index) in checkBoxs['3-2']" :key="index" class="radio-group-item">
								<view>
									<checkbox :value="item.value" :checked="item.checked" color="#395ca3" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</checkbox-group>
					</view>
				</view>
				<view class="form-title">
					【4】希望体检日期（请至少填写第一希望）
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="stressIcon">*</text>
						<text class="form-label-text">第一希望</text>
					</view>
					<view class="form-input-wrap">
						<fa-icon type="calendar" size="22" color="#395ca3" class="form-input-icon"></fa-icon>
						<picker mode="date" :start="startDate" @change="pickerChange($event,'4-1-1')">
							<input class="form-input" type="text" :value="form['4-1-1'].txt" :disabled="true" />
						</picker>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-text">第二希望</text>
					</view>
					<view class="form-input-wrap">
						<fa-icon type="calendar" size="22" color="#395ca3" class="form-input-icon"></fa-icon>
						<picker mode="date" :start="startDate" @change="pickerChange($event,'4-1-2')">
							<input class="form-input" type="text" :value="form['4-1-2'].txt" :disabled="true" />
						</picker>
					</view>
				</view>
				<view class="form-item">
					<view class="form-label">
						<text class="form-label-text">第三希望</text>
					</view>
					<view class="form-input-wrap">
						<fa-icon type="calendar" size="22" color="#395ca3" class="form-input-icon"></fa-icon>
						<picker mode="date" :start="startDate" @change="pickerChange($event,'4-1-3')">
							<input class="form-input" type="text" :value="form['4-1-3'].txt" :disabled="true" />
						</picker>
					</view>
				</view>
				<view class="form-label">
					如有其他要求、疑问等，请详细填写
				</view>
				<view>
					<textarea class="form-input form-input-textarea" type="text" v-model="form['4-1-4'].txt"/>
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
			return {
				submitRes:'',
				isAgree: false,
				birthday: null,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				popupText:'',
				form: {
					'1-1':{label:'姓名',txt:'',isNeed:true},
					'1-2':{label:'姓名（拼音）',txt:'',isNeed:true},
					'1-3':{label:'手机号码',txt:'',isNeed:true},
					'1-4':{label:'微信号',txt:'',isNeed:true},
					'1-5':{label:'家庭地址',txt:'',isNeed:true},
					'1-6':{value:'M'},
					'1-7':{label:'生日',txt:'',isNeed:true},
					'1-8':{label:'年龄',txt:'',isNeed:true},
					'1-9':{label:'国籍',txt:'',isNeed:true},
					'1-10':{value:'zh'},
					'1-10-1':{txt:''},
					'1-11':{label:'可使用的语言',value:'',txt:'',isNeed:true},
					'1-11-1':{txt:''},
					'1-12':{txt:''},
					'1-13':{label:'身高',txt:'',isNeed:true},
					'1-14':{label:'体重',txt:'',isNeed:true},
					'1-15':{txt:''},
					'1-16':{value:'N'},
					'1-16-1':{txt:''},
					'1-16-2':{txt:''},
					'1-16-3':{txt:''},
					'1-16-4':{txt:''},
					'1-17':{value:'N'},
					'1-17-1':{txt:''},
					'1-18':{value:'N'},
					'1-18-1':{txt:''},
					'1-19':{value:'N'},
					'1-19-1':{txt:''},
					'1-20':{value:'N'},
					'1-20-1':{txt:''},
					'1-21':{value:'N'},
					'1-21-1':{txt:''},
					'2-1':{value:'N'},
					'2-1-1':{value:''},
					'2-1-1':{value:''},
					'2-2':{value:'N'},
					'2-2-1':{txt:''},
					'2-3':{value:'N'},
					'2-4':{value:'N'},
					'2-5':{value:'N'},
					'2-6':{txt:''},
					'3-1':{label:'希望检查的项目',txt:'',value:'',isNeed:true},
					'3-2':{label:'比较担心的部位',txt:'',value:'',isNeed:true},
					'4-1-1':{label:'第一希望',txt:'',isNeed:true},
					'4-1-2':{txt:''},
					'4-1-3':{txt:''},
					'4-1-4':{txt:''},
				},
				collClass: 'collapse collapseHide',
				checkBoxs: {
					'3-2':[{
						name: '脑',
						value: 'opt1'
					}, {
						name: '胃',
						value: 'opt2'
					}, {
						name: '肺',
						value: 'opt3'
					}, {
						name: '肠子',
						value: 'opt4'
					}, {
						name: '肝脏、胆囊、胰腺',
						value: 'opt5'
					}, {
						name: '甲状腺',
						value: 'opt6'
					}, {
						name: '前列腺（仅男性）',
						value: 'opt7'
					}, {
						name: '乳腺（仅女性）',
						value: 'opt8'
					}, {
						name: '子宮（仅女性）',
						value: 'opt9'
					}],
					'3-1': [{
						name: 'PET-CT',
						value: 'opt1'
					}, {
						name: '脑部核磁共振MRI/MRA',
						value: 'opt2'
					}, {
						name: '肺部CT',
						value: 'opt3'
					}, {
						name: '腹部CT',
						value: 'opt4'
					}, {
						name: '胃镜',
						value: 'opt5'
					}, {
						name: '大肠镜',
						value: 'opt6'
					}, {
						name: '肿瘤标志物',
						value: 'opt7'
					}, {
						name: '心脏超声波',
						value: 'opt8'
					}, {
						name: '乳腺癌检查（仅女性）',
						value: 'opt9'
					}, {
						name: '妇科检查（仅女性）',
						value: 'opt10'
					}, ],
					'1-11': [{
						name: '汉语',
						value: 'zh'
					}, {
						name: '英语',
						value: 'en'
					}, {
						name: '日语',
						value: 'jp'
					}, {
						name: '其他',
						value: 'ot'
					}]
				},
				radios: {
					flag:[{name:'没有',value:'N'},{name:'有',value:'Y'}],
					Sex: [{
						name: '男',
						value: 'M'
					}, {
						name: '女',
						value: 'F'
					}],
					Language: [{
						name: '汉语',
						value: 'zh'
					}, {
						name: '英语',
						value: 'en'
					}, {
						name: '日语',
						value: 'jp'
					}, {
						name: '其他',
						value: 'ot'
					}],
					VisaType: [{
						name: '旅游签证',
						value: 'ly'
					}, {
						name: '商业签证',
						value: 'sy'
					}, {
						name: '医疗签证',
						value: 'yl'
					}, ]
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
			pickerChange(e,name){
				this.form[name].txt = e.target.value
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
							if(i==='4-1-1') {
								submitFlag = true
								break
							}
						}
					}
				}
				if(submitFlag){
					let param = {group:'q3',anser:[]} 
					for(let i in _this.form){
						if(_this.form[i].value!==undefined){
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
					    }
					});
				}
			},
			birthdayChange(e) {
				let year = new Date()
				this.birthday = this.form['1-7'] = e.target.value
				this.form['1-8'].txt = year.getFullYear()-parseInt(this.form['1-7'].slice(0,5))
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
			changeCheckBox(e,name) {
				let items = this.checkBoxs[name]
				let values = null
				this.form[name].value = this.form[name].txt = values = e.detail.value
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.includes(item.value)) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
			}
		}
	}
</script>

<style>

</style>
