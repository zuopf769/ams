(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{125:function(e,a,t){"use strict";var i=t(0),l=(t(131),t(130)),o=t.n(l),n=t(128),s=t.n(n),r=t(136),c=t(132),d=t.n(c),f=(t(133),t(134)),u=t.n(f),y=t(135),p=t.n(y);i.default.use(o.a),i.default.use(s.a),console.log("ams init config"),i.default.use(u.a),i.default.use(p.a),"undefined"!=typeof window&&(window.Vue=i.default),i.default.use(r.a,{languages:{javascript:d.a}}),s.a.config({resource:{api:{withCredentials:!1}}})},126:function(e,a,t){"use strict";t(125);a.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}},968:function(e,a,t){"use strict";t.r(a);var i=t(126),l={arrayField1:{type:"form",resource:{fields:{arrayFieldA:{type:"array",label:"数组",field:{type:"text",label:"text"}},arrayFieldB:{type:"array",label:"带默认值",default:["1","2"],field:{type:"text",label:"元素"}},arrayFieldC:{type:"array",label:"纯展示",default:["唯品会","京东"],field:{type:"text",label:"公司",ctx:"view"},ctx:"view"}}},ctx:"edit"},arrayField2:{type:"form",resource:{fields:{arrayFieldA:{type:"array",label:"地址",field:{type:"array",label:"省份",field:{type:"text",label:"市区"}}},arrayFieldB:{type:"array",label:"带默认值",default:[["广州","深圳"],["北京"]],field:{type:"array",label:"省份",field:{type:"text",label:"市区"}}},arrayFieldC:{type:"array",label:"纯展示",default:[["广州","深圳"],["北京"]],field:{type:"array",label:"省份",field:{type:"text",label:"市区",ctx:"view"},ctx:"view"},ctx:"view"}}},ctx:"edit"}},o=t(138),n=t.n(o),s=t(137),r=t.n(s),c={mixins:[i.a],mounted:function(){var e=n()(l[this.blockName]);this.configCode=r()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,l[this.blockName]),this.init=!0)}},d=t(1),f=Object(d.a)(c,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?t("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),t("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[t("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),t("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[t("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?t("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);a.default=f.exports}}]);