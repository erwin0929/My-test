webpackJsonp([3],{aK16:function(e,t){},tJz6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("4YfN"),o=n.n(a),i=n("9rMa"),s={name:"ShopList",data:function(){return{loading:{abc:123}}},beforeRouteEnter:function(e,t,n){n()},beforeRouteLeave:function(e,t,n){n()},computed:o()({},Object(i.c)({list:function(e){return e.shopList.list},page:function(e){return e.shopList.page},pageSize:function(e){return e.shopList.pageSize},total:function(e){return e.shopList.total}})),methods:o()({handleEdit:function(e,t){},handleDelete:function(e){var t=this;this.$confirm("确认删除?","提示",{cancelButtonText:"取消",confirmButtonText:"确定",showClose:!1,type:"warning"}).then(function(){t.deleteAny({id:e,page:t.page,pageSize:t.pageSize})}).catch(function(){})},handleCurrentChange:function(e){this.$store.state.shopList.page=e,this.getShopList()},handleSizeChange:function(e){this.$store.state.shopList.pageSize=e,this.getShopList()}},Object(i.b)(["getShopList","deleteAny"])),created:function(){this.getShopList()}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{staticClass:"table-box",attrs:{data:e.list}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[n("el-form-item",{attrs:{label:"商品名称"}},[n("span",[e._v(e._s(t.row.shopName))])]),e._v(" "),n("el-form-item",{attrs:{label:"所属店铺"}},[n("span",[e._v(e._s(t.row.shop))])]),e._v(" "),n("el-form-item",{attrs:{label:"商品 ID"}},[n("span",[e._v(e._s(t.row.id))])]),e._v(" "),n("el-form-item",{attrs:{label:"店铺 ID"}},[n("span",[e._v(e._s(t.row.shopId))])]),e._v(" "),n("el-form-item",{attrs:{label:"商品分类"}},[n("span",[e._v(e._s(t.row.category))])]),e._v(" "),n("el-form-item",{attrs:{label:"店铺地址"}},[n("span",[e._v(e._s(t.row.address))])]),e._v(" "),n("el-form-item",{attrs:{label:"商品描述"}},[n("span",[e._v(e._s(t.row.desc))])])],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"商品 ID",prop:"id"}}),e._v(" "),n("el-table-column",{attrs:{label:"商品名称",prop:"shopName"}}),e._v(" "),n("el-table-column",{attrs:{label:"描述",prop:"desc"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作",width:"280"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:function(n){e.handleEdit(t.$index,t.row)}}},[e._v("添加")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){e.handleDelete(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("div",{staticClass:"pagination"},[n("el-pagination",{attrs:{background:"",layout:"prev, sizes, pager, next, jumper","page-sizes":[5,10,15,20],"page-size":e.pageSize,"current-page":e.page,total:e.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1)],1)},staticRenderFns:[]};var r=n("vSla")(s,l,!1,function(e){n("aK16")},"data-v-1d7cd0a8",null);t.default=r.exports}});