(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{125:function(e,a,t){"use strict";var i=t(0),s=(t(131),t(130)),c=t.n(s),o=t(128),l=t.n(o),m=t(136),n=t(132),p=t.n(n),r=(t(133),t(134)),g=t.n(r),d=t(135),u=t.n(d);i.default.use(c.a),i.default.use(l.a),console.log("ams init config"),i.default.use(g.a),i.default.use(u.a),"undefined"!=typeof window&&(window.Vue=i.default),i.default.use(m.a,{languages:{javascript:p.a}}),l.a.config({resource:{api:{withCredentials:!1}}})},126:function(e,a,t){"use strict";t(125);a.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}},150:function(e,a,t){"use strict";function i(e,a,t){var i='<!DOCTYPE html>\n<html>\n<head>\n    <meta charset="utf-8">\n    <title>首页</title>\n    <script src="https//h5rsc.vipstatic.com/ams/babel-polyfill/7.4.0/polyfill.min.js"><\/script>\n</head>\n<body>\n    <script>\n        var amsConfigJson = '.concat(t,';\n    <\/script>\n\n    <link rel="stylesheet" href="https://h5rsc.vipstatic.com/ams/element-ui@2.11.1/theme-chalk/index.css" />\n    <script src="https://h5rsc.vipstatic.com/ams/vue@2.6.10.js"><\/script>\n    <script src="https://h5rsc.vipstatic.com/ams/element-ui@2.11.1/index.js"><\/script>\n    <script src="https://unpkg.com/@ams-team/ams/lib/ams.js"><\/script>\n    <script id="ams-config" src="http://h5rsc.vipstatic.com/ams/ams-init@0.1.5.js"><\/script>\n</body>\n</html>');e.download=a,e.href="data:text/plain,".concat(i)}t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return s}));var s="https://www.yournana.club/vipshop/"},971:function(e,a,t){"use strict";t.r(a);var i=t(126),s=t(150),c={imageField1:{resources:{imageRes:{api:{prefix:s.b,create:"create"},fields:{image1:{label:"图片上传",type:"image"},image3:{label:"带校验",type:"image",rules:[{required:!0,message:"请上传图片",trigger:"change"}]}}}},blocks:{editImage:{type:"form",resource:"imageRes",ctx:"edit",style:{width:"50%"},events:{submit:"@validate @create"},operations:{submit:{type:"button",label:"提交"}}},viewImage:{type:"form",resource:"imageRes",ctx:"view",style:{width:"50%"}}}},imageField2:{type:"form",resource:{fields:{image3:{label:"尺寸范围",type:"image",tip:"范围240-640",successUrlKey:"url",check:{imgMaxWidth:640,imgMaxHeight:640,imgMinWidth:240,imgMinHeight:240},default:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",props:{action:"".concat(s.b,"upload-image")}},image4:{label:"固定尺寸",type:"image",tip:"640x640",successUrlKey:"url",check:{imgWidth:640,imgHeight:640},props:{action:"".concat(s.b,"upload-image")}},image5:{label:"图片类型",type:"image",tip:"只能上传png文件",successUrlKey:"url",props:{accept:"image/png",action:"".concat(s.b,"upload-image")}},image6:{label:"图片大小",type:"image",tip:"不能超过50kb",successUrlKey:"url",check:{maxSizeInKB:50}}}},ctx:"edit"},imageField3:{type:"form",resource:{fields:{image1:{label:"默认",type:"image",props:{action:"".concat(s.b,"upload-image"),"show-file-list":!0,"file-list":[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"精选美景图片",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]}},image2:{label:"picture",type:"image",tip:"只能不超过50kb的图片",props:{action:"".concat(s.b,"upload-image"),"list-type":"picture","show-file-list":!0,"file-list":[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"精选美景图片",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]}},image3:{label:"picture-card",type:"image",props:{action:"".concat(s.b,"upload-image"),"list-type":"picture-card","show-file-list":!0,"file-list":[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"精选美景图片",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]}}}},ctx:"edit"},imageField4:{type:"form",resource:{fields:{image3:{label:"默认图列表",type:"image",props:{action:"".concat(s.b,"upload-image"),"default-image-list":[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"精选美景图片精选美景图片",url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"}]}},image4:{label:"默认列表图为空",type:"image",props:{action:"".concat(s.b,"upload-image"),"default-image-list":[]}},image5:{label:"加载默认列表图",type:"image",default:"http://demo.sc.chinaz.com/Files/pic/icons/7458/m1.png",props:{action:"".concat(s.b,"upload-image"),"default-image-list":null}}}},props:{"label-width":"150px"},actions:{init:function(){var e=this;setTimeout((function(){e.fields.image5.props["default-image-list"]=[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"精选美景图片精选美景图片",url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"}]}),2e3)}},ctx:"edit"},imageField5:{type:"form",resource:{fields:{image1:{label:"大图预览",type:"image"},image2:{label:"预览列表",type:"image",props:{"preview-src-list":["https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100","https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"]}}}},ctx:"view",data:{image1:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",image2:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"}},imageFieldHeadimage:{type:"form",resource:{fields:{image1:{label:"头像上传",type:"image",props:{headimage:!0}},image2:{label:"头像展示",type:"image",ctx:"view",default:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",props:{headimage:!0}}}},ctx:"edit"}},o=t(138),l=t.n(o),m=t(137),n=t.n(m),p={mixins:[i.a],mounted:function(){var e=l()(c[this.blockName]);this.configCode=n()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,c[this.blockName]),this.init=!0)}},r=t(1),g=Object(r.a)(p,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?t("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),t("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[t("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),t("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[t("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?t("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);a.default=g.exports}}]);