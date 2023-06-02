<template>
    <div class="container page-container">
      <Loading :active="isLoading" class="vld-overlay"></Loading>
      <div class="products mt-4">
        <h4 class="text-fz">
          訂單管理
        </h4>
        <hr>
      <div class="text-end">
        <button class="text-end btn btn-danger" type="button" @click="deleteAll"> 
          <p class="text-center mx-3">清除全部訂單</p>
        </button>
        
      </div>
      <table class="table mt-3">
        <thead>
          <tr class="table-block text-white" style="background: #282828;">
            <th width="120">訂單日期</th>
            <th width="120">E-mail</th>
            <th>商品資訊</th>
            <th width="120">金額</th>
            <th width="120">付款狀態</th>
            <th width="120">編輯</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="order in orders" :key="order.id">
            <tr>
              <td>{{ $moment(new Date (order.create_at * 1000)).format('YYYY-MM-DD HH:mm') }}</td>
              <td><span v-if="order.user" v-text="order.user.email"></span></td>
              <td style="font-size: 15px;">
                <ul class="list-unstyled">
                  <li v-for="(product, i) in order.products" :key="i">
                    {{ product.product.title }} 數量：{{ product.qty }}
                    {{ product.product.unit }}
                  </li>
                </ul>
              </td>
              <td class="text-right" style="font-size: 15px;"> NT$ {{$filters.currency(order.total) }} </td>
              <td>
                <input
                  class="form-check-input me-1"
                  type="checkbox"
                  role="switch"
                  :id="order.id"
                  v-model="order.is_paid"
                  
                />
                <label class="form-check-label" :for="order.id">
                  <span v-if="order.is_paid" class="text-primary fw-bolder" style="font-size: 15px;">已付款</span>
                  <span v-else class="text-muted" style="font-size: 15px;">未付款</span>
                </label>
              </td>
              <td>
                <div class="btn-group">
                  <button 
                    class="btn btn-outline-primary btn-sm"
                    type="button"
                    @click="openModal('view', order)"
                    >檢視</button>
                  <button
                    class="btn btn-outline-danger btn-sm"
                    type="button"
                    @click="openModal('delete', order)"
                    >刪除</button>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      </div>

      <Pagination :pages="page" @emit-pages="getOrders" ref="orderModal"></Pagination>
      
      <OrderModal :temp-order="tempOrder" @update-paid="updatePaid" ref="orderModal"></OrderModal>

      <ToastMessages :title="title" :message="message"></ToastMessages>

      <DeleteModal :item="tempOrder" @delete-item="deleteOrder"></DeleteModal>

    </div>  
</template>

<style lang="scss">
  @import "@/assets/_admin.scss";
  
  .order-text {
    font-size: 10px;
  }
</style>


<script>

import { Modal } from 'bootstrap';
import { Toast } from 'bootstrap'

import Pagination from '@/components/PaginationComponent.vue';
import OrderModal from '@/components/OrderModal.vue';
import ToastMessages from '../components/ToastMessages.vue';
import DeleteModal from '../components/DeleteModal.vue';

export default {
  data () {
    return {
      orders: [],
      isNew: false,
      isLoading: false,
      tempOrder: {},
      page: 1,
      title: "",
      message: "",
    }
  },
  components: {
    Pagination,
    OrderModal,
    ToastMessages,
    DeleteModal
  },
  methods: {
    // 取得訂單列表
    getOrders (page = 1) {

      const api = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/admin/orders/?page=${page}`;
      this.isLoading = true;
      this.$http
        .get(api)
        .then ((res) => {
          this.orders = res.data.orders
          this.page = res.data.pagination
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err);
        })
    },
    openModal (status, order) {
      if (status === 'view') {
        this.orderModal.show()
        this.tempOrder = {...order }
        // 刪除訂單
      } else if (status === 'delete') {
        this.deleteModal.show()
        this.tempOrder = { ...order}
      } else if (status === 'deldeteAll') {
        this.deleteModal.show()
      }
    },
    toastShow (title, message, duration) {
        this.title = title
        this.message = message

        setTimeout(() => {
          this.toastMessage.show();
        }, 700);
        
        setTimeout(() => {
          this.toastMessage.hide();
        }, duration);
      },
    updatePaid (item) {
      const paid = { is_paid: item.is_paid}
      const api = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/admin/order/${item.id}`
      this.$http
        .put(api, {data: paid})
        .then(() => {
          // this.Loading = true
          this.orderModal.hide()
          this.getOrders(this.page)
          this.toastShow('提示訊息', '編輯訂單成功', 3000)
        })
        .catch(() =>{
          alert('更新失敗')
        })
    },
    deleteOrder () {
      const api = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/admin/order/${this.tempOrder.id}`
      this.$http
        .delete(api)
        .then (() => {
          this.getOrders()
          this.deleteModal.hide()
          this.toastShow('提示訊息', '刪除該筆訂單成功', 3000)
        })
    },
    deleteAll () {
      const api = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/admin/orders/all`
      this.$http
        .delete(api)
        .then (() => {
          this.getOrders()
          this.deleteModal.hide()
          this.toastShow('提示訊息', '刪除全部訂單成功', 4000)
        })
    }
  },
  mounted() {
    this.getOrders()
    this.orderModal = new Modal('#orderModal')
    this.toastMessage =  new Toast ('#toastMessage')
    this.deleteModal = new Modal('#deleteModal')
  }
}

</script>