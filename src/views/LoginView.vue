<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="login">
        <div class="d-flex justify-content-center">
          <img class="img-logo" src="../assets/logo_icon.png" alt="" />
        </div>
        <div class="form-block">
          <h3 class="text-center py-4 font-weight-normal">管理員登入</h3>
          <div class="input-block col-10 mx-auto">
            <form class="form-signin" @submit.prevent="login">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  v-model="user.username"
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                  autofocus
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  v-model="user.password"
                  id="floatingPassword"
                  placeholder="Password"
                  required
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div class="d-flex gap-3">
                <button class="btn btn-lg btn-outline-danger w-100 mt-3 disabled" type="submit">
                  忘記密碼
                </button>
                <button class="btn btn-lg btn-danger w-100 mt-3" type="submit" :disabled="isLoading">
                  <span v-if="isLoading === false">登入</span>
                  <span
                    v-else
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: '',
      date: '',
      message: '',
      showToast: false,
      isLoading: false,
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      const api = `${import.meta.env.VITE_API}/v2/admin/signin`
      this.isLoading = true
      this.$http
        .post(api, this.user)
        .then((res) => {
          const { expired, token } = res.data
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`
          this.title = '登入成功'
          this.date = new Date().toLocaleString()
          this.message = '歡迎回來！'
          this.showToast = true
          this.$router.push('/admin/products')
        })
        .catch(() => {
          this.title = '登入失敗'
          this.date = new Date().toLocaleString()
          this.message = '請檢查帳號密碼是否正確'
          this.showToast = true
        })
    }
  }
}
</script>

<style>

.form-block {
  background: white;
}

.form-block {
  width: 450px;
  height: 320px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px;
}

@media screen and (max-width: 576px) {
  /* 手機版樣式 */

  .form-block {
    width: 95%;
  }
}
</style>
