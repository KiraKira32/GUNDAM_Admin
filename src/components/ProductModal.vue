<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <div
      class="modal fade"
      id="productModal"
      ref="productModal"
      tabindex="-1"
      aria-labelledby="productModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="productModalLabel">
              <span v-if="isNew">新增產品</span>
              <span v-else>編輯產品</span>
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
              <!-- 左邊 區塊 -->
              <div class="col-sm-4">
                <div class="mb-2">
                  <!-- 放置陣列圖片以及網址 -->
                  <div class="mb-3">
                    <label for="imageUrl" class="form-label">新增圖片網址</label>
                    <input
                      v-model="tempProduct.imageUrl"
                      type="text"
                      class="form-control"
                      placeholder="請輸入圖片網址"
                    />
                  </div>
                  <img class="img-fluid" :src="tempProduct.imageUrl" alt="" />
                </div>
                <!-- 多圖設置 -->
                <div>
                  <hr />
                  <h5 class="mb-4 mt-4">商品多圖設置</h5>
                  <!-- 判斷 tempProduct.imagesUrl 是一個陣列  -->
                  <div v-if="Array.isArray(tempProduct.imagesUrl)">
                    <template v-for="(img, key) in tempProduct.imagesUrl" :key="key + 123">
                      <input
                        class="form-control mb-2"
                        type="text"
                        v-model="tempProduct.imagesUrl[key]"
                      />
                      <img :src="tempProduct.imagesUrl[key]" alt="" class="img-fluid mb-2" />
                      <hr />
                    </template>
                    <!-- 判斷 新增＆刪除  -->
                    <button
                      class="btn btn-outline-primary w-100 mb-1"
                      v-if="
                        !tempProduct.imagesUrl.length ||
                        tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                      "
                      @click="tempProduct.imagesUrl.push('')"
                    >
                      新增圖片
                    </button>
                    <button
                      class="btn btn-outline-danger w-100 mb-2"
                      v-else
                      @click="tempProduct.imagesUrl.pop('')"
                    >
                      刪除圖片
                    </button>
                  </div>
                </div>
              </div>
              <!-- 右邊 區塊 -->
              <div class="col-sm-8">
                <div class="mb-3">
                  <label for="title" class="form-label">標題</label>
                  <input
                    v-model="tempProduct.title"
                    id="title"
                    class="form-control"
                    type="text"
                    placeholder="請輸入標題"
                  />
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">類別</label>
                    <input
                      v-model="tempProduct.category"
                      id="category"
                      type="text"
                      class="form-control"
                      placeholder="請輸入分類"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="unit" class="form-label">單位</label>
                    <input
                      v-model="tempProduct.unit"
                      id="unit"
                      type="text"
                      class="form-control"
                      placeholder="請輸入單位"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label">原價</label>
                    <input
                      v-model="tempProduct.origin_price"
                      id="origin_price"
                      min="0"
                      type="number"
                      class="form-control"
                      placeholder="請輸入價格"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">售價</label>
                    <input
                      v-model="tempProduct.price"
                      id="price"
                      min="0"
                      type="number"
                      class="form-control"
                      placeholder="請輸入售價"
                    />
                  </div>
                </div>
                <hr />
                <div class="mb-3">
                  <label for="description" class="form-label">產品描述</label>
                  <textarea
                    id="description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入產品描述"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">說明內容</label>
                  <textarea
                    id="content"
                    type="text"
                    class="form-control"
                    placeholder="請輸入說明內容"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      v-model="tempProduct.is_enabled"
                      id="is_enabled"
                      class="form-check-input me-2"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label for="is_enabled" class="form-check-label">是否上架商品</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="$emit('update-product', tempProduct)">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tempProduct', 'isNew'],
  data() {
    return {
      product: {},
    }
  },
  emits: ['update-product'],
}
</script>
