(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7af5a274"],{"1e3f":function(t,e,i){},"95f5":function(t,e,i){t.exports=i.p+"img/avatar-2.02aea0c2.jpg"},a434:function(t,e,i){"use strict";var a=i("23e7"),s=i("23cb"),o=i("a691"),l=i("50c4"),r=i("7b0b"),n=i("65f0"),c=i("8418"),d=i("1dde"),m=i("ae40"),u=d("splice"),p=m("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,h=Math.min,b=9007199254740991,y="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!u||!p},{splice:function(t,e){var i,a,d,m,u,p,v=r(this),C=l(v.length),g=s(t,C),w=arguments.length;if(0===w?i=a=0:1===w?(i=0,a=C-g):(i=w-2,a=h(f(o(e),0),C-g)),C+i-a>b)throw TypeError(y);for(d=n(v,a),m=0;m<a;m++)u=g+m,u in v&&c(d,m,v[u]);if(d.length=a,i<a){for(m=g;m<C-a;m++)u=m+a,p=m+i,u in v?v[p]=v[u]:delete v[p];for(m=C;m>C-a+i;m--)delete v[m-1]}else if(i>a)for(m=C-a;m>g;m--)u=m+a-1,p=m+i-1,u in v?v[p]=v[u]:delete v[p];for(m=0;m<i;m++)v[m+g]=arguments[m+2];return v.length=C-a+i,d}})},b514:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("PageHeader",{attrs:{title:t.title,items:t.items}}),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"mb-3"},[i("a",{directives:[{name:"b-modal",rawName:"v-b-modal.add-slot",modifiers:{"add-slot":!0}}],staticClass:"btn btn-success",attrs:{href:"javascript:void(0);"}},[i("i",{staticClass:"mdi mdi-plus me-2"}),t._v(" Add New")])])])]),i("div",{staticClass:"row mt-4"},[i("div",{staticClass:"col-sm-12 col-md-6"},[i("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[i("label",{staticClass:"d-inline-flex align-items-center"},[t._v(" Show "),i("b-form-select",{attrs:{size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),t._v(" entries ")],1)])]),i("div",{staticClass:"col-sm-12 col-md-6"},[i("div",{staticClass:"dataTables_filter text-md-end",attrs:{id:"tickets-table_filter"}},[i("label",{staticClass:"d-inline-flex align-items-center"},[i("b-form-input",{staticClass:"form-control rounded bg-light border-0 ms-2",attrs:{type:"search",placeholder:"Search..."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)])])]),i("div",{staticClass:"table-responsive mb-0"},[i("b-table",{staticClass:"table table-centered table-nowrap",attrs:{items:t.userList,fields:t.fields,responsive:"sm","per-page":t.perPage,"current-page":t.currentPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(check)",fn:function(t){return[i("div",{staticClass:"custom-control custom-checkbox"},[i("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"contacusercheck"+t.item.id}}),i("label",{staticClass:"custom-control-label",attrs:{for:"contacusercheck"+t.item.id}})])]}},{key:"cell(name)",fn:function(e){return[e.item.profile?i("img",{staticClass:"avatar-xs rounded-circle me-2",attrs:{src:e.item.profile,alt:""}}):t._e(),e.item.profile?t._e():i("div",{staticClass:"avatar-xs d-inline-block me-2"},[i("div",{staticClass:"avatar-title bg-soft-primary rounded-circle text-primary"},[i("i",{staticClass:"mdi mdi-account-circle m-0"})])]),i("a",{staticClass:"text-body",attrs:{href:"#"}},[t._v(t._s(e.item.name))])]}},{key:"cell(action)",fn:function(e){return[i("ul",{staticClass:"list-inline mb-0"},[i("li",{staticClass:"list-inline-item"},[i("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}},{name:"b-modal",rawName:"v-b-modal.add-slot",modifiers:{"add-slot":!0}}],staticClass:"px-2 text-primary",attrs:{href:"javascript:void(0);",title:"Edit"},on:{click:function(i){return t.edit(e.item.id,e.index,e.item.name,e.item.capacity,e.item.city,e.item.location,e.item.date)}}},[i("i",{staticClass:"uil uil-pen font-size-18"})])]),i("li",{staticClass:"list-inline-item"},[i("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"px-2 text-danger",attrs:{href:"javascript:void(0);",title:"Delete"},on:{click:function(i){return t.deleterec(e.item.id,e.index,e.item.name,e.item.capacity,e.item.city,e.item.location,e.item.date)}}},[i("i",{staticClass:"uil uil-trash-alt font-size-18"})])]),i("b-dropdown",{staticClass:"list-inline-item",attrs:{variant:"white",right:"","toggle-class":"text-muted font-size-18 px-2"},scopedSlots:t._u([{key:"button-content",fn:function(){return[i("i",{staticClass:"uil uil-ellipsis-v"})]},proxy:!0}],null,!0)},[i("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),i("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),i("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])],1)]}}])})],1),i("b-modal",{attrs:{id:"add-slot",size:"xl",title:t.modaltitle}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-12"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-12"},[i("div",{staticClass:"mt-4"},[i("h5",{staticClass:"font-size-14 mb-4"},[i("i",{staticClass:"mdi mdi-arrow-right text-primary me-1"}),t._v(" "+t._s(t.title)+" ")]),i("form",{on:{submit:function(e){return e.preventDefault(),t.add()}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("b-form-group",{staticClass:"mb-3",attrs:{label:"Name","label-for":"formrow-name-input"}},[i("b-form-input",{attrs:{id:"formrow-name-input",type:"text",placeholder:"Mercus Ryles"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),i("div",{staticClass:"col-md-6"},[i("b-form-group",{staticClass:"mb-3",attrs:{label:"Capacity","label-for":"formrow-idno-input"}},[i("b-form-input",{attrs:{id:"formrow-idno-input",type:"text",placeholder:"64848494"},model:{value:t.capacity,callback:function(e){t.capacity=e},expression:"capacity"}})],1)],1),i("div",{staticClass:"col-md-6"},[i("b-form-group",{staticClass:"mb-3",attrs:{label:"City","label-for":"formrow-address-input"}},[i("b-form-input",{attrs:{id:"formrow-address-input",type:"text",placeholder:"kisumu"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1)],1),i("div",{staticClass:"col-md-6"},[i("b-form-group",{staticClass:"mb-3",attrs:{label:"Location","label-for":"formrow-phone-input"}},[i("b-form-input",{attrs:{id:"formrow-phone-input",type:"text",placeholder:"(-24.66,66.89)"},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}})],1)],1),i("div",{staticClass:"col-md-6"},[i("b-form-group",{staticClass:"mb-3",attrs:{label:"Date","label-for":"formrow-phone-input"}},[i("b-form-input",{attrs:{id:"formrow-phone-input",type:"datetime-local",placeholder:"5/17/2022"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1)]),i("div",{staticClass:"mt-4"},[i("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1)])])])])])])])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("div",{staticClass:"dataTables_paginate paging_simple_numbers float-end"},[i("ul",{staticClass:"pagination pagination-rounded mb-0"},[i("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])],1)])])])],1)},s=[],o=(i("a4d3"),i("e01a"),i("a434"),i("b0c0"),i("5658")),l=i("2579"),r=i("c2a4"),n=i("3d20"),c=i.n(n),d=(i("1e3f"),{components:{Layout:o["a"],PageHeader:l["a"]},page:{title:"Parking Slots",meta:[{name:"description",content:r.description}]},data:function(){return{title:"Parking Slots",modaltitle:"Add New Slot",items:[{text:"Slots"},{text:"Parking Slots",active:!0}],id:"",myindex:"",name:"Mercus Ryles",capacity:"12",city:"Kisumu",location:"Agakhan Squre",date:"5/17/2022",id_snapshot:"",userList:[{id:1,profile:i("95f5"),name:"Simon Ryles",capacity:"5",city:"Kisumu",location:"City Squre",date:"5/17/2022"},{id:2,profile:i("61ae"),name:"Adar Otieno",capacity:"4",city:"Kisumu",location:"Sports Ground",date:"5/17/2022"},{id:3,profile:i("61ae"),name:"Atemba Manu",capacity:"10",city:"Kisumu",location:"Agakhan Squre",date:"5/17/2022"},{id:3,profile:i("61ae"),name:"Atemba Manu",capacity:"64",city:"Nairobi",location:"City Stadium",date:"5/17/2022"},{id:3,profile:i("61ae"),name:"Atemba Manu",capacity:"27",city:"Nairobi",location:"Nyayo Squre",date:"5/17/2022"},{id:3,profile:i("61ae"),name:"Atemba Manu",capacity:"100",city:"Nairobi",location:"Moi Avenue",date:"5/17/2022"},{id:3,profile:i("61ae"),name:"Atemba Manu",capacity:"52",city:"Nairobi",location:"Mfangano Squre",date:"5/17/2022"}],totalRows:1,currentPage:1,perPage:10,pageOptions:[10,25,50,100],filter:null,filterOn:[],sortBy:"age",sortDesc:!1,dropzoneOptions:{url:"https://httpbin.org/post",thumbnailWidth:150,maxFilesize:.5,headers:{"My-Awesome-Header":"header value"}},fields:[{key:"check",label:"",sortable:!0},{key:"name",label:"Created By",sortable:!0},{key:"city",lable:"City/Town",sortable:!0},{key:"location",sortable:!0},{key:"date",sortable:!0},"action"]}},computed:{rows:function(){return this.userList.length}},mounted:function(){this.totalRows=this.items.length},methods:{onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},add:function(){var t=this.userList.length+1;this.userList.push({id:t,name:this.name,capacity:this.capacity,city:this.city,location:this.location,date:this.date}),c.a.fire({position:"center",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})},editrec:function(){this.userList[this.myindex].id=this.id,this.userList[this.myindex].name=this.name,this.userList[this.myindex].capacity=this.capacity,this.userList[this.myindex].city=this.city,this.userList[this.myindex].location=this.location,this.userList[this.myindex].status=this.status,""!=this.userList[this.myindex].id&&c.a.fire({position:"center",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:3e3}),c.a.fire({position:"center",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})},edit:function(t,e,i,a,s,o,l){this.modaltitle="Edit Slot",this.editmode=!0,this.id=t,this.name=i,this.capacity=a,this.city=s,this.location=o,this.status=l,this.myindex=e},deleterec:function(t,e,i,a,s,o){var l=this;this.id=t,this.name=i,this.location=o,c.a.fire({title:"Are you sure, you want to delete "+this.location+" from  the system?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#000000",cancelButtonColor:"#f46a6a",confirmButtonText:"Yes, delete it!"}).then((function(t){t.value&&(l.userList.splice(e,1),c.a.fire(l.name+" Deleted!","Your record has been deleted.","success"))}))}},middleware:"authentication"}),m=d,u=i("2877"),p=Object(u["a"])(m,a,s,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-7af5a274.6864e92c.js.map