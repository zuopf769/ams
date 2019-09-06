(window.webpackJsonp=window.webpackJsonp||[]).push([[9,51],{237:function(e,n,a){"use strict";var t=a(0),s=(a(244),a(242)),i=a.n(s),r=a(238),l=a.n(r),o=a(249),d=a(245),c=a.n(d),m=(a(246),a(247)),p=a.n(m),u=a(248),g=a.n(u);t.default.use(i.a),t.default.use(l.a),console.log("ams init config"),t.default.use(p.a),t.default.use(g.a),"undefined"!=typeof window&&(window.Vue=t.default),t.default.use(o.a,{languages:{javascript:c.a}}),l.a.config({resource:{api:{withCredentials:!1}}})},406:function(e,n,a){"use strict";n.a=[{materielId:2,title:"图表",name:"block-chart",author:"hodor.wang",homepage:"",description:"图表",version:"0.1.7",sdkVersion:"0",createTime:1553685267e3,updateTime:1559819021e3,status:1,isDeleted:0,classId:1,image:"/ams/market/15556540156581.png",readme:"# Chart 图表\n\n- 定制图表block基于echart插件实现\n- 与其他block区别在于新增options配置项，options配置规则同echart配置对应\n- 其他机制实现同ams基础block\n- 区别：\n    - 对options中的数据可使用'data.xxx'字符标识与block.data数据动态绑定\n    - 数据变化只需关注block.data，即可实现图表更新\n",content:"{\"amsConfig\":{config:{\n    BASE: 'CONFIG_BLOCK',\n    type: {\n        default: 'chart'\n    },\n    style: {\n        current: 'value',\n        fields: {\n            value: {\n                default: {\n                    width: '400px',\n                    height: '400px',\n                }\n            }\n        }\n    },\n    data: {\n        current: 'value',\n        fields: {\n            value: {\n                default: {\n                    legend: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）'],\n                    series: [\n                        {\n                            value: [4300, 10000, 28000, 35000, 50000, 19000],\n                            name: '预算分配（Allocated Budget）'\n                        },\n                        {\n                            value: [5000, 14000, 28000, 31000, 42000, 21000],\n                            name: '实际开销（Actual Spending）'\n                        }\n                    ],\n                    indicator: [\n                        { name: '销售（sales）', max: 6500 },\n                        { name: '管理（Administration）', max: 16000 },\n                        { name: '信息技术（Information Techology）', max: 30000 },\n                        { name: '客服（Customer Support）', max: 38000 },\n                        { name: '研发（Development）', max: 52000 },\n                        { name: '市场（Marketing）', max: 25000 }\n                    ]\n                }\n            }\n        }\n    },\n    options: {\n        current: 'value',\n        fields: {\n            value: {\n                default: {\n                    BASE: 'RADAR',\n                    radar: {\n                        indicator: 'data.indicator'\n                    },\n                    series: [{\n                        type: 'radar',\n                        name: '预算 vs 开销（Budget vs spending）',\n                        data: 'data.series'\n                    }]\n                }\n            },\n        }\n    }\n\n},defaults:{}},\"author\":\"edward.shao\",\"tags\":\"图表,报表\",\"cdn\":[\"https://h5rsc.vipstatic.com/ams/echarts@4.2.1/dist/echarts.min.js\"]}"},{materielId:5,title:"array列表",name:"field-arraylist",author:"hodor.wang",homepage:"",description:"array列表",version:"1.1.3",sdkVersion:"0",createTime:1553685267e3,updateTime:1559819021e3,status:1,isDeleted:0,classId:1,image:"/ams/market/15556540440783.png",readme:"# arraylist array列表\n\n## 使用\n\n在AMS的resourc配置使用：\n\n```js\ntestEditor: {\n    type: 'arraylist',\n    label: 'arraylist'\n}\n```\n",content:"{\"amsConfig\":{config:{\n    BASE: 'CONFIG_FIELD',\n    type: {\n        default: 'arraylist'\n    },\n    fields: {\n        type: 'ams-code',\n        label: 'field配置',\n        info: '对象元素的field配置，可以包含任意field',\n        valueType: 'object',\n        // on: {\n        //     change(val) { console.log('change', val) },\n        //     blur(val) { console.log('blur', val) },\n        // },\n        default: {\n            a: { type: 'color', label: 'a' },\n            b: { type: 'text', label: 'b' }\n        }\n    },\n    default: {\n        type: 'ams-code',\n        valueType: 'object',\n        default: [{ a: '#f00', b: 'text' }, { a: '#0f0', b: 'te2xt' }]\n    },\n},defaults:{}},\"author\":\"zebin.wu\",\"tags\":\"arrar,列表\",\"cdn\":[]}"},{materielId:6,title:"富文本编辑器",name:"field-editor",author:"hodor.wang",homepage:"",description:"富文本编辑器",version:"0.2.4",sdkVersion:"0",createTime:1553685267e3,updateTime:1559819021e3,status:1,isDeleted:0,classId:1,image:"/ams/market/15556540542269.png",readme:"# editor 富文本编辑器\n\n富文本编辑器，依赖于 `vue-quill-editor`",content:'{"amsConfig":{config:{\n    BASE: \'CONFIG_FIELD\',\n    type: {\n        default: \'editor\'\n    },\n    default: {\n        type: \'textarea\',\n        default: \'文本文本\'\n    }\n},defaults:{}},"author":"edward.shao","tags":"富文本,编辑器","cdn":["https://h5rsc.vipstatic.com/ams/vue-quill-editor@3.0.6/quill/quill.min.js","https://h5rsc.vipstatic.com/ams/vue-quill-editor@3.0.6/dist/vue-quill-editor.js"]}'},{materielId:7,title:"markdown编辑器",name:"field-markdown",author:"hodor.wang",homepage:"",description:"markdown编辑器",version:"0.2.4",sdkVersion:"0",createTime:1553685268e3,updateTime:1559819021e3,status:1,isDeleted:0,classId:1,image:"/ams/market/15556540626274.png",readme:"# Markdown 编辑器\n\nMarkdown编辑器，依赖于mavon-editor\n\n## 使用\n\n在AMS的resourc配置使用：\n\n```js\ntestTag: {\n    type: 'markdown',\n    label: 'markdown'\n}\n```\n",content:'{"amsConfig":{config:{\n    BASE: \'CONFIG_FIELD\',\n    type: {\n        default: \'markdown\'\n    },\n    default: {\n        type: \'textarea\',\n        default: \'文本文本\'\n    }\n},defaults:{}},"author":"edward.shao","tags":"markdown,编辑器","cdn":["https://h5rsc.vipstatic.com/ams/mavon-editor@2.6.17/dist/mavon-editor.js"]}'},{materielId:8,title:"标签",name:"field-tag",author:"hodor.wang",homepage:"",description:"标签",version:"1.2.1",sdkVersion:"0",createTime:1553685268e3,updateTime:1559819021e3,status:1,isDeleted:0,classId:1,image:"/ams/market/15559230062705.png",readme:"# Tag 标签\n\n## 使用\n\n在AMS的resourc配置使用：\n\n```js\n// 输入创建标签\ntestTag: {\n    type: 'tag',\n    label: '标签',\n    props: {\n        'allow-create': true\n    }\n}\n\n// 选择标签（接口数据）\ntestTag: {\n    type: 'tag',\n    label: '标签',\n    props: {\n        placeholder: '请输入标签',\n        action: 'https://www.easy-mock.com/mock/5a0023effbbb09615044cb82/tag',\n        successCode: 200\n    }\n}\n\n// 选择标签（静态数据）\ntestTag: {\n    type: 'tag',\n    label: '标签',\n    props: {\n        placeholder: '请选择标签',\n        options: [\n            {\n                'id': 2001,\n                'name': '电商',\n            },\n            {\n                'id': 2002,\n                'name': '游戏',\n            },\n            {\n                'id': 2003,\n                'name': '效率',\n            },\n            {\n                'id': 2004,\n                'name': '资讯',\n            },\n            {\n                'id': 2005,\n                'name': '社区',\n            }\n        ]\n    }\n}\n\n// 创建或选择标签（静态数据，也支持接口数据）\ntestTag: {\n    type: 'tag',\n    label: '标签',\n    props: {\n        'allow-create': true,\n        options: ['唯品会', '天猫', '淘宝', '京东', '拼多多']\n    }\n}\n```\n\n接口数据结构：\n\n```js\n// 输入创建标签\n{\n    \"code\": 200,\n    \"data\": {\n        \"list\":[\"aaaa.bbb.name\", \"aaaa.ccc.name\"]\n    },\n    \"msg\": \"success\"\n}\n\n// 从接口选择已有标签添加模式\n{\n    \"code\": 200,\n    \"data\": {\n        \"list\":[\n            {\n                \"id\": 2001,\n                \"name\": \"aaaa.bbb.name\",\n                \"subName\": \"分类一\" //【可选】显示在下拉选择的次标题，如果没有subName，下拉次标题显示id\n            }\n            ...\n        ]\n    },\n    \"msg\": \"success\"\n}\n```\n\n> 其中上面每个标签包含`id`、`name`和`subName`三个字段，建议接口统一输出同名的字段。如果有旧接口无法兼容，可以通过`props.idKey`、`props.nameKey`和`props.subNameKey`来配置和接口对应的字段名。\n\n## 传值\nArray\n\n```js\n// 自由输入添加标签模式\n[\"aaaa.bbb.name\", \"aaaa.ccc.name\"]\n\n// 选择标签\n[\n    {\n        \"id\":2001,\n        \"name\":\"aaaa.bbb.name\",\n        \"subName\": \"分类一\" // //【可选】显示在下拉选择的次标题，如果没有subName，下拉次标题显示id\n    },\n    ...\n]\n```\n\n## 配置\n\n|  参数  |  类型  |  必填  |  说明  |  默认值 |\n| ---- | ---- | ---- | ---- | ---- |\n| type | string | 是 | 文本类型 | 固定值为`tag` |\n| label | string | 否 | 标签文本 | - |\n| hidden | boolean | 否 | 是否隐藏field | `false`|\n| rules | array | 否 | 校验规则，详见[async-validator](https://github.com/yiminghe/async-validator) | - |\n| collapseLimit | number | 否 | 展示状态下，最多显示的标签个数，超出隐藏 | - |\n| props | object | - | 补充属性 | - |\n| props.action | string | 否 | 标签数据接口地址（优先级高于`options`） | - |\n| props.options | array | 否 | 标签静态数据接口地址 | - |\n| props.method | string | 否 | 接口请求方法， | `GET` |\n| props.successCode | number | 否 | 接口请求成功code | 和resource的全局配置里的`api` `successCode` 一致 |\n| props.withCredentials | boolean | 否 | 接口请求是否携带cookie | 和resource的全局配置里的`api` `withCredentials` 一致 |\n| props.placeholder | string | 否 | 输入框的`placeholder`配置 | `请输入...` |\n| props.button | string | 否 | 添加按钮的文案配置 | `+ 添加` |\n| props.size | string | 否 | 尺寸，可取值：medium / small / mini | -  |\n| props.closable | boolean | 否 | 编辑状态下，标签是否可关闭 | `false` |\n| props.template | string | 否 | 标签显示的内容模板，语法和vue的模板语法类似，比如 `{{ name }} - {{ subName }} - {{ id }}` （其中`name`、`subName`和`id`是数据结构里的字段）| 默认只展示`name`字段 |\n| props['multiple-limit'] | number | 否 | 用户最多可以选择的项目数，为 0 则不限制 | 0 |\n| props['allow-create'] | boolean | 否 | 输入文字来创建新的标签（注意：允许输入创建，数据结构统一使用元素为字符串的数组格式 `[\"aaaa.bbb.name\", \"aaaa.ccc.name\"]`） | `false` |\n| props.idKey | string | 否 | 表示`id`这个字段key | `id` |\n| props.nameKey | string | 否 | 表示`name`这个字段key | `name` |\n| props.subNameKey | string | 否 | 表示`subName`这个字段key | `subName` |\n\n更多的props配置请查看：\n\n+ [element-input](http://element-cn.eleme.io/#/zh-CN/component/input)\n+ [element-tag](http://element-cn.eleme.io/#/zh-CN/component/tag)\n",content:"{\"amsConfig\":{config:{\n    BASE: 'CONFIG_FIELD',\n    type: {\n        default: 'tag'\n    },\n    default: {\n        type: 'ams-code',\n        valueType: 'js',\n        default: [\n            { id: 2002, name: 'aaaa.ccc.name', subName: '' },\n            { id: 2003, name: '组货分类（场景类型）', subName: '' }\n        ]\n    },\n    props: {\n        current: 'value',\n        fields: {\n            value: {\n                default: {\n                    placeholder: '请输入标签',\n                    action: 'https://www.easy-mock.com/mock/5a0023effbbb09615044cb82/tag',\n                    successCode: 200,\n                }\n            }\n        }\n    }\n},defaults:{}},\"author\":\"jun85.li\",\"tags\":\"标签,tag\",\"cdn\":[]}"},{materielId:11,title:"ams可视化配置工具",name:"block-ams-config",author:"hodor.wang",homepage:"",description:"ams可视化配置工具",version:"0.3.2",sdkVersion:"0",createTime:1554293688e3,updateTime:155981902e4,status:1,isDeleted:0,classId:1,image:"/ams/market/15556540911669.png",readme:"# 可视化配置工具",content:'{"amsConfig":"","author":"hodor.wang","tags":"ams可视化,工具","cdn":["https://h5rsc.vipstatic.com/ams/fields/field-ams-code@0.3.1.js"]}'},{materielId:12,title:"field-array-simple",name:"field-array-simple",author:"hodor.wang",homepage:"",description:"array-simple",version:"1.2.2",sdkVersion:"0",createTime:1554293688e3,updateTime:1559819021e3,status:1,isDeleted:0,classId:1,image:"/ams/market/15556540979608.png",readme:"# Array-simple\n\n\n## 使用\n\n在AMS的resourc配置使用：\n\n```js\nArrayObject: {\n    type: 'array-simple',\n    label: 'ArrayObject',\n    field: {\n        type: 'object',\n        label: '',\n        fields: {\n            text: {\n                type: 'text',\n                rules: [\n                    {\n                        required: true,\n                        message: '请输入活动名称',\n                        trigger: 'blur'\n                    },\n                    {\n                        min: 3,\n                        max: 5,\n                        message: '长度在 3 到 5 个字符',\n                        trigger: 'blur'\n                    }\n                ]\n            },\n            testSelect: {\n                type: 'select',\n                collapseLimit: true,\n                props: {\n                    options: {\n                        a: '黄金糕',\n                        b: '双皮奶',\n                        c: '蚵仔煎',\n                        d: '龙须面',\n                        e: '北京烤鸭'\n                    }\n                },\n                style: {\n                    width: '500px'\n                }\n            }\n        },\n        layout: {\n            text: ['text', 'testSelect']\n        },\n        deletFunc: function(index) {\n            this.value.splice(index, 1, {\n                ...this.value[index],\n                delet: 1\n            });\n        },\n        show: function(data) {\n            // console.log('ArrayObject', data);\n            if (data.delet === 1) {\n                return false;\n            } else {\n                return true;\n            }\n        }\n    }\n},\n```\n\n接口数据结构：\n\n```\n{\n    \"code\": 200,\n    \"data\": {\n        \"list\":[\n            {\n                \"ArrayObject\": [\n                    {\n                        \"text\": \"234\",\n                        \"textSelect\": \"a,b,c\"\n                    },\n                    {\n                        \"text\": \"345\",\n                        \"textSelect\": \"a,b\"\n                    }\n                ]\n            }\n            ...\n        ]\n    },\n    \"msg\": \"success\"\n}\n```",content:"{\"amsConfig\":{config:{\n    BASE: 'CONFIG_FIELD',\n    type: {\n        default: 'array-simple'\n    },\n    field: {\n        type: 'ams-code',\n        label: 'field配置',\n        info: '数组元素的基础field配置',\n        valueType: 'object',\n        // on: {\n        //     change(val) { console.log('change', val) },\n        //     blur(val) { console.log('blur', val) },\n        // },\n        default: {\n            type: 'text',\n            label: '元素'\n        }\n    },\n    default: {\n        type: 'ams-code',\n        valueType: 'object',\n        default: ['1', '2']\n    }\n},defaults:{}},\"author\":\"edward.shao\",\"tags\":\"\",\"cdn\":[]}"},{materielId:15,title:"ams代码编辑器",name:"field-ams-code",author:"hodor.wang",homepage:"",description:"ams代码编辑器",version:"0.3.1",sdkVersion:"0",createTime:1555583513e3,updateTime:1559819021e3,status:1,isDeleted:0,classId:1,image:"/ams/market/15556541381327.png",readme:"# ams-code 可视化代码编辑器\n\n",content:'{"amsConfig":{config:{\n    BASE: \'CONFIG_FIELD\',\n    type: {\n        default: \'ams-code\'\n    },\n    default: {\n        type: \'ams-code\',\n        valueType: \'js\',\n        default: \'\'\n    }\n},defaults:{}},"author":"hodor.wang","tags":"代码编辑器,可视化","cdn":[]}'}]},407:function(e,n,a){"use strict";n.a={key:"materielId",api:{contentType:"form"},fields:{materielId:{label:"materielId",type:"text",ctx:"view"},name:{label:"物料名",type:"text"},image:{label:"展示图片",type:"image"},title:{label:"标题",type:"text"},author:{label:"作者",type:"text"},content:{type:"text",hidden:!0,label:"content"},version:{label:"版本号",type:"text"},sdkVersion:{label:"sdk版本",type:"text",view:function(e){return console.log(e,"sdkVersion"),"0"===e?"latest":e}},createTime:{label:"创建时间",type:"datetime"},updateTime:{label:"更新时间",type:"datetime"},status:{label:"状态",type:"switch",default:1},readme:{label:"readme",type:"textarea",props:{rows:16}},homepage:{label:"首页",type:"text",show:"homepage"},description:{label:"说明",type:"textarea",view:function(e){return e||"暂无相关说明"}},tags:{label:"标签",type:"checkbox",props:{options:{}}}}}},518:function(e,n,a){"use strict";a.r(n);a(93),a(29),a(59),a(42),a(30);var t=a(238),s=a.n(t),i={mixins:[s.a.mixins.blockMixin],data:function(){return{type:"material-card",filters:{},searchs:{},data:{list:[]},sortField:null,sortOrder:null,activeIndex:0}},computed:{list:function(){if(this.block&&this.data&&this.data.list&&this.data.list.filter){var e="field"===this.data.type?/^field-/:/^block-/;return this.data.list.filter(function(n){return e.test(n.name)})}return[]}},created:function(){console.log("---created---",this)},methods:{parseTime:function(e){return s.a.utils.parseTime(e,"yyyy-MM-dd HH:mm")},newCompute:function(e){return Date.parse(new Date)-e<2592e6},handleClassChange:function(e,n){this.activeIndex=n,this.data.searchs=this.data.searchs||{},this.data.searchs.classId=e.id,this.emitEvent("list")},handlerSearch:function(){console.log("handlerSearch",this.searchs),this.data.page=1,this.emitEvent("list")},handleSizeChange:function(){console.log("handleSizeChange"),this.data.page=1,this.emitEvent("list")},handleCurrentChange:function(e){console.log("handleCurrentChange"),this.emitEvent("list")},handleSortChange:function(e){var n=e.prop,a=e.order;console.log("handleSortChange",n,a),this.sortField=n,this.sortOrder=a,this.data.page=1,this.emitEvent("list")},handleFilterChange:function(e){var n=this;console.log("handleFilterChange",e);var a=!1;Object.keys(e).forEach(function(t){if(console.log("this.block.filters[key].remote",n.block.filters[t].remote),n.block.filters[t].remote){a=!0;var s=e[t].join(",");s?n.filters[t]=s:delete n.filters[t]}}),a&&(this.data.page=1,this.emitEvent("list"))}}},r=a(13),l=Object(r.a)(i,function(){var e=this,n=e.$createElement,a=e._self._c||n;return e.ready?a("div",{class:"ams-material-card ams-block-"+e.type,style:e.block.style},[a("ams-blocks",{attrs:{blocks:e.block.slotBlocks.top}}),e._v(" "),a("ams-operations",{attrs:{name:e.name,"slot-name":"searchs"}}),e._v(" "),a("div",{staticClass:"ams-card-list"},e._l(e.list,function(n,t){return e.block?a("div",{key:t,staticClass:"card-item"},[a("el-card",{attrs:{"body-style":{padding:"0px"}}},[a("div",{staticClass:"card-item-snapshoot"},[e.newCompute(n.updateTime)?a("span",{staticClass:"new-card-icon"},[e._v("NEW")]):e._e(),e._v(" "),a("img",{attrs:{src:n.image||"https://h5rsc.vipstatic.com/ams/ams-logo.png",alt:""}})]),e._v(" "),a("div",{staticClass:"card-item-bottom"},[a("span",{staticClass:"title"},[e._v(e._s(n.title))]),e._v(" "),a("span",{staticClass:"time"},[e._v(e._s(e.parseTime(n.updateTime)))])]),e._v(" "),a("div",{staticClass:"card-item-mask"},[a("h5",[e._v(e._s(n.title))]),e._v(" "),a("p",[e._v("包名： "+e._s(n.name))]),e._v(" "),a("p",[e._v("版本号： "+e._s(n.version))]),e._v(" "),a("p",[e._v("更新日期： "+e._s(e.parseTime(n.updateTime)))]),e._v(" "),a("p",[e._v("简介： "+e._s(n.description))]),e._v(" "),e.block.operations?a("el-row",{staticClass:"card-oparation"},[a("ams-operations",{attrs:{name:e.name,context:n}})],1):e._e()],1)])],1):e._e()}),0),e._v(" "),e.data.list.length<=0?a("div",{staticClass:"empty"},[a("div",[e._v("暂无数据")])]):e._e(),e._v(" "),e.data.total?a("el-pagination",{attrs:{"current-page":e.data.page,"page-size":e.data.pageSize,total:e.data.total,layout:"prev, sizes, pager, next, jumper",background:"",align:"right"},on:{"update:currentPage":function(n){return e.$set(e.data,"page",n)},"update:current-page":function(n){return e.$set(e.data,"page",n)},"update:pageSize":function(n){return e.$set(e.data,"pageSize",n)},"update:page-size":function(n){return e.$set(e.data,"pageSize",n)},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e(),e._v(" "),a("ams-blocks",{attrs:{blocks:e.block.blocks}})],1):e._e()},[],!1,null,null,null);n.default=l.exports},985:function(e,n,a){"use strict";a.r(n);var t=a(238),s=a.n(t),i=(a(237),a(406)),r={type:"material-card",resource:"resource-material",ctx:"edit",filters:{},sorts:{},operations:{view:{type:"button",label:"查看详情",props:{type:"primary",size:"mini",round:!0,icon:"el-icon-view"},style:{"margin-top":"7px"}}},data:{list:{},page:1,pageSize:100,total:0},events:{init:"@list",view:"@view"},actions:{view:function(e){var n=e.$prevReturn;window.open("/ams/market/detail.html?type=".concat(this.data.type,"&materielId=").concat(n.materielId),"_blank")},list:function(){this.data.list=i.a}}},l=a(518),o={type:"material-card",view:l.default,install:function(e){e.component("ams-block-".concat(this.type),l.default)}},d=a(407);s.a.registerBlock(o);var c={props:{type:String},data:function(){return{init:!1}},mounted:function(){s.a.resource("resource-material",d.a);var e=s.a.utils.deepExtend({data:{type:this.type}},r);s.a.block("market-material",e),this.init=!0}},m=a(13),p=Object(m.a)(c,function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"ams-material"},[a("aside",{staticClass:"sidebar ams-sidebar"},[a("ul",{staticClass:"sidebar-links"},[e._m(0),e._v(" "),a("li",[a("a",{class:{active:"block"===e.type,"sidebar-link":!0},attrs:{href:"/ams/market/block.html"}},[e._v("区块物料")])]),e._v(" "),a("li",[a("a",{class:{active:"field"===e.type,"sidebar-link":!0},attrs:{href:"/ams/market/field.html"}},[e._v("字段物料")])])])]),e._v(" "),e.init?a("ams-block",{staticClass:"ams-material-main",attrs:{name:"market-material"}}):e._e()],1)},[function(){var e=this.$createElement,n=this._self._c||e;return n("li",[n("a",{staticClass:"sidebar-link",attrs:{href:"/ams/market/"}},[this._v("模板物料")])])}],!1,null,null,null);n.default=p.exports}}]);