/*! Built with http://stenciljs.com */
((w,d,x,n,h,c,r)=>{((s)=>{s&&(r=s.getAttribute('data-resources-url'))})(d.querySelector("script[data-namespace='wv-feed-list']"));
(function(Context, resourcesUrl){Context.store=function(){let t;return{getStore:function(){return t},setStore:function(e){t=e},getState:function(){return t&&t.getState()},mapDispatchToProps:function(e,n){Object.keys(n).forEach(o=>{const c=n[o];Object.defineProperty(e,o,{get:()=>(...e)=>c(...e)(t.dispatch,t.getState),configurable:!0,enumerable:!0})})},mapStateToProps:function(e,n){const o=(o,c)=>{const r=n(t.getState());Object.keys(r).forEach(t=>{e[t]=r[t]})};t.subscribe(()=>o()),o()}}}();
})(x,r);
function e(e,t){let n,o,l=null,i=!1,s=!1,r=arguments.length;for(;r-- >2;)v.push(arguments[r]);for(;v.length>0;){let t=v.pop();if(t&&void 0!==t.pop)for(r=t.length;r--;)v.push(t[r]);else"boolean"==typeof t&&(t=null),(s="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(s=!1)),s&&i?l[l.length-1].vtext+=t:null===l?l=[s?{vtext:t}:t]:l.push(s?{vtext:t}:t),i=s}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(r in t.class)t.class[r]&&v.push(r);t.class=v.join(" "),v.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,l||[],m):{vtag:e,vchildren:l,vtext:void 0,vattrs:t,vkey:n,vname:o,e:void 0,t:!1}}const t={},o=e=>null!=e,l=e=>e.toLowerCase(),i=(e,t,n,o,i,r)=>{if("class"!==n||r)if("style"===n){for(const e in o)i&&null!=i[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in i)o&&i[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,i[e]):t.style[e]=i[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!r&&(n in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=e.n(t);o&&o.o&&o.o[n]?a(t,n,i):"ref"!==n&&(a(t,n,null==i?"":i),null!=i&&!1!==i||e.i.l(t,n))}else null!=i&&"key"!==n?((e,t,n,o="boolean"==typeof n,i)=>{i=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?i?e.removeAttributeNS("http://www.w3.org/1999/xlink",l(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),i?e.setAttributeNS("http://www.w3.org/1999/xlink",l(t),n):e.setAttribute(t,n))})(t,n,i):(r||e.i.s(t,n)&&(null==i||!1===i))&&e.i.l(t,n);else n=l(n)in t?l(n.substring(2)):l(n[2])+n.substring(3),i?i!==o&&e.i.r(t,n,i):e.i.a(t,n);else if(o!==i){const e=s(o),n=s(i),l=e.filter(e=>!n.includes(e)),r=s(t.className).filter(e=>!l.includes(e)),a=n.filter(t=>!e.includes(t)&&!r.includes(t));r.push(...a),t.className=r.join(" ")}},s=e=>null==e||""===e?[]:e.trim().split(/\s+/),a=(e,t,n)=>{try{e[t]=n}catch(e){}},f=(e,n,o,l,s)=>{const r=11===o.e.nodeType&&o.e.host?o.e.host:o.e,a=n&&n.vattrs||t,f=o.vattrs||t;for(s in a)f&&null!=f[s]||null==a[s]||i(e,r,s,a[s],void 0,l,o.t);for(s in f)s in a&&f[s]===("value"===s||"checked"===s?r[s]:a[s])||i(e,r,s,a[s],f[s],l,o.t)};let u=!1;const p=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.e),e.vchildren&&e.vchildren.forEach(e=>{p(e,t)}))},v=[],m={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},b=(e,t,n)=>{const[o,l,,i,s,r]=e,a={color:{f:"color"}};if(i)for(t=0;t<i.length;t++)a[(n=i[t])[0]]={c:n[1],u:!!n[2],f:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,p:n[4]};return{d:o,v:l,o:Object.assign({},a),m:s,b:r?r.map(y):void 0}},y=e=>({y:e[0],w:e[1],M:!!e[2],g:!!e[3],k:!!e[4]}),M=(e,t)=>o(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t,g=(e,t,n)=>{e.j.add(t),e.C.has(t)||(e.C.set(t,!0),e.W?e.queue.write(()=>$(e,t,n)):e.queue.tick(()=>$(e,t,n)))},$=async(t,n,o,l,i,s)=>{if(t.C.delete(n),!t.N.has(n)){if(!(i=t.x.get(n))){if((s=t.O.get(n))&&!s["s-rn"])return void(s["s-rc"]=s["s-rc"]||[]).push(()=>{$(t,n,o)});if(i=N(t,n,t.S.get(n),o))try{i.componentWillLoad&&await i.componentWillLoad()}catch(e){t.A(e,3,n)}}((t,n,o,l)=>{try{const i=n.T.host,s=n.T.encapsulation,r=!1;let a,f=o;if(l.render||l.hostData||i||a){t.R=!0;const n=l.render&&l.render();let i;t.R=!1;const a=e(null,i,n),c=t.L.get(o)||{};c.e=f,t.L.set(o,t.render(o,c,a,r,s))}o["s-rn"]=!0,o["s-rc"]&&(o["s-rc"].forEach(e=>e()),o["s-rc"]=null)}catch(e){t.R=!1,t.A(e,8,o,!0)}})(t,t.n(n),n,i),n["s-init"]()}},k=(e,t,n,l,i,s,r,a,f)=>{if(t.type||t.state){const c=e.D.get(n);t.state||(!t.attr||void 0!==c[i]&&""!==c[i]||(a=s&&s.q)&&o(f=a[t.attr])&&(c[i]=M(t.type,f)),n.hasOwnProperty(i)&&(void 0===c[i]&&(c[i]=M(t.type,n[i])),"mode"!==i&&delete n[i])),l.hasOwnProperty(i)&&void 0===c[i]&&(c[i]=l[i]),W(l,i,function c(t){return(t=e.D.get(e.B.get(this)))&&t[i]},function u(n,o){(o=e.B.get(this))&&(t.state||t.mutable)&&j(e,o,i,n,r)})}else if(t.context){const o=e.I(t.context);void 0!==o&&C(l,i,o.P&&o.P(n)||o)}},j=(e,t,n,o,l,i,s)=>{(s=e.D.get(t))||e.D.set(t,s={}),o!==s[n]&&(s[n]=o,e.x.get(t)&&!e.R&&t["s-rn"]&&g(e,t,l))},C=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,value:n})},W=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},N=(e,t,n,o,l,i)=>{try{l=new(i=e.n(t).T),((e,t,n,o,l,i)=>{e.B.set(o,n),e.D.has(n)||e.D.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,s])=>{k(e,s,n,o,t,l,i)})})(e,i,t,l,n,o)}catch(n){l={},e.A(n,7,t,!0)}return e.x.set(t,l),l},E=(e,t,n,o,l,i)=>{if(e.j.delete(t),(l=e.O.get(t))&&((o=l["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||l["s-init"]&&l["s-init"]()),e.O.delete(t)),e.F.length&&!e.j.size)for(;i=e.F.shift();)i()},O=(e,t,n,o)=>{t.forEach(([t,l])=>{3&l.c&&W(n,t,function n(){return(e.D.get(this)||{})[t]},function n(i){j(e,this,t,M(l.p,i),o)})})},S=(e,t,n,o,i)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.N.delete(n),e.H.has(n)||(e.Q=!0,e.j.add(n),e.H.set(n,!0),((e,t,n)=>{for(n=t;n=e.i.U(n);)if(e.Z(n)){e.z.has(t)||(e.O.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.S.set(n,((e,t,n,o,l)=>(n.mode||(n.mode=e.G(n)),n["s-cr"]||e.J(n,"ssrv")||e.K&&1===t.m||(n["s-cr"]=e.V(""),n["s-cr"]["s-cn"]=!0,e.X(n,n["s-cr"],e.Y(n)[0])),o={q:{}},t.o&&Object.keys(t.o).forEach(i=>{(l=t.o[i].f)&&(o.q[l]=e.J(n,l))}),o))(e.i,t,n)),e._(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{!e.ee&&((e,t)=>{for(;t;){if(!e.te(t))return 9!==e.ne(t);t=e.te(t)}})(e.i,t)&&(e.N.set(t,!0),E(e,t),p(e.L.get(t),!0),e.i.a(t),e.oe.delete(t),[e.O,e.le,e.S].forEach(e=>e.delete(t)))})(e,this)},n["s-init"]=function(){((e,t,n,o,l,i)=>{if(e.x.get(t)&&!e.N.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.z.set(t,!0),e.ie.has(t)||(e.ie.set(t,!0),t["s-ld"]=void 0,e.i.se(t,n));try{p(e.L.get(t)),(i=e.le.get(t))&&(i.forEach(e=>e(t)),e.le.delete(t))}catch(n){e.A(n,4,t)}E(e,t)}})(e,this,o)},n.forceUpdate=function(){g(e,this,i)},t.o){const o=Object.entries(t.o);{let e={};o.forEach(([t,{f:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function i(e,t,n,o){const i=e[l(n)];i&&(t[i]=o)})(e,this,t,o)}}O(e,o,n,i)}};((t,n,i,s,r,a,c)=>{const p=i.performance,d={html:{}},v=i[t]=i[t]||{},m=((e,t,n)=>{const o=new WeakMap,i={re:n,K:!!n.documentElement.attachShadow,ae:!1,ne:e=>e.nodeType,fe:e=>n.createElement(e),ce:(e,t)=>n.createElementNS(e,t),V:e=>n.createTextNode(e),ue:e=>n.createComment(e),X:(e,t,n)=>e.insertBefore(t,n),pe:e=>e.remove(),de:(e,t)=>e.appendChild(t),se:(e,t)=>{e.classList.add(t)},Y:e=>e.childNodes,te:e=>e.parentNode,ve:e=>e.nextSibling,me:e=>e.previousSibling,be:e=>l(e.nodeName),he:e=>e.textContent,ye:(e,t)=>e.textContent=t,J:(e,t)=>e.getAttribute(t),we:(e,t,n)=>e.setAttribute(t,n),l:(e,t)=>e.removeAttribute(t),s:(e,t)=>e.hasAttribute(t),G:t=>t.getAttribute("mode")||(e.Context||{}).mode,Me:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?i.U(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e,r:(t,n,l,s,r,a,f,c,u)=>{let p=t,d=l,v=o.get(t);u=n,v&&v[u]&&v[u](),"object"==typeof a&&(p=a),p&&(f=i.ae?{capture:!!s,passive:!!r}:!!s,e.ael(p,n,d,f),v||o.set(t,v={}),v[u]=(()=>{p&&e.rel(p,n,d,f),v[u]=null}))},a:(e,t,n)=>{(n=o.get(e))&&(t?n[t]&&n[t]():Object.keys(n).forEach(e=>{n[e]&&n[e]()}))},ge:(e,n,o,l)=>(l=new t.CustomEvent(n,o),e&&e.dispatchEvent(l),l),U:(e,t)=>(t=i.te(e))&&11===i.ne(t)?t.host:t,$e:(e,t,n,o)=>e.setAttributeNS(t,n,o)};return e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o))),i})(v,i,s),h=m.re.documentElement,y=i["s-defined"]=i["s-defined"]||{},w=(e,t)=>{i.customElements.get(e.d)||(S(M,d[e.d]=e,t.prototype,a,p),t.observedAttributes=Object.values(e.o).map(e=>e.f).filter(e=>!!e),i.customElements.define(e.d,t))},M={i:m,ke:w,n:e=>d[m.be(e)],I:e=>n[e],isClient:!0,Z:e=>!(!y[m.be(e)]&&!M.n(e)),A:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:n.queue=((e,t)=>{{let n=0,o=!1;const l=()=>t.performance.now(),i=!1!==e.asyncQueue,s=Promise.resolve(),r=[],a=[],f=[],c=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(v))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](l())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=l())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},v=()=>{n++,p(a);const t=i?l()+7*Math.ceil(n*(1/22)):Infinity;d(f,t),d(c,t),f.length>0&&(c.push(...f),f.length=0),(o=a.length+f.length+c.length>0)?e.raf(v):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){r.push(e),1===r.length&&s.then(()=>p(r))},read:u(a),write:u(f)}}})(v,i),_:(e,t)=>{{const n=e.v;let o=r+n+".entry.js";import(o).then(n=>{try{e.T=n[(e=>l(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""))(e.d)],g(M,t,p)}catch(t){console.error(t),e.T=class{}}},e=>console.error(e,o))}},R:!1,W:!1,ee:!1,je:void 0,O:new WeakMap,Ce:new WeakMap,H:new WeakMap,oe:new WeakMap,ie:new WeakMap,z:new WeakMap,B:new WeakMap,S:new WeakMap,x:new WeakMap,N:new WeakMap,C:new WeakMap,le:new WeakMap,We:new WeakMap,L:new WeakMap,D:new WeakMap,j:new Set,F:[]};return n.isServer=n.isPrerender=!(n.isClient=!0),n.window=i,n.location=i.location,n.document=s,n.resourcesUrl=n.publicPath=r,v.h=e,v.Context=n,v.onReady=(()=>new Promise(e=>M.queue.write(()=>M.j.size?M.F.push(e):e()))),M.render=((e,t)=>{let n,l,i,s,r,a,c;const p=(i,v,m,b,h,y,w,M,g)=>{if(M=v.vchildren[m],n||(s=!0,"slot"===M.vtag&&(l&&t.se(b,l+"-s"),M.vchildren?M.Ne=!0:M.xe=!0)),o(M.vtext))M.e=t.V(M.vtext);else if(M.xe)M.e=t.V("");else{if(y=M.e=u||"svg"===M.vtag?t.ce("http://www.w3.org/2000/svg",M.vtag):t.fe(M.Ne?"slot-fb":M.vtag),e.Z(y)&&e.z.delete(c),u="svg"===M.vtag||"foreignObject"!==M.vtag&&u,f(e,null,M,u),o(l)&&y["s-si"]!==l&&t.se(y,y["s-si"]=l),M.vchildren)for(h=0;h<M.vchildren.length;++h)(w=p(i,M,h,y))&&t.de(y,w);"svg"===M.vtag&&(u=!1)}return M.e["s-hn"]=a,(M.Ne||M.xe)&&(M.e["s-sr"]=!0,M.e["s-cr"]=r,M.e["s-sn"]=M.vname||"",(g=i&&i.vchildren&&i.vchildren[m])&&g.vtag===M.vtag&&i.e&&d(i.e)),M.e},d=(n,o,l,i)=>{e.ee=!0;const r=t.Y(n);for(l=r.length-1;l>=0;l--)(i=r[l])["s-hn"]!==a&&i["s-ol"]&&(t.pe(i),t.X(y(i),i,h(i)),t.pe(i["s-ol"]),i["s-ol"]=null,s=!0),o&&d(i,o);e.ee=!1},v=(e,n,l,i,s,r,f,c)=>{const u=e["s-cr"];for((f=u&&t.te(u)||e).shadowRoot&&t.be(f)===a&&(f=f.shadowRoot);s<=r;++s)i[s]&&(c=o(i[s].vtext)?t.V(i[s].vtext):p(null,l,s,e))&&(i[s].e=c,t.X(f,c,h(n)))},m=(e,n,l,s)=>{for(;n<=l;++n)o(e[n])&&(s=e[n].e,i=!0,s["s-ol"]?t.pe(s["s-ol"]):d(s,!0),t.pe(s))},b=(e,t)=>e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname),h=e=>e&&e["s-ol"]?e["s-ol"]:e,y=e=>t.te(e["s-ol"]?e["s-ol"]:e),w=(n,l,i)=>{const s=l.e=n.e,r=n.vchildren,a=l.vchildren;u=l.e&&o(t.U(l.e))&&void 0!==l.e.ownerSVGElement,u="svg"===l.vtag||"foreignObject"!==l.vtag&&u,o(l.vtext)?(i=s["s-cr"])?t.ye(t.te(i),l.vtext):n.vtext!==l.vtext&&t.ye(s,l.vtext):("slot"!==l.vtag&&f(e,n,l,u),o(r)&&o(a)?((e,n,l,i,s,r,a,f)=>{let c=0,u=0,M=n.length-1,g=n[0],$=n[M],k=i.length-1,j=i[0],C=i[k];for(;c<=M&&u<=k;)if(null==g)g=n[++c];else if(null==$)$=n[--M];else if(null==j)j=i[++u];else if(null==C)C=i[--k];else if(b(g,j))w(g,j),g=n[++c],j=i[++u];else if(b($,C))w($,C),$=n[--M],C=i[--k];else if(b(g,C))"slot"!==g.vtag&&"slot"!==C.vtag||d(t.te(g.e)),w(g,C),t.X(e,g.e,t.ve($.e)),g=n[++c],C=i[--k];else if(b($,j))"slot"!==g.vtag&&"slot"!==C.vtag||d(t.te($.e)),w($,j),t.X(e,$.e,g.e),$=n[--M],j=i[++u];else{for(s=null,r=c;r<=M;++r)if(n[r]&&o(n[r].vkey)&&n[r].vkey===j.vkey){s=r;break}o(s)?((f=n[s]).vtag!==j.vtag?a=p(n&&n[u],l,s,e):(w(f,j),n[s]=void 0,a=f.e),j=i[++u]):(a=p(n&&n[u],l,u,e),j=i[++u]),a&&t.X(y(g.e),a,h(g.e))}c>M?v(e,null==i[k+1]?null:i[k+1].e,l,i,u,k):u>k&&m(n,c,M)})(s,r,l,a):o(a)?(o(n.vtext)&&t.ye(s,""),v(s,null,l,a,0,a.length-1)):o(r)&&m(r,0,r.length-1)),u&&"svg"===l.vtag&&(u=!1)},M=(e,n,o,l,i,s,r,a)=>{for(l=0,i=(o=t.Y(e)).length;l<i;l++)if(n=o[l],1===t.ne(n)){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,s=0;s<i;s++)if(o[s]["s-hn"]!==n["s-hn"])if(a=t.ne(o[s]),""!==r){if(1===a&&r===t.J(o[s],"slot")){n.hidden=!0;break}}else if(1===a||3===a&&""!==t.he(o[s]).trim()){n.hidden=!0;break}M(n)}},g=[],$=(e,n,o,l,s,r,a,f,c,u)=>{for(s=0,r=(n=t.Y(e)).length;s<r;s++){if((o=n[s])["s-sr"]&&(l=o["s-cr"]))for(f=t.Y(t.te(l)),c=o["s-sn"],a=f.length-1;a>=0;a--)(l=f[a])["s-cn"]||l["s-nr"]||l["s-hn"]===o["s-hn"]||((3===(u=t.ne(l))||8===u)&&""===c||1===u&&null===t.J(l,"slot")&&""===c||1===u&&t.J(l,"slot")===c)&&(g.some(e=>e.Ee===l)||(i=!0,l["s-sn"]=c,g.push({Oe:o,Ee:l})));1===t.ne(o)&&$(o)}};return(o,f,u,p,d,v,m,b,h,y,k,j)=>{if(c=o,a=t.be(c),r=c["s-cr"],n=p,l=c["s-sc"],s=i=!1,w(f,u),s){for($(u.e),m=0;m<g.length;m++)(b=g[m]).Ee["s-ol"]||((h=t.V(""))["s-nr"]=b.Ee,t.X(t.te(b.Ee),b.Ee["s-ol"]=h,b.Ee));for(e.ee=!0,m=0;m<g.length;m++){for(b=g[m],k=t.te(b.Oe),j=t.ve(b.Oe),h=b.Ee["s-ol"];h=t.me(h);)if((y=h["s-nr"])&&y&&y["s-sn"]===b.Ee["s-sn"]&&k===t.te(y)&&(y=t.ve(y))&&y&&!y["s-nr"]){j=y;break}(!j&&k!==t.te(b.Ee)||t.ve(b.Ee)!==j)&&b.Ee!==j&&(t.pe(b.Ee),t.X(k,b.Ee,j))}e.ee=!1}return i&&M(u.e),g.length=0,u}})(M,m),h["s-ld"]=[],h["s-rn"]=!0,h["s-init"]=(()=>{M.z.set(h,v.loaded=M.W=!0),m.ge(i,"appload",{detail:{namespace:t}})}),c.map(b).forEach(e=>w(e,class extends HTMLElement{})),M.Q||h["s-init"](),((e,t,n,o,l,i)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.n(t);if(o)if(e.z.has(t))n(t);else{const o=e.le.get(t)||[];o.push(n),e.le.set(t,o)}return!!o}),l){for(i=l.length-1;i>=0;i--)t.componentOnReady(l[i][0],l[i][1])&&l.splice(i,1);for(i=0;i<o.length;i++)if(!n[o[i]].componentOnReady)return;for(i=0;i<l.length;i++)l[i][1](null);l.length=0}})(M,v,i,i["s-apps"],i["s-cr"]),v.initialized=!0,M})(n,x,w,d,r,h,c);
})(window,document,{},"WvFeedList","hydrated",[["wv-feed","u0ercbnd",0,[["record",1],["reloadPostIndex",16],["store",4,0,0,0,"store"]]],["wv-feed-list","u0ercbnd",0,[["isDebug",1,0,"is-debug",2],["records",1,0,1,2],["reloadPostIndex",16],["store",4,0,0,0,"store"]]]]);