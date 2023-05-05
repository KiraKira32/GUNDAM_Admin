import{_ as v,r,o as m,c as p,a as t,d as o,e as a,n as i,f as l,R as x}from"./index-2cdc5002.js";const g="/GUNDAM_Admin/assets/LOGO-6dcead3d.png";const w={data(){return{active:""}},methods:{logout(){const e="https://vue3-course-api.hexschool.io/v2/logout";this.$http.post(e).then(()=>{alert("帳號已登出"),this.$router.push("/")})}}},f={class:"navmenu d-flex flex-column p-3 text-white bg-dark sidebar ali vh-100",style:{width:"280px"}},$=t("div",{class:"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"},[t("img",{class:"img-logo",src:g,alt:""})],-1),F=t("hr",null,null,-1),V={class:"nav nav-pills flex-column mb-auto"},b={class:"nav-item"},k=t("svg",{class:"me-2",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#FFFFFF"},[t("path",{d:"M0 0h24v24H0z",fill:"none"}),t("path",{d:"M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"})],-1),z={class:"nav-item"},H=t("svg",{class:"me-2",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#FFFFFF"},[t("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t("path",{d:"M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"})],-1),M={class:"nav-item"},N=t("svg",{class:"me-2",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#FFFFFF"},[t("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t("path",{d:"m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01 4 11V4h7v-.01l9 9-7 7.02z"}),t("circle",{cx:"6.5",cy:"6.5",r:"1.5"})],-1),B=t("hr",null,null,-1),C={class:"nav-item"},y=t("svg",{class:"me-2",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#FFFFFF"},[t("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t("path",{d:"M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"})],-1),L=t("div",{class:"justify-content-start align-items-center"},[t("hr"),t("div",{class:"d-flex"},[t("img",{src:"https://i.imgur.com/Vx0JIwt.jpg",alt:"",width:"50",class:"rounded-circle me-3 ms-2"}),t("div",null,[t("p",null,"管理員：KiraKira"),t("p",null,"編號碼：#9297")])])],-1),R=t("hr",null,null,-1);function A(e,n,c,u,_,h){const s=r("router-link");return m(),p("div",f,[$,F,t("ul",V,[t("li",b,[o(s,{to:"/admin/products",class:i(["nav-link text-white mt-2 d-flex align-items-center",{active:e.$route.path==="/admin/products"}])},{default:a(()=>[k,l(" 商品管理 ")]),_:1},8,["class"])]),t("li",z,[o(s,{to:"/admin/orders",class:i(["nav-link text-white mt-2 d-flex align-items-center",{active:e.$route.path==="/admin/orders"}]),"exact-active-class":"active"},{default:a(()=>[H,l(" 訂單管理 ")]),_:1},8,["class"])]),t("li",M,[o(s,{to:"/admin/coupons",class:i(["nav-link text-white mt-2 d-flex align-items-center",{active:e.$route.path==="/admin/coupons"}]),"exact-active-class":"active"},{default:a(()=>[N,l(" 優惠管理 ")]),_:1},8,["class"])]),B,t("li",C,[o(s,{to:"/admin/products",class:i(["nav-link text-white d-flex align-items-center",{active:e.$route.path==="/admin/"}])},{default:a(()=>[y,l(" 返回前台 ")]),_:1},8,["class"])])]),L,R,t("button",{class:"btn btn-outline-danger",type:"button",onClick:n[0]||(n[0]=(...d)=>h.logout&&h.logout(...d))},"帳號登出")])}const j=v(w,[["render",A]]),D={components:{Navbar:j,RouterView:x},created(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=e,e||(alert("請登入帳號"),this.$router.push("/login"));const n="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(n).then(()=>{this.isLogin=!0}).catch(c=>{console.log(c)})}},G={class:"d-flex admin-wrapper"},K={class:"sidebar"},O={class:"admin-main-block"};function T(e,n,c,u,_,h){const s=r("Navbar"),d=r("RouterView");return m(),p("div",G,[t("div",K,[o(s)]),t("main",O,[o(d)])])}const I=v(D,[["render",T]]);export{I as default};