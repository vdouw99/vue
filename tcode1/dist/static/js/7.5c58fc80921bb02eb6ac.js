webpackJsonp([7],{581:function(t,e,r){r(618);var s=r(9)(r(599),r(630),null,null);t.exports=s.exports},599:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(57),o=r.n(s),a=r(208),n=r.n(a),c=r(209),i=r.n(c),A=r(66),h=r.n(A),p=r(206),l=r.n(p),u=r(211),C=r.n(u),x=r(203),B=r(65),f=r(86),m=r(49);e.default={mixins:[f.c,f.b],data:function(){return{hotKey:[]}},computed:{shortcut:function(){return this.hotKey.concat(this.searchHistory)}},created:function(){this._getHotKey()},methods:o()({handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.searchResult.style.bottom=e,this.$refs.suggest.refresh(),this.$refs.shortcutWrapper.style.bottom=e,this.$refs.shortcut.refresh()},showConfirm:function(){this.$refs.confirm.show()},_getHotKey:function(){var t=this;r.i(x.b)().then(function(e){e.code===B.a&&(t.hotKey=e.data.hotkey.slice(0,10))})}},r.i(m.c)(["clearSearchHistory"])),watch:{query:function(t){var e=this;t||setTimeout(function(){e.$refs.shortcut.refresh()},20)}},components:{SearchBox:n.a,SearchList:i.a,Scroll:h.a,Confirm:l.a,Suggest:C.a}}},608:function(t,e,r){e=t.exports=r(576)(!0),e.push([t.i,'.search .search-box-wrapper{margin:20px}.search .shortcut-wrapper{position:fixed;top:178px;bottom:0;width:100%}.search .shortcut-wrapper .shortcut{height:100%;overflow:hidden}.search .shortcut-wrapper .shortcut .hot-key{margin:0 20px 20px}.search .shortcut-wrapper .shortcut .hot-key .title{margin-bottom:20px;font-size:14px;color:hsla(0,0%,100%,.5)}.search .shortcut-wrapper .shortcut .hot-key .item{display:inline-block;padding:5px 10px;margin:0 20px 10px 0;border-radius:6px;background:#333;font-size:14px;color:hsla(0,0%,100%,.3)}.search .shortcut-wrapper .shortcut .search-history{position:relative;margin:0 20px}.search .shortcut-wrapper .shortcut .search-history .title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:40px;font-size:14px;color:hsla(0,0%,100%,.5)}.search .shortcut-wrapper .shortcut .search-history .title .text{-webkit-box-flex:1;-ms-flex:1;flex:1}.search .shortcut-wrapper .shortcut .search-history .title .clear{position:relative}.search .shortcut-wrapper .shortcut .search-history .title .clear:before{content:"";position:absolute;top:-10px;left:-10px;right:-10px;bottom:-10px}.search .shortcut-wrapper .shortcut .search-history .title .clear .icon-clear{font-size:14px;color:hsla(0,0%,100%,.3)}.search .search-result{position:fixed;width:100%;top:178px;bottom:0}',"",{version:3,sources:["D:/wamp/www/vue/tcode1/src/components/search/search.vue"],names:[],mappings:"AACA,4BACE,WAAa,CACd,AACD,0BACE,eAAgB,AAChB,UAAW,AACX,SAAU,AACV,UAAY,CACb,AACD,oCACE,YAAa,AACb,eAAiB,CAClB,AACD,6CACE,kBAAyB,CAC1B,AACD,oDACE,mBAAoB,AACpB,eAAgB,AAChB,wBAA6B,CAC9B,AACD,mDACE,qBAAsB,AACtB,iBAAkB,AAClB,qBAAsB,AACtB,kBAAmB,AACnB,gBAAiB,AACjB,eAAgB,AAChB,wBAA6B,CAC9B,AACD,oDACE,kBAAmB,AACnB,aAAe,CAChB,AACD,2DACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,YAAa,AACb,eAAgB,AAChB,wBAA6B,CAC9B,AACD,iEACE,mBAAoB,AAChB,WAAY,AACR,MAAQ,CACjB,AACD,kEACE,iBAAmB,CACpB,AACD,yEACE,WAAY,AACZ,kBAAmB,AACnB,UAAW,AACX,WAAY,AACZ,YAAa,AACb,YAAc,CACf,AACD,8EACE,eAAgB,AAChB,wBAA6B,CAC9B,AACD,uBACE,eAAgB,AAChB,WAAY,AACZ,UAAW,AACX,QAAU,CACX",file:"search.vue",sourcesContent:["\n.search .search-box-wrapper {\n  margin: 20px;\n}\n.search .shortcut-wrapper {\n  position: fixed;\n  top: 178px;\n  bottom: 0;\n  width: 100%;\n}\n.search .shortcut-wrapper .shortcut {\n  height: 100%;\n  overflow: hidden;\n}\n.search .shortcut-wrapper .shortcut .hot-key {\n  margin: 0 20px 20px 20px;\n}\n.search .shortcut-wrapper .shortcut .hot-key .title {\n  margin-bottom: 20px;\n  font-size: 14px;\n  color: rgba(255,255,255,0.5);\n}\n.search .shortcut-wrapper .shortcut .hot-key .item {\n  display: inline-block;\n  padding: 5px 10px;\n  margin: 0 20px 10px 0;\n  border-radius: 6px;\n  background: #333;\n  font-size: 14px;\n  color: rgba(255,255,255,0.3);\n}\n.search .shortcut-wrapper .shortcut .search-history {\n  position: relative;\n  margin: 0 20px;\n}\n.search .shortcut-wrapper .shortcut .search-history .title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 40px;\n  font-size: 14px;\n  color: rgba(255,255,255,0.5);\n}\n.search .shortcut-wrapper .shortcut .search-history .title .text {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.search .shortcut-wrapper .shortcut .search-history .title .clear {\n  position: relative;\n}\n.search .shortcut-wrapper .shortcut .search-history .title .clear:before {\n  content: '';\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  right: -10px;\n  bottom: -10px;\n}\n.search .shortcut-wrapper .shortcut .search-history .title .clear .icon-clear {\n  font-size: 14px;\n  color: rgba(255,255,255,0.3);\n}\n.search .search-result {\n  position: fixed;\n  width: 100%;\n  top: 178px;\n  bottom: 0;\n}"],sourceRoot:""}])},618:function(t,e,r){var s=r(608);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);r(577)("5f0ec02e",s,!0)},630:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search"},[r("div",{staticClass:"search-box-wrapper"},[r("search-box",{ref:"searchBox",on:{query:t.onQueryChange}})],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.query,expression:"!query"}],ref:"shortcutWrapper",staticClass:"shortcut-wrapper"},[r("scroll",{ref:"shortcut",staticClass:"shortcut",attrs:{refreshDelay:t.refreshDelay,data:t.shortcut}},[r("div",[r("div",{staticClass:"hot-key"},[r("h1",{staticClass:"title"},[t._v("热门搜索")]),t._v(" "),r("ul",t._l(t.hotKey,function(e){return r("li",{staticClass:"item",on:{click:function(r){t.addQuery(e.k)}}},[r("span",[t._v(t._s(e.k))])])}))]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.searchHistory.length,expression:"searchHistory.length"}],staticClass:"search-history"},[r("h1",{staticClass:"title"},[r("span",{staticClass:"text"},[t._v("搜索历史")]),t._v(" "),r("span",{staticClass:"clear",on:{click:t.showConfirm}},[r("i",{staticClass:"icon-clear"})])]),t._v(" "),r("search-list",{attrs:{searches:t.searchHistory},on:{delete:t.deleteSearchHistory,select:t.addQuery}})],1)])])],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.query,expression:"query"}],ref:"searchResult",staticClass:"search-result"},[r("suggest",{ref:"suggest",attrs:{query:t.query},on:{listScroll:t.blurInput,select:t.saveSearch}})],1),t._v(" "),r("confirm",{ref:"confirm",attrs:{text:"是否清空所有搜索历史",confirmBtnText:"清空"},on:{confirm:t.clearSearchHistory}}),t._v(" "),r("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=7.5c58fc80921bb02eb6ac.js.map