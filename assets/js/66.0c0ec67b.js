(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{125:function(e,i,t){"use strict";var o=t(0),s=(t(131),t(130)),n=t.n(s),a=t(128),l=t.n(a),c=t(136),d=t(132),r=t.n(d),f=(t(133),t(134)),u=t.n(f),m=t(135),g=t.n(m);o.default.use(n.a),o.default.use(l.a),console.log("ams init config"),o.default.use(u.a),o.default.use(g.a),"undefined"!=typeof window&&(window.Vue=o.default),o.default.use(c.a,{languages:{javascript:r.a}}),l.a.config({resource:{api:{withCredentials:!1}}})},126:function(e,i,t){"use strict";t(125);i.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}},969:function(e,i,t){"use strict";t.r(i);var o=t(126),s={sliderField1:{type:"form",resource:{fields:{sliderFieldA:{type:"slider",label:"滑块"},sliderFieldB:{type:"slider",label:"带默认值",default:10},sliderFieldC:{type:"slider",label:"纯展示",default:10,ctx:"view"}}},ctx:"edit"}},n=t(138),a=t.n(n),l=t(137),c=t.n(l),d={mixins:[o.a],mounted:function(){var e=a()(s[this.blockName]);this.configCode=c()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,s[this.blockName]),this.init=!0)}},r=t(1),f=Object(r.a)(d,(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?t("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),t("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[t("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),t("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[t("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?t("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);i.default=f.exports}}]);