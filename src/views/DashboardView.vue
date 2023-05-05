<template>
  <div class="d-flex admin-wrapper">
    <div class="sidebar">
      <Navbar/>
    </div>
    <main class="admin-main-block">
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'

import Navbar from '@/components/NavbarComponent.vue';

export default {
  components: { Navbar, RouterView},
  created() {
    const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      this.$http.defaults.headers.common.Authorization = token

      if (!token) {
        alert('請登入帳號')
        this.$router.push('/login')
      }
      const url = `${import.meta.env.VITE_API}/api/user/check`
      this.$http
        .post(url)
        .then(() => {
          this.isLogin = true
        })
        .catch((err) => {
          console.log(err)
        })
  },
};
</script>
