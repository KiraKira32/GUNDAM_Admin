<template>
  <div class="pagintion-container">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <!-- 上一頁 -->
        <li class="page-item" :class="{ disabled: !pages.has_pre }">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="updatePage(pages.current_page - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        <li
          v-for="page in pages.total_pages"
          class="page-item"
          :class="{ active: page === pages.current_page }"
          :key="page + 'page'"
        >
          <a 
            class="page-link" 
              href="#" 
              @click.prevent="updatePage(page)"
          >{{ page }}</a>
        </li>

        <!-- 下一頁 -->
        <li class="page-item" :class="{ disabled: !pages.has_next }">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="updatePage(pages.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  // :pages="{ 頁碼資訊 }"
  props: ['pages'],
  methods: {
    updatePage(page) {
      // @emitPages="更新頁面事件"
      this.$emit('emitPages', page)
    }
  }
}
</script>

<style>
/* 修改 Pagination 的顏色 */
.pagination .page-link {
  color: #7b7b7b;
  /* background-color: #17a2b8; */
  border-color: #bebebe;
}

/* 修改 active 的顏色 */
.pagination .page-item.active .page-link {
  color: white;
  background-color: #dc3545;
  border-color: #dc3545;
}
</style>
