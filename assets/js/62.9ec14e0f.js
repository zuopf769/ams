(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1017:function(e,t,l){"use strict";l.r(t);var a=l(126),i={text:{type:"text",label:"规则",rules:[{required:!0,message:"请输入活动名称",trigger:"blur"}]},date:{type:"date",label:"日期"}},o={objectField1:{type:"form",resource:{fields:{objectFieldA:{type:"object",label:"对象",fields:i},objectFieldB:{type:"object",label:"带默认值",default:{text:"我是文案",date:"1546272000000"},fields:i},objectFieldC:{type:"object",label:"纯展示",default:{text:"我是文案",date:"1546272000000"},fields:{text:{type:"text",label:"规则",ctx:"view"},date:{type:"date",label:"日期",ctx:"view"}}}}},ctx:"edit"},objectField2:{type:"form",resource:{fields:{objectFieldA:{type:"object",label:"对象",fields:{text:{type:"text",label:"规则",props:{inline:!0}},date:{type:"date",label:"日期",props:{inline:!0}},select:{type:"select",label:"公司",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"},inline:!0}},content:{type:"textarea",label:"内容"}}}}},ctx:"edit"},objectField3:{type:"form",resource:{fields:{objectFieldA:{type:"object",label:"组合编辑",fields:{date:{type:"date",label:"日期"},ArrayArray:{type:"array",label:"组织架构",field:{type:"object",label:"一级",fields:{text:{type:"text",label:"名称"},array:{type:"array",label:"二级",field:{type:"text",label:"名称"}}}}}}},objectFieldB:{type:"object",label:"带默认值组合",default:{date:"1546272000000",organization:[{text:"产品技术中心",secondary:["电商前端"]}]},fields:{date:{type:"date",label:"日期"},organization:{type:"array",label:"组织架构",field:{type:"object",fields:{text:{type:"text",label:"名称"},secondary:{type:"array",label:"二级部门",field:{type:"text"}}}}}}},objectFieldC:{type:"object",label:"组合展示",ctx:"view",default:{date:"1546272000000",organization:[{text:"产品技术中心",secondary:["电商前端"]}]},fields:{date:{type:"date",label:"日期",ctx:"view"},organization:{type:"array",label:"组织架构",ctx:"view",field:{type:"object",label:"一级",ctx:"view",fields:{text:{type:"text",label:"名称",ctx:"view"},secondary:{type:"array",label:"二级",ctx:"view",field:{type:"text",label:"名称",ctx:"view"}}}}}}}}},ctx:"edit"},objectField4:{type:"form",resource:{fields:{objectFieldA:{type:"object",label:"收货地址",fields:{ArrayArray:{type:"array",default:[{}],field:{type:"object",label:"地址",fields:{province:{type:"select",props:{multiple:!1,placeholder:"请选择省份",inline:!0,options:{gd:"广东省",gx:"广西省",hn:"湖南省"}}},city:{type:"select",props:{multiple:!1,placeholder:"请选择",inline:!0},changeConfig:function(e,t){return t&&("gd"===t.province?e.props.options={gz:"广州市",dg:"东莞市",sz:"深圳市"}:"gx"===t.province?e.props.options={gl:"桂林市",nn:"南宁市",bh:"北海市"}:"hn"===t.province&&(e.props.options={cs:"长沙市",rz:"永州市"})),e.props.options&&!e.props.options[t.city]&&(t.city=""),e}}}}}}}}},ctx:"edit"}},n=l(138),s=l.n(n),c=l(137),d=l.n(c),r={mixins:[a.a],mounted:function(){var e=s()(o[this.blockName]);this.configCode=d()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,o[this.blockName]),this.init=!0)}},p=l(1),b=Object(p.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?l("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),l("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[l("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),l("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[l("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?l("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=b.exports},125:function(e,t,l){"use strict";var a=l(0),i=(l(131),l(130)),o=l.n(i),n=l(128),s=l.n(n),c=l(136),d=l(132),r=l.n(d),p=(l(133),l(134)),b=l.n(p),f=l(135),y=l.n(f);a.default.use(o.a),a.default.use(s.a),console.log("ams init config"),a.default.use(b.a),a.default.use(y.a),"undefined"!=typeof window&&(window.Vue=a.default),a.default.use(c.a,{languages:{javascript:r.a}}),s.a.config({resource:{api:{withCredentials:!1}}})},126:function(e,t,l){"use strict";l(125);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);