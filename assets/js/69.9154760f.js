(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1009:function(e,t,a){"use strict";a.r(t);var i=a(126),o={textareaField1:{type:"form",resource:{fields:{textareaFieldA:{type:"textarea",label:"文本域",props:{placeholder:"请输入文本"}},textareaFieldB:{type:"textarea",label:"必填",props:{placeholder:"请输入文本"},rules:[{required:!0,message:"请输入文本",trigger:"blur"}]}}},ctx:"edit"},textareaField2:{type:"form",resource:{fields:{textareaFieldA:{type:"textarea",label:"编辑状态",props:{placeholder:"请输入文本"},collapseLimit:15},textareaFieldB:{type:"textarea",label:"超出隐藏",props:{placeholder:"请输入文本"},collapseLimit:15,ctx:"view"}}},data:{textareaFieldA:"AMS 是 Admin Materials System 的首字母缩写，意为管理后台物料系统，是通过JSON配置的形式来快速搭建管理后台的一整套解决方案。",textareaFieldB:"AMS 是 Admin Materials System 的首字母缩写，意为管理后台物料系统，是通过JSON配置的形式来快速搭建管理后台的一整套解决方案。"},ctx:"edit"}},s=a(138),l=a.n(s),n=a(137),r=a.n(n),c={mixins:[i.a],mounted:function(){var e=l()(o[this.blockName]);this.configCode=r()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,o[this.blockName]),this.init=!0)}},d=a(1),m=Object(d.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?a("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),a("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[a("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),a("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[a("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?a("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=m.exports},125:function(e,t,a){"use strict";var i=a(0),o=(a(131),a(130)),s=a.n(o),l=a(128),n=a.n(l),r=a(136),c=a(132),d=a.n(c),m=(a(133),a(134)),p=a.n(m),u=a(135),f=a.n(u);i.default.use(s.a),i.default.use(n.a),console.log("ams init config"),i.default.use(p.a),i.default.use(f.a),"undefined"!=typeof window&&(window.Vue=i.default),i.default.use(r.a,{languages:{javascript:d.a}}),n.a.config({resource:{api:{withCredentials:!1}}})},126:function(e,t,a){"use strict";a(125);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);