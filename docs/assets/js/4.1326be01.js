(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{313:function(t,i,n){},344:function(t,i,n){"use strict";n(313)},365:function(t,i,n){"use strict";n(174),n(9),n(24),n(32),n(340);var e=n(93),a={props:["options"],mounted:function(){this.initialize(this.options,this.$lang)},methods:{initialize:function(t,i){var a=this;Promise.all([Promise.all([n.e(0),n.e(2)]).then(n.t.bind(null,366,7)),Promise.all([n.e(0),n.e(2)]).then(n.t.bind(null,367,7))]).then((function(n){var s=Object(e.a)(n,1)[0];s=s.default;var l=t.algoliaOptions,o=void 0===l?{}:l;s(Object.assign({},t,{inputSelector:"#algolia-search-input",algoliaOptions:Object.assign({facetFilters:["lang:".concat(i)].concat(o.facetFilters||[])},o),handleSelected:function(t,i,n){var e=new URL(n.url),s=e.pathname,l=e.hash,o=a.$site.base;o&&s.substr(0,o.length)===o&&(s=s.substr(o.length-1)),a.$router.push("".concat(s).concat(l))}}))}))},update:function(t,i){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">dddd',this.initialize(t,i)}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}}},s=(n(344),n(42)),l=Object(s.a)(a,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,i=this._self._c||t;return i("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[i("input",{staticClass:"search-query",attrs:{id:"algolia-search-input"}})])}],!1,null,null,null);i.a=l.exports}}]);