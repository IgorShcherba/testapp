(()=>{var t={484:function(t){t.exports=function(){"use strict";var t="millisecond",n="second",e="minute",r="hour",i="day",s="week",o="month",u="quarter",a="year",c="date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},d=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},$={s:d,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+d(r,2,"0")+":"+d(i,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var r=12*(e.year()-n.year())+(e.month()-n.month()),i=n.clone().add(r,o),s=e-i<0,u=n.clone().add(r+(s?-1:1),o);return+(-(r+(e-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(f){return{M:o,y:a,w:s,d:i,D:c,h:r,m:e,s:n,ms:t,Q:u}[f]||String(f||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",M={};M[v]=l;var m=function(t){return t instanceof D},p=function(t,n,e){var r;if(!t)return v;if("string"==typeof t)M[t]&&(r=t),n&&(M[t]=n,r=t);else{var i=t.name;M[i]=t,r=i}return!e&&r&&(v=r),r||!e&&v},y=function(t,n){if(m(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new D(e)},g=$;g.l=p,g.i=m,g.w=function(t,n){return y(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var D=function(){function l(t){this.$L=p(t.locale,null,!0),this.parse(t)}var d=l.prototype;return d.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(g.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(f);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return e?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return g},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,n){var e=y(t);return this.startOf(n)<=e&&e<=this.endOf(n)},d.isAfter=function(t,n){return y(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<y(t)},d.$g=function(t,n,e){return g.u(t)?this[n]:this.set(e,t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,u){var f=this,h=!!g.u(u)||u,l=g.p(t),d=function(t,n){var e=g.w(f.$u?Date.UTC(f.$y,n,t):new Date(f.$y,n,t),f);return h?e:e.endOf(i)},$=function(t,n){return g.w(f.toDate()[t].apply(f.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(n)),f)},v=this.$W,M=this.$M,m=this.$D,p="set"+(this.$u?"UTC":"");switch(l){case a:return h?d(1,0):d(31,11);case o:return h?d(1,M):d(0,M+1);case s:var y=this.$locale().weekStart||0,D=(v<y?v+7:v)-y;return d(h?m-D:m+(6-D),M);case i:case c:return $(p+"Hours",0);case r:return $(p+"Minutes",1);case e:return $(p+"Seconds",2);case n:return $(p+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,u){var f,h=g.p(s),l="set"+(this.$u?"UTC":""),d=(f={},f[i]=l+"Date",f[c]=l+"Date",f[o]=l+"Month",f[a]=l+"FullYear",f[r]=l+"Hours",f[e]=l+"Minutes",f[n]=l+"Seconds",f[t]=l+"Milliseconds",f)[h],$=h===i?this.$D+(u-this.$W):u;if(h===o||h===a){var v=this.clone().set(c,1);v.$d[d]($),v.init(),this.$d=v.set(c,Math.min(this.$D,v.daysInMonth())).$d}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.get=function(t){return this[g.p(t)]()},d.add=function(t,u){var c,f=this;t=Number(t);var h=g.p(u),l=function(n){var e=y(f);return g.w(e.date(e.date()+Math.round(n*t)),f)};if(h===o)return this.set(o,this.$M+t);if(h===a)return this.set(a,this.$y+t);if(h===i)return l(1);if(h===s)return l(7);var d=(c={},c[e]=6e4,c[r]=36e5,c[n]=1e3,c)[h]||1,$=this.$d.getTime()+t*d;return g.w($,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,o=this.$m,u=this.$M,a=i.weekdays,c=i.months,f=function(t,r,i,s){return t&&(t[r]||t(n,e))||i[r].substr(0,s)},l=function(t){return g.s(s%12||12,t,"0")},d=i.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:g.s(u+1,2,"0"),MMM:f(i.monthsShort,u,c,3),MMMM:f(c,u),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:f(i.weekdaysMin,this.$W,a,2),ddd:f(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:g.s(s,2,"0"),h:l(1),hh:l(2),a:d(s,o,!0),A:d(s,o,!1),m:String(o),mm:g.s(o,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return e.replace(h,(function(t,n){return n||$[t]||r.replace(":","")}))},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,c,f){var h,l=g.p(c),d=y(t),$=6e4*(d.utcOffset()-this.utcOffset()),v=this-d,M=g.m(this,d);return M=(h={},h[a]=M/12,h[o]=M,h[u]=M/3,h[s]=(v-$)/6048e5,h[i]=(v-$)/864e5,h[r]=v/36e5,h[e]=v/6e4,h[n]=v/1e3,h)[l]||v,f?M:g.a(M)},d.daysInMonth=function(){return this.endOf(o).$D},d.$locale=function(){return M[this.$L]},d.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=p(t,n,!0);return r&&(e.$L=r),e},d.clone=function(){return g.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},l}(),w=D.prototype;return y.prototype=w,[["$ms",t],["$s",n],["$m",e],["$H",r],["$W",i],["$M",o],["$y",a],["$D",c]].forEach((function(t){w[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),y.extend=function(t,n){return t.$i||(t(n,D,y),t.$i=!0),y},y.locale=p,y.isDayjs=m,y.unix=function(t){return y(1e3*t)},y.en=M[v],y.Ls=M,y.p={},y}()}},n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{}};return t[r].call(i.exports,i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{"use strict";var t=e(484),n=e.n(t),r=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set,i=function(t,n){if(n&&!t.value){r.call(t,n);var e=new Event("input",{bubbles:!0});t.dispatchEvent(e)}},s=function(t){var n,e;return null!==(e=null===(n=$("label:contains('"+t+"')").parent().find("input"))||void 0===n?void 0:n[0])&&void 0!==e?e:null},o=function(t){return $(":contains('"+t+"')")},u=window.data,a=u.workers,c=u.desc,f=u.email,h=u.firstPhone,l=u.name,d=u.secondaryPhone,v=function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var r=Array(t),i=0;for(n=0;n<e;n++)for(var s=arguments[n],o=0,u=s.length;o<u;o++,i++)r[i]=s[o];return r}(a),M=0;$(".MuiTable-root").on("DOMNodeInserted",(function(){M=M<v.length-1?++M:0}));const m=function(){!function(){var t,n=Array.from($(".MuiInput-input")),e=n[0],r=n[1],s=n[2],o=n[3],u=n[4];i(e,l),i(r,f),i(s,h),i(o,d),i(u,null===(t=null==c?void 0:c.slice)||void 0===t?void 0:t.call(c,0,20))}(),0!==$(":contains('Check all fields before click on Save button')").length&&function(){var t=s("First Name"),e=s("Last Name"),r=s("Job"),u=s("Birthday"),a=o("Female"),c={male:o("Male"),female:a,other:o("Other")},f=v[M],h=f.dob,l=f.experience,d=f.firstName,m=f.gender,p=f.job,y=f.lastName,g=function(t){return t?n()(t).format("DD-MM-YYYY"):null}(h);$(".MuiDialogContent-root").on("DOMNodeInserted",(function(t){if(0!==$(t.target).find(":contains('Work Experience (years)')").length){var n=s("Work Experience (years)");setTimeout((function(){return i(n,l)}),20)}})),i(t,d),i(e,y),i(r,p),i(u,g),function(t,n){t&&n[t].click()}(m,c)}()};$(window).load((function(){console.log(data),$("button.MuiFab-root:contains('Fill')").click((function(){m(data)}))}))})()})();