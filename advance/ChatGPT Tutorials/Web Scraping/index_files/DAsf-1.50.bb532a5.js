!function(){function e(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function t(e,t,a,i,n,o){try{let s=null;if(window.XMLHttpRequest?s=new XMLHttpRequest:o(),s){if(s.onreadystatechange=()=>{n(s)},s.open(t,e,!0),null!==i)for(const e in i)s.setRequestHeader(e,i[e]);s.send(a)}else o()}catch(e){o()}}class a{logTrace(e,t){if(void 0!==this.traceId){let a;const i=(new Date).getTime();this.storedTrace.hasOwnProperty(e)||(this.storedTrace[e]=[]);t===Object(t)?a=Object.assign&&"function"==typeof Object.assign?Object.assign({},t):JSON.parse(JSON.stringify(t)):(a='{ "'+e+'":"'+t+'"}',a=JSON.parse(a)),a.timeStamp=i,a.timeSinceAdStart=i-this.adStartTime,this.storedTrace[e].push(a)}}constructor(a,i){e(this,"traceId",void 0),e(this,"adStartTime",void 0),e(this,"storedTrace",void 0),e(this,"allData",void 0),this.traceId=a,this.adStartTime=i,this.storedTrace={};void 0!==a&&(()=>{const e=()=>{const e=()=>{console.log("failed to send request to /gp/adbarplus")},a=t=>{4===t.readyState&&200!==t.status&&e()};if(!(e=>{for(const t in e)if(e.hasOwnProperty(t))return!1;return!0})(this.storedTrace)){t("/gp/adbarplus?traceId="+this.traceId+"&systemName=browser","POST",JSON.stringify(this.storedTrace),{"Content-Type":"application/x-www-form-urlencoded"},a,e);for(const e in this.storedTrace)this.storedTrace.hasOwnProperty(e)&&delete this.storedTrace[e]}},a=(e,t)=>()=>e.apply(t),i=()=>{e()},n=()=>{e(),window.setInterval(a(i,this),3e3)};"loading"!==document.readyState?a(n,this)():window.addEventListener("load",a(n,this))})()}}var i,n,o,s,r,d,l;(n=i||(i={})).START="adload:start",n.CALLBACK="adload:delayloadcallback",n.IFRAME_CREATED="adload:iframecreated",(s=o||(o={})).SF_LIBRARY="cache:sflibrary:",s.SF_HTML="cache:sfhtml:",(d=r||(r={})).REQUEST="adfeedback:request",d.SUCCESS="adfeedback:success",d.ERROR="adfeedback:error",d.LABEL_RENDER="adfeedback:sponsoredlabelrender",(l||(l={})).API="messenger:";const c={1:"abpstatus:enabled",0:"abpstatus:notenabled","-1":"abpstatus:unknown"},u={VERSION:"sfversion"};var p,m;(m=p||(p={})).NEXUS_CLIENT_NOT_DEFINED="ResourceTimingData.NexusClientNotDefined",m.LOGGING_FAILED="ResourceTimingData.LoggingFailed",m.LOGGING_SUCCESSFUL="ResourceTimingData.LoggingSuccessful",m.DEPENDENCIES_NOT_MET="ResourceTimingData.DependenciesNotMet";const f={ALLOWLISTED:"custommessage:allowlisted",NOT_ALLOWLISTED:"custommessage:notallowlisted"};var h,w,g,S;(w=h||(h={})).PAGE_PRERENDER="pixelcondition:pageprerender",w.AD_MISSING="pixelcondition:admissing",(S=g||(g={})).START="bb",S.SCOPE_NAME="sfImpression",S.POLLING_SCOPE="PollingSfImpression";var y,v,E,b,A,T;(v=y||(y={})).START="adload_start",v.CALLBACK="adload_delayload",v.IFRAME_CREATED="adload_iframecreated",(b=E||(E={})).SF_LIBRARY="sflibrary_",b.SF_HTML="sfhtml_",(T=A||(A={})).REQUEST="adfeedback_request",T.SUCCESS="adfeedback_success",T.ERROR="adfeedback_error",T.LABEL_RENDER="adfeedback_sponsoredlabelrender";const I={1:"abpstatus_enabled",0:"abpstatus_notenabled","-1":"abpstatus_unknown"};var D,R,L,M;function _(e,t,a,i,n,s){if("undefined"==typeof performance||void 0===performance.getEntriesByType)return;const r=performance.getEntriesByType("resource");if(void 0===r||!Array.isArray(r)||r.length<1||void 0===r[0].duration)return;const d=e=>{n(a,i,e,1)},l=void 0!==r[0].transferSize?(e,t,n)=>{0===e.transferSize?(d(t+"cached"),s(n+"cached",a,i)):(d(t+"uncached"),s(n+"uncached",a,i))}:(e,t,n)=>{e.duration<20?(d(t+"fastload"),s(n+"fastload",a,i)):(d(t+"slowload"),s(n+"slowload",a,i))},c=(e,t,a)=>{if(e)for(let i=0;i<r.length;i++){const n=r[i];if(n.name&&-1!==n.name.indexOf(e))return void l(n,t,a)}};c(e,o.SF_LIBRARY,E.SF_LIBRARY),c(t,o.SF_HTML,E.SF_HTML)}(D||(D={})).VERSION="sfversion_",(L=R||(R={})).LOGGING_FAILED="resourceTimingData_LoggingFailed",L.LOGGING_SUCCESSFUL="resourceTimingData_LoggingSuccessful",L.DEPENDENCIES_NOT_MET="resourceTimingData_DependenciesNotMet",L.DEPENDENCIES_MET="resourceTimingData_DependenciesMet";var C,N=new RegExp(/((&#[0-9]{2};)|(&#[0-9]{3};)|(&#[0-9]{4};)|(&[a-z]{2};)|(&[a-z]{3};)|(&[a-z]{4};)|(&[a-z]{5};)|(&[a-z]{6};)|(&[a-z]{7};)|(%[a-fA-F0-9]{2})|(\W))pd_rd_plhdr(=|%3D)t((&#[0-9]{2};)|(&#[0-9]{3};)|(&#[0-9]{4};)|(&[a-z]{2};)|(&[a-z]{3};)|(&[a-z]{4};)|(&[a-z]{5};)|(&[a-z]{6};)|(&[a-z]{7};)|(%[a-fA-F0-9]{2})|(\W))/),k="$1",O="$14";C=function(){return document};var x="data-val";function F(e){if("string"!=typeof e||""===e)return"";var t=C().getElementById("ape_"+e+"_placement_ClickTracking");if(!(t&&t.hasAttribute&&"function"==typeof t.hasAttribute&&t.hasAttribute(x)&&t.getAttribute&&"function"==typeof t.getAttribute))return"";var a=t.getAttribute(x);return"string"!=typeof a?"":a}M=function(e,t,a){return F([e,a,t].join("_"))};const z=e=>{if(!("pageType"in e)||!("subPageType"in e)||!("slotName"in e))return"";try{return M(e.pageType,e.subPageType,e.slotName)}catch(e){return""}},H=()=>window.P&&window.P.AUI_BUILD_DATE,B=(e,t,a)=>{var i;return H()&&"function"==typeof(null===window||void 0===window||null===(i=window.P)||void 0===i?void 0:i.guardError)?P.guardError("APE-SafeFrame",e):(...i)=>{try{e(...i)}catch(e){"function"==typeof t&&a&&t(a,e)}}},V=(e,t)=>{if(e&&t)for(const a in t)e.style[a]=t[a];return e},U={1027:"Sponsored Display DRA"},J={1:"Enabled",0:"NotEnabled","-1":"Unknown"},G=e=>(e=>{let t,a="";const i=e.length;for(let n=0;n<i;n++)t=e[n],a+=String.fromCodePoint(t>251&&t<254&&n+5<i?1073741824*(t-252)+(e[++n]-128<<24)+(e[++n]-128<<18)+(e[++n]-128<<12)+(e[++n]-128<<6)+e[++n]-128:t>247&&t<252&&n+4<i?(t-248<<24)+(e[++n]-128<<18)+(e[++n]-128<<12)+(e[++n]-128<<6)+e[++n]-128:t>239&&t<248&&n+3<i?(t-240<<18)+(e[++n]-128<<12)+(e[++n]-128<<6)+e[++n]-128:t>223&&t<240&&n+2<i?(t-224<<12)+(e[++n]-128<<6)+e[++n]-128:t>191&&t<224&&n+1<i?(t-192<<6)+e[++n]-128:t);return a})(((e,t)=>{const a=e.replace(/[^A-Za-z0-9+/]/g,""),i=a.length,n=t?Math.ceil((3*i+1>>2)/t)*t:3*i+1>>2,o=new Uint8Array(n);let s,r,d=0,l=0;for(let e=0;e<i;e++)if(r=3&e,d|=((c=a.charCodeAt(e))>64&&c<91?c-65:c>96&&c<123?c-71:c>47&&c<58?c+4:43===c?62:47===c?63:0)<<6*(3-r),3===r||i-e==1){for(s=0;s<3&&l<n;)o[l]=d>>>(16>>>s&24)&255,s++,l++;d=0}var c;return o})(e));function W(e){return window[e]&&"object"==typeof window[e].adDetails?window[e].adDetails:null}function j(e,t,a,i,n){let o;if(function(e){e.bb="uet",e.af="uet",e.cf="uet",e.be="uet",e.ld="uex"}(o||(o={})),!o.hasOwnProperty(e))return;const s=o[e].toString(),r=i?i+":":"";"function"==typeof window[s]&&(window[s].apply(this,Y(e,"adplacements:"+r+t.replace(/_/g,":"),{wb:1},n)),a&&window[s].apply(this,Y(e,"adplacements:"+r+a,{wb:1},n)))}function q(e,t,a,i){if(window.ue&&"function"==typeof window.ue.count){let n="adplacements:"+a;if(e&&(n+=":"+e.replace(/_/g,":")),window.ue.count(n,i),t){const e="adplacements:"+(a&&t?a+":":a)+t;window.ue.count(e,i)}}}function Q(e,t,a,i){if(window.ue&&window.ue.tag){if(t){const a=e+":"+t.replace(/_/g,":")+(i?":"+i:"");window.ue.tag(a)}if(a){const t=e+":"+a+(i?":"+i:"");window.ue.tag(t)}t||a||window.ue.tag(e+(i?":"+i:""))}}function Y(e,t,a,i){const n=[e,t,a];return i&&n.push(i),n}const X=()=>window.innerHeight||document.documentElement.clientHeight,K=()=>window.innerWidth||document.documentElement.clientWidth,$=e=>e.getBoundingClientRect().top-X(),Z=e=>{const t={atf:ee(e)};if(!e||!window||!document)return t;const a=oe(),i=se(e),n=le(e);return{atf:ee(e),geom:{win:a,self:i,exp:n},payload:{wh:a.h,ww:a.w,sx:window.scrollX,sy:window.scrollY,ah:i.h,aw:i.w,top:i.t,left:i.l}}},ee=e=>{if(!e)return"unknown";const t=function(e){if(!window||!(null===document||void 0===document?void 0:document.body))return null;const t=re(e,null),a=X(),i=K(),n=document.body.getBoundingClientRect(),o=Math.max(0,Math.min(n.left+i,t.r)-t.l),s=Math.max(0,Math.min(n.top+a,t.b)-t.t),r=o*s/(t.h*Math.min(t.w,i));return Number(Math.min(1,Math.max(0,r)).toFixed(2))}(e);return null==t?"unknown":t>=.5};const te=e=>{if(!window||!document)return null;const t=ie(e),a=oe(),i=se(null,t);return{atf:"unknown",geom:{win:a,self:i,exp:le(null,t)},payload:{wh:a.h,ww:a.w,sx:window.scrollX,sy:window.scrollY,ah:i.h,aw:i.w,top:i.t,left:i.l}}},ae=(e,t)=>{const a=re(e),i=re(t),n=K(),o=X();return a&&i&&(Math.abs(a.t-i.b)<o||Math.abs(a.b-i.t)<o)&&(Math.abs(a.l-i.r)<n||Math.abs(a.r-i.l)<n)},ie=e=>{const t=e.initialBoundingRect,a=t.top-(window.scrollY-e.originalScrollY),i=a+e.adHeight,n=t.left-(window.scrollX-e.originalScrollX);return{top:a,bottom:i,left:n,right:n+e.adWidth,width:e.adWidth,height:e.adHeight}},ne=(e,t,a)=>{let i=0;return"visible"!==document.visibilityState?i:(i=e>0?a-e:t>0?Math.min(t,a):0,Math.min(i,t-e))},oe=()=>{const e=window.screenY?window.screenY:window.screenTop,t=window.screenX?window.screenX:window.screenLeft,a=K(),i=X();return{t:e,l:t,w:a,h:i,b:e+i,r:t+a}},se=(e,t)=>{const a=re(e,t),i=de(a);return{t:a.t,l:a.l,r:a.r,b:a.b,w:a.w,h:a.h,z:a.z,xiv:i.xiv,yiv:i.yiv,iv:i.iv}},re=(e,t)=>{const a=t||(null==e?void 0:e.getBoundingClientRect());return{t:a.top,l:a.left,r:a.right,b:a.bottom,w:a.width,h:a.height,z:e?Number(window.getComputedStyle(e,null).zIndex):NaN}},de=e=>{const t=K(),a=X(),i=Math.max(0,ne(e.t,e.b,a)),n=Math.max(0,ne(e.l,e.r,t)),o=i*n,s=e.h*Math.min(e.w,t);return 0!==s||0!==o?{xiv:Number(Math.min(1,n/e.w).toFixed(2)),yiv:Number(Math.min(1,i/e.h).toFixed(2)),iv:Number(Math.min(1,Math.max(0,o/s)).toFixed(2))}:{xiv:0,yiv:0,iv:0}},le=(e,t)=>{const a=t||(null==e?void 0:e.getBoundingClientRect());return{t:a.top,l:a.left,r:K()-a.right,b:X()-a.bottom,xs:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth)>K()?1:0,yx:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)>X()?1:0}};function ce(e,t,a){var i,n=a||{},o=n.noTrailing,s=void 0!==o&&o,r=n.noLeading,d=void 0!==r&&r,l=n.debounceMode,c=void 0===l?void 0:l,u=!1,p=0;function m(){i&&clearTimeout(i)}function f(){for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];var r=this,l=Date.now()-p;function f(){p=Date.now(),t.apply(r,n)}function h(){i=void 0}u||(d||!c||i||f(),m(),void 0===c&&l>e?d?(p=Date.now(),s||(i=setTimeout(c?h:f,e))):f():!0!==s&&(i=setTimeout(c?h:f,void 0===c?e-l:e)))}return f.cancel=function(e){var t=(e||{}).upcomingOnly,a=void 0!==t&&t;m(),u=!a},f}const ue="ERROR";function pe(e,t){const a=t||new Error(e);console.error(e,t),q("",null,"safeFrameError",1),window.sfHostLogErrors&&(window.ueHostLogError?window.ueHostLogError(a,{logLevel:ue,attribution:"APE-safeframe",message:e+" "}):"undefined"!=typeof console&&console.error&&console.error(e,a))}const me=()=>{const e=window.location.hostname.split(".").pop();let t="na";return/^(com|ca|mx|br)$/.test(e)?t="na":/^(uk|de|fr|it|es|in|ae|sa|nl|tr|se|pl|eg|be)$/.test(e)?t="eu":/^(jp|au|sg)$/.test(e)?t="fe":/^(cn)$/.test(e)&&(t="cn"),"https://images-"+t+".ssl-images-amazon.com"},fe=e=>e.replace(/^.{1,5}:\/\/|^\/\//,""),he=(e,t)=>e.height===t.height&&e.width===t.width,we=(e,t,a)=>{if(!t||"object"!=typeof t)return!1;for(let i=0,n=t.length;i<n;i++)if(a(e,t[i]))return!0;return!1},ge=()=>"IntersectionObserver"in window&&"IntersectionObserverEntry"in window,Se=e=>e&&0===Object.keys(e).length&&e.constructor===Object;function ye(e,t,a){const i=document.createElement("iframe");return i.name=JSON.stringify(e),i.id=t,i.src=a,i.height=Ae(e.size.height)||"250px",i.width=Ae(e.size.width)||"300px",i.className=e.iframeClass||"",i.setAttribute("frameborder","0"),i.setAttribute("marginheight","0"),i.setAttribute("marginwidth","0"),i.setAttribute("scrolling","no"),i.setAttribute("allowtransparency","true"),i.setAttribute("data-arid",e.arid),i.style.cssText=e.iframeExtraStyle||"",i.sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-top-navigation-by-user-activation",i}function ve(e){const t=document.getElementById(e);void 0!==t&&t&&(t.style.display="none")}function Ee(e,t,a){const i=document.getElementById(t[e].placementDivId),n=document.getElementById(t[e].wrapperDivId)||i,o=document.getElementById(t[e].iframeId);let s=a.resizePlacementWidthThreshold;const r=a.resizePlacementStyleAboveThreshold,d=a.resizePlacementStyleBelowThreshold;s=parseInt(s,10),n&&o&&s&&r&&d&&(n.offsetWidth<s?V(o,d):V(o,r))}function be(e,t,a,i,n,o){try{const s=document.getElementById(o[e].placementDivId),r=document.getElementById(o[e].wrapperDivId)||s,d=document.getElementById(o[e].iframeId);if(null===r||null===s||null===d)return;const l=Te(a),c=Te(t),u=!c&&!l,p=parseInt(t,10);let m=c?d.offsetWidth:p,f=l?d.offsetHeight:parseInt(a,10);const h=parseInt(i,10),w=e=>{u&&(f=Math.round(e*f/m)),m=Math.round(e)},g=0===r.offsetWidth?K():r.offsetWidth;h&&X()<K()?w(h):w(g),n&&n.adMap&&n.adMap[e]&&n.adMap[e].options&&n.adMap[e].options.slotSnapshot&&(n.adMap[e].options.slotSnapshot.adHeight=f,n.adMap[e].options.slotSnapshot.adWidth=m);const S=Ae(m),y=Ae(u?f:a);d.style.height=y,d.style.width=S;const v={width:S,height:y};r!==s&&(s.style.height=y,n.sendMessageToAd(e,"resizeCreativeWrapper",v)),"Detail_hero-quick-promo_Desktop"===o[e].slotId&&(q(o[e].slotId,n.adMap[e].options.placementId,"OffsetLeft",d.offsetLeft),q(o[e].slotId,n.adMap[e].options.placementId,"OffsetTop",d.offsetTop),q(o[e].slotId,n.adMap[e].options.placementId,"OffsetWidth",d.offsetWidth),q(o[e].slotId,n.adMap[e].options.placementId,"OffsetHeight",d.offsetHeight))}catch(t){pe("Error resizing ad: "+o[e].slotId,t)}}function Ae(e){return!e||Te(e)||function(e){return e.length>2&&"px"===e.substring(e.length-2)}(e)?e:e+"px"}function Te(e){return e.length>1&&"%"===e.charAt(e.length-1)}function Ie(e,t,a,i,n){const o="undefined"!=typeof P,s="undefined"!=typeof amznJQ,r="number"==typeof a&&0!==a?()=>{setTimeout(t,a)}:t,d=!!n&&JSON.parse(n);if(void 0===e)r();else if("windowOnLoad"===e)"complete"===document.readyState?r():window.addEventListener("load",r);else if("spATFEvent"===e)o?P.when("search-page-utilities").execute((e=>{window.searchPageUtils.afterEvent("spATFEvent",r)})):s?amznJQ.available("search-js-general",(()=>{window.SPUtils.afterEvent("spATFEvent",r)})):r();else if("aboveTheFold"===e)o?P.when("af").execute(r):s?amznJQ.onCompletion("amznJQ.AboveTheFold",r):r();else if("criticalFeature"===e)o?P.when("cf").execute(r):s?amznJQ.onCompletion("amznJQ.criticalFeature",r):r();else if("r2OnLoad"===e)o?P.when("r2Loaded").execute(r):s?amznJQ.onReady("r2Loaded",r):r();else if(e.match("[^:]+:.+")){const t=e.split(":"),a=t[0].split("."),i=t[1],n=t.length>2?t[2]:i;o?P.when(n,"A").execute(r):s&&a.length>1?amznJQ[a[1]](i,r):r()}else if(e.match(/^\d{1,4}px$/g))De(parseInt(e,10),r,i,d,((e,t)=>{const a=$(e);return e&&a<=t}));else{const t=/^reached(\d{1,5}px)FromTop$/g.exec(e);t?De(parseInt(t[1],10),r,i,d,((e,t)=>window.scrollY+X()>=t)):r()}}function De(e,t,a,i,n){let o=!1;const s=()=>{n(a,e)&&(t(),o=!0)},r=B(ce(20,(()=>{s(),o&&(window.removeEventListener("scroll",s),window.removeEventListener("resize",s))})));window.addEventListener("scroll",r),window.addEventListener("resize",r),i&&s()}const Re=new class{customMessage(e,t,a,i,n){const o=this.msgListeners;try{"undefined"!==a&&Array.isArray(a)&&(a.indexOf(e)>-1&&o[e]?(q(null,null,f.ALLOWLISTED+":"+e,1),o[e](t)):-1===a.indexOf(e)?(q(null,null,f.NOT_ALLOWLISTED,1),q(i,n,f.NOT_ALLOWLISTED,1)):pe("Unrecognized custom message key: "+e))}catch(e){pe("Custom Message Error",e)}}isElementInDOM(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}constructor(t,a,i){e(this,"adMap",void 0),e(this,"supportedCommands",void 0),e(this,"msgListeners",void 0),e(this,"getIframe",(e=>{var t;const a=this.adMap,i=a[e].options;if(Se(a)||Se(i))return null;const n="ape_"+i.slot+"_iframe";return a[e].iframe&&(a[e].iframe=a[e].iframe&&(null===(t=a[e].iframe)||void 0===t?void 0:t.innerHTML)?a[e].iframe:document.getElementById(n)),a[e].iframe})),e(this,"sendMessageToAd",((e,t,a)=>{const i=this.getIframe(e),n=i?i.contentWindow:null;if(n){const e={command:t,data:a};n.postMessage(e,"*")}})),e(this,"receiveMessage",(e=>{const t=this.adMap;if(Se(t))return;try{var a,i,n,o;if((null===(o=null==e||null===(a=e.data)||void 0===a||null===(i=a.message)||void 0===i||null===(n=i.id)||void 0===n?void 0:n.toLowerCase())||void 0===o?void 0:o.indexOf("mash"))>-1)throw"Received Mash message"}catch(e){return}const s=e.data,r=t[s.arid];try{const t=this.supportedCommands,a=((e,t)=>{const a=me();return e&&e.options&&fe(t.origin)===fe(a)})(r,e);if("object"!=typeof s.data||!t.hasOwnProperty(s.command))return;if(!a)throw"Invalid Message Origin: "+e.origin;const i=t[s.command];i&&(r.options.debug&&"undefined"!=typeof console&&console.log(e),i(r,s.data))}catch(t){let a="Problem with message: "+e.data;void 0!==s&&(a+=this.appendErrorDetails(s.arid)),pe(a,t)}})),e(this,"appendErrorDetails",(e=>{const t=this.adMap;if(Se(t))return"";let a="";if(void 0!==t[e]){const i=t[e].options;void 0!==i.aanResponse&&(a=" Ad Details: "+JSON.stringify(i.aanResponse))}return a})),e(this,"registerCustomMessageListener",((e,t,a)=>{let i=!1;const n=this.msgListeners;try{if(!n[e]||"function"!=typeof n[e]||a)n[e]=t,i=!0;else{pe("Duplicate Key",new Error("Custom message listener already exists for key: "+e))}}catch(e){pe("Error registering custom message listener",e)}return i})),e(this,"sendCustomMessage",((e,t)=>{const a=this.adMap,i={key:e,data:t};for(const e in a)this.sendMessageToAd(e,"customMessage",i)})),e(this,"sendCustomMessageToAd",((e,t,a)=>{const i={key:t,data:a};this.sendMessageToAd(e,"customMessage",i)})),e(this,"takeSnapshotOfSlotPosition",(e=>{const t=this.adMap,a=t&&t[e]&&t[e].options;if(!t||Se(t)||!a||Se(a))return;const i=this.getIframe(e);var n;this.adMap[e].options.slotSnapshot={initialBoundingRect:(n=i).getBoundingClientRect(),adHeight:n.offsetHeight,adWidth:n.offsetWidth,originalScrollX:window.scrollX,originalScrollY:window.scrollY}})),e(this,"startPixelTracking",((e,t)=>{let a="prerender"!==document.visibilityState;const i=this.getIframe(e);let n,o,s=this.isElementInDOM(i);const r=this.adMap&&this.adMap[e]&&this.adMap[e].options;!a&&r&&q(r.slot,r.placementId,h.PAGE_PRERENDER,1),!s&&r&&q(r.slot,r.placementId,h.AD_MISSING,1);const d=()=>!(!a||!s)&&(t(),o&&document.removeEventListener("visibilitychange",o),n&&ge()&&n.unobserve(i),!0);if(!d()){const e={root:document.documentElement};ge()&&(n=new IntersectionObserver((e=>{try{if(1===e.length){e[0].isIntersecting?(s=!0,d()):s=!1}}catch(e){pe("Error executing intersectionObserver callback")}}),e),n.observe(i)),o=()=>{try{"prerender"!==document.visibilityState?(a=!0,d()):a=!1}catch(e){pe("Error executing pageVisibilityHandler callback")}},document.addEventListener("visibilitychange",o)}})),e(this,"updateViewability",(e=>{const t=this.adMap,a=t&&t[e]&&t[e].options;if(!t||Se(t)||!a||Se(a))return;const i=this.getIframe(e),n=t[e].options.viewabilityStandards,o=Z(i);null!==o&&(o.viewabilityStandards=n,this.sendMessageToAd(e,"updateViewability",o))})),e(this,"updateNoInventoryViewability",(e=>{const t=this.adMap,a=t&&t[e]&&t[e].options,i=a&&a.slotSnapshot;if(!t||Se(t)||!a||Se(a)||!i)return;const n=a.viewabilityStandards,o=te(i);null!==o&&(o.viewabilityStandards=n,this.sendMessageToAd(e,"updateViewability",o))})),this.adMap=t||{},this.supportedCommands=a||{},this.msgListeners=i||{}}};const Le=new class{constructor(){e(this,"latencyPlugin",void 0),e(this,"events",void 0)}},Me=e=>{window.csa?Le.latencyPlugin=window.csa("Content",{element:e}):console.log(window)},_e=(e,t)=>{try{Le.latencyPlugin("mark",e,t)}catch(e){pe("Error with initiating CSA",e)}},Pe=(e,t,a)=>{try{Le.events("log",{schemaId:"ApeSafeframe.csaEvent.1",metricName:e+":"+t+":"+a,metricValue:1},{ent:"all"})}catch(e){pe("Error with initiating CSA",e)}},Ce=e=>{try{Le.events("setEntity",{adCreativeMetaData:e})}catch(e){pe("Error with initiating CSA",e)}};function Ne(e,t,a){const i=Oe(e,t);if(!i)return;(i.getElementsByTagName("div")[0]||xe("div",{},t.advertisementStyle,i,null)).innerHTML=G(t.adFeedbackInfo.sponsoredText),a[t.arid].logTrace("adFeedBack",{renderSponsoredLabel:!0}),q(t.slot,t.placementId,r.LABEL_RENDER,1),Pe(A.LABEL_RENDER,t.slot,t.placementId)}function ke(e,a,i){const n=Oe(e,a);if(!n)return;e.isFeedbackLoaded=!0;const o=e.parentNode,s=a.placementId,d=a.adFeedbackInfo.endPoint,l=a.feedbackDivStyle,c={adPlacementMetaData:a.adPlacementMetaData,adCreativeMetaData:a.adCreativeMetaData},u={isFeedbackLoaded:e.isFeedbackLoaded,slot:o,placementId:s,endPoint:d,feedbackDivStyle:l,adFeedbackParams:c,requestUrl:""},p=e=>{const t={feedbackResponseStarted:!0,feedBackResponseReturned:!1,response:""};if(4===e.readyState){if(200===e.status)try{const i=e.responseText,o=JSON.parse(i);if(t.response=o,o&&"ok"===o.status){if("html"in o&&o.html&&(n.innerHTML=o.html),"script"in o&&o.script){(n.getElementsByTagName("script")[0]||xe("script",{},{},n,null)).innerHTML=o.script}q(a.slot,s,r.SUCCESS,1),Pe(A.SUCCESS,a.slot,s),t.feedBackResponseReturned=!0}}catch(e){q(a.slot,a.placementId,r.ERROR,1),Pe(A.ERROR,a.slot,a.placementId)}i[a.arid].logTrace("adFeedBack",{adFeedBackResponse:t})}},m=d&&d.length?window.location.protocol+"//"+window.location.hostname+d+"?pl="+(f=c,encodeURIComponent(JSON.stringify(f))):d;var f;u.requestUrl=m,i[a.arid].logTrace("adFeedBack",{adFeedbackRequest:u}),m&&(q(a.slot,s,r.REQUEST,1),Pe(A.REQUEST,a.slot,s),t(m,"GET",null,null,p,(()=>{})))}function Oe(e,t){if(!e||!t.adFeedbackInfo.boolFeedback||e.isFeedbackLoaded)return null;const a=e.parentNode,i=t.feedbackDivStyle,n=t.adFeedbackInfo.adFeedbackOnTop;return a.getElementsByTagName("div")[0]||xe("div",{id:a.id+"_Feedback"},i,a,n?a.firstChild:null)}function xe(e,t,a,i,n){const o=document.createElement(e);for(const e in t)o.setAttribute(e,t[e]);return V(o,a),i.insertBefore(o,n),o}const Fe=e=>{e.fallbackStaticAdClickUrl&&((e=>{let t="";return e&&(t=e.indexOf("//")>-1?e.split("/")[2]:e.split("/")[0]),0!==t.length})(e.fallbackStaticAdClickUrl)||(e.fallbackStaticAdClickUrl=window.location.protocol+"//"+window.location.host+e.fallbackStaticAdClickUrl))},ze={};function He(e,t,a){e&&e.id&&!ze[e.id]&&window.P&&H()&&window.P.when("gw-video-orchestrator").execute((i=>{i.subscribe(e,t,a),ze[e.id]=!0}))}let Be=null;function Ve(e,t,a){const i=t=>{a.sendCustomMessageToAd(e.options.arid,"videoAutoplayResponse",t)};var n;e.options.expParams&&e.options.expParams.noVideoAutoplay?i(!1):(n=e.options.pageType)&&"gateway"===n.toLowerCase()?He(e.iframe,i,t):Be===e.options.arid?i(!0):null===Be&&function(e){const t=document.getElementsByTagName("video");for(let a=0;a<t.length;++a)if(!t[a].paused&&ae(e,t[a]))return!1;return!0}(e.iframe)?(Be=e.options.arid,i(!0)):i(!1)}function Ue(){H()&&window.P&&window.P.when("gw-video-orchestrator").execute((e=>{e.elect()})),Be=null}function Je(e){var t;(t=e.iframe)&&window.P&&H()&&window.P.when("gw-video-orchestrator").execute((e=>{e.elect(t)})),Be=e.options.arid}const Ge="unfired_cod_impressions_dictionary";function We(){let e;try{e=JSON.parse(localStorage.getItem(Ge)||"{}")}catch(t){e={}}return e}function je(e,t){const a=We();a[e]=t,Ye(a)}function qe(){const e=We(),t=[];for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&""!==e[a]&&t.push(e[a]);return function(){try{localStorage.removeItem(Ge)}catch(e){}}(),t}function Qe(e){const t=We();t[e]&&(t[e]="",Ye(t))}function Ye(e){try{localStorage.setItem(Ge,JSON.stringify(e))}catch(e){}}var Xe,Ke;Ke=function(){return URL};var $e="{}",Ze="?",et="&",tt="=";function at(e,t){var a={};for(var i in e)a[i]=e[i];for(var n in t)a[n]=t[n];return a}Xe=function(e,t,a){if("string"!=typeof e||""===e)throw new Error("Invalid url input to addJSONQueryParamToURL: "+JSON.stringify({url:e}));if("string"!=typeof t||""===t)throw new Error("Invalid queryParamKey input to addJSONQueryParamToURL: "+JSON.stringify({queryParamKey:t}));if("object"!=typeof a)throw new Error("Invalid queryParamValueObject input to addJSONQueryParamToURL: "+JSON.stringify({queryParamValueObject:a}));try{var i=new(Ke())(e),n=i.searchParams.get(t)?i.searchParams.get(t):"{}",o=JSON.parse(n);if("object"!=typeof o)throw new Error("Existing query param value was not an object: "+JSON.stringify({existingJSONObject:o}));var s=at(o,a);return i.searchParams.set(t,JSON.stringify(s)),i.toString()}catch(i){return function(e,t,a){var i,n=e.indexOf(Ze),o={};if(n>0){i=e.substring(0,n),decodeURIComponent(e.substring(n+1)).split(et).forEach((function(e){if(e){var t=e.split(tt);o[t[0]]=t[1]}}));var s=o[t]?o[t]:$e,r=JSON.parse(s);if("object"!=typeof r)throw new Error("Existing query param value was not an object: "+JSON.stringify({existingJSONObject:r}));var d=at(r,a);o[t]=JSON.stringify(d)}else i=e,o[t]=JSON.stringify(a);var l=[];for(var c in o)l.push(encodeURIComponent(c)+tt+encodeURIComponent(o[c]));return i+Ze+l.join(et)}(e,t,a)}};const it=(e,t)=>{const a=!(!e.options.expParams||!e.options.expParams.enableViewabilityTrackerOnLoad)&&JSON.parse(e.options.expParams.enableViewabilityTrackerOnLoad),i=()=>{try{Qe(e.options.arid),Re.sendMessageToAd(e.options.arid,"fireImpression",t),nt(!a,e,t)}catch(e){pe("Error firing pixels. data: "+JSON.stringify(t))}};nt(a,e,t);const n=B((()=>{Re.startPixelTracking(e.options.arid,i)}));Ie(e.options.firePixelsAfter,n,0,e.slot,e.options.expParams?e.options.expParams.firePositionTrackerOnLoad:"false")},nt=(e,t,a)=>{e&&(a.isNoInventory?Re.supportedCommands.enableNoInventoryViewabilityTrackerAndInvokeFallback(t):Re.supportedCommands.enableViewabilityTracker(t))};function ot(e){Re.startPixelTracking(e.options.arid,(()=>{try{if(e.options.aaxImpPixelUrl){const t=Xe(e.options.aaxImpPixelUrl,"pj",{measurementMethod:"cod_client"});je(e.options.arid,t)}Re.sendMessageToAd(e.options.arid,"fireMetricsForLegacyImpression",{})}catch(e){pe("Error firing legacy impression metrics")}}))}function st(e,t){Re.startPixelTracking(e.options.arid,(()=>{try{Re.sendMessageToAd(e.options.arid,"fireMetricsForCremPolling",{isBtr:t.isBtr})}catch(e){pe("Error firing crem polling impression metrics")}}))}const rt={sd:1},dt=["name","entryType","startTime","duration","initiatorType","nextHopProtocol","workerStart","redirectStart","redirectEnd","fetchStart","domainLookupStart","domainLookupEnd","connectStart","connectEnd","secureConnectionStart","requestStart","responseStart","responseEnd","transferSize","encodedBodySize","decodedBodySize"];class lt{log(){if(!(window.ue&&window.ue.event&&window.ue.attach))return q(null,null,p.DEPENDENCIES_NOT_MET,1),void Pe(R.DEPENDENCIES_NOT_MET,this.options.slot,this.options.placementId);q(null,null,p.DEPENDENCIES_NOT_MET,0),Pe(R.DEPENDENCIES_MET,this.options.slot,this.options.placementId),"complete"===document.readyState?this.logMessage():window.ue.attach("load",this.logMessage)}extractResourceProperties(e){let t={};const a={};for(let i=0;i<dt.length;i++)t=dt[i],void 0!==e[t]&&(a[t]=e[t]);return a}getPageInfo(){return{source:"safeframe",pageType:window.ue_pty||null,subPageType:window.ue_spty||null,pageTypeId:this.getPageTypeIdKey()||null}}getPageTypeIdKey(){return this.options.slot+"_"+this.options.adCreativeMetaData.adNetwork+"_"+this.options.adCreativeMetaData.adProgramId+"_"+this.options.adCreativeMetaData.adCreativeId+"_"+this.options.adCreativeMetaData.adId}getResources(){const e=[];for(let t=0;t<this.data.resourceTimingData.length;t++){const a=this.data.resourceTimingData[t];0!==a.responseEnd&&e.push(this.extractResourceProperties(a))}return e}composeMessage(){const e=this.getPageInfo();return e.resourceData=this.getResources(),e}logMessage(){const e=this.composeMessage();let t=!1;window.ue.event&&(t=window.ue.event(e,"adplacements","csm.ResourceTimingHit.2",rt),t?(q(null,null,p.LOGGING_SUCCESSFUL,1),q(null,null,p.LOGGING_FAILED,0),Pe(R.LOGGING_SUCCESSFUL,this.options.slot,this.options.placementId)):(q(null,null,p.LOGGING_SUCCESSFUL,0),q(null,null,p.LOGGING_FAILED,1),Pe(R.LOGGING_FAILED,this.options.slot,this.options.placementId)))}constructor(t,a){e(this,"options",void 0),e(this,"data",void 0),this.options=t,this.data=a}}const ct=(e,t)=>{const a=(e,t)=>{var a,i;return null!==(i=null===(a=document.getElementById(e))||void 0===a?void 0:a.getAttribute(t))&&void 0!==i?i:null},i=a("ilmRelocatedHtml","data-relocated-html");i?Re.sendMessageToAd(e,"sendRelocatedHtmlContentEncodedToAd",i):document.addEventListener("sendRelocatedHtmlContentEncodedToAd",(i=>{const n=a("ilmRelocatedHtml","data-relocated-html");n?Re.sendMessageToAd(e,"sendRelocatedHtmlContentEncodedToAd",n):t()}),{once:!0})};const ut=new class{addAdHandler(e,t,a,i){this.ADS_HANDLERS[e]=this.ADS_HANDLERS[e]||{},this.ADS_HANDLERS[e][a]=B(i,pe,"Error within ad handler "+a+": "+t)}constructor(t){e(this,"ADS_HANDLERS",{}),e(this,"AD_IDS",{}),e(this,"AD_TRACERS",{}),e(this,"buildTimeReplacements",void 0),e(this,"supportedCommands",{sendAdBarTrace:(e,t)=>{e.options.arid in this.AD_TRACERS&&this.AD_TRACERS[e.options.arid].logTrace(t.field,t.traceInfo)},logAPIInvocation:(e,t)=>{q(null,null,l.API+t.apiName,1),q(e.options.slot,e.options.placementId,l.API+t.apiName,1),e.options.arid in this.AD_TRACERS&&this.AD_TRACERS[e.options.arid].logTrace("apiCalls",t)},resizeSafeFrameAd:e=>{window.addEventListener("resize",this.ADS_HANDLERS[e.options.arid].defaultResizeSafeFrameHandler),be(e.options.arid,e.options.size.width,e.options.size.height,e.options.maxAdWidth,Re,this.AD_IDS)},setResizePlacementStyle:e=>{window.addEventListener("resize",this.ADS_HANDLERS[e.options.arid].defaultSetResizePlacementStyle),Ee(e.options.arid,this.AD_IDS,e.options.resizePlacementStyle)},changeSize:(e,t)=>{const a=e.options.allowedSizes;if(void 0===e.options.allowChangeSize||e.options.allowChangeSize)if(we(t,a,he))e.slot.style.width=t.width,e.iframe.height=t.height,e.iframe.width=t.width;else{pe("Size is not allowlisted: "+t.width+" x "+t.height+Re.appendErrorDetails(e.options.arid))}},startPixelTracking:it,startPixelTrackingForLegacyImpression:ot,startPixelTrackingForCremPolling:st,collapseSlot:e=>{ve(this.AD_IDS[e.options.arid].placementDivId),ve(this.AD_IDS[e.options.arid].auiCardDeckId),"nav-sitewide-msg"===e.options.slotName&&Ie("amznJQ.available:navbarJSLoaded",(()=>{void 0!==parent.navbar&&"function"==typeof parent.navbar.unHideSWM&&parent.navbar.unHideSWM()}))},logError:(e,t)=>{pe(t.message+Re.appendErrorDetails(e.options.arid)+": "+e.options.slot,t.error)},logCsaEvent:(e,t)=>{Pe(t.metricName,e.options.slot,e.options.placementId)},addCsaEntity:(e,t)=>{Ce(t)},sendCsmLatencyMetric:(e,t)=>{j(t.metric,e.options.slot,e.options.placementId,t.metricMsg,t.timestamp)},markCsaLatencyMetric:(e,t)=>{_e(t.metric,t.timestamp)},countMetric:(e,t)=>{t.isGlobal?q(null,null,t.metricMsg,t.value):q(e.options.slot,e.options.placementId,t.metricMsg,t.value)},addCsmTag:(e,t)=>{t.isGlobal?Q(t.tag,null,null,t.msg):Q(t.tag,e.options.slot,e.options.placementId,t.msg)},fireViewableLatencyMetrics:(e,t)=>{var a,i,n,o;a=e.options.arid,i=e.options.slot,n=e.options.placementId,o=t.adLoadedTimestamp,window.apeViewableLatencyTrackers&&window.apeViewableLatencyTrackers[a]&&window.apeViewableLatencyTrackers[a].valid&&(window.apeViewableLatencyTrackers[a].loaded=!0,window.apeViewableLatencyTrackers[a].viewed&&(j("ld",i,n,"viewablelatency",o),_e("viewablelatency:loaded",o),q(i,n,"htmlviewed:loaded",1)))},customMessage:(e,t)=>{Re.customMessage(t.key,t.body,e.options.allowlistedCustomMessageEvents,e.options.slot,e.options.placementId)},enableViewabilityTracker:e=>{Re.updateViewability(e.options.arid);const t=ce(20,Re.updateViewability);if(this.addAdHandler(e.options.arid,e.options.slot,"viewabilityTracker",(()=>{t(e.options.arid)})),window.addEventListener("scroll",this.ADS_HANDLERS[e.options.arid].viewabilityTracker),window.addEventListener("resize",this.ADS_HANDLERS[e.options.arid].viewabilityTracker),document.addEventListener("visibilitychange",this.ADS_HANDLERS[e.options.arid].viewabilityTracker),ge()){new IntersectionObserver((()=>{Re.updateViewability(e.options.arid)}),{threshold:[0,.5,1]}).observe(e.slot)}},enableNoInventoryViewabilityTrackerAndInvokeFallback:e=>{Re.takeSnapshotOfSlotPosition(e.options.arid),Re.updateNoInventoryViewability(e.options.arid),Re.sendMessageToAd(e.options.arid,"handleFallbackBehavior",{});const t=ce(20,Re.updateNoInventoryViewability);this.addAdHandler(e.options.arid,e.options.slot,"noInventoryViewabilityTracker",(()=>{t(e.options.arid)})),window.addEventListener("scroll",this.ADS_HANDLERS[e.options.arid].noInventoryViewabilityTracker),window.addEventListener("resize",this.ADS_HANDLERS[e.options.arid].noInventoryViewabilityTracker),document.addEventListener("visibilitychange",this.ADS_HANDLERS[e.options.arid].noInventoryViewabilityTracker)},loadAdFeedback:(e,t)=>{const a=Re.adMap[e.options.arid].iframe;e.options.adCreativeMetaData=t,ke(a,e.options,this.AD_TRACERS)},safeFrameReady:e=>{var t;(null===(t=e.options.expParams)||void 0===t?void 0:t.ilmRelocatedHtmlIsActive)&&!e.options.htmlContentEncoded&&ct(e.options.arid,(()=>{ve(this.AD_IDS[e.options.arid].placementDivId)}))},requestVideoAutoplay:(e,t)=>{Ve(e,t,Re)},releaseVideoAutoplay:()=>{Ue()},haveVideoAutoplayPermission:e=>{Je(e)},logSafeframeResourceTimingData:(e,t)=>{new lt(e,t).log()},saveAdDetailsForAdReporter:(e,t)=>{if(!window.adReporterConfig)return;window.adReporterDetails||(window.adReporterDetails={});const a=e.options.slotName;t&&a===t.slotName?window.adReporterDetails[a]=t:window.adReporterDetails[a]||(window.adReporterDetails[a]=JSON.stringify(e))}}),e(this,"initSafeFrame",(()=>{if(window.DAsf&&window.DAsf.loadAds)return void window.DAsf.loadAds();window.DAsf={version:this.buildTimeReplacements.version},qe().forEach((e=>{q(null,null,"localstorage:impression",1)})),window.csa&&(Le.events=window.csa("Events",{producerId:"adplacements"})),q(null,null,u.VERSION+":"+window.DAsf.version,1),Pe(D.VERSION+window.DAsf.version),window.addEventListener("message",Re.receiveMessage,!1),Re.supportedCommands=this.supportedCommands,window.DAsf.registerCustomMessageListener=Re.registerCustomMessageListener,window.DAsf.sendCustomMessage=Re.sendCustomMessage;window.DAsf.loadAds=()=>{const e="data-arid",t=(e,t)=>{this.AD_IDS[e]={slotId:t,placementDivId:"ape_"+t+"_placement",iframeId:"ape_"+t+"_iframe",auiCardDeckId:"ape_"+t+"_aui_cardDeck"}},n=e=>{const t={};try{const a=window.location.search.substring(1).split("&");for(let i=0;i<a.length;i++){const n=a[i].split("="),o=n[0];n.length>1&&e.indexOf(o)>-1&&(t[o]=n[1])}}catch(e){pe("Error parsing query parameters",e)}return t},o=e=>()=>{be(e.arid,e.size.width,e.size.height,e.maxAdWidth,Re,this.AD_IDS)},s=e=>()=>{Ee(e.arid,this.AD_IDS,e.resizePlacementStyle)},r=e=>{try{const t=document.getElementById(this.AD_IDS[e.arid].placementDivId),a=this.AD_IDS[e.arid].iframeId,n=e.safeFrameSrc,o=ye(e,a,n);o.onload=()=>{_(e.DAsfUrl,e.safeFrameSrc,e.slot,e.placementId,q,Pe)},t.appendChild(o),j("cf",e.slot,e.placementId),_e("criticalFeature"),q(e.slot,e.placementId,i.IFRAME_CREATED,1),Pe(y.IFRAME_CREATED,e.slot,e.placementId),Re.adMap[e.arid]={slot:t,iframe:o,options:e};const s={id:o.id,src:o.src,scrolling:o.scrolling,height:o.height,width:o.width,className:o.className,styleCssText:o.style.cssText,sandbox:o.sandbox};this.AD_TRACERS[e.arid].logTrace("createSafeFrame",s)}catch(t){pe("Error creating safeFrame",t),this.AD_TRACERS[e.arid]&&this.AD_TRACERS[e.arid].logTrace("createSafeFrame",{error:{message:"errorCreatingSafeFrame",ex:t}})}},d=t=>B((()=>{const a={callbackOccurred:!0};a.loadAfter=t.loadAfter,this.AD_TRACERS[t.arid].logTrace("pageCallBack",a),q(t.slot,t.placementId,i.CALLBACK,1),Pe(y.CALLBACK,t.slot,t.placementId);if(((t,a)=>{if(!t)return!1;const i=document.getElementById(t);if(i&&!i.innerHTML){const t=i.getAttribute(e);if(t&&t===a.arid)return!0}return!1})(this.AD_IDS[t.arid].placementDivId,t)){var n;r(t);const e=null===(n=null==Re?void 0:Re.adMap[null==t?void 0:t.arid])||void 0===n?void 0:n.iframe;e&&Ne(e,t,this.AD_TRACERS)}}),pe,"Error in callback to create Safeframe."),l="text/x-dacx-safeframe";let u=document.getElementsByClassName(l);0===u.length&&(u=document.getElementsByTagName("script"));for(const r of u)if("DIV"===r.tagName&&r.classList.contains(l)||r.getAttribute("type")===l)try{const l=W(r.getAttribute("data-csa-c-slot-id")),u=l||JSON.parse(r.getAttribute("data-ad-details")||r.text||r.innerHTML||r.innerText);Fe(u);const f="ape_"+u.slot+"_placement",h=document.getElementById(f);!Re.adMap[u.arid]&&h&&h.innerHTML&&(h.innerHTML="",r.removeAttribute(e)),Me(h);if(r.getAttribute(e))continue;u.arid=u.arid||Math.random().toString(16).slice(2),this.AD_TRACERS[u.arid]=new a(u.traceId,window[u.slotName]&&window[u.slotName].adStartTime||0),this.AD_TRACERS[u.arid].logTrace("safeFrameInput",u);const w={caches:window.caches?window.caches:null,plugins:document.plugins?document.plugins:null,cookies:document.cookie?document.cookie:null,userAgents:navigator.userAgent?navigator.userAgent:null};this.AD_TRACERS[u.arid].logTrace("browserData",w),r.setAttribute(e,u.arid),u.hostDomain=location.protocol+"//"+location.host,u.allowedSizes="object"==typeof u.allowedSizes&&u.allowedSizes.length>=0?u.allowedSizes.concat(u.size):[u.size];const S="d3l3lkinz3f56t.cloudfront.net,g-ecx.images-amazon.com,z-ecx.images-amazon.com,images-na.ssl-images-amazon.com,g-ec4.images-amazon.com,images-cn.ssl-images-amazon.com".split(",");if(u.allowedDomains="object"==typeof u.allowedDomains&&u.allowedDomains.length>=0?u.allowedDomains.concat(S):S,u.queryParams=n(u.allowlistedQueryParamKeys),u.aPageStart=window.aPageStart,u.adStartTime=window[u.slotName]&&window[u.slotName].adStartTime||0,this.addAdHandler(u.arid,u.slot,"defaultResizeSafeFrameHandler",o(u)),this.addAdHandler(u.arid,u.slot,"defaultSetResizePlacementStyle",s(u)),t(u.arid,u.slot),"clickTracking"in u&&""===u.clickTracking&&(u.clickTracking=z(u)),u.forcePunt){Q("forcePunt",u.slot,u.placementId),Ce({forcePunt:"true"}),ve(this.AD_IDS[u.arid].placementDivId);continue}const v=me(),E="true"===u.abpAcceptable&&("1"===u.abpStatus||"-1"===u.abpStatus);if(p=u.mediaType,m=u.adCreativeMetaData.adProgramId,(e=>"V"===e)(p)&&!U.hasOwnProperty(m)){const e=v+this.buildTimeReplacements.allowlistedSafeFramePath,t=v+this.buildTimeReplacements.allowlistedSafeFrameVideoPath;u.safeFrameSrc=E?t:e}else{const e=v+this.buildTimeReplacements.desktopSafeFramePath,t=v+this.buildTimeReplacements.allowlistedSafeFramePath;u.safeFrameSrc=E?t:e}if(u.abpStatus){Q("ABPStatus"+J[u.abpStatus],u.slot),Ce({ABPStatus:J[u.abpStatus]});for(const e in J)q(u.slot,u.placementId,c[e],u.abpStatus===e?1:0),u.abpStatus===e&&Pe(I[e],u.slot,u.placementId)}u.collectSafeframeRTD=window.collectSafeframeRTD,j("af",u.slot,u.placementId),_e("clickToATF"),j(g.START,u.slot,u.placementId,g.SCOPE_NAME),j(g.START,u.slot,u.placementId,g.POLLING_SCOPE),q(u.slot,u.placementId,i.START,1),Pe(y.START,u.slot,u.placementId);const b={hostDomain:u.hostDomain,allowedSizes:u.allowedSizes,allowedDomains:u.allowedDomains,queryParams:u.queryParams,aPageStart:u.aPageStart,adStartTime:u.adStartTime,safeFrameSrc:u.safeFrameSrc,abpStatus:u.abpStatus};Ie(u.loadAfter,d(u),0,r),b.loadAfter=u.loadAfter,this.AD_TRACERS[u.arid].logTrace("additionalInitilizationParams",b)}catch(e){pe("Error parsing sf tag",e)}var p,m},window.DAsf.loadAds()})),this.buildTimeReplacements=t}}({version:"1.50.bb532a5",desktopSafeFrameVideoPath:"/images/S/apesafeframe/ape/sf/desktop/sfVideo-1.50.bb532a5.html",allowlistedSafeFrameVideoPath:"/images/S/apesafeframe/ape/sf/whitelisted/desktop/sfVideo-1.50.bb532a5.html",desktopSafeFramePath:"/images/S/apesafeframe/ape/sf/desktop/sf-1.50.bb532a5.html",allowlistedSafeFramePath:"/images/S/apesafeframe/ape/sf/whitelisted/desktop/sf-1.50.bb532a5.html"});B((()=>ut.initSafeFrame()),pe,"Error initializing safeFrame")()}();
//# sourceMappingURL=DAsf.min.js.map
