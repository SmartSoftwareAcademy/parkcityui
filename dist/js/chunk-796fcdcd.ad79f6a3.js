(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-796fcdcd"],{"06cd":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",[s("PageHeader",{attrs:{title:t.title,items:t.items}}),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"mb-3"},[s("a",{staticClass:"btn btn-success",attrs:{href:"javascript:void(0);"}},[s("i",{staticClass:"mdi mdi-plus me-2"}),t._v(" Add New")])])])]),s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col-sm-12 col-md-6"},[s("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[s("label",{staticClass:"d-inline-flex align-items-center"},[t._v(" Show "),s("b-form-select",{attrs:{size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),t._v(" entries ")],1)])]),s("div",{staticClass:"col-sm-12 col-md-6"},[s("div",{staticClass:"dataTables_filter text-md-end",attrs:{id:"tickets-table_filter"}},[s("label",{staticClass:"d-inline-flex align-items-center"},[s("b-form-input",{staticClass:"form-control rounded bg-light border-0 ms-2",attrs:{type:"search",placeholder:"Search..."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)])])]),s("div",{staticClass:"table-responsive mb-0"},[s("b-table",{staticClass:"table table-centered table-nowrap",attrs:{items:t.userList,fields:t.fields,responsive:"sm","per-page":t.perPage,"current-page":t.currentPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(check)",fn:function(t){return[s("div",{staticClass:"custom-control custom-checkbox"},[s("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"contacusercheck"+t.item.id}}),s("label",{staticClass:"custom-control-label",attrs:{for:"contacusercheck"+t.item.id}})])]}},{key:"cell(name)",fn:function(e){return[e.item.profile?s("img",{staticClass:"avatar-xs rounded-circle me-2",attrs:{src:e.item.profile,alt:""}}):t._e(),e.item.profile?t._e():s("div",{staticClass:"avatar-xs d-inline-block me-2"},[s("div",{staticClass:"avatar-title bg-soft-primary rounded-circle text-primary"},[s("i",{staticClass:"mdi mdi-account-circle m-0"})])]),s("a",{staticClass:"text-body",attrs:{href:"#"}},[t._v(t._s(e.item.name))])]}},{key:"cell(action)",fn:function(){return[s("ul",{staticClass:"list-inline mb-0"},[s("li",{staticClass:"list-inline-item"},[s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"px-2 text-primary",attrs:{href:"javascript:void(0);",title:"Edit"}},[s("i",{staticClass:"uil uil-pen font-size-18"})])]),s("li",{staticClass:"list-inline-item"},[s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"px-2 text-danger",attrs:{href:"javascript:void(0);",title:"Delete"}},[s("i",{staticClass:"uil uil-trash-alt font-size-18"})])]),s("b-dropdown",{staticClass:"list-inline-item",attrs:{variant:"white",right:"","toggle-class":"text-muted font-size-18 px-2"},scopedSlots:t._u([{key:"button-content",fn:function(){return[s("i",{staticClass:"uil uil-ellipsis-v"})]},proxy:!0}])},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])],1)]},proxy:!0}])})],1),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"dataTables_paginate paging_simple_numbers float-end"},[s("ul",{staticClass:"pagination pagination-rounded mb-0"},[s("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])])])])])],1)},a=[],l=(s("a4d3"),s("e01a"),s("5658")),r=s("2579"),o=s("c2a4"),n={components:{Layout:l["a"],PageHeader:r["a"]},page:{title:"User List",meta:[{name:"description",content:o.description}]},data:function(){return{title:"Client  Suggestions",items:[{text:"Suggestions"},{text:"List",active:!0}],userList:[{id:1,profile:s("95f5"),name:"Jolly Ryles",position:"Improve on parking slot assigning creteria",email:"SimonRyles@minible.com"},{id:2,profile:s("61ae"),name:"Marion Walker",position:"The app response time is amazing but could be improved",email:"MarionWalker@minible.com"}],totalRows:1,currentPage:1,perPage:10,pageOptions:[10,25,50,100],filter:null,filterOn:[],sortBy:"age",sortDesc:!1,fields:[{key:"check",label:""},{key:"position",label:"Sugeestion"},{key:"name",label:"User"},{key:"email"},"action"]}},computed:{rows:function(){return this.userList.length}},mounted:function(){this.totalRows=this.items.length},methods:{onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}},middleware:"authentication"},c=n,d=s("2877"),m=Object(d["a"])(c,i,a,!1,null,null,null);e["default"]=m.exports},"95f5":function(t,e,s){t.exports=s.p+"img/avatar-2.02aea0c2.jpg"}}]);
//# sourceMappingURL=chunk-796fcdcd.ad79f6a3.js.map