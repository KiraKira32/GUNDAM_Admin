<!-- eslint-disable vue/no-mutating-props -->
<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div 
    id="couponModal"
    class="modal fade" 
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
    >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="isNew">新增優惠卷</span>
            <span v-else>編輯優惠卷</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title">優惠卷名稱</label>
            <input 
            type="text"
            class="form-control mt-2"
            id="title"
            v-model="tempCoupon.title"
              placeholder="請輸入優惠卷名稱">
          </div>
          <div class="mb-3">
            <label for="coupon_code">優惠碼</label>
            <input 
              v-model="tempCoupon.code"
              type="text"
              class="form-control mt-2"
              id="coupon_code"
              placeholder="請輸入優惠碼"
              >
          </div>
          <div class="mb-3">
          <label for="due_date">優惠卷時間</label>
          <input 
            v-model="due_date"
            type="date"
            class="form-control mt-2"
            id="due_date">
          </div>
          <div class="mb-3">
            <label for="percent">折扣百分比</label>
            <input 
              v-model="tempCoupon.percent"
              type="number"
              class="form-control mt-2"
              id="perrcent"
              min="0"
              placeholder="請輸入折扣百分比">
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                v-model="tempCoupon.is_enabled"
                type="checkbox"
                class="form-check-input"
                :true-value="1"
                :false-value="0"
                id="is_enabled"
                >
              <label class="form-check-label" for="is_enabled">
                啟動優惠碼
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button 
            type="button" 
            class="btn btn-outline-secondary" 
            data-bs-dismiss="modal"
            >取消
          </button>
          <button 
            type="button" 
            class="btn btn-danger"
            :disabled="!tempCoupon.is_enabled"
          @click="$emit('update-coupon', tempCoupon)">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props:['tempCoupon', 'isNew'],
  data () {
    return {
      due_date: ''
    }
  },
  emits: ['update-coupon'],
  watch: {
    tempCoupon: {
      immediate: true, // 立即執行一次
      handler() {
        // 將時間格式改為 YYYY-MM-DD
        const dateTime = new Date(this.tempCoupon.due_date * 1000)
          .toISOString().split('T');
        // 解構賦予值
        [this.due_date] = dateTime;
      }
    },
    // 編輯當前時間
    due_date() {     
      // eslint-disable-next-line vue/no-mutating-props
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
    },
  },
}
</script>