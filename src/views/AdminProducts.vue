<template>
  <div class="container page-container">
      <Loading :active="isLoading" class="vld-overlay"></Loading>
      <div class="products mt-4">
        <h4 class="text-fz">
          商品列表
        </h4>
        <hr>
      <div class="text-end">
        <button class="text-end btn btn-danger" type="button" @click="openModal('create')"> 
          <p class="text-center mx-">新增商品</p>
        </button>
        
      </div>
      <table class="table mt-3 align-middle">
        <thead>
          <tr class="table-block text-white" style="background: #282828;">
            <th width="100">類別</th>
            <th>商品名稱</th>
              <th width="100">原價</th>
              <th width="">售價</th>
              <th width="90">商品狀態</th>
              <th width="120">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="text-secondary">NT$ {{ $filters.currency(item.origin_price) }}</td>
            <td class="fw-bolder">NT$ {{ $filters.currency(item.price) }}</td>
            <td>
              <span v-if="item.is_enabled" class="text-success">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', item)">
                編輯</button>
              <button type="button" class="btn btn-outline-danger btn-sm"             
                @click="openModal('delete', item)">
                刪除</button>
            </div>
          </tr>
        </tbody>
      </table>
      </div>

    <pagination 
    :pages="page" 
    :get-products="getProducts"
    @emit-pages="getProducts">
    </pagination>

    <ProductModal :is-new="isNew" :temp-product="tempProduct" @update-product="updateProduct" :product="tempProduct"></ProductModal>
    <DeletaModal :item="tempProduct" @delete-item="deleteProduct"></DeletaModal>

    <ToastMessages :title="title" :message="message"></ToastMessages>


  </div>  
</template>

<style lang="scss">
  @import "@/assets/_admin.scss";
</style>


<script>

import { Modal } from 'bootstrap'
import { Toast } from 'bootstrap'

import Pagination from '@/components/PaginationComponent.vue'
import ProductModal from '@/components/ProductModal.vue'
import DeletaModal from '@/components/DeleteModal.vue'

import ToastMessages from '@/components/ToastMessages.vue'

  export default {
    components: {
      Pagination,
      ProductModal,
      DeletaModal,
      ToastMessages
    },
    data () {
      return {
        products: [],
        tempProduct: {
          imagesUrl: []
        },
        isNew: false, // 確認編輯或新增使用
        page: {},
        isLoading: false,
        showToast: false,
        title: "",
        message: "",
      }
    },
    methods: {
      getProducts (page = 1) { // 參數預設值
        const api = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/admin/products/?page=${page}`
        this.isLoading = true
        this.$http
          .get(api)
          .then ((res) => {
            this.products = res.data.products
            this.page = res.data.pagination
            this.isLoading = false
            console.log(res);
          })
          .catch((err) => {
            alert(err)
          })
      },
      // Modal 視窗 
      openModal (status, item) {
        
        // creat 新增商品
        if (status === 'create') {
          this.productModal.show()
          this.isNew = true;
          // 將初始化資料帶入
          this.tempProduct = {
            imagesUrl: []
          }
          // edit 編輯商品
        } else if (status === 'edit') {
          this.productModal.show()
          this.isNew = false // 非新增
          // 帶入當前要編輯的資料
          this.tempProduct = { ...item }
          // delete 刪除商品 
        } else if (status === 'delete') {
          this.deleteModal.show()
          this.tempProduct = { ...item }
        }
      // Toast 顯示時間
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
      // 新增＆編輯商品內容
      updateProduct () {
        let api = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/admin/product`
        let method = 'post'
        // this.isLoading = true;
        // 如果不是 creat 而是 edit , let路徑切換
        if (!this.isNew) {
          api = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/admin/product/${this.tempProduct.id}`
          method = 'put'
        } 

        this.$http[method](api, { data: this.tempProduct })
        .then(() => {
          this.productModal.hide() // 關閉 Modal
          this.getProducts()
          if (this.isNew === false){
            this.toastShow('提示訊息', '編輯產品成功', 3000)
          } else if(this.isNew === true) {
          this.isLoading = true
          this.toastShow('提示訊息', '新增商品成功', 3000)
        }
        })
        .catch(() => {
          if (this.isNew === false){
            this.toastShow('提示訊息', '編輯產品錯誤', 3000)
          } else if(this.isNew === true) {
          this.toastShow('提示訊息', '新增商品錯誤', 3000)
        }
        })
      },
      // delete 刪除
      deleteProduct () {
        const api = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/admin/product/${this.tempProduct.id}`
        this.$http
          .delete(api)
          .then(() => {
            this.toastShow('提示訊息', '刪除產品成功', 3000)  
            this.getProducts()
            this.deleteModal.hide()
          })
          .catch(() => {
          this.toastShow('提示訊息', '刪除產品失敗', 3000)
        })
      },
      
    },
    mounted() {
      this.getProducts()
      // Bootstrap Modal ID 名稱
      // var myModal = new bootstrap.Modal(document.getElementById('myModal'), options)
      this.productModal = new Modal('#productModal')
      this.deleteModal = new Modal('#deleteModal')
      this.toastMessage =  new Toast ('#toastMessage')
    },
  } 
</script>
