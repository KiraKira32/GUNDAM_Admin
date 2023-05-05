<template>
  <div class="navmenu d-flex flex-column p-3 text-white bg-dark sidebar ali vh-100" style="width: 280px">
    <div class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <!-- <span class="fs-4 j">鋼彈GUNDAM</span> -->
      <img class="img-logo" src="../assets/LOGO.png" alt="">
    </div>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link to="/admin/products" class="nav-link text-white mt-2 d-flex align-items-center"
        :class="{ active: $route.path === '/admin/products' }">
          <svg
            class="me-2"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" />
          </svg>
          商品管理
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/admin/orders" class="nav-link text-white mt-2 d-flex align-items-center"
        :class="{ active: $route.path === '/admin/orders' }"
          exact-active-class="active">
          <svg
          class="me-2"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"
            />
          </svg>
          訂單管理
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/admin/coupons" class="nav-link text-white mt-2 d-flex align-items-center"
        :class="{ active: $route.path === '/admin/coupons' }"
          exact-active-class="active">
          <svg
          class="me-2"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01 4 11V4h7v-.01l9 9-7 7.02z"
            />
            <circle cx="6.5" cy="6.5" r="1.5" />
          </svg>
          優惠管理
        </router-link>
      </li>
      <hr>
      <!-- 返回前台  -->
      <li class="nav-item">
        <a class="text-white d-flex front px-3" href="https://kirakira32.github.io/GUNDAM/#/">
          <svg
            class="me-2"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
            />
          </svg>
          返回前台
        </a>
      </li>
    </ul>
    <div class="justify-content-start align-items-center">
      <hr />
      <div class="d-flex">
        <img src="https://i.imgur.com/Vx0JIwt.jpg" alt="" width="50" class="rounded-circle me-3 ms-2"/>
        <div >
          <p>管理員：KiraKira</p>
          <p>編號碼：#9297</p>
        </div>
      </div>
    </div>
    <hr />
    <button class="btn btn-outline-danger" type="button" @click="logout">帳號登出</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: ''
    }
  },
  methods: {
    // 帳號登出
    logout() {
      const api = `${import.meta.env.VITE_API}/v2/logout`
      this.$http.post(api)
        .then(() => {
          alert('帳號已登出')
          this.$router.push('/')
      })
    }
  }
}
</script>


<style>
div p {
  margin: 0;
}

.front {
  text-decoration: none;
}

.img-logo {
  width: 85%;
}
.sidebar {
  height: 100vh;
  /* max-width:280px; */
  /* position: fixed; */
  top: 0;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-color: #dc3545;
  color: #fff;
}

.bookmark.active {
  background-color: #dc3545;
}


@media screen and (max-width: 767px) {
  /* 手機版樣式 */

  .navmenu {
    font-size: 10px;
  }

  
}
</style>