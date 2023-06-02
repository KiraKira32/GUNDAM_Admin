import{D as U,T as k,M as f,a as N}from"./ToastMessages-c621d328.js";import{P as V}from"./PaginationComponent-bdddc288.js";import{_ as P,o as d,c as i,a as t,b as n,v as r,F as g,h as v,i as C,j as T,r as h,d as p,t as _}from"./index-de1f4ca7.js";const L={props:["tempProduct","isNew"],data(){return{product:{}}},emits:["update-product"]},D={class:"modal fade",id:"productModal",ref:"productModal",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},S={class:"modal-dialog modal-xl"},A={class:"modal-content border-0"},$={class:"modal-header bg-dark text-white"},B={class:"modal-title",id:"productModalLabel"},E={key:0},F={key:1},I=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),j={class:"modal-body"},z={class:"row"},q={class:"col-sm-4"},G={class:"mb-2"},H={class:"mb-3"},J=t("label",{for:"imageUrl",class:"form-label"},"新增圖片網址",-1),K=["src"],O=t("hr",null,null,-1),Q=t("h5",{class:"mb-4 mt-4"},"商品多圖設置",-1),R={key:0},W=["onUpdate:modelValue"],X=["src"],Y=t("hr",null,null,-1),Z={class:"col-sm-8"},tt={class:"mb-3"},et=t("label",{for:"title",class:"form-label"},"標題",-1),ot={class:"row"},st={class:"mb-3 col-md-6"},lt=t("label",{for:"category",class:"form-label"},"類別",-1),dt={class:"mb-3 col-md-6"},it=t("label",{for:"unit",class:"form-label"},"單位",-1),at={class:"row"},nt={class:"mb-3 col-md-6"},ct=t("label",{for:"origin_price",class:"form-label"},"原價",-1),rt={class:"mb-3 col-md-6"},ut=t("label",{for:"price",class:"form-label"},"售價",-1),mt=t("hr",null,null,-1),ht={class:"mb-3"},pt=t("label",{for:"description",class:"form-label"},"產品描述",-1),_t={class:"mb-3"},bt=t("label",{for:"content",class:"form-label"},"說明內容",-1),gt={class:"mb-3"},ft={class:"form-check"},Pt=t("label",{for:"is_enabled",class:"form-check-label"},"是否上架商品",-1),vt={class:"modal-footer"},yt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function wt(l,o,e,y,a,u){return d(),i("div",null,[t("div",D,[t("div",S,[t("div",A,[t("div",$,[t("h5",B,[e.isNew?(d(),i("span",E,"新增產品")):(d(),i("span",F,"編輯產品"))]),I]),t("div",j,[t("div",z,[t("div",q,[t("div",G,[t("div",H,[J,n(t("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>e.tempProduct.imageUrl=s),type:"text",class:"form-control",placeholder:"請輸入圖片網址"},null,512),[[r,e.tempProduct.imageUrl]])]),t("img",{class:"img-fluid",src:e.tempProduct.imageUrl,alt:""},null,8,K)]),t("div",null,[O,Q,Array.isArray(e.tempProduct.imagesUrl)?(d(),i("div",R,[(d(!0),i(g,null,v(e.tempProduct.imagesUrl,(s,m)=>(d(),i(g,{key:m+123},[n(t("input",{class:"form-control mb-2",type:"text","onUpdate:modelValue":b=>e.tempProduct.imagesUrl[m]=b},null,8,W),[[r,e.tempProduct.imagesUrl[m]]]),t("img",{src:e.tempProduct.imagesUrl[m],alt:"",class:"img-fluid mb-2"},null,8,X),Y],64))),128)),!e.tempProduct.imagesUrl.length||e.tempProduct.imagesUrl[e.tempProduct.imagesUrl.length-1]?(d(),i("button",{key:0,class:"btn btn-outline-primary w-100 mb-1",onClick:o[1]||(o[1]=s=>e.tempProduct.imagesUrl.push(""))}," 新增圖片 ")):(d(),i("button",{key:1,class:"btn btn-outline-danger w-100 mb-2",onClick:o[2]||(o[2]=s=>e.tempProduct.imagesUrl.pop(""))}," 刪除圖片 "))])):C("",!0)])]),t("div",Z,[t("div",tt,[et,n(t("input",{"onUpdate:modelValue":o[3]||(o[3]=s=>e.tempProduct.title=s),id:"title",class:"form-control",type:"text",placeholder:"請輸入標題"},null,512),[[r,e.tempProduct.title]])]),t("div",ot,[t("div",st,[lt,n(t("input",{"onUpdate:modelValue":o[4]||(o[4]=s=>e.tempProduct.category=s),id:"category",type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[r,e.tempProduct.category]])]),t("div",dt,[it,n(t("input",{"onUpdate:modelValue":o[5]||(o[5]=s=>e.tempProduct.unit=s),id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[r,e.tempProduct.unit]])])]),t("div",at,[t("div",nt,[ct,n(t("input",{"onUpdate:modelValue":o[6]||(o[6]=s=>e.tempProduct.origin_price=s),id:"origin_price",min:"0",type:"number",class:"form-control",placeholder:"請輸入價格"},null,512),[[r,e.tempProduct.origin_price]])]),t("div",rt,[ut,n(t("input",{"onUpdate:modelValue":o[7]||(o[7]=s=>e.tempProduct.price=s),id:"price",min:"0",type:"number",class:"form-control",placeholder:"請輸入售價"},null,512),[[r,e.tempProduct.price]])])]),mt,t("div",ht,[pt,n(t("textarea",{"onUpdate:modelValue":o[8]||(o[8]=s=>e.tempProduct.description=s),id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述"},null,512),[[r,e.tempProduct.description]])]),t("div",_t,[bt,n(t("textarea",{"onUpdate:modelValue":o[9]||(o[9]=s=>e.tempProduct.content=s),id:"content",type:"text",class:"form-control",placeholder:"請輸入說明內容"},null,512),[[r,e.tempProduct.content]])]),t("div",gt,[t("div",ft,[n(t("input",{"onUpdate:modelValue":o[10]||(o[10]=s=>e.tempProduct.is_enabled=s),id:"is_enabled",class:"form-check-input me-2",type:"checkbox","true-value":1,"false-value":0},null,512),[[T,e.tempProduct.is_enabled]]),Pt])])])])]),t("div",vt,[yt,t("button",{type:"button",class:"btn btn-danger",onClick:o[11]||(o[11]=s=>l.$emit("update-product",e.tempProduct))}," 確認 ")])])])],512)])}const Mt=P(L,[["render",wt]]);const xt={components:{Pagination:V,ProductModal:Mt,DeletaModal:U,ToastMessages:k},data(){return{products:[],tempProduct:{imagesUrl:[]},isNew:!1,page:{},isLoading:!1,showToast:!1,title:"",message:""}},methods:{getProducts(l=1){const o=`https://vue3-course-api.hexschool.io/v2/api/asher_api/admin/products/?page=${l}`;this.isLoading=!0,this.$http.get(o).then(e=>{this.products=e.data.products,this.page=e.data.pagination,this.isLoading=!1,console.log(e)}).catch(e=>{alert(e)})},openModal(l,o){l==="create"?(this.productModal.show(),this.isNew=!0,this.tempProduct={imagesUrl:[]}):l==="edit"?(this.productModal.show(),this.isNew=!1,this.tempProduct={...o}):l==="delete"&&(this.deleteModal.show(),this.tempProduct={...o})},toastShow(l,o,e){this.title=l,this.message=o,setTimeout(()=>{this.toastMessage.show()},700),setTimeout(()=>{this.toastMessage.hide()},e)},updateProduct(){let l="https://vue3-course-api.hexschool.io/v2/api/asher_api/admin/product",o="post";this.isNew||(l=`https://vue3-course-api.hexschool.io/v2/api/asher_api/admin/product/${this.tempProduct.id}`,o="put"),this.$http[o](l,{data:this.tempProduct}).then(()=>{this.productModal.hide(),this.getProducts(),this.isNew===!1?this.toastShow("提示訊息","編輯產品成功",3e3):this.isNew===!0&&(this.isLoading=!0,this.toastShow("提示訊息","新增商品成功",3e3))}).catch(()=>{this.isNew===!1?this.toastShow("提示訊息","編輯產品錯誤",3e3):this.isNew===!0&&this.toastShow("提示訊息","新增商品錯誤",3e3)})},deleteProduct(){const l=`https://vue3-course-api.hexschool.io/v2/api/asher_api/admin/product/${this.tempProduct.id}`;this.$http.delete(l).then(()=>{this.toastShow("提示訊息","刪除產品成功",3e3),this.getProducts(),this.deleteModal.hide()}).catch(()=>{this.toastShow("提示訊息","刪除產品失敗",3e3)})}},mounted(){this.getProducts(),this.productModal=new f("#productModal"),this.deleteModal=new f("#deleteModal"),this.toastMessage=new N("#toastMessage")}},Ut={class:"container page-container"},kt={class:"products mt-4"},Nt=t("h4",{class:"text-fz"}," 商品列表 ",-1),Vt=t("hr",null,null,-1),Ct={class:"text-end"},Tt=t("p",{class:"text-center mx-"},"新增商品",-1),Lt=[Tt],Dt={class:"table mt-3"},St=t("thead",null,[t("tr",{class:"table-block text-white",style:{background:"#282828"}},[t("th",{width:"120"},"類別"),t("th",null,"商品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"120"},"商品狀態"),t("th",{width:"120"},"編輯")])],-1),At={class:"text-secondary"},$t={class:"fw-bolder"},Bt={key:0,class:"text-success"},Et={key:1},Ft={class:"btn-group"},It=["onClick"],jt=["onClick"];function zt(l,o,e,y,a,u){const s=h("Loading"),m=h("pagination"),b=h("ProductModal"),w=h("DeletaModal"),M=h("ToastMessages");return d(),i("div",Ut,[p(s,{active:a.isLoading,class:"vld-overlay"},null,8,["active"]),t("div",kt,[Nt,Vt,t("div",Ct,[t("button",{class:"text-end btn btn-danger",type:"button",onClick:o[0]||(o[0]=c=>u.openModal("create"))},Lt)]),t("table",Dt,[St,t("tbody",null,[(d(!0),i(g,null,v(a.products,c=>(d(),i("tr",{key:c.id},[t("td",null,_(c.category),1),t("td",null,_(c.title),1),t("td",At,"NT$ "+_(l.$filters.currency(c.origin_price)),1),t("td",$t,"NT$ "+_(l.$filters.currency(c.price)),1),t("td",null,[c.is_enabled?(d(),i("span",Bt,"啟用")):(d(),i("span",Et,"未啟用"))]),t("div",Ft,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:x=>u.openModal("edit",c)}," 編輯",8,It),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:x=>u.openModal("delete",c)}," 刪除",8,jt)])]))),128))])])]),p(m,{pages:a.page,"get-products":u.getProducts,onEmitPages:u.getProducts},null,8,["pages","get-products","onEmitPages"]),p(b,{"is-new":a.isNew,"temp-product":a.tempProduct,onUpdateProduct:u.updateProduct,product:a.tempProduct},null,8,["is-new","temp-product","onUpdateProduct","product"]),p(w,{item:a.tempProduct,onDeleteItem:u.deleteProduct},null,8,["item","onDeleteItem"]),p(M,{title:a.title,message:a.message},null,8,["title","message"])])}const Jt=P(xt,[["render",zt]]);export{Jt as default};