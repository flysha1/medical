(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/page2/page2"],{2238:function(e,t,o){"use strict";o.r(t);var a=o("adc3"),n=o.n(a);for(var l in a)"default"!==l&&function(e){o.d(t,e,function(){return a[e]})}(l);t["default"]=n.a},2811:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},n=[];o.d(t,"a",function(){return a}),o.d(t,"b",function(){return n})},"3a59":function(e,t,o){"use strict";o.r(t);var a=o("2811"),n=o("2238");for(var l in n)"default"!==l&&function(e){o.d(t,e,function(){return n[e]})}(l);o("c604");var s=o("2877"),i=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,null,null);t["default"]=i.exports},adc3:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return o.e("components/kilvn-fa-icon/fa-icon").then(o.bind(null,"031e"))},n=function(){return o.e("components/uni-popup/uni-popup").then(o.bind(null,"def2"))},l={components:{faIcon:a,uniPopup:n},data:function(){return{submitRes:"",showFileName:!1,showFileImg:!1,imgs:[],files:[],imgSrc:"",fileName:"",isAgree:!1,birthday:null,scrollTop:0,old:{scrollTop:0},collClass:"collapse collapseHide",popupText:"",form:{"1-1":{label:"姓名",txt:"",isNeed:!0},"1-2":{label:"姓名（拼音）",txt:"",isNeed:!0},"1-3":{label:"微信号",txt:"",isNeed:!0},"1-4":{txt:""},"1-5":{label:"邮寄地址",txt:"",isNeed:!0},"1-6":{label:"电话号码",txt:"",isNeed:!0},"1-7":{label:"性别",value:"M"},"1-8":{label:"生日",txt:"",isNeed:!0},"1-9":{label:"年龄",txt:"",isNeed:!0},"2-1":{value:"N"},"2-2":{txt:""},"2-3":{value:"N"},"2-4":{txt:""},"2-5":{value:"N"},"2-6":{txt:""},"2-7":{value:"N"},"2-8":{txt:""},"2-9":{value:"N"},"2-10":{value:"N"},"2-11":{txt:""},"2-12":{value:"N"},"2-13":{txt:""},"2-14":{txt:""},"2-15":{txt:""},"2-16":{txt:""}},radios:{flag:[{name:"没有",value:"N"},{name:"有",value:"Y"}],isSmoke:[{name:"不吸",value:"N"},{name:"吸烟",value:"Y"}],isDrink:[{name:"不喝",value:"N"},{name:"每天",value:"D"},{name:"偶尔",value:"S"}],isPregnant:[{name:"没有",value:"N"},{name:"有",value:"Y"},{name:"不知道",value:"D"}],isLactation:[{name:"不是",value:"N"},{name:"是",value:"Y"}],sexs:[{name:"男",value:"M"},{name:"女",value:"F"}]}}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")},showBackTop:function(){return this.old.scrollTop>=300}},methods:{deleteFile:function(e){this.files.splice(e,1)},deleteImg:function(e){this.imgs.splice(e,1)},closePopup:function(){this.$refs.popup.close()},changeIsAgree:function(){this.isAgree=!this.isAgree},submit:function(){var t=this,o=!1;for(var a in t.form)if(t.form[a].isNeed){if(""===t.form[a].txt){t.popupText=t.form[a].label+"不能为空！",t.$refs.popup.open();break}if("1-9"===a){o=!0;break}}if(o){var n={group:"q2",anser:[],fileName:[]};for(var l in t.form)void 0!==t.form[l].value?n.anser.push({step:l,value:t.form[l].value}):n.anser.push({step:l,txt:t.form[l].txt});if(t.imgs.length>0){var s=[];e.showLoading({mask:!0,title:"文件上传中"}),t.imgs.forEach(function(t){s.push(new Promise(function(o,a){e.uploadFile({url:"https://www.shengkunhealth.com/med/up",filePath:t.path,name:"file",success:function(e){var t=JSON.parse(e.data);n.fileName.push(t.fileName),o("OK")}})}))}),Promise.all(s).then(function(t){n.fileName=n.fileName.join(","),e.request({method:"POST",url:"https://www.shengkunhealth.com/med/post",data:n,header:{"content-type":"application/json"},success:function(t){e.hideLoading(),e.showToast({title:"提交成功",duration:2e3})}})})}else{var i=[];e.showLoading({mask:!0,title:"文件上传中"}),t.files.forEach(function(t){i.push(new Promise(function(o,a){e.uploadFile({url:"https://www.shengkunhealth.com/med/up",filePath:t.path,name:"file",success:function(e){var t=JSON.parse(e.data);n.fileName.push(t.fileName),o("OK")}})}))}),Promise.all(i).then(function(t){n.fileName=n.fileName.join(","),e.request({method:"POST",url:"https://www.shengkunhealth.com/med/post",data:n,header:{"content-type":"application/json"},success:function(t){e.hideLoading(),200===t.statusCode?e.showToast({title:"提交成功",duration:2e3}):e.showToast({icon:"none",title:"提交失败",duration:2e3})}})})}}},birthdayChange:function(e){var t=new Date;this.form["1-8"].txt=this.birthday=e.target.value,this.form["1-9"].txt=t.getFullYear()-parseInt(this.birthday.slice(0,5))},toPage:function(t){e.redirectTo({url:"../".concat(t,"/").concat(t)})},toggleBtnCollapse:function(){this.$refs.liCon;"collapse collapseHide"===this.collClass?this.collClass="collapse collapseShow":this.collClass="collapse collapseHide"},goTop:function(e){this.scrollTop=this.old.scrollTop,this.$nextTick(function(){this.scrollTop=0}),this.old.scrollTop=0},scroll:function(e){this.old.scrollTop=e.detail.scrollTop},getDate:function(e){var t=new Date,o=t.getFullYear(),a=t.getMonth()+1,n=t.getDate();return"start"===e?o-=60:"end"===e&&(o+=2),a=a>9?a:"0"+a,n=n>9?n:"0"+n,"".concat(o,"-").concat(a,"-").concat(n)},radioChange:function(e,t){this.form[t].value=e.target.value},showChooseFile:function(){this.$refs.choosefile.open()},chooseLoaclFile:function(){var e=this;e.imgs=[],e.files=[],wx.chooseMessageFile({count:5,type:"file",success:function(t){e.showFileImg=!1,e.files=t.tempFiles,e.showFileName=!0}}),e.$refs.choosefile.close()},chooseLoaclImage:function(t){var o=this;o.imgs=[],o.files=[],e.chooseImage({count:5,sizeType:["original","compressed"],sourceType:[t],success:function(e){o.showFileName=!1,o.imgs=e.tempFiles,o.showFileImg=!0}}),o.$refs.choosefile.close()}}};t.default=l}).call(this,o("543d")["default"])},c604:function(e,t,o){"use strict";var a=o("ed0e"),n=o.n(a);n.a},cbfe:function(e,t,o){"use strict";(function(e){o("1bac"),o("921b");a(o("66fd"));var t=a(o("3a59"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},ed0e:function(e,t,o){}},[["cbfe","common/runtime","common/vendor"]]]);