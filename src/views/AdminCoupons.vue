<!-- eslint-disable no-unused-vars -->
<template>
  <div class="container page-container">
    <Loading :active="isLoading" class="vld-overlay"></Loading>
    <div class="products mt-4">
      <h4 class="text-fz">
        優惠管理
      </h4>
      <hr>
    <div class="text-end">
      <button class="text-end btn btn-danger" type="button"> 
        <p class="text-center mx-4" @click="openModal('create')">新增優惠卷</p>
      </button>
      
    </div>
    <table class="table mt-3">
      <thead>
        <tr class="table-block text-white" style="background: #282828;">
          <th width="150">優惠卷名稱</th>
          <th width="120">折扣百分比</th>
          <th width="120">優惠卷時間</th>
          <th width="120">優惠卷狀態</th>
          <th width="120">編輯</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}</td>
          <td>{{ $filters.date(item.due_date) }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', item)">編輯</button>
              <button type="button" class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    <CouponModal :temp-coupon="tempCoupon" :is-new="isNew" ref="couponModal" @update-coupon="updateCoupon"></CouponModal>
    <DeleteModal :item="tempCoupon" @delete-item="deleteCoupon" ></DeleteModal>
    <ToastMessages :title="title" :message="message"></ToastMessages>
  </div>
</template>

<style lang="scss">
  @import "@/assets/_admin.scss";
</style>

<script>

import { Modal } from 'bootstrap'
import { Toast } from 'bootstrap';

import CouponModal from '../components/CouponModal.vue';
import DeleteModal from '../components/DeleteModal.vue';
import ToastMessages from '../components/ToastMessages.vue';

export default {
  components : { CouponModal, DeleteModal, ToastMessages },
  data () {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        due_date:'',
        code: '',
      },
      isLoading: false,
      isNew: false, // 確認編輯或新增使用
      title: '',
      message: ''
    }
  },
  methods: {
    openModal (status, item) {
      if ( status === 'create') {
        this.isNew = true
        this.couponModal.show()
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
        }
        // 編輯產品
      } else if ( status === 'edit') {
        this.isNew = false
        this.couponModal.show()
        this.tempCoupon = { ...item }
      } else if (status === 'delete') {
        this.deleteModal.show()
        this.tempCoupon = { ...item }
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
    getCoupons () {
      this.isLoading = true
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/admin/coupons`
        this.$http
        .get(url, this.tempProduct)
        .then((res) => {
          this.coupons = res.data.coupons
          this.isLoading = false
        })
        .catch((err) => {
          alert(err)
        })
    },
    updateCoupon () {
      let url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/admin/coupon`
      let method = 'post'
      let data = this.tempCoupon

      if(!this.isNew) {
        url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/admin/coupon/${this.tempCoupon.id}`
        method = 'put'
        data = this.tempCoupon
      }

      this.$http[method](url, { data })
        .then(() => {
          this.isLoading = false;    
          this.couponModal.hide()
          this.getCoupons()
          if (this.isNew === false){
            this.toastShow('提示訊息', '編輯優惠卷成功', 3000)
          } else if(this.isNew === true) {
          this.isLoading = true
          this.toastShow('提示訊息', '新增優惠卷成功', 3000)
          }
        })
        .catch(() => {
          this.toastShow('提示訊息', '請填寫正確資料', 3000)
        })
    },
    deleteCoupon () {
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.$http
        .delete(url)
        .then(() => {
          this.deleteModal.hide()
          this.getCoupons()
          this.toastShow('提示訊息', '刪除優惠卷成功', 3000)
        })
    },
  },
  mounted () {
    this.getCoupons()

    this.couponModal = new Modal('#couponModal')
    this.deleteModal = new Modal('#deleteModal')
    this.toastMessage = new Toast('#toastMessage')
  }
}
</script>