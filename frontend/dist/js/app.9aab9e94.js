(function(){"use strict";var n={6466:function(n,t,e){var r=e(9242),i=e(3396);const o={key:0};function s(n,t,e,r,s,a){const u=(0,i.up)("SideBar"),c=(0,i.up)("RegistryItems");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(u,{info:s.infoApps},null,8,["info"]),(0,i.Wm)(c,{items:s.items},null,8,["items"]),s.items?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",o," Загрузка.. "))],64)}var a=e(7139);const u=n=>((0,i.dD)("data-v-604fb3ea"),n=n(),(0,i.Cn)(),n),c=u((()=>(0,i._)("div",{class:"reg-name"}," Cлужители: ",-1))),l={class:"registry-cols"},f={class:"registry-rows"},d={class:"table-el"};function v(n,t,e,r,o,s){return(0,i.wg)(),(0,i.iD)(i.HY,null,[c,(0,i._)("div",l,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.nameCols,((n,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t,class:"table-el"},(0,a.zw)(n),1)))),128))]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.items,((n,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t},[(0,i._)("div",f,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.nameCols,((t,e)=>((0,i.wg)(),(0,i.iD)("div",{key:e},[(0,i._)("div",d,(0,a.zw)(n[t]),1)])))),128))])])))),128))],64)}var m={name:"RegistryItems",props:{items:Array},computed:{nameCols(){const n=this.items;return n[0]?Object.keys(n[0]):[]}}},p=e(89);const g=(0,p.Z)(m,[["render",v],["__scopeId","data-v-604fb3ea"]]);var w=g;const h={class:"org"},y={class:"org-name"},b={class:"sidebar-date"};function _(n,t,e,r,o,s){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",h,(0,a.zw)(e.info.organization),1),(0,i._)("div",y,(0,a.zw)(e.info.name),1),(0,i._)("div",b,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.textInfo,((n,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t},[(0,i._)("div",null,(0,a.zw)(n),1)])))),128))])],64)}var k={name:"SideBar",props:{info:Object},computed:{textInfo(){const n=this.info.data;return[`${n.adress}`,`${n.email} ${n.phone} ${n.ogrn}`,`${n.EGRUL} ${n.INN} ${n.KPP}`,`${n.regostarion}`]}}};const D=(0,p.Z)(k,[["render",_],["__scopeId","data-v-15af5722"]]);var O=D,x=e(7092);async function I(n){try{const t=await fetch(n);if(!t.ok)throw new Error("It is bad Response!");const e=await t.arrayBuffer(),r=(0,x.ij)(e),i=x.P6.sheet_to_json(r.Sheets[r.SheetNames[0]]);return i}catch{throw new Error(`Error in GET: ${n}`)}}var j={name:"App",components:{RegistryItems:w,SideBar:O},async mounted(){const n=await I("./registry/registry.xlsx");this.items=n},data(){return{items:[],infoApps:{organization:"Централизованная религиозная организация евангильских христиан",name:"Ассациация Свободных Библейских Евангельских Церквей",data:{adress:"Юридический адрес: 4200133 г.Казань, ул. Академика Лавреньтева д. 17",email:"E-mail: voldemarip@mail.ru",phone:"тел/факс: (843) 515-39-29, т. 89534874149",ogrn:"ОГРН 1121699000026",EGRUL:"дата внесения в УГРЮЛ записи 20.11.2012г.",INN:"ИНН 1657145854",KPP:"КПП 165701001",regostarion:"Решение орегистрации было приянто органом Минюста Росии №2432-р от 08.11.2012г"}}}},methods:{async getItems(){this.items=await I("./registry/registry.xlsx")}}};const $=(0,p.Z)(j,[["render",s]]);var E=$;(0,r.ri)(E).mount("#app")}},t={};function e(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return n[r].call(o.exports,o,o.exports,e),o.exports}e.m=n,function(){var n=[];e.O=function(t,r,i,o){if(!r){var s=1/0;for(l=0;l<n.length;l++){r=n[l][0],i=n[l][1],o=n[l][2];for(var a=!0,u=0;u<r.length;u++)(!1&o||s>=o)&&Object.keys(e.O).every((function(n){return e.O[n](r[u])}))?r.splice(u--,1):(a=!1,o<s&&(s=o));if(a){n.splice(l--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=n.length;l>0&&n[l-1][2]>o;l--)n[l]=n[l-1];n[l]=[r,i,o]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var i,o,s=r[0],a=r[1],u=r[2],c=0;if(s.some((function(t){return 0!==n[t]}))){for(i in a)e.o(a,i)&&(e.m[i]=a[i]);if(u)var l=u(e)}for(t&&t(r);c<s.length;c++)o=s[c],e.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return e.O(l)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(6466)}));r=e.O(r)})();
//# sourceMappingURL=app.9aab9e94.js.map