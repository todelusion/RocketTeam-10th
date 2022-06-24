<template>
  <nav
    class="fixed z-50 flex w-full justify-center p-8 md:py-10"
    :class="{ bg_active: active, bg_none: !active }"
  >
    <ul class="flex w-full items-center justify-between md:w-full">
      <li class="inline md:hidden">
        <img src="./assets/dehaze-24px.png" alt="" />
      </li>
      <li>
        <router-link to="/">
          <img alt="LOGO" src="./assets/logo-all-dark.svg" width="200" />
        </router-link>
      </li>
      <li>
        <ul class="flex font-semibold text-primary">
          <router-link to="/">
            <li class="hidden horizontal-tb md:block">首頁</li>
          </router-link>
          <router-link to="/product" class="md:ml-16">
            <li class="hidden md:block">甜點</li>
          </router-link>
          <router-link to="/login">
            <li class="hidden md:ml-16 md:block">登入</li>
          </router-link>
          <router-link to="/cart">
            <img
              src="./assets/shopping_cart.png"
              alt="chart"
              class="md:ml-16"
            />
          </router-link>
        </ul>
      </li>
    </ul>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.active = window.scrollY > 28 ? true : false;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Noto Sans TC, Roboto;
  list-style: none;
}
input {
  background-color: transparent;
  outline: none;
  border: 0;
}
.bg_active {
  transition: 0.1s ease-in-out;
  background-color: rgba(255, 255, 255, 0.808);
  backdrop-filter: blur(2px);
}
.bg_none {
  transition: 0.1s ease-in-out;
  background-color: rgba(255, 255, 255, 0);
}
</style>
