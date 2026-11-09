var Ie=Object.defineProperty;var qe=(e,n,s)=>n in e?Ie(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s;var se=(e,n,s)=>qe(e,typeof n!="symbol"?n+"":n,s);import{r as j,j as u,i as Me,D as Se,s as _e,h as N,a as xe,b as Ke,e as ce,c as Be,d as H,A as oe,f as Ee,g as Ce,P as Je,k as Ue,S as Qe,l as Ve,m as $e,n as en,o as nn}from"./index-B9q-5_R-.js";import{S as tn,a as sn}from"./program-kuoRuF_8.js";const rn="_label_fqs8e_4",an="_badge_fqs8e_27",on="_text_fqs8e_38",dn="_actions_fqs8e_42",cn="_action_fqs8e_42",v={label:rn,badge:an,text:on,actions:dn,action:cn};function un({persona:e,studentName:n,onReset:s,onSwitch:t,onExit:i,onTour:r,realSessionFound:a=!1,onReload:c}){const l=e==="new"?"returning student":"new student",h=j.useRef(null),[w,O]=j.useState(56);return j.useEffect(()=>{const k=h.current;if(!k)return;const L=()=>O(Math.ceil(k.getBoundingClientRect().height)+12+12);if(L(),typeof ResizeObserver>"u")return;const R=new ResizeObserver(L);return R.observe(k),()=>R.disconnect()},[]),u.jsxs(u.Fragment,{children:[u.jsxs("div",{ref:h,className:v.label,role:"status","aria-label":"Demo mode","data-testid":"demo-label",children:[u.jsx("span",{className:v.badge,children:"Demo"}),a?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:v.text,children:"Someone is signed in for real in another tab, so the demo is paused and nothing is sent to GitHub. Reload this page to leave the demo."}),u.jsx("span",{className:v.actions,children:u.jsx("button",{type:"button",className:v.action,onClick:c??i,children:"Reload this page"})})]}):u.jsxs(u.Fragment,{children:[u.jsxs("span",{className:v.text,children:["Practice data for ",n,". Nothing is sent to GitHub."]}),u.jsxs("span",{className:v.actions,children:[r?u.jsx("button",{type:"button",className:v.action,onClick:r,children:"Take the tour"}):null,u.jsx("button",{type:"button",className:v.action,onClick:s,children:"Reset"}),u.jsxs("button",{type:"button",className:v.action,onClick:t,children:["Show ",l]}),u.jsx("button",{type:"button",className:v.action,onClick:i,children:"Exit demo"})]})]})]}),u.jsx("div",{"aria-hidden":"true","data-testid":"demo-label-space",style:{height:w}})]})}const ln="_scrim_mglm2_3",pn="_card_mglm2_14",hn="_badge_mglm2_27",mn="_title_mglm2_40",fn="_text_mglm2_46",wn="_actions_mglm2_53",bn="_primary_mglm2_59",yn="_secondary_mglm2_60",T={scrim:ln,card:pn,badge:hn,title:mn,text:fn,actions:wn,primary:bn,secondary:yn},J=new Set;let W=null;function B(){for(const e of[...J])e()}function On(){const{pushState:e,replaceState:n}=window.history;return window.history.pushState=function(...s){const t=e.apply(this,s);return B(),t},window.history.replaceState=function(...s){const t=n.apply(this,s);return B(),t},window.addEventListener("popstate",B),()=>{window.history.pushState=e,window.history.replaceState=n,window.removeEventListener("popstate",B)}}function gn(e){return J.add(e),W||(W=On()),()=>{J.delete(e),J.size===0&&W&&(W(),W=null)}}const vn=()=>window.location.pathname;function zn({onTryInstructorDemo:e,onLeave:n,onBack:s}){const t=j.useSyncExternalStore(gn,vn,()=>"/"),i=Me(t),r=j.useRef(null);return j.useEffect(()=>{var c;if(!i)return;const a=document.getElementById("root");return a==null||a.setAttribute("inert",""),(c=r.current)==null||c.focus(),()=>a==null?void 0:a.removeAttribute("inert")},[i]),i?u.jsx("div",{className:T.scrim,children:u.jsxs("div",{className:T.card,role:"dialog","aria-modal":"true","aria-labelledby":"demo-instructor-title","data-testid":"demo-instructor-notice",children:[u.jsx("p",{className:T.badge,children:"Demo"}),u.jsx("h2",{id:"demo-instructor-title",className:T.title,children:"This is the student demo"}),u.jsx("p",{className:T.text,children:"The instructor screens are not part of the student demo, and nothing here is sent to GitHub, so there is no real class to show. Try the instructor demo to see the instructor side with practice data, or leave the demo to sign in as an instructor."}),u.jsxs("div",{className:T.actions,children:[u.jsx("button",{ref:r,type:"button",className:T.primary,onClick:e,children:"Try the instructor demo"}),u.jsx("button",{type:"button",className:T.secondary,onClick:n,children:"Leave the demo"}),u.jsx("button",{type:"button",className:T.secondary,onClick:s,children:"Back to the student demo"})]})]})}):null}const jn="_backdrop_139r5_3",kn="_dialog_139r5_14",Tn="_title_139r5_27",Mn="_body_139r5_33",Sn="_address_139r5_38",xn="_actions_139r5_44",Dn="_primary_139r5_51",Zn="_close_139r5_62",M={backdrop:jn,dialog:kn,title:Tn,body:Mn,address:Sn,actions:xn,primary:Dn,close:Zn},D="iu-indy-eportfolio",Y=(e,n)=>`${e}/${n}`;function V(e){let n="";for(let s=0;s<5;s+=1){let t=(2166136261^Math.imul(s+1,2654435761))>>>0;for(let i=0;i<e.length;i+=1)t^=e.charCodeAt(i),t=Math.imul(t,16777619)>>>0;t^=t>>>15,t=Math.imul(t,739982445)>>>0,t^=t>>>12,n+=(t>>>0).toString(16).padStart(8,"0")}return n}const Xn=e=>V(`blob:${e}`),$=e=>V(`tree:${Object.keys(e).sort().map(n=>`${n}=${e[n]}`).join(`
`)}`);function z(e){const n=new TextEncoder().encode(e);let s="";for(let t=0;t<n.length;t+=32768)s+=String.fromCharCode(...n.subarray(t,t+32768));return btoa(s)}function Oe(e,n,s){const t={},i=$(t);return{owner:e,name:n,private:s,blobs:{},trees:{[i]:t},commits:{},head:""}}function ue(e,n){const s=Xn(n);return e.blobs[s]=n,s}function U(e,n,s,t,i){const r=e.head,a=r?{...e.trees[e.commits[r].tree]}:{};for(const[h,w]of Object.entries(n))w===null?delete a[h]:a[h]=ue(e,w);const c=$(a);e.trees[c]=a;const l=V(`commit:${c}:${r}:${s}:${t}:${Object.keys(e.commits).length}`);return e.commits[l]={tree:c,parents:r?[r]:[],message:s,date:t},e.head=l,l}function Gn(e,n,s,t,i){const r={};for(const[c,l]of Object.entries(n))r[c]=ue(e,l);const a=$(r);e.trees[a]=r,e.commits[i]={tree:a,parents:[],message:s,date:t}}function I(e,n){if(n==="main")return e.head||null;if(e.commits[n])return n;if(!/^[0-9a-f]{7,40}$/i.test(n))return null;const s=Object.keys(e.commits).filter(t=>t.startsWith(n.toLowerCase()));return s.length===1?s[0]:null}function le(e,n){return e.trees[e.commits[n].tree]??{}}function De(e,n,s){const t=le(e,n)[s];return t===void 0?null:{sha:t,base64:e.blobs[t]??""}}class Nn{constructor(n){se(this,"misses",[]);se(this,"persisted",!0);this.state=n}save(){try{sessionStorage.setItem(Se,JSON.stringify(this.state)),this.persisted=!0}catch{this.persisted=!1}}nextId(){return this.state.nextId+=1,this.state.nextId}repo(n){return this.state.repos[n]??null}get privateRepo(){return this.state.repos[this.state.repo]}get siteRepo(){return this.state.repos[`${this.state.repo}-site`]}}function Pn(){try{const e=sessionStorage.getItem(Se);if(!e)return null;const n=JSON.parse(e);return n.version!==1||!n.repos||!n.repo||!n.repos[n.repo]?null:n}catch{return null}}function Hn(e){if(!e)return!1;try{return new URL(e).hostname.toLowerCase()===`${D}.github.io`}catch{return!1}}const Ln="/portfolio-editor-dev/site";function Rn(){window.history.pushState(window.history.state,"",Ln),window.dispatchEvent(new PopStateEvent("popstate",{state:window.history.state}))}function An(){const[e,n]=j.useState(null),s=j.useRef(null);return j.useEffect(()=>{const t=i=>{const r=i.target instanceof Element?i.target.closest("a"):null;!r||!Hn(r.href)||(i.preventDefault(),i.stopPropagation(),n(r.href))};return document.addEventListener("click",t,!0),()=>document.removeEventListener("click",t,!0)},[]),j.useEffect(()=>{var i;if(e===null)return;(i=s.current)==null||i.focus();const t=r=>{r.key==="Escape"&&n(null)};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[e]),e===null?null:u.jsx("div",{className:M.backdrop,onClick:()=>n(null),children:u.jsxs("div",{className:M.dialog,role:"dialog","aria-modal":"true","aria-labelledby":"demo-live-site-title","data-testid":"demo-live-site-note",onClick:t=>t.stopPropagation(),children:[u.jsx("h2",{id:"demo-live-site-title",className:M.title,children:"This is a practice site"}),u.jsxs("p",{className:M.body,children:["In real use this link opens the student’s published site at ",u.jsx("span",{className:M.address,children:e}),". The demo builds and hosts nothing, so there is no live site to open."]}),u.jsx("p",{className:M.body,children:"To see how the site looks to visitors, use “Live now” and “Staged” on the Public site screen."}),u.jsxs("div",{className:M.actions,children:[u.jsx("button",{ref:s,type:"button",className:M.primary,onClick:()=>{n(null),Rn()},children:"Open the Public site screen"}),u.jsx("button",{type:"button",className:M.close,onClick:()=>n(null),children:"Close"})]})]})})}function Wn(e){const n=j.useSyncExternalStore(_e,N,()=>!1);return u.jsxs(u.Fragment,{children:[u.jsx(un,{persona:e.persona,studentName:e.studentName,realSessionFound:n,onReload:e.onReload,onReset:e.onReset,onSwitch:e.onSwitch,onExit:e.onExit,onTour:e.onTour}),u.jsx(An,{}),u.jsx(zn,{onTryInstructorDemo:e.onTryInstructorDemo,onLeave:e.onLeaveForInstructorSignIn,onBack:e.onBackToStudentDemo})]})}const ge="publish.yml",Yn=2500,de=7e3,m=(e,n=200)=>({status:n,body:e}),g=()=>({status:404,body:{message:"Not Found"}}),F=e=>({status:422,body:{message:e}});function S(e){if(!e.body)return{};try{const n=JSON.parse(e.body);return n!==null&&typeof n=="object"?n:{}}catch{return{}}}const Fn=e=>Math.floor(e.replace(/=+$/,"").length*3/4);function ve(e,n){const s=n-e.createdAt,t=s>=de;return{id:e.id,status:t?"completed":s>=Yn?"in_progress":"queued",conclusion:t?"success":null,html_url:`https://github.com/${e.repo}/actions/runs/${e.id}`,created_at:new Date(e.createdAt).toISOString(),display_title:"Publish site"}}function In(e,n){const s=le(e,n),t=[];for(const[i,r]of Object.entries(s)){const a=/^src\/content\/pages\/([^/]+)\.json$/.exec(i);if(a)try{const c=JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(e.blobs[r]??""),l=>l.charCodeAt(0))));if(c.status!=="published")continue;t.push({slug:a[1],order:typeof c.order=="number"?c.order:0,title:typeof c.title=="string"?c.title:""})}catch{}}return t.sort((i,r)=>i.order-r.order||i.title.localeCompare(r.title)).map(i=>i.slug)}function qn(e,n){let s=!1;for(const t of e.state.runs){if(t.settled||n-t.createdAt<de)continue;const i=e.state.repos[t.repo],r=e.state.repos[`${t.repo}-site`];if(i&&r){const a={schemaVersion:1,sha:t.sourceSha,publishedAt:new Date(t.createdAt+de).toISOString().replace(/\.\d{3}Z$/,"Z"),pages:In(i,t.sourceSha)};U(r,{"published.json":z(`${JSON.stringify(a,null,2)}
`)},`Publish site (${t.sourceSha.slice(0,7)})`,a.publishedAt)}t.settled=!0,s=!0}s&&e.save()}const _n=15e3,Kn="dr-sanders",Bn="Thanks for submitting. This is a practice reply from the demo: in a real term your instructor writes here, and you can answer in this thread. One thing to try: add a sentence about what you would do differently next week.",En=e=>/^Week \d{2}\b/.test(e);function Ze(e,n){let s=!1;for(const t of e.state.issues[e.state.repo]??[]){if(!t.replyAt||n<t.replyAt)continue;const i=new Date(t.replyAt).toISOString();t.comments.push({id:e.nextId(),login:Kn,body:Bn,created_at:i,updated_at:i}),t.replyAt=null,s=!0}return s&&e.save(),s}function E(e,n){return{number:n.number,title:n.title,body:n.body,state:n.state,created_at:n.created_at,html_url:`https://github.com/${e}/issues/${n.number}`}}function C(e,n,s){return{id:s.id,user:{login:s.login,avatar_url:null},body:s.body,created_at:s.created_at,updated_at:s.updated_at,html_url:`https://github.com/${e}/issues/${n}#issuecomment-${s.id}`}}function ie(e,n){const s=Math.max(1,Number(n.searchParams.get("per_page")??30)||30),t=Math.max(1,Number(n.searchParams.get("page")??1)||1);return e.slice((t-1)*s,t*s)}function Cn(e,n,s,t,i){var ye;const r=e.repo(s);if(!r)return g();const{method:a,url:c}=n,l=!r.private;if(a!=="GET"&&a!=="HEAD"&&l)return{status:403,body:{message:"Resource not accessible by personal access token"}};if(t==="")return m({full_name:s,private:r.private,permissions:{push:!l,admin:!1}});const w=/^\/contents\/(.+)$/.exec(t);if(w&&a==="GET"){const o=decodeURIComponent(w[1]).replace(/\/$/,""),d=I(r,c.searchParams.get("ref")??"main");if(!d)return g();const p=le(r,d),b=De(r,d,o);if(b)return m({name:o.split("/").pop(),path:o,type:"file",size:Fn(b.base64),sha:b.sha,content:b.base64,encoding:"base64"});const y=`${o}/`,f=new Map;for(const A of Object.keys(p)){if(!A.startsWith(y))continue;const[K,...Fe]=A.slice(y.length).split("/");f.set(K,Fe.length>0?"dir":f.get(K)??"file")}return f.size===0?g():m([...f].map(([A,K])=>({name:A,type:K,path:`${o}/${A}`})))}const O=/^\/git\/ref\/heads\/(.+)$/.exec(t);if(O&&a==="GET")return O[1]==="main"&&r.head?m({object:{sha:r.head}}):g();const k=/^\/git\/refs\/heads\/(.+)$/.exec(t);if(k&&a==="PATCH"){const o=String(S(n).sha??""),d=r.commits[o];return k[1]!=="main"?g():d?!d.parents.includes(r.head)&&o!==r.head?F("Update is not a fast forward"):(r.head=o,e.save(),m({ref:"refs/heads/main",object:{sha:o}})):F("Object does not exist")}const L=/^\/git\/commits\/([0-9a-f]+)$/.exec(t);if(L&&a==="GET"){const o=I(r,L[1]);return o?m({sha:o,tree:{sha:r.commits[o].tree}}):g()}if(t==="/git/blobs"&&a==="POST"){const o=S(n),d=String(o.content??""),p=o.encoding==="base64"?d.replace(/\n/g,""):z(d),b=ue(r,p);return e.save(),m({sha:b},201)}if(t==="/git/trees"&&a==="POST"){const o=S(n),d=typeof o.base_tree=="string"?o.base_tree:"",p={...r.trees[d]??{}},b=Array.isArray(o.tree)?o.tree:[];for(const f of b){if(!f.path)return F("Invalid tree entry");if(f.sha===null)delete p[f.path];else if(typeof f.sha=="string"&&r.blobs[f.sha]!==void 0)p[f.path]=f.sha;else return F("Tree entry refers to a blob that does not exist")}const y=$(p);return r.trees[y]=p,e.save(),m({sha:y},201)}if(t==="/git/commits"&&a==="POST"){const o=S(n),d=String(o.tree??"");if(!r.trees[d])return F("Tree does not exist");const p=Array.isArray(o.parents)?o.parents.map(String):[],b=String(o.message??""),y=new Date(i).toISOString(),f=V(`commit:${d}:${p.join(",")}:${b}:${y}:${Object.keys(r.commits).length}`);return r.commits[f]={tree:d,parents:p,message:b,date:y},e.save(),m({sha:f,tree:{sha:d}},201)}if(t==="/commits"&&a==="GET"){const o=r.head?r.commits[r.head]:null;return o?m([{sha:r.head,commit:{message:o.message,committer:{date:o.date}}}]):{status:409,body:{message:"Git Repository is empty."}}}const R=/^\/commits\/([0-9a-fA-F]+)$/.exec(t);if(R&&a==="GET"){const o=I(r,R[1].toLowerCase());if(!o)return g();const d=r.commits[o];return m({sha:o,commit:{message:d.message,committer:{date:d.date}}})}const ne=s,P=(ye=e.state.issues)[ne]??(ye[ne]=[]);if(t==="/issues"&&a==="GET"){const o=c.searchParams.get("state")??"open",d=P.filter(p=>o==="all"||p.state===o);return m(ie(d,c).map(p=>E(s,p)))}if(t==="/issues"&&a==="POST"){const o=S(n),p={number:P.reduce((b,y)=>Math.max(b,y.number),0)+1,title:String(o.title??""),body:String(o.body??""),state:"open",created_at:new Date(i).toISOString(),comments:[],replyAt:En(String(o.title??""))?i+_n:null};return P.push(p),e.save(),m(E(s,p),201)}if(t==="/issues/comments"&&a==="GET"){const o=c.searchParams.get("since"),d=c.searchParams.get("direction")!=="asc",p=P.flatMap(y=>y.comments.map(f=>({issue:y.number,c:f}))),b=o?p.filter(({c:y})=>y.updated_at>=o):p;return b.sort((y,f)=>(d?-1:1)*y.c.created_at.localeCompare(f.c.created_at)),m(ie(b,c).map(({issue:y,c:f})=>C(s,y,f)))}const me=/^\/issues\/comments\/(\d+)$/.exec(t);if(me&&(a==="PATCH"||a==="DELETE")){const o=Number(me[1]);for(const d of P){const p=d.comments.find(b=>b.id===o);if(p)return a==="DELETE"?(d.comments=d.comments.filter(b=>b!==p),e.save(),{status:204}):(p.body=String(S(n).body??p.body),p.updated_at=new Date(i).toISOString(),e.save(),m(C(s,d.number,p)))}return g()}const te=/^\/issues\/(\d+)(\/comments)?$/.exec(t);if(te){const o=P.find(d=>d.number===Number(te[1]));if(!o)return g();if(te[2]){if(a==="GET")return m(ie(o.comments,c).map(d=>C(s,o.number,d)));if(a==="POST"){const d=new Date(i).toISOString(),p={id:e.nextId(),login:e.state.login,body:String(S(n).body??""),created_at:d,updated_at:d};return o.comments.push(p),e.save(),m(C(s,o.number,p),201)}}else{if(a==="GET")return m(E(s,o));if(a==="PATCH"){const d=S(n).state;return(d==="open"||d==="closed")&&(o.state=d),e.save(),m(E(s,o))}}}const fe=/^\/actions\/workflows\/([^/]+)\/dispatches$/.exec(t);if(fe&&a==="POST"){if(fe[1]!==ge)return g();const o=S(n).inputs,d=o!=null&&o.source_sha?I(r,o.source_sha):null;return e.state.runs.push({id:e.nextId(),repo:s,workflow:ge,createdAt:i,sourceSha:d??r.head,settled:!1}),e.save(),{status:204}}const we=/^\/actions\/workflows\/([^/]+)\/runs$/.exec(t);if(we&&a==="GET"){const o=e.state.runs.filter(d=>d.repo===s&&d.workflow===we[1]).reverse();return m({total_count:o.length,workflow_runs:o.slice(0,5).map(d=>ve(d,i))})}const be=/^\/actions\/runs\/(\d+)$/.exec(t);if(be&&a==="GET"){const o=e.state.runs.find(d=>d.id===Number(be[1])&&d.repo===s);return o?m(ve(o,i)):g()}return g()}function Jn(e,n,s=Date.now()){qn(e,s),Ze(e,s);const t=n.url.pathname;if(t==="/user"&&n.method==="GET")return m({login:e.state.login,id:1,avatar_url:null});if(t==="/user/repos"&&n.method==="GET")return m([{full_name:e.state.repo,permissions:{push:!0}}]);const i=/^\/repos\/([^/]+\/[^/]+)(\/.*)?$/.exec(t),r=i?Cn(e,n,decodeURIComponent(i[1]),i[2]??"",s):g();return r.status===404&&e.misses.push(`${n.method} ${t}${n.url.search}`),r}function Un(e,n){const[s,t,i,...r]=n.url.pathname.split("/").filter(Boolean).map(decodeURIComponent),a=s&&t?e.repo(`${s}/${t}`):null;if(!a||n.method!=="GET")return{status:404,text:"404: Not Found",contentType:"text/plain"};const c=I(a,i??""),l=c?De(a,c,r.join("/")):null;return l?{status:200,text:new TextDecoder().decode(Uint8Array.from(atob(l.base64),h=>h.charCodeAt(0))),contentType:"text/plain"}:{status:404,text:"404: Not Found",contentType:"text/plain"}}const Qn=1e3,Vn=new Set(["feedback","journal-feedback-state"]),$n=e=>Object.values(e.state.issues).some(n=>n.some(s=>typeof s.replyAt=="number"));function et(e,n,s=Qn){const t=setInterval(()=>{$n(e)&&Ze(e,Date.now())&&n.invalidateQueries({predicate:i=>Vn.has(i.queryKey[0])})},s);return()=>clearInterval(t)}const nt=`{
  "5": [
    {
      "id": 9001,
      "user": {
        "login": "dr-sanders",
        "avatar_url": null
      },
      "created_at": "2026-09-24T14:05:00Z",
      "updated_at": "2026-09-24T14:05:00Z",
      "html_url": "https://github.com/x/y/issues/5#issuecomment-9001",
      "body": "Good observation in #2. For #4, name one assumption you held about the technique itself, not about the people. What did you expect powder to do?"
    },
    {
      "id": 9002,
      "user": {
        "login": "jellis",
        "avatar_url": null
      },
      "created_at": "2026-09-24T19:30:00Z",
      "updated_at": "2026-09-24T19:30:00Z",
      "html_url": "https://github.com/x/y/issues/5#issuecomment-9002",
      "body": "That makes sense. I'll revise #4 tonight."
    },
    {
      "id": 9003,
      "user": {
        "login": "dr-sanders",
        "avatar_url": null
      },
      "created_at": "2026-09-26T15:20:00Z",
      "updated_at": "2026-09-26T15:20:00Z",
      "html_url": "https://github.com/x/y/issues/5#issuecomment-9003",
      "body": "Thanks. The revised #4 names the assumption clearly. One more thing to consider for next week: what would you change about how you load the brush?"
    }
  ],
  "6": [
    {
      "id": 9004,
      "user": {
        "login": "dr-sanders",
        "avatar_url": null
      },
      "created_at": "2026-10-02T14:00:00Z",
      "updated_at": "2026-10-02T14:00:00Z",
      "html_url": "https://github.com/x/y/issues/6#issuecomment-9004",
      "body": "Good midpoint reflection. Let us talk through your capstone topic options on Thursday."
    }
  ],
  "21": [
    {
      "id": 9201,
      "user": {
        "login": "dr-sanders",
        "avatar_url": null
      },
      "created_at": "2026-10-05T15:20:00Z",
      "updated_at": "2026-10-05T15:20:00Z",
      "html_url": "https://github.com/x/y/issues/21#issuecomment-9201",
      "body": "The host-site paragraph reads well. Before you publish, check that the photo caption names no one."
    }
  ]
}
`,tt=`{
  "_doc": "Feedback Issue number -> GitHub issue state. Issues not listed are open. A closed Issue is what the journal overview shows as Reviewed.",
  "1": "closed",
  "2": "closed",
  "3": "closed",
  "4": "closed"
}
`,st=`{
  "schemaVersion": 1,
  "title": "Last fall: photography and documentation",
  "kind": "journal",
  "week": 3,
  "date": "2025-09-08",
  "hoursLogged": 14,
  "status": "submitted",
  "feedbackIssue": null,
  "updatedAt": "2026-09-08T18:00:00Z",
  "blocks": [
    {
      "id": "b_w03q10000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What did you do this week?",
        "hint": "The experience itself, briefly.",
        "answer": "<p>Learned the intake photo standard: scale, label, four angles.</p>"
      }
    },
    {
      "id": "b_w03q20000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What surprised you?",
        "hint": "Where expectation and reality diverged.",
        "answer": "<p>How often lighting, not the subject, is the problem.</p>"
      }
    },
    {
      "id": "b_w03q30000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "Why does it matter?",
        "hint": "Significance to your practice and your field.",
        "answer": "<p>Photos are often the only record of original packaging.</p>"
      }
    },
    {
      "id": "b_w03q40000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What assumptions did you bring?",
        "hint": "Name the priors you arrived with.",
        "answer": "<p>That photography was the easy part.</p>"
      }
    },
    {
      "id": "b_w03q50000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What will you do differently?",
        "hint": "The concrete forward action.",
        "answer": "<p>Build a lighting checklist.</p>"
      }
    }
  ]
}
`,it=`{
  "schemaVersion": 1,
  "title": "Lab incident debrief",
  "kind": "journal",
  "week": 9,
  "item": "lab-incident",
  "date": "2026-10-20",
  "hoursLogged": null,
  "status": "draft",
  "feedbackIssue": null,
  "updatedAt": "2026-10-08T13:45:00Z",
  "blocks": [
    {
      "id": "b_li01q10000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What happened?",
        "hint": "Facts only: no names, no case numbers.",
        "answer": ""
      }
    },
    {
      "id": "b_li01q20000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What was done in response?",
        "hint": "The steps the lab took, in order.",
        "answer": ""
      }
    }
  ]
}
`,rt=`{
  "schemaVersion": 1,
  "title": "Visit to the regional crime lab",
  "kind": "journal",
  "week": 4,
  "item": "site-visit",
  "date": "2026-09-15",
  "hoursLogged": null,
  "status": "submitted",
  "feedbackIssue": null,
  "updatedAt": "2026-09-17T18:00:00Z",
  "blocks": [
    {
      "id": "b_sv01q10000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What did you do this week?",
        "hint": "The experience itself, briefly.",
        "answer": "<p>Toured the regional lab's DNA and firearms units with two other interns.</p>"
      }
    }
  ]
}
`,at=`{
  "schemaVersion": 1,
  "title": "Orientation and first impressions",
  "kind": "journal",
  "week": 1,
  "date": "2026-08-25",
  "hoursLogged": 8,
  "status": "submitted",
  "feedbackIssue": 1,
  "updatedAt": "2026-08-25T18:00:00Z",
  "blocks": [
    {
      "id": "b_w01q10000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What did you do this week?",
        "hint": "The experience itself, briefly.",
        "answer": "<p>Badge, safety training and a tour of every section. Shadowed the intake manager.</p>"
      }
    },
    {
      "id": "b_w01q20000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What surprised you?",
        "hint": "Where expectation and reality diverged.",
        "answer": "<p>How quiet the building is.</p>"
      }
    },
    {
      "id": "b_w01q30000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "Why does it matter?",
        "hint": "Significance to your practice and your field.",
        "answer": "<p>The first handoff sets the tone for the whole case file.</p>"
      }
    },
    {
      "id": "b_w01q40000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What assumptions did you bring?",
        "hint": "Name the priors you arrived with.",
        "answer": "<p>That the work would feel like TV. It is mostly paperwork.</p>"
      }
    },
    {
      "id": "b_w01q50000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What will you do differently?",
        "hint": "The concrete forward action.",
        "answer": "<p>Ask what a form is for before filling it in.</p>"
      }
    }
  ]
}`,ot=`{
  "schemaVersion": 1,
  "title": "Chain of custody in practice",
  "kind": "journal",
  "week": 2,
  "date": "2026-09-01",
  "hoursLogged": 12,
  "status": "submitted",
  "feedbackIssue": 2,
  "updatedAt": "2026-09-01T18:00:00Z",
  "blocks": [
    {
      "id": "b_w02q10000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What did you do this week?",
        "hint": "The experience itself, briefly.",
        "answer": "<p>Checked in 22 items under supervision and learned the seal and initial rules.</p>"
      }
    },
    {
      "id": "b_w02q20000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What surprised you?",
        "hint": "Where expectation and reality diverged.",
        "answer": "<p>One missing initial can hold up a whole submission.</p>"
      }
    },
    {
      "id": "b_w02q30000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "Why does it matter?",
        "hint": "Significance to your practice and your field.",
        "answer": "<p>Custody records are what make evidence usable in court.</p>"
      }
    },
    {
      "id": "b_w02q40000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What assumptions did you bring?",
        "hint": "Name the priors you arrived with.",
        "answer": "<p>That a small gap is a small problem.</p>"
      }
    },
    {
      "id": "b_w02q50000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What will you do differently?",
        "hint": "The concrete forward action.",
        "answer": "<p>Read the record back before signing it.</p>"
      }
    }
  ]
}`,dt=`{
  "schemaVersion": 1,
  "title": "Photography and documentation",
  "kind": "journal",
  "week": 3,
  "date": "2026-09-08",
  "hoursLogged": 14,
  "status": "submitted",
  "feedbackIssue": 3,
  "updatedAt": "2026-09-08T18:00:00Z",
  "blocks": [
    {
      "id": "b_w03q10000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What did you do this week?",
        "hint": "The experience itself, briefly.",
        "answer": "<p>Learned the intake photo standard: scale, label, four angles.</p>"
      }
    },
    {
      "id": "b_w03q20000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What surprised you?",
        "hint": "Where expectation and reality diverged.",
        "answer": "<p>How often lighting, not the subject, is the problem.</p>"
      }
    },
    {
      "id": "b_w03q30000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "Why does it matter?",
        "hint": "Significance to your practice and your field.",
        "answer": "<p>Photos are often the only record of original packaging.</p>"
      }
    },
    {
      "id": "b_w03q40000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What assumptions did you bring?",
        "hint": "Name the priors you arrived with.",
        "answer": "<p>That photography was the easy part.</p>"
      }
    },
    {
      "id": "b_w03q50000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What will you do differently?",
        "hint": "The concrete forward action.",
        "answer": "<p>Build a lighting checklist.</p>"
      }
    }
  ]
}`,ct=`{
  "schemaVersion": 1,
  "title": "Section rotations",
  "kind": "journal",
  "week": 4,
  "date": "2026-09-15",
  "hoursLogged": 6,
  "status": "submitted",
  "feedbackIssue": 4,
  "updatedAt": "2026-09-15T18:00:00Z",
  "blocks": [
    {
      "id": "b_w04q10000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What did you do this week?",
        "hint": "The experience itself, briefly.",
        "answer": "<p>Rotated through biology and chemistry to see where intake items go.</p>"
      }
    },
    {
      "id": "b_w04q20000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What surprised you?",
        "hint": "Where expectation and reality diverged.",
        "answer": "<p>How different the sections sound when they describe the same item.</p>"
      }
    },
    {
      "id": "b_w04q30000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "Why does it matter?",
        "hint": "Significance to your practice and your field.",
        "answer": "<p>Intake choices shape what each section can do later.</p>"
      }
    },
    {
      "id": "b_w04q40000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What assumptions did you bring?",
        "hint": "Name the priors you arrived with.",
        "answer": "<p>That every section wants the same packaging.</p>"
      }
    },
    {
      "id": "b_w04q50000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What will you do differently?",
        "hint": "The concrete forward action.",
        "answer": "<p>Ask each section what they wish intake did differently.</p>"
      }
    }
  ]
}`,ut=`{
  "schemaVersion": 1,
  "title": "Latent prints and patience",
  "kind": "journal",
  "week": 5,
  "date": "2026-09-22",
  "hoursLogged": 12,
  "status": "submitted",
  "feedbackIssue": 5,
  "updatedAt": "2026-09-22T18:00:00Z",
  "blocks": [
    {
      "id": "b_w05q10000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What did you do this week?",
        "hint": "The experience itself, briefly.",
        "answer": "<p>I spent most of the week at the intake bench and on Thursday I shadowed the latent print examiner. I dusted and lifted prints from a glass tumbler and a plastic bag using black powder and gel lifters, and I processed 14 intake items.</p>"
      }
    },
    {
      "id": "b_w05q20000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What surprised you?",
        "hint": "Where expectation and reality diverged.",
        "answer": "<p>How little powder it takes. My first lift was a smear because I overloaded the brush; the examiner said the surface will tell you when to stop.</p>"
      }
    },
    {
      "id": "b_w05q30000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "Why does it matter?",
        "hint": "Significance to your practice and your field.",
        "answer": "<p>A print that is smeared at the bench cannot be recovered later. The quality of the lift sets the ceiling for everything downstream, including whether an examiner can compare it at all.</p>"
      }
    },
    {
      "id": "b_w05q40000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What assumptions did you bring?",
        "hint": "Name the priors you arrived with.",
        "answer": "<p>I assumed experienced examiners would work quickly and confidently. In practice they are slow on purpose, and they will often decide a surface is not worth processing.</p>"
      }
    },
    {
      "id": "b_w05q50000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What will you do differently?",
        "hint": "The concrete forward action.",
        "answer": "<p>Slow down, use lighter strokes, photograph before lifting, and record the surface and powder in my bench log every time.</p>"
      }
    },
    {
      "id": "b_w05file00100",
      "type": "file",
      "width": 2,
      "required": false,
      "data": {
        "url": "content/journal/uploads/2026fa-week-05-lift-card.pdf",
        "name": "week-05-lift-card-deidentified.pdf",
        "kind": "pdf"
      }
    },
    {
      "id": "b_w05why000100",
      "type": "prompt",
      "width": 1,
      "required": false,
      "data": {
        "question": "Why is this evidence?",
        "hint": "A sentence on why the artifact above shows the week actually happened.",
        "answer": "<p>The scan shows my best lift from Thursday, with the surface and powder noted on the card. Identifiers are removed.</p>"
      }
    }
  ]
}`,lt=`{
  "schemaVersion": 1,
  "title": "Mentor check-in",
  "kind": "journal",
  "week": 6,
  "item": "midpoint",
  "date": "2026-09-29",
  "hoursLogged": 10,
  "status": "submitted",
  "feedbackIssue": 6,
  "updatedAt": "2026-09-29T18:00:00Z",
  "blocks": [
    {
      "id": "b_w06q10000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What did you do this week?",
        "hint": "The experience itself, briefly.",
        "answer": "<p>Midpoint review with my supervisor; reviewed my logs together.</p>"
      }
    },
    {
      "id": "b_w06q20000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What surprised you?",
        "hint": "Where expectation and reality diverged.",
        "answer": "<p>That my supervisor read all of them.</p>"
      }
    },
    {
      "id": "b_w06q30000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "Why does it matter?",
        "hint": "Significance to your practice and your field.",
        "answer": "<p>Feedback this early changes the second half.</p>"
      }
    },
    {
      "id": "b_w06q40000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What assumptions did you bring?",
        "hint": "Name the priors you arrived with.",
        "answer": "<p>That a review would be about mistakes.</p>"
      }
    },
    {
      "id": "b_w06q50000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What will you do differently?",
        "hint": "The concrete forward action.",
        "answer": "<p>Turn the feedback into two concrete goals.</p>"
      }
    }
  ]
}`,pt=`{
  "schemaVersion": 1,
  "title": "Packaging and storage standards",
  "kind": "journal",
  "week": 7,
  "date": "2026-10-06",
  "hoursLogged": 12,
  "status": "submitted",
  "feedbackIssue": 7,
  "updatedAt": "2026-10-06T18:00:00Z",
  "blocks": [
    {
      "id": "b_w07q10000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What did you do this week?",
        "hint": "The experience itself, briefly.",
        "answer": "<p>Repackaged damp items and learned why paper beats plastic for biological evidence.</p>"
      }
    },
    {
      "id": "b_w07q20000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What surprised you?",
        "hint": "Where expectation and reality diverged.",
        "answer": "<p>Moisture is the enemy of most of what we store.</p>"
      }
    },
    {
      "id": "b_w07q30000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "Why does it matter?",
        "hint": "Significance to your practice and your field.",
        "answer": "<p>Storage is part of the analysis.</p>"
      }
    },
    {
      "id": "b_w07q40000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What assumptions did you bring?",
        "hint": "Name the priors you arrived with.",
        "answer": "<p>That storage was a back-room job.</p>"
      }
    },
    {
      "id": "b_w07q50000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What will you do differently?",
        "hint": "The concrete forward action.",
        "answer": "<p>Check item condition before and after shelving.</p>"
      }
    }
  ]
}`,ht=`{
  "schemaVersion": 1,
  "title": "Court prep observation",
  "kind": "journal",
  "week": 8,
  "date": "2026-10-13",
  "hoursLogged": 10,
  "status": "submitted",
  "feedbackIssue": 8,
  "updatedAt": "2026-10-13T18:00:00Z",
  "blocks": [
    {
      "id": "b_w08q10000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What did you do this week?",
        "hint": "The experience itself, briefly.",
        "answer": "<p>Sat in on a mock testimony prep session.</p>"
      }
    },
    {
      "id": "b_w08q20000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What surprised you?",
        "hint": "Where expectation and reality diverged.",
        "answer": "<p>How much of testimony is explaining the paperwork.</p>"
      }
    },
    {
      "id": "b_w08q30000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "Why does it matter?",
        "hint": "Significance to your practice and your field.",
        "answer": "<p>Documentation is the part of my work a jury sees.</p>"
      }
    },
    {
      "id": "b_w08q40000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What assumptions did you bring?",
        "hint": "Name the priors you arrived with.",
        "answer": "<p>That the science carries the testimony.</p>"
      }
    },
    {
      "id": "b_w08q50000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What will you do differently?",
        "hint": "The concrete forward action.",
        "answer": "<p>Write my bench notes as if someone will read them aloud.</p>"
      }
    }
  ]
}`,mt=`{
  "schemaVersion": 1,
  "title": "Capstone planning",
  "kind": "journal",
  "week": 9,
  "date": "2026-10-20",
  "hoursLogged": null,
  "status": "draft",
  "feedbackIssue": null,
  "updatedAt": "2026-10-20T18:00:00Z",
  "blocks": [
    {
      "id": "b_w09q10000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What did you do this week?",
        "hint": "The experience itself, briefly.",
        "answer": "<p>Drafting capstone topic options: intake workflow review.</p>"
      }
    },
    {
      "id": "b_w09q20000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What surprised you?",
        "hint": "Where expectation and reality diverged.",
        "answer": ""
      }
    },
    {
      "id": "b_w09q30000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "Why does it matter?",
        "hint": "Significance to your practice and your field.",
        "answer": ""
      }
    },
    {
      "id": "b_w09q40000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What assumptions did you bring?",
        "hint": "Name the priors you arrived with.",
        "answer": ""
      }
    },
    {
      "id": "b_w09q50000000",
      "type": "prompt",
      "width": 3,
      "required": true,
      "data": {
        "question": "What will you do differently?",
        "hint": "The concrete forward action.",
        "answer": ""
      }
    }
  ]
}`,ft=`{
  "slug": "weekly-fis",
  "version": 3,
  "name": "Weekly reflection",
  "kind": "mini",
  "points": 10,
  "classification": ["Internship"],
  "folder": "baseline",
  "lines": [
    { "text": "Answers all five prompts in full sentences", "all": 4, "some": 2, "none": 0 },
    { "text": "Names a specific moment, not a general impression", "all": 3, "some": 1, "none": 0 },
    { "text": "Ends with a concrete next step", "all": 3, "some": 1, "none": 0 }
  ]
}
`,wt=`{
  "schemaVersion": 1,
  "key": "incident-report",
  "version": 1,
  "name": "Incident debrief",
  "description": "Facts first, then what you would change.",
  "blocks": [
    { "id": "b_tpl000000001", "type": "heading", "width": 3, "required": false, "data": { "text": "What happened", "level": 2 } },
    { "id": "b_tpl000000002", "type": "prompt", "width": 3, "required": true, "data": { "question": "What happened, in order?", "hint": "Facts only. No names, no case numbers.", "answer": "" } },
    { "id": "b_tpl000000003", "type": "prompt", "width": 3, "required": true, "data": { "question": "What would you do differently?", "hint": "", "answer": "" } }
  ]
}
`,bt=`{
  "schemaVersion": 1,
  "term": "2026fa",
  "termLabel": "Fall 2026",
  "hoursTarget": 160,
  "weeks": [
    {
      "n": 1,
      "start": "2026-08-25",
      "items": [
        {
          "id": "wk01",
          "title": "Orientation",
          "kind": "entry",
          "required": true
        }
      ]
    },
    {
      "n": 2,
      "start": "2026-09-01",
      "items": [
        {
          "id": "wk02",
          "title": "Weekly entry",
          "kind": "entry",
          "required": true
        }
      ]
    },
    {
      "n": 3,
      "start": "2026-09-08",
      "items": [
        {
          "id": "wk03",
          "title": "Weekly entry",
          "kind": "entry",
          "required": true
        }
      ]
    },
    {
      "n": 4,
      "start": "2026-09-15",
      "items": [
        {
          "id": "wk04",
          "title": "Weekly entry",
          "kind": "entry",
          "required": true
        },
        {
          "id": "site-visit",
          "title": "Site visit",
          "kind": "entry",
          "required": false
        }
      ]
    },
    {
      "n": 5,
      "start": "2026-09-22",
      "items": [
        {
          "id": "wk05",
          "title": "Weekly entry",
          "kind": "entry",
          "required": true,
          "prompt": "This week, describe one moment where you had to ask for help, and what you did next.",
          "rubric": "weekly-fis@3",
          "points": 10,
          "grading": "points"
        }
      ]
    },
    {
      "n": 6,
      "start": "2026-09-29",
      "items": [
        {
          "id": "midpoint",
          "title": "Midpoint check-in",
          "kind": "entry",
          "required": true
        }
      ]
    },
    {
      "n": 7,
      "start": "2026-10-06",
      "items": [
        {
          "id": "wk07",
          "title": "Weekly entry",
          "kind": "entry",
          "required": true
        }
      ]
    },
    {
      "n": 8,
      "start": "2026-10-13",
      "off": true,
      "items": [
        {
          "id": "off",
          "title": "Off week",
          "kind": "note",
          "required": false
        }
      ]
    },
    {
      "n": 9,
      "start": "2026-10-20",
      "items": [
        {
          "id": "wk09",
          "title": "Weekly entry",
          "kind": "entry",
          "required": true
        },
        {
          "id": "lab-incident",
          "title": "Lab incident debrief",
          "kind": "entry",
          "required": true,
          "due": "2026-10-14",
          "fromInstructor": true,
          "assignedAt": "2026-10-07T13:30:00Z",
          "note": "Facts only: no names, no case numbers. Write it up while it is fresh.",
          "template": "incident-report@1"
        }
      ]
    },
    {
      "n": 10,
      "start": "2026-10-27",
      "items": [
        {
          "id": "wk10",
          "title": "Weekly entry",
          "kind": "entry",
          "required": true
        }
      ]
    },
    {
      "n": 11,
      "start": "2026-11-03",
      "items": [
        {
          "id": "wk11",
          "title": "Weekly entry",
          "kind": "entry",
          "required": true
        },
        {
          "id": "poster",
          "title": "Poster due",
          "kind": "note",
          "required": false,
          "due": "2026-11-13"
        }
      ]
    },
    {
      "n": 12,
      "start": "2026-11-10",
      "items": [
        {
          "id": "final",
          "title": "Final reflection",
          "kind": "entry",
          "required": true
        }
      ]
    }
  ]
}
`,yt=`{
  "schemaVersion": 1,
  "term": "2025fa",
  "termLabel": "Fall 2025",
  "hoursTarget": 160,
  "locked": true,
  "lockedAt": "2025-12-19T17:00:00Z",
  "weeks": [
    {
      "n": 1,
      "start": "2025-08-25",
      "items": [
        {
          "id": "wk01",
          "title": "Orientation",
          "kind": "entry",
          "required": true
        }
      ]
    },
    {
      "n": 2,
      "start": "2025-09-01",
      "items": [
        {
          "id": "wk02",
          "title": "Weekly entry",
          "kind": "entry",
          "required": true
        }
      ]
    },
    {
      "n": 3,
      "start": "2025-09-08",
      "items": [
        {
          "id": "wk03",
          "title": "Weekly entry",
          "kind": "entry",
          "required": true
        }
      ]
    }
  ]
}
`,Ot=`{
  "schemaVersion": 1,
  "title": "About me",
  "kind": "page",
  "status": "published",
  "template": null,
  "order": 10,
  "updatedAt": "2026-09-20T12:00:00Z",
  "blocks": [
    {
      "id": "b_about0010000",
      "type": "heading",
      "width": 3,
      "required": false,
      "data": {
        "text": "About me",
        "level": 2
      }
    },
    {
      "id": "b_about0020000",
      "type": "text",
      "width": 2,
      "required": false,
      "data": {
        "html": "<p>I am a senior in Forensic Science at IU Indianapolis. I got into this field because I like careful, patient work.</p>"
      }
    },
    {
      "id": "b_about0030000",
      "type": "photo",
      "width": 1,
      "required": false,
      "data": {
        "url": "public/uploads/headshot.png",
        "alt": "Jordan Ellis at a lab bench",
        "caption": ""
      }
    }
  ]
}
`,gt=`{
  "schemaVersion": 1,
  "title": "About me",
  "kind": "page",
  "status": "published",
  "template": null,
  "order": 10,
  "updatedAt": "2026-09-28T16:20:00Z",
  "blocks": [
    {
      "id": "b_about0010000",
      "type": "heading",
      "width": 3,
      "required": false,
      "data": {
        "text": "About me",
        "level": 2
      }
    },
    {
      "id": "b_about0020000",
      "type": "text",
      "width": 2,
      "required": false,
      "data": {
        "html": "<p>I am a senior in Forensic Science at IU Indianapolis with a concentration in biology. I got into this field because I like careful, patient work that ends in something another person can rely on.</p><p>This semester I am interning at a county forensic services lab, learning how evidence moves from intake to the bench and how every step gets documented.</p>"
      }
    },
    {
      "id": "b_about0030000",
      "type": "photo",
      "width": 1,
      "required": false,
      "data": {
        "url": "public/uploads/headshot.png",
        "alt": "Jordan Ellis at a lab bench",
        "caption": ""
      }
    },
    {
      "id": "b_about0040000",
      "type": "skills",
      "width": 3,
      "required": false,
      "data": {
        "items": [
          "Attention to detail",
          "Technical writing",
          "Lab safety",
          "Chain of custody"
        ]
      }
    }
  ]
}`,vt=`{
  "schemaVersion": 1,
  "title": "Capstone",
  "kind": "capstone",
  "status": "draft",
  "template": "capstone",
  "order": 30,
  "updatedAt": "2026-09-30T12:00:00Z",
  "blocks": [
    {
      "id": "b_cap000001000",
      "type": "capstoneSummary",
      "width": 3,
      "required": false,
      "data": {
        "growthStatement": "<p>Placeholder: growth statement in progress.</p>",
        "curatedEvidence": "",
        "criticalReflection": "",
        "curriculumConnection": "",
        "professionalIdentity": ""
      }
    },
    {
      "id": "b_cap000002000",
      "type": "project",
      "width": 3,
      "required": false,
      "data": {
        "title": "Evidence intake workflow review",
        "dateRange": "Aug – Dec 2026",
        "setting": "County Forensic Services Lab",
        "problem": "<p>Placeholder: problem statement.</p>",
        "methods": "<p>Placeholder: methods.</p>",
        "outcomes": "<p>Placeholder: outcomes.</p>",
        "contribution": "",
        "skills": [
          "Chain of custody",
          "Technical writing"
        ],
        "artifactUrl": "",
        "artifactLabel": ""
      }
    },
    {
      "id": "b_cap000003000",
      "type": "finalShowcase",
      "width": 3,
      "required": false,
      "data": {
        "artifactUrl": "",
        "artifactFile": "",
        "presenterNote": "",
        "oneSentenceClaim": "",
        "methodsNote": "",
        "presentationReflection": "",
        "presentedAt": ""
      }
    }
  ]
}`,zt=`{
  "schemaVersion": 1,
  "title": "Internship overview",
  "kind": "page",
  "status": "published",
  "template": "profile",
  "order": 20,
  "updatedAt": "2026-10-02T15:41:00Z",
  "blocks": [
    {
      "id": "b_hero00001000",
      "type": "hero",
      "width": 3,
      "required": true,
      "data": {
        "headshot": "public/uploads/headshot.png",
        "name": "Jordan Ellis",
        "credentialLine": "Forensic Science · IU Indianapolis · Fall 2026",
        "tagline": "Forensic Science intern at County Forensic Services Lab",
        "aboutMe": "<p>Fifteen weeks in an evidence intake unit, learning how a case file earns the trust of everyone downstream.</p>",
        "competencies": [
          "Chain of custody",
          "Evidence photography"
        ],
        "links": [
          {
            "label": "LinkedIn",
            "url": "https://www.linkedin.com/in/jordan-ellis-example"
          }
        ]
      }
    },
    {
      "id": "b_facts0001000",
      "type": "facts",
      "width": 3,
      "required": true,
      "data": {}
    },
    {
      "id": "b_facts0002000",
      "type": "table",
      "width": 3,
      "required": false,
      "data": {
        "header": false,
        "rows": [
          [
            "Host site",
            "County Forensic Services Lab"
          ],
          [
            "Role",
            "Forensic Science Intern"
          ],
          [
            "Supervisor",
            "Evidence Intake Manager"
          ],
          [
            "Dates",
            "Aug 25 – Dec 5"
          ],
          [
            "Hours",
            "74 of 160"
          ]
        ]
      }
    },
    {
      "id": "b_stat00001000",
      "type": "stat",
      "width": 1,
      "required": false,
      "data": {
        "items": [
          {
            "value": "74",
            "label": "hours logged"
          },
          {
            "value": "160",
            "label": "hours required"
          }
        ]
      }
    },
    {
      "id": "b_hostsite0100",
      "type": "heading",
      "width": 3,
      "required": false,
      "data": {
        "text": "About the host site",
        "level": 2
      }
    },
    {
      "id": "b_hostsite0200",
      "type": "text",
      "width": 3,
      "required": false,
      "data": {
        "html": "<p>The lab serves county law enforcement and the medical examiner. My unit receives, labels, photographs and routes evidence to the biology, chemistry and latent print sections.</p><p>Everything I touch is logged. The unit runs on a simple rule: if it is not written down, it did not happen.</p>"
      }
    },
    {
      "id": "b_skills000100",
      "type": "skills",
      "width": 3,
      "required": false,
      "data": {
        "items": [
          "Chain of custody",
          "Evidence photography",
          "Lab safety",
          "Technical writing"
        ]
      }
    },
    {
      "id": "b_photo0000100",
      "type": "photo",
      "width": 3,
      "required": false,
      "data": {
        "url": "public/uploads/evidence-bench.png",
        "alt": "Evidence intake bench with labeled bins",
        "caption": "The intake bench, with bins labeled by section and priority."
      }
    },
    {
      "id": "b_typical00100",
      "type": "heading",
      "width": 3,
      "required": false,
      "data": {
        "text": "A typical day",
        "level": 2
      }
    },
    {
      "id": "b_typical00200",
      "type": "text",
      "width": 2,
      "required": false,
      "data": {
        "html": "<p>I start by reviewing the overnight log with my supervisor, then check in new submissions: verify seals, photograph packaging, record condition, and shelve by section.</p><p>Afternoons are for the bench: repackaging, labeling, and shadowing examiners in the sections that pull from our shelves.</p>"
      }
    },
    {
      "id": "b_typical00300",
      "type": "photo",
      "width": 1,
      "required": false,
      "data": {
        "url": "public/uploads/evidence-bench.png",
        "alt": "Sealed evidence bags awaiting check-in",
        "caption": "Check-in queue, mid-morning."
      }
    },
    {
      "id": "b_quote0000100",
      "type": "quote",
      "width": 3,
      "required": false,
      "data": {
        "text": "Jordan asks the right questions and writes them down. That habit is most of the job.",
        "cite": "Site supervisor · mentor feedback, week 6"
      }
    }
  ]
}`,jt=`{
  "schemaVersion": 1,
  "student": {
    "name": "Jordan Ellis",
    "major": "Forensic Science",
    "cohort": "2026FA"
  },
  "internship": {
    "org": "County Forensic Services Lab",
    "role": "Forensic Science Intern",
    "supervisor": "Evidence Intake Manager",
    "dates": "Aug 25 – Dec 5",
    "hoursTarget": 160
  },
  "theme": {
    "id": "iu",
    "customAccent": null
  },
  "links": {
    "linkedin": "https://www.linkedin.com/in/jordan-ellis-example"
  },
  "updatedAt": "2026-10-01T14:02:00Z"
}`,kt=`{
  "templateVersion": 2,
  "pageSchema": [1, 2],
  "capabilities": ["sections", "theme-v2", "wrap", "published-json", "staged-uploads"]
}
`,Tt=`{
  "schemaVersion": 2,
  "title": "Internship overview",
  "kind": "page",
  "status": "published",
  "template": "internship",
  "order": 20,
  "updatedAt": "2026-10-05T15:41:00Z",
  "spacing": "normal",
  "colGap": "normal",
  "coverImage": {
    "url": "public/uploads/evidence-bench.png",
    "alt": "Evidence intake bench with labeled bins"
  },
  "sections": [
    {
      "id": "s_0a1b2c3d4e01",
      "split": "full",
      "vAlign": "top",
      "mobile": "left",
      "space": "auto",
      "pad": "none",
      "stacks": [
        {
          "blocks": [
            {
              "id": "b_facts00000001",
              "type": "facts",
              "required": true,
              "data": {}
            }
          ]
        }
      ]
    },
    {
      "id": "s_0a1b2c3d4e02",
      "split": "half",
      "vAlign": "top",
      "mobile": "left",
      "space": "auto",
      "pad": "none",
      "stacks": [
        {
          "blocks": [
            {
              "id": "b_hostsite00001",
              "type": "heading",
              "required": false,
              "data": {
                "text": "About the host site",
                "level": 2
              }
            },
            {
              "id": "b_hostsite00002",
              "type": "text",
              "required": false,
              "data": {
                "html": "<p>The county forensic lab processes evidence for agencies across six counties. I joined the intake team, which logs, photographs and routes every item before it reaches an analyst.</p>"
              }
            },
            {
              "id": "b_hostsite00003",
              "type": "text",
              "required": false,
              "data": {
                "html": "<p>Most of my week is spent on chain-of-custody records and preparing reference samples for the trace section.</p>"
              }
            },
            {
              "id": "b_skills0000001",
              "type": "skills",
              "required": false,
              "data": {
                "items": [
                  "Chain of custody",
                  "Evidence photography",
                  "Lab safety",
                  "Technical writing"
                ]
              }
            }
          ]
        },
        {
          "blocks": [
            {
              "id": "b_photo00000001",
              "type": "photo",
              "required": false,
              "data": {
                "url": "public/uploads/evidence-bench.png",
                "alt": "Evidence intake bench with labeled bins",
                "caption": "The evidence intake bench, before the morning delivery.",
                "fill": true
              }
            }
          ]
        }
      ]
    },
    {
      "id": "s_0a1b2c3d4e03",
      "split": "full",
      "vAlign": "top",
      "mobile": "left",
      "space": "auto",
      "pad": "none",
      "stacks": [
        {
          "blocks": [
            {
              "id": "b_typicalday001",
              "type": "heading",
              "required": false,
              "data": {
                "text": "A typical day",
                "level": 2
              }
            },
            {
              "id": "b_wrap00000001",
              "type": "wrap",
              "required": false,
              "data": {
                "html": "<p>Mornings start with the delivery log. Each package is checked against its submission form, photographed in its packaging and given a lab number before it moves to secure storage.</p><p>After lunch I usually shadow an analyst. This week that meant watching a fiber comparison under the stereo microscope and writing up the reference sample notes myself.</p><p>The last hour is documentation. I was surprised how much of forensic work is careful record keeping, and how much the records protect everyone involved when a case reaches court.</p>",
                "side": "left",
                "size": "third",
                "gap": "normal",
                "pad": "m",
                "image": { "url": "", "alt": "sample prep" }
              }
            }
          ]
        }
      ]
    },
    {
      "id": "s_0a1b2c3d4e04",
      "split": "full",
      "vAlign": "top",
      "mobile": "left",
      "space": "auto",
      "pad": "none",
      "stacks": [
        {
          "blocks": [
            {
              "id": "b_mentor0000001",
              "type": "mentor",
              "required": false,
              "data": {
                "text": "Jordan asks the right questions and writes them down. That habit is most of the job.",
                "cite": "Site supervisor · mentor feedback, week 6",
                "permission": true,
                "permissionDate": "2026-10-02"
              }
            }
          ]
        }
      ]
    }
  ]
}
`,Mt=`{
  "_doc": "repo -> { repo path -> fixture file under fixtures/ }. A value is a path string, or { file, unlisted: true } to serve the file but hide it from directory listings. A key may carry ?ref=<sha> to serve a contents-API read at that commit. Directory listings are derived from these keys. To add a fixture, add a line here.",
  "private": {
    "portfolio.json": "private/portfolio.json",
    "src/content/pages/about-me.json": "private/pages/about-me.json",
    "src/content/pages/internship-overview.json": "private/pages/internship-overview.json",
    "src/content/pages/capstone.json": "private/pages/capstone.json",
    "src/content/pages/internship-v2.json": {
      "file": "private/v2/internship-overview.json",
      "unlisted": true
    },
    "content/journal/2026fa-week-01.json": "private/journal/2026fa-week-01.json",
    "content/journal/2026fa-week-02.json": "private/journal/2026fa-week-02.json",
    "content/journal/2026fa-week-03.json": "private/journal/2026fa-week-03.json",
    "content/journal/2026fa-week-04.json": "private/journal/2026fa-week-04.json",
    "content/journal/2026fa-site-visit.json": "private/journal/2026fa-site-visit.json",
    "content/journal/2026fa-week-05.json": "private/journal/2026fa-week-05.json",
    "content/journal/2026fa-midpoint.json": "private/journal/2026fa-week-06.json",
    "content/journal/2026fa-week-07.json": "private/journal/2026fa-week-07.json",
    "content/journal/2026fa-week-09.json": "private/journal/2026fa-week-09.json",
    "content/journal/2026fa-lab-incident.json": {
      "file": "private/journal/2026fa-lab-incident.json",
      "unlisted": true
    },
    "content/journal/timeline.json": "private/journal/timeline.json",
    "content/journal/rubrics/weekly-fis@3.json": "private/journal/rubrics/weekly-fis@3.json",
    "content/journal/templates/incident-report@1.json": "private/journal/templates/incident-report@1.json",
    "content/journal/uploads/2026fa-week-05-lift-card.pdf": "private/uploads/2026fa-week-05-lift-card.pdf",
    "public/uploads/evidence-bench.png": "private/uploads/evidence-bench.png",
    "public/uploads/headshot.png": "private/uploads/headshot.png",
    "src/content/pages/about-me.json?ref=a3f9c2e17b4d8856e0f1c9d2b7a64e5380d1f2c4": "private/live/about-me.json",
    "template.json": "private/template.json",
    "content/journal/2025fa-week-03.json": "private/journal/2025fa-week-03.json",
    "content/journal/timelines/2025fa.json": "private/journal/timelines/2025fa.json",
    "portfolio.json?ref=a3f9c2e17b4d8856e0f1c9d2b7a64e5380d1f2c4": "private/portfolio.json"
  },
  "site": {
    "published.json": "site/published.json"
  }
}
`,St=`{
  "schemaVersion": 1,
  "sha": "a3f9c2e17b4d8856e0f1c9d2b7a64e5380d1f2c4",
  "publishedAt": "2026-09-22T15:10:00Z",
  "pages": [
    "about-me"
  ]
}
`,xt="data:application/pdf;base64,JVBERi0xLjEKMSAwIG9iajw8L1R5cGUvQ2F0YWxvZy9QYWdlcyAyIDAgUj4+ZW5kb2JqCjIgMCBvYmo8PC9UeXBlL1BhZ2VzL0tpZHNbMyAwIFJdL0NvdW50IDE+PmVuZG9iagozIDAgb2JqPDwvVHlwZS9QYWdlL1BhcmVudCAyIDAgUi9NZWRpYUJveFswIDAgMjAwIDIwMF0+PmVuZG9iagp0cmFpbGVyPDwvUm9vdCAxIDAgUj4+CiUlRU9G",Dt="data:image/png;base64,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",Zt="data:image/png;base64,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W//5w6AXvegVqtcBDlZvaJtzbHrZnIPX6wEHqZf20l7aeyS923I94ND0htZevla69cps77bcP7bl9jHB6aW9tJf2lkyvB4xe9KJXpN5t4/uYgPSGtjnHppfNWZrebeP/NKHopb20l/aWUq8DHILe0NrL10q3XhXtzQCubL20l/bS3qPSu+1fDxi96EWvQL3b/u1r2Jzj1cvmLFzv9jRg2hufXtorX+/2CRYw7eVrpV2vxvZun+AA017aq1yv0va66WfQi170CtW7faIHjN5I9LI569LrAKM3Er20V53eBGC+Vrr10l6NerdP+svQXv16aa9SvTssYPSiF70y9aYAoxe9SvRGsznvyABGL3qV6I2svTsm998xub+J5WsVm16+Vrr1HgBMe/Xppb269Tq6RQGjF73olaZ3x5Qsg170CtYb6+bs9TrA6EWvUL1xt3fHlKydDjBfKxV6+Vrp1ntQe3dOydo51QGmveL10l7deg/V3p1Ts3ZOHWDQi170CtWbAYxe9ArRy+ac0LtzmgWMXvQK0Ut7i+p1gPlaCdXL10q33iO11022ob0i9dJe3XpL0N6d07J3TveA0Yte9ArU6wCjF70h62VzLl7vrgxg9KI3RL2097B6d80YaCL6WrUVrpevlW69pWzvrhkDLWDaK0Mv7dWtt/TtTQNGL3rRK1PvrhmDDHrRG5ZeNucS69010wNGL3oD0Ut7S6PXAeZrFaxevla69R5be4sCpr2h6aW9uvUec3t3zRy0+7/BBr3oRa9QvQ4wetHL5ixtc/Z6LWD0opf2SmyvnTwPmK9VIHr5WunWW6bt3Z03eHfeEEN7Q9FLe3XrLev27s4bkgGMXvSiV57e3bMsYPSil81Z2Obs9TrA6EUv7RXY3t2zhuyZNdTI1svXSpZe2lumevfMtoDF6qW9svTS3rLWawHHorcDetGrTe+e2cNMFHppL5uzrs3Z680ARi96aa+w9tqZYwGL0svXSpZe2lueeh1gQXppryy9tLec9e6ZM9yo1cvXCr3a9e6Z6wHr00t72ZxVb85e714LGL3opb0C27s3AzhovXytZOmlvRWod++8ESZovbRXll7aW7F6HWA1evlaoTcyvR6wCr20l805ps05NfkeMHrRS3ultXdv/oi9+SNNcHr5WsnSS3srT68HHJJe2itLL+2tVL375qcBi9TL1wq9cevdN3+UkaqX9rI5R7w5e70WMHrRS3sltjcDuLL18rWSpZf2BqN3X4EHTHtpL+2V1t59BaP2FYw2kvTytUIvehN6M4Al6KW9bM5szkX17ltgAaMXvbRXXnv3LRi93wLma8XXivYKbO9+O2MM7aW9tFdie/cvGLN/4RgTtF6+VuhFb/F6HeBg9dJeNmc258PqTQBGL3pprzS9+xflGL5WfK1or1C9+xfl/A8yyQcC2VwstAAAAABJRU5ErkJggg==",Xt=Object.assign({"../../../visual/fixtures/private/feedback.json":nt,"../../../visual/fixtures/private/issues.json":tt,"../../../visual/fixtures/private/journal/2025fa-week-03.json":st,"../../../visual/fixtures/private/journal/2026fa-lab-incident.json":it,"../../../visual/fixtures/private/journal/2026fa-site-visit.json":rt,"../../../visual/fixtures/private/journal/2026fa-week-01.json":at,"../../../visual/fixtures/private/journal/2026fa-week-02.json":ot,"../../../visual/fixtures/private/journal/2026fa-week-03.json":dt,"../../../visual/fixtures/private/journal/2026fa-week-04.json":ct,"../../../visual/fixtures/private/journal/2026fa-week-05.json":ut,"../../../visual/fixtures/private/journal/2026fa-week-06.json":lt,"../../../visual/fixtures/private/journal/2026fa-week-07.json":pt,"../../../visual/fixtures/private/journal/2026fa-week-08.json":ht,"../../../visual/fixtures/private/journal/2026fa-week-09.json":mt,"../../../visual/fixtures/private/journal/rubrics/weekly-fis@3.json":ft,"../../../visual/fixtures/private/journal/templates/incident-report@1.json":wt,"../../../visual/fixtures/private/journal/timeline.json":bt,"../../../visual/fixtures/private/journal/timelines/2025fa.json":yt,"../../../visual/fixtures/private/live/about-me.json":Ot,"../../../visual/fixtures/private/pages/about-me.json":gt,"../../../visual/fixtures/private/pages/capstone.json":vt,"../../../visual/fixtures/private/pages/internship-overview.json":zt,"../../../visual/fixtures/private/portfolio.json":jt,"../../../visual/fixtures/private/template.json":kt,"../../../visual/fixtures/private/v2/internship-overview.json":Tt,"../../../visual/fixtures/routes.json":Mt,"../../../visual/fixtures/site/published.json":St}),Gt=Object.assign({"../../../visual/fixtures/private/uploads/2026fa-week-05-lift-card.pdf":xt,"../../../visual/fixtures/private/uploads/evidence-bench.png":Dt,"../../../visual/fixtures/private/uploads/headshot.png":Zt}),Xe="../../../visual/fixtures/",Ge=864e5,pe=7*Ge,Q=Date.parse(`${tn}T00:00:00Z`),Ne=sn,Nt=-Ge,Pt=Q+8*pe,re="a3f9c2e17b4d8856e0f1c9d2b7a64e5380d1f2c4";function Ht(e){const n=Xt[`${Xe}${e}`];if(n===void 0)throw new Error(`Demo fixture missing: ${e}`);return n}function Lt(e){const n=`${Xe}${e}`,s=Gt[n];if(s===void 0)throw new Error(`Demo fixture missing: ${e}`);const t=s.indexOf(",");if(!s.startsWith("data:")||t<0)throw new Error(`Demo fixture was not inlined: ${e}`);return s.slice(t+1)}function Z(e){return JSON.parse(Ht(e))}const Pe=()=>Z("routes.json").private,He=e=>typeof e=="string"?e:e.file,Rt=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?(Z|[+-]\d{2}:\d{2})?)?$/;function X(e,n){const s=Rt.exec(e);if(!s)return e;if(e.length===10)return new Date(Date.parse(`${e}T00:00:00Z`)+n).toISOString().slice(0,10);const t=s[1],i=Date.parse(t?e:`${e}Z`);if(Number.isNaN(i))return e;const r=new Date(i+n).toISOString();return t?t==="Z"?r.replace(/\.000Z$/,"Z"):r:r.slice(0,e.length)}function q(e,n){if(n===0)return e;const s=t=>typeof t=="string"?X(t,n):Array.isArray(t)?t.map(s):t!==null&&typeof t=="object"?Object.fromEntries(Object.entries(t).map(([i,r])=>[i,s(r)])):t;return s(e)}function At(e){const n=(e.getDay()+6)%7;return Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()-n)}function Wt(e,n){const s=At(n),i=s>=Q&&s<Q+Ne*pe?0:s-(e==="continuing"?Pt:Q);return Nt+i}const x=e=>`${JSON.stringify(e,null,2)}
`,ee=e=>String(e).padStart(2,"0");function ze(e){const n=[...e.weeks],s=n.at(-1);if(!s)return e;for(let t=s.n+1;t<=Ne;t++){const i=new Date(Date.parse(`${s.start}T00:00:00Z`)+(t-s.n)*pe).toISOString().slice(0,10);n.push({n:t,start:i,items:[{id:`wk${ee(t)}`,title:"Weekly entry",kind:"entry",required:!0}]})}return{...e,weeks:n}}const Le={continuing:{login:"jellis",repo:"portfolio-2026fa-ellis"},new:{login:"srivera",repo:"portfolio-sam-rivera"}},Yt={schemaVersion:1,student:{name:"Sam Rivera",major:"Forensic Science",cohort:"2026FA"},internship:{org:"",role:""},theme:{id:"iu",customAccent:null},links:{linkedin:null},updatedAt:null},Ft={schemaVersion:1,title:"About me",kind:"page",status:"draft",template:"profile",order:10,updatedAt:null,blocks:[{id:"b_000000000001",type:"hero",width:3,required:!0,data:{name:"Sam Rivera",credentialLine:"B.S. Forensic Science · IU Indianapolis",tagline:"Replace this with one sentence about the work you want to do.",aboutMe:"<p>This is your about section. Write a short paragraph about who you are, what drew you to the field, and what you are working toward. You can edit every word of this page in the editor.</p>",competencies:["Evidence handling","Laboratory technique","Scientific writing"],links:[]}},{id:"b_000000000002",type:"facts",width:3,required:!1,data:{}},{id:"b_000000000003",type:"skills",width:3,required:!1,data:{items:["Chain of custody","Microscopy","Data analysis","Technical presentation"]}}]},It={templateVersion:2,pageSchema:[1,2],capabilities:["sections","theme-v2","wrap","published-json","staged-uploads","publish-sha"]};function je(e,n){return{id:e.id,login:e.user.login,body:e.body,created_at:X(e.created_at,n),updated_at:X(e.updated_at,n)}}function qt(e){return{id:9101,login:"dr-sanders",body:`Strong week. Revise #4 and this is complete.

Grade: 9 / 10
<!-- ep-grade ${JSON.stringify({v:1,d:"wk05",t:"2026fa",pts:9,of:10,rubric:"weekly-fis@3",lines:[4,2,3]})} -->`,created_at:X("2026-09-28T14:05:00Z",e),updated_at:X("2026-09-28T14:05:00Z",e)}}const _t=[["What did you do this week?","The experience itself, briefly."],["What surprised you?","Where expectation and reality diverged."],["Why does it matter?","Significance to your practice and your field."],["What assumptions did you bring?","Name the priors you arrived with."],["What will you do differently?","The concrete forward action."]],Kt=[{week:1,date:"2025-08-25",hours:12,title:"Last fall: orientation and safety",answers:["Toured the lab, learned the sign-in routine and the protective equipment checklist.","How much of the day is paperwork that protects the evidence.","A missed signature can matter as much as a missed test.","That the first week would be mostly watching.","Read the procedures manual before the next shift."]},{week:2,date:"2025-09-01",hours:13,title:"Last fall: the evidence room",answers:["Shadowed intake and practised logging sample items against the case sheet.","How strict the seal and initial routine is, even for routine items.","The record of who held an item is part of the item.","That storage was just shelving.","Double-check the label against the sheet before sealing."]}];function Bt(e){return{schemaVersion:1,title:e.title,kind:"journal",week:e.week,date:e.date,hoursLogged:e.hours,status:"submitted",feedbackIssue:null,updatedAt:`${e.date}T18:00:00Z`,blocks:_t.map(([n,s],t)=>({id:`b_w${ee(e.week)}q${t+1}0000000`,type:"prompt",width:3,required:!0,data:{question:n,hint:s,answer:`<p>${e.answers[t]}</p>`}}))}}function Et(e,n){const s={};if(e==="new"){s["portfolio.json"]=z(x(Yt)),s["template.json"]=z(x(It)),s["src/content/pages/home.json"]=z(x(Ft)),s["content/journal/rubrics/weekly-fis@3.json"]=z(x(Z("private/journal/rubrics/weekly-fis@3.json")));const t=ze(Z("private/journal/timeline.json"));return t.weeks=t.weeks.map(i=>({...i,items:i.items.filter(r=>!r.fromInstructor)})),s["content/journal/timeline.json"]=z(x(q({...t,gradesVisible:!0,instructors:["dr-sanders"]},n))),s}for(const[t,i]of Object.entries(Pe())){if(t.startsWith("_")||t.includes("?ref=")||t==="src/content/pages/internship-v2.json")continue;const r=He(i);if(/\.(png|pdf)$/.test(r)){s[t]=Lt(r);continue}let a=Z(r);t==="content/journal/timeline.json"&&(a={...ze(a),gradesVisible:!0,instructors:["dr-sanders"]}),s[t]=z(x(q(a,n)))}for(const t of Kt)s[`content/journal/2025fa-week-${ee(t.week)}.json`]=z(x(q(Bt(t),n)));return s}function Ct(e,n){const s=Z("private/issues.json"),t=Z("private/feedback.json"),i=[];for(const[a,c]of Object.entries(e)){if(!/^content\/journal\/[^/]+\.json$/.test(a)||a.endsWith("/timeline.json"))continue;const l=JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(c),w=>w.charCodeAt(0))));if(l.feedbackIssue==null)continue;const h=l.feedbackIssue;i.push({number:h,title:`Week ${ee(l.week)} — ${l.title}`,body:`Feedback thread for **${l.title}** (Week ${l.week}, ${l.date}).`,state:s[String(h)]==="closed"?"closed":"open",created_at:`${l.date}T18:00:00Z`,comments:(t[String(h)]??[]).map(w=>je(w,n))})}i.push({number:21,title:"Deliverable: 2026fa/page-internship-overview — Internship overview",body:"Notes on this page.",state:"open",created_at:X("2026-10-05T15:00:00Z",n),comments:(t[21]??[]).map(a=>je(a,n))});const r=i.find(a=>a.number===5);return r&&r.comments.push(qt(n)),i.sort((a,c)=>a.number-c.number),i}function Re(e,n=new Date){const s=Wt(e,n),{login:t,repo:i}=Le[e],r=new Date(n.getTime()).toISOString(),a=Oe(D,i,!0),c=Oe(D,`${i}-site`,!1),l=Et(e,s);let h=[];if(e==="continuing"){const w={};for(const[O,k]of Object.entries(Pe()))O.endsWith(`?ref=${re}`)&&(w[O.slice(0,O.indexOf("?ref="))]=z(x(q(Z(He(k)),s))));Gn(a,w,"Edit About me",X("2026-09-22T15:00:00Z",s),re),h=Ct(l,s)}if(U(a,l,"Set up portfolio",X("2026-08-24T12:00:00Z",s)),e==="continuing"){const w=q(Z("site/published.json"),s);U(c,{"published.json":z(x(w))},`Publish site (${re.slice(0,7)})`,w.publishedAt)}else U(c,{".nojekyll":""},"Set up public site",r);return{version:1,persona:e,login:t,repo:Y(D,i),repos:{[Y(D,i)]:a,[Y(D,`${i}-site`)]:c},issues:{[Y(D,i)]:h,[Y(D,`${i}-site`)]:[]},runs:[],nextId:1e4}}const Jt=e=>({...Le[e],name:e==="continuing"?"Jordan Ellis":"Sam Rivera"}),Ae={"x-ratelimit-limit":"5000","x-ratelimit-remaining":"4999","x-ratelimit-reset":"1900000000"};function Ut(e){const n=e.toLowerCase();return n==="github.com"||n.endsWith(".github.com")||n.endsWith(".githubusercontent.com")||n.endsWith(".github.io")}function ke(e){try{window.dispatchEvent(new Event(Ke))}catch{}return new Response(JSON.stringify({message:e}),{status:403,headers:{...Ae,"content-type":"application/json"}})}function Qt(e){const n=e.get("authorization");if(!n)return null;const s=/^(?:Bearer|token)\s+(.+)$/i.exec(n.trim());return s?s[1]:n.trim()}function ae(e){const n={...Ae};return e.status===204?new Response(null,{status:204,headers:n}):e.text!==void 0?new Response(e.text,{status:e.status,headers:{...n,"content-type":e.contentType??"text/plain"}}):new Response(JSON.stringify(e.body??{}),{status:e.status,headers:{...n,"content-type":"application/json"}})}async function Vt(e,n){const s=n==null?void 0:n.body;if(typeof s=="string")return s;if(s instanceof URLSearchParams)return s.toString();if(s!=null)try{return await new Response(s).text()}catch{return null}if(typeof Request<"u"&&e instanceof Request)try{return await e.clone().text()}catch{return null}return null}function $t(e){const n=window.fetch,s=async(t,i)=>{let r;try{r=new URL(typeof t=="string"||t instanceof URL?String(t):t.url,window.location.href)}catch{return n.call(window,t,i)}if(!Ut(r.hostname))return n.call(window,t,i);const a=new Headers((i==null?void 0:i.headers)??(typeof Request<"u"&&t instanceof Request?t.headers:void 0)),c=Qt(a);if(N())return ke("The demo is paused because someone is signed in for real. Nothing was sent to GitHub.");if(c!==null&&c!==xe)return ke("The demo does not send real sign-ins to GitHub. Nothing was sent.");const h={method:((i==null?void 0:i.method)??(typeof Request<"u"&&t instanceof Request?t.method:"GET")).toUpperCase(),url:r,body:await Vt(t,i)};return r.hostname==="api.github.com"?ae(Jn(e,h)):r.hostname==="raw.githubusercontent.com"?ae(Un(e,h)):ae({status:404,text:"Not Found",contentType:"text/plain"})};return window.fetch=s,()=>{window.fetch===s&&(window.fetch=n)}}const es='input[type="password"]',ns=e=>window.location.assign(e);function ts({navigate:e=ns}={}){let n=!1;const s=()=>{n||Me(window.location.pathname)||document.querySelector(es)!==null&&(n=!0,ce(e))},t=new MutationObserver(s);return t.observe(document.documentElement,{childList:!0,subtree:!0}),s(),()=>t.disconnect()}const G="/portfolio-editor-dev/",he=`${G}journal`,_=e=>window.location.assign(e);function We(e){if(N())return!1;const[n,s]=e.state.repo.split("/");try{sessionStorage.setItem(Qe,JSON.stringify({token:xe,login:e.state.login,avatarUrl:null,repo:{owner:n,repo:s},tokenExpiresAt:null})),sessionStorage.setItem(Ve,e.state.persona)}catch{}return!0}function Ye(e){if(e.state.persona!=="new")return;const n=e.state.repo.split("/")[1]??"",s=nn();try{H.setItem(Je,JSON.stringify({...s,step:5,done:[1,2,3,4],form:{...s.form,login:e.state.login,lastname:"Rivera",firstName:"Sam"},repoFound:`${n}-site`}))}catch{}}function ss(e=window.location.search){const n=new URLSearchParams(e).get("ui"),s=n?/^(polished|sketch)-(light|dark|system)$/.exec(n):null;return s?{style:s[1],mode:s[2]}:null}function is(e){if(e)try{H.setItem(oe,JSON.stringify({...Ue,...e}))}catch{}}function Te(e,n,s=_){if(N())return!1;e.state=Re(n),e.save();const t=H.getItem(oe);return H.clear(),t!==null&&H.setItem(oe,t),Ye(e),We(e),s(he),!0}function rs(e=_){return N()?!1:(ce(e),!0)}function as(){try{const e=new URL(window.location.href);e.searchParams.delete("data"),e.searchParams.delete("student"),e.searchParams.delete("ui"),(e.pathname===G||e.pathname===G.replace(/\/$/,""))&&(e.pathname=he),window.history.replaceState(window.history.state,"",`${e.pathname}${e.search}${e.hash}`)}catch{}}function os(e=_){if(N()){e(G);return}Ee(),Ce(),e(`${G}instructor?data=sample`)}function ds(e=_){ce(e,`${G}instructor`)}function cs(e,n){const s=document.createElement("div");s.setAttribute("data-demo-root",""),document.body.appendChild(s);const t=e.state.persona,i=a=>{a||n(G)},r=$e.createRoot(s);return r.render(u.jsx(Wn,{persona:t,studentName:Jt(t).name,onReload:()=>n(G),onReset:()=>i(Te(e,t,n)),onSwitch:()=>i(Te(e,t==="new"?"continuing":"new",n)),onExit:()=>i(rs(n)),onTour:()=>{en("student")},onTryInstructorDemo:()=>os(n),onLeaveForInstructorSignIn:()=>ds(n),onBackToStudentDemo:()=>n(he)})),()=>{r.unmount(),s.remove()}}async function hs(e,n={}){const s=n.navigate??_;if(N())throw new Error("Someone is signed in for real in this browser, so the demo does not start.");const t=Be();let i=null,r=null,a=null,c=null;const l=()=>{c==null||c(),a==null||a(),r==null||r(),i==null||i(),t()};try{const h=Pn(),w=h!==null&&h.persona===e.persona,O=new Nn(w?h:Re(e.persona)),k=e.entering?ss():null;return w||(H.clear(),Ye(O)),is(k),O.save(),We(O),i=$t(O),a=ts({navigate:s}),n.queryClient&&(r=et(O,n.queryClient)),e.entering&&as(),n.label!==!1&&(c=cs(O,s)),{store:O,uninstall:l}}catch(h){throw l(),h}}export{he as LANDING,rs as exitDemo,hs as installDemo,ds as leaveToInstructorSignIn,ss as readHandedLook,Te as restartDemo,os as tryInstructorDemo};
