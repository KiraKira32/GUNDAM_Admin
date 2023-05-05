import{_ as h,o as n,c as i,a as s,w as m,b as c,v as u}from"./index-6ca6b537.js";const p={components:{},data(){return{title:"",date:"",message:"",showToast:!1,isLoading:!1,user:{username:"",password:""}}},methods:{login(){const a="https://vue3-course-api.hexschool.io/v2/admin/signin";this.isLoading=!0,this.$http.post(a,this.user).then(e=>{const{expired:r,token:l}=e.data;document.cookie=`hexToken=${l};expires=${new Date(r)};`,this.title="登入成功",this.date=new Date().toLocaleString(),this.message="歡迎回來！",this.showToast=!0,this.$router.push("/admin/products")}).catch(()=>{this.title="登入失敗",this.date=new Date().toLocaleString(),this.message="請檢查帳號密碼是否正確",this.showToast=!0})}}},_={class:"container"},g={class:"row justify-content-center align-items-center vh-100 text-center"},f={class:"form-block"},b=s("h2",{class:"h3 mb-4 mt-4 font-weight-normal"},"管理員登入",-1),w={class:"input-block col-10 mx-auto"},v={class:"form-floating mb-3"},x=s("label",{for:"floatingInput"},"Email address",-1),k={class:"form-floating"},y=s("label",{for:"floatingPassword"},"Password",-1),L={class:"d-flex gap-3"},T=s("button",{class:"btn btn-lg btn-outline-danger w-100 mt-3 disabled",type:"submit"}," 忘記密碼 ",-1),V=["disabled"],D={key:0},P={key:1,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"};function B(a,e,r,l,t,d){return n(),i("div",_,[s("div",g,[s("div",f,[b,s("div",w,[s("form",{class:"form-signin",onSubmit:e[2]||(e[2]=m((...o)=>d.login&&d.login(...o),["prevent"]))},[s("div",v,[c(s("input",{type:"email",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=o=>t.user.username=o),id:"floatingInput",placeholder:"name@example.com",required:"",autofocus:""},null,512),[[u,t.user.username]]),x]),s("div",k,[c(s("input",{type:"password",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=o=>t.user.password=o),id:"floatingPassword",placeholder:"Password",required:""},null,512),[[u,t.user.password]]),y]),s("div",L,[T,s("button",{class:"btn btn-lg btn-danger w-100 mt-3",type:"submit",disabled:t.isLoading},[t.isLoading===!1?(n(),i("span",D,"登入")):(n(),i("span",P))],8,V)])],32)])])])])}const q=h(p,[["render",B]]);export{q as default};
