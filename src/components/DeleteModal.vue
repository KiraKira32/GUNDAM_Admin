<template>
  <div
    id="deleteModal"
    ref="deleteModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="deleteModalModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title" id="deleteModalLabel">
            <span>刪除 {{ item.title }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div v-if="item.title" class="mb-2">
            請確定是否要刪除：
          </div>
          <div v-else class="mb-2">
            請確定是否要<span class="text-danger fw-bold">刪除</span>該筆訂單？
          </div>
          <strong class="text-danger">{{ item.title }}</strong>
          <div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-danger" @click="$emit('delete-item')">確認刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    item: {}
  },
  emits: ['delete-item']
}
</script>