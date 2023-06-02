import{T as D,D as C,M as b,a as Y}from"./ToastMessages-c621d328.js";import{P}from"./PaginationComponent-bdddc288.js";import{_ as g,o,c as d,a as t,t as l,i as f,F as m,h as p,b as y,j as M,r as _,d as u}from"./index-de1f4ca7.js";const T={props:["tempOrder"],data(){return{order:{},isPaid:!1}},emits:["update-paid"]},L={id:"orderModal",ref:"orderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},N={class:"modal-dialog modal-xl"},A={class:"modal-content border-0"},H=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"orderModal"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),V={class:"modal-body"},z={class:"row"},E={class:"col-md-4"},S=t("h3",null,"客戶資料",-1),U={class:"table"},B={key:0},j=t("th",{style:{width:"100px"}},"姓名",-1),q=t("th",null,"Email",-1),F=t("th",null,"電話",-1),I=t("th",null,"地址",-1),G=t("th",null,"備註",-1),J={class:"col-md-8"},K=t("h3",null,"訂單資料",-1),Q={class:"table"},R=t("th",{style:{width:"100px"}},"訂單編號",-1),W=t("th",null,"下單時間",-1),X=t("th",null,"付款時間",-1),Z={key:0},tt={key:1},et=t("th",null,"付款狀態",-1),st={key:0,class:"text-success"},lt={key:1,class:"text-danger"},ot=t("th",null,"訂單總金額",-1),dt=t("h3",null,"商品資訊",-1),nt={class:"table"},at=t("thead",null,[t("tr")],-1),it={class:"text-end mx-2"},rt={class:"d-flex justify-content-end"},ct={class:"form-check"},ht={class:"form-check-label",for:"flexCheckDefault"},_t={key:0},ut={key:1},mt={class:"modal-footer"},pt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function bt(s,n,e,v,r,c){return o(),d("div",L,[t("div",N,[t("div",A,[H,t("div",V,[t("div",z,[t("div",E,[S,t("table",U,[e.tempOrder.user?(o(),d("tbody",B,[t("tr",null,[j,t("td",null,l(e.tempOrder.user.name),1)]),t("tr",null,[q,t("td",null,l(e.tempOrder.user.email),1)]),t("tr",null,[F,t("td",null,l(e.tempOrder.user.tel),1)]),t("tr",null,[I,t("td",null,l(e.tempOrder.user.address),1)]),t("tr",null,[G,t("td",null,l(e.tempOrder.message),1)])])):f("",!0)])]),t("div",J,[K,t("table",Q,[t("tbody",null,[t("tr",null,[R,t("td",null,l(e.tempOrder.id),1)]),t("tr",null,[W,t("td",null,l(s.$moment(new Date(e.tempOrder.create_at*1e3)).format("YYYY-MM-DD HH:mm")),1)]),t("tr",null,[X,t("td",null,[e.tempOrder.paid_date?(o(),d("span",Z,l(s.$moment(new Date(e.tempOrder.create_at*1e3)).format("YYYY-MM-DD HH:mm")),1)):(o(),d("span",tt,"時間不正確"))])]),t("tr",null,[et,t("td",null,[e.tempOrder.is_paid?(o(),d("strong",st,"已付款")):(o(),d("span",lt,"尚未付款"))])]),t("tr",null,[ot,t("td",null,"NT$ "+l(s.$filters.currency(e.tempOrder.total)),1)])])]),dt,t("table",nt,[at,t("tbody",null,[(o(!0),d(m,null,p(e.tempOrder.products,i=>(o(),d("tr",{key:i.id},[t("th",null,l(i.product.title),1),t("td",null,l(i.qty)+" "+l(i.product.unit),1),t("td",it," NT$ "+l(s.$filters.currency(i.final_total)),1)]))),128))])]),t("div",rt,[t("div",ct,[y(t("input",{"onUpdate:modelValue":n[0]||(n[0]=i=>e.tempOrder.is_paid=i),value:"",class:"form-check-input",type:"checkbox",id:"flexCheckDefault"},null,512),[[M,e.tempOrder.is_paid]])]),t("label",ht,[e.tempOrder.is_paid?(o(),d("span",_t,"已付款")):(o(),d("span",ut,"未付款"))])])])])]),t("div",mt,[pt,t("button",{type:"button",class:"btn btn-danger",onClick:n[1]||(n[1]=i=>s.$emit("update-paid",e.tempOrder))},"確認修改")])])])],512)}const gt=g(T,[["render",bt]]);const ft={data(){return{orders:[],isNew:!1,isLoading:!1,tempOrder:{},page:1,title:"",message:""}},components:{Pagination:P,OrderModal:gt,ToastMessages:D,DeleteModal:C},methods:{getOrders(s=1){const n=`https://vue3-course-api.hexschool.io/v2/api/asher_api/admin/orders/?page=${s}`;this.isLoading=!0,this.$http.get(n).then(e=>{this.orders=e.data.orders,this.page=e.data.pagination,this.isLoading=!1}).catch(e=>{console.log(e)})},openModal(s,n){s==="view"?(this.orderModal.show(),this.tempOrder={...n}):s==="delete"?(this.deleteModal.show(),this.tempOrder={...n}):s==="deldeteAll"&&this.deleteModal.show()},toastShow(s,n,e){this.title=s,this.message=n,setTimeout(()=>{this.toastMessage.show()},700),setTimeout(()=>{this.toastMessage.hide()},e)},updatePaid(s){const n={is_paid:s.is_paid},e=`https://vue3-course-api.hexschool.io/v2/api/asher_api/admin/order/${s.id}`;this.$http.put(e,{data:n}).then(()=>{this.orderModal.hide(),this.getOrders(this.page),this.toastShow("提示訊息","編輯訂單成功",3e3)}).catch(()=>{alert("更新失敗")})},deleteOrder(){const s=`https://vue3-course-api.hexschool.io/v2/api/asher_api/admin/order/${this.tempOrder.id}`;this.$http.delete(s).then(()=>{this.getOrders(),this.deleteModal.hide(),this.toastShow("提示訊息","刪除該筆訂單成功",3e3)})},deleteAll(){const s="https://vue3-course-api.hexschool.io/v2/api/asher_api/admin/orders/all";this.$http.delete(s).then(()=>{this.getOrders(),this.deleteModal.hide(),this.toastShow("提示訊息","刪除全部訂單成功",4e3)})}},mounted(){this.getOrders(),this.orderModal=new b("#orderModal"),this.toastMessage=new Y("#toastMessage"),this.deleteModal=new b("#deleteModal")}},yt={class:"container page-container"},Mt={class:"products mt-4"},vt=t("h4",{class:"text-fz"}," 訂單管理 ",-1),Ot=t("hr",null,null,-1),kt={class:"text-end"},xt=t("p",{class:"text-center mx-3"},"清除全部訂單",-1),wt=[xt],$t={class:"table mt-3"},Dt=t("thead",null,[t("tr",{class:"table-block text-white",style:{background:"#282828"}},[t("th",{width:"120"},"訂單日期"),t("th",{width:"120"},"E-mail"),t("th",null,"商品資訊"),t("th",{width:"120"},"金額"),t("th",{width:"120"},"付款狀態"),t("th",{width:"120"},"編輯")])],-1),Ct=["textContent"],Yt={style:{"font-size":"15px"}},Pt={class:"list-unstyled"},Tt={class:"text-right",style:{"font-size":"15px"}},Lt=["id","onUpdate:modelValue"],Nt=["for"],At={key:0,class:"text-primary fw-bolder",style:{"font-size":"15px"}},Ht={key:1,class:"text-muted",style:{"font-size":"15px"}},Vt={class:"btn-group"},zt=["onClick"],Et=["onClick"];function St(s,n,e,v,r,c){const i=_("Loading"),O=_("Pagination"),k=_("OrderModal"),x=_("ToastMessages"),w=_("DeleteModal");return o(),d("div",yt,[u(i,{active:r.isLoading,class:"vld-overlay"},null,8,["active"]),t("div",Mt,[vt,Ot,t("div",kt,[t("button",{class:"text-end btn btn-danger",type:"button",onClick:n[0]||(n[0]=(...a)=>c.deleteAll&&c.deleteAll(...a))},wt)]),t("table",$t,[Dt,t("tbody",null,[(o(!0),d(m,null,p(r.orders,a=>(o(),d("tr",{key:a.id},[t("td",null,l(s.$moment(new Date(a.create_at*1e3)).format("YYYY-MM-DD HH:mm")),1),t("td",null,[a.user?(o(),d("span",{key:0,textContent:l(a.user.email)},null,8,Ct)):f("",!0)]),t("td",Yt,[t("ul",Pt,[(o(!0),d(m,null,p(a.products,(h,$)=>(o(),d("li",{key:$},l(h.product.title)+" 數量："+l(h.qty)+" "+l(h.product.unit),1))),128))])]),t("td",Tt," NT$ "+l(s.$filters.currency(a.total)),1),t("td",null,[y(t("input",{class:"form-check-input me-1",type:"checkbox",role:"switch",id:a.id,"onUpdate:modelValue":h=>a.is_paid=h},null,8,Lt),[[M,a.is_paid]]),t("label",{class:"form-check-label",for:a.id},[a.is_paid?(o(),d("span",At,"已付款")):(o(),d("span",Ht,"未付款"))],8,Nt)]),t("td",null,[t("div",Vt,[t("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:h=>c.openModal("view",a)},"檢視",8,zt),t("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:h=>c.openModal("delete",a)},"刪除",8,Et)])])]))),128))])])]),u(O,{pages:r.page,onEmitPages:c.getOrders,ref:"orderModal"},null,8,["pages","onEmitPages"]),u(k,{"temp-order":r.tempOrder,onUpdatePaid:c.updatePaid,ref:"orderModal"},null,8,["temp-order","onUpdatePaid"]),u(x,{title:r.title,message:r.message},null,8,["title","message"]),u(w,{item:r.tempOrder,onDeleteItem:c.deleteOrder},null,8,["item","onDeleteItem"])])}const qt=g(ft,[["render",St]]);export{qt as default};