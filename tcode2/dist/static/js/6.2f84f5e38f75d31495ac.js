webpackJsonp([6],{581:function(t,e,r){function s(t){r(616)}var o=r(9)(r(597),r(627),s,null,null);t.exports=o.exports},597:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(57),o=r.n(s),n=r(212),A=r.n(n),a=r(208),i=r.n(a),c=r(209),h=r.n(c),p=r(206),l=r.n(p),u=r(66),C=r.n(u),x=r(49),f=r(203),B=r(65),w=r(88);e.default={mixins:[w.c,w.b],data:function(){return{hotKey:[],query:""}},components:{"v-search-box":i.a,"v-suggest":A.a,"v-search-list":h.a,"v-confirm":l.a,"v-scroll":C.a},computed:{shortcut:function(){return this.hotKey.concat(this.searchHistory)}},methods:o()({setQuery:function(t){this.$refs.searchBox.setQuery({k:t})},showConfirm:function(){this.$refs.confirm.show()},handlePlayList:function(t){var e=t.length>0?"60px":"";this.$refs.shortcutWrapper.style.bottom=e,this.$refs.shortcut.refresh(),this.$refs.searchResult.style.bottom=e,this.$refs.suggest.refresh()},_getHotKey:function(){var t=this;r.i(f.b)().then(function(e){e.code===B.a&&(t.hotKey=e.data.hotkey.slice(0,10))})}},r.i(x.c)(["clearSearchHistory"])),created:function(){this._getHotKey()},watch:{query:function(t){var e=this;t||setTimeout(function(){e.$refs.shortcut.refresh()},20)}}}},607:function(t,e,r){e=t.exports=r(577)(!0),e.push([t.i,'.no-wrap{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.extend-click{position:relative}.extend-click:before{content:"";position:absolute;top:-10px;left:-10px;right:-10px;bottom:-10px}.search .search-box-wrapper{margin:20px}.search .shortcut-wrapper{position:fixed;top:178px;bottom:0;width:100%}.search .shortcut-wrapper .shortcut{height:100%;overflow:hidden}.search .shortcut-wrapper .shortcut .hot-key{margin:0 20px 20px}.search .shortcut-wrapper .shortcut .hot-key .title{margin-bottom:20px;font-size:14px;color:hsla(0,0%,100%,.5)}.search .shortcut-wrapper .shortcut .hot-key .item{display:inline-block;padding:5px 10px;margin:0 20px 10px 0;border-radius:6px;background:#333;font-size:14px;color:hsla(0,0%,100%,.3)}.search .shortcut-wrapper .shortcut .search-history{position:relative;margin:0 20px}.search .shortcut-wrapper .shortcut .search-history .title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:40px;font-size:14px;color:hsla(0,0%,100%,.5)}.search .shortcut-wrapper .shortcut .search-history .title .text{-webkit-box-flex:1;-ms-flex:1;flex:1}.search .shortcut-wrapper .shortcut .search-history .title .clear{position:relative}.search .shortcut-wrapper .shortcut .search-history .title .clear:before{content:"";position:absolute;top:-10px;left:-10px;right:-10px;bottom:-10px}.search .shortcut-wrapper .shortcut .search-history .title .clear .icon-clear{font-size:14px;color:hsla(0,0%,100%,.3)}.search .search-result{position:fixed;width:100%;top:178px;bottom:0}',"",{version:3,sources:["D:/wamp/www/vue/tcode2/src/components/search/search.vue"],names:[],mappings:"AACA,SACE,uBAAwB,AACxB,gBAAiB,AACjB,kBAAoB,CACrB,AACD,cACE,iBAAmB,CACpB,AACD,qBACE,WAAY,AACZ,kBAAmB,AACnB,UAAW,AACX,WAAY,AACZ,YAAa,AACb,YAAc,CACf,AACD,4BACE,WAAa,CACd,AACD,0BACE,eAAgB,AAChB,UAAW,AACX,SAAU,AACV,UAAY,CACb,AACD,oCACE,YAAa,AACb,eAAiB,CAClB,AACD,6CACE,kBAAyB,CAC1B,AACD,oDACE,mBAAoB,AACpB,eAAgB,AAChB,wBAAgC,CACjC,AACD,mDACE,qBAAsB,AACtB,iBAAkB,AAClB,qBAAsB,AACtB,kBAAmB,AACnB,gBAAiB,AACjB,eAAgB,AAChB,wBAAgC,CACjC,AACD,oDACE,kBAAmB,AACnB,aAAe,CAChB,AACD,2DACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,YAAa,AACb,eAAgB,AAChB,wBAAgC,CACjC,AACD,iEACE,mBAAoB,AAChB,WAAY,AACR,MAAQ,CACjB,AACD,kEACE,iBAAmB,CACpB,AACD,yEACE,WAAY,AACZ,kBAAmB,AACnB,UAAW,AACX,WAAY,AACZ,YAAa,AACb,YAAc,CACf,AACD,8EACE,eAAgB,AAChB,wBAAgC,CACjC,AACD,uBACE,eAAgB,AAChB,WAAY,AACZ,UAAW,AACX,QAAU,CACX",file:"search.vue",sourcesContent:["\n.no-wrap {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.extend-click {\n  position: relative;\n}\n.extend-click:before {\n  content: '';\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  right: -10px;\n  bottom: -10px;\n}\n.search .search-box-wrapper {\n  margin: 20px;\n}\n.search .shortcut-wrapper {\n  position: fixed;\n  top: 178px;\n  bottom: 0;\n  width: 100%;\n}\n.search .shortcut-wrapper .shortcut {\n  height: 100%;\n  overflow: hidden;\n}\n.search .shortcut-wrapper .shortcut .hot-key {\n  margin: 0 20px 20px 20px;\n}\n.search .shortcut-wrapper .shortcut .hot-key .title {\n  margin-bottom: 20px;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.5);\n}\n.search .shortcut-wrapper .shortcut .hot-key .item {\n  display: inline-block;\n  padding: 5px 10px;\n  margin: 0 20px 10px 0;\n  border-radius: 6px;\n  background: #333;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.3);\n}\n.search .shortcut-wrapper .shortcut .search-history {\n  position: relative;\n  margin: 0 20px;\n}\n.search .shortcut-wrapper .shortcut .search-history .title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 40px;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.5);\n}\n.search .shortcut-wrapper .shortcut .search-history .title .text {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.search .shortcut-wrapper .shortcut .search-history .title .clear {\n  position: relative;\n}\n.search .shortcut-wrapper .shortcut .search-history .title .clear:before {\n  content: '';\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  right: -10px;\n  bottom: -10px;\n}\n.search .shortcut-wrapper .shortcut .search-history .title .clear .icon-clear {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.3);\n}\n.search .search-result {\n  position: fixed;\n  width: 100%;\n  top: 178px;\n  bottom: 0;\n}\n"],sourceRoot:""}])},616:function(t,e,r){var s=r(607);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);r(578)("6678adfb",s,!0)},627:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search"},[r("div",{staticClass:"search-box-wrapper"},[r("v-search-box",{ref:"searchBox",on:{query:t.onQueryChange}})],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.query,expression:"!query"}],ref:"shortcutWrapper",staticClass:"shortcut-wrapper"},[r("v-scroll",{ref:"shortcut",staticClass:"shortcut",attrs:{refreshDelay:t.refreshDelay,data:t.shortcut}},[r("div",[r("div",{staticClass:"hot-key"},[r("h1",{staticClass:"title"},[t._v("热门搜索")]),t._v(" "),r("ul",t._l(t.hotKey,function(e){return r("li",{staticClass:"item",on:{click:function(r){t.addQuery(e)}}},[r("span",[t._v(t._s(e.k))])])}))]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.searchHistory.length,expression:"searchHistory.length"}],staticClass:"search-history"},[r("h1",{staticClass:"title"},[r("span",{staticClass:"text"},[t._v("搜索历史")]),t._v(" "),r("span",{staticClass:"clear",on:{click:t.showConfirm}},[r("i",{staticClass:"icon-clear"})])]),t._v(" "),r("v-search-list",{attrs:{searches:t.searchHistory},on:{select:t.setQuery,delete:t.deleteSearchHistory}})],1)])])],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.query,expression:"query"}],ref:"searchResult",staticClass:"search-result"},[r("v-suggest",{ref:"suggest",attrs:{query:t.query},on:{listScroll:t.blurInput,select:t.saveSearch}})],1),t._v(" "),r("v-confirm",{ref:"confirm",attrs:{text:"是否清空所有搜索历史",confirmBtnText:"清空"},on:{confirm:t.clearSearchHistory}}),t._v(" "),r("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=6.2f84f5e38f75d31495ac.js.map