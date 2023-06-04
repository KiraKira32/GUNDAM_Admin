<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div
    id="orderModal"
    ref="orderModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="orderModal">
            <span>訂單細節</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <!-- 左邊 客戶資料 -->
            <div class="col-md-4">
              <h3>客戶資料</h3>
              <table class="table">
                <tbody v-if="tempOrder.user">
                  <tr>
                    <th style="width: 100px">姓名</th>
                    <td>{{ tempOrder.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ tempOrder.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ tempOrder.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ tempOrder.user.address }}</td>
                  </tr>
                  <tr>
                    <th>備註</th>
                    <td>{{ tempOrder.message }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- 右邊 訂單資料 -->
            <div class="col-md-8">
              <h3>訂單資料</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th style="width: 100px">訂單編號</th>
                    <td>{{ tempOrder.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ $moment(new Date(tempOrder.create_at * 1000)).format ('YYYY-MM-DD HH:mm') }}</td>
                  </tr>
                  <tr>
                    <th>付款時間</th>
                    <td>
                      <span v-if="tempOrder.paid_date">
                        {{ $moment(new Date(tempOrder.create_at * 1000)).format('YYYY-MM-DD HH:mm') }}
                      </span>
                      <span v-else>時間不正確</span>
                    </td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong v-if="tempOrder.is_paid" class="text-success">已付款</strong>
                      <span v-else class="text-danger">尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>訂單總金額</th>
                    <td>NT$ {{ $filters.currency(tempOrder.total) }}</td>
                  </tr>
                </tbody>
              </table>
              <!-- 右邊 商品資訊 -->
              <h3>商品資訊</h3>
              <table class="table">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr v-for="item in tempOrder.products" :key="item.id">
                    <th style="font-size: 15px;">{{ item.product.title }}</th>
                    <td width="60" style="font-size: 15px;">{{ item.qty }} {{ item.product.unit }}</td>
                    <td width="100" class="text-end mx-2" style="font-size: 15px;">
                      NT$ {{ $filters.currency(item.final_total) }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-end">
                <div class="form-check">
                  <input
                    v-model="tempOrder.is_paid"
                    value=""
                    class="form-check-input" 
                    type="checkbox" 
                    id="flexCheckDefault" />
                </div>
                <label class="form-check-label" for="flexCheckDefault">
                  <span v-if="tempOrder.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          
          <!-- 讓父元件知道要更新哪一筆訂單資料。 -->
          <button type="button" class="btn btn-danger"
          @click="$emit('update-paid', tempOrder)"
          >確認修改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tempOrder'],
  data() {
    return {
      order: {},
      isPaid: false
    }
  },
  emits: ['update-paid']
}
</script>
