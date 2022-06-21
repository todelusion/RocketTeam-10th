<template>
  <nav
    class="fixed z-50 flex w-full justify-center p-8 lg:px-11 lg:py-10"
    :class="{ bg_active: active, bg_none: !active }"
  >
    <ul class="flex w-full max-w-sm items-center justify-between lg:max-w-5xl">
      <li class="inline lg:hidden" >
        <img src="./assets/dehaze-24px.png" alt=""/>
      </li>
      <li>
        <router-link to="/">
          <img alt="LOGO" src="./assets/logo-all-dark.svg" width="200" />
        </router-link>
      </li>
      <ul class="flex text-primary font-semibold">
        <li class="hidden lg:block">首頁</li>
        <router-link to="/product">
          <li class="hidden lg:block lg:ml-16">甜點</li>
        </router-link>
        <li class="hidden lg:block lg:ml-16">登入</li>
        <img src="./assets/shopping_cart.png" alt="chart" class="lg:ml-16"/>
      </ul>
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
}
.bg_active {
  transition: 0.1s ease-in-out;
  background-color: rgba(255, 255, 255, 0.808);
  backdrop-filter: blur(2px)
}
.bg_none {
  transition: 0.1s ease-in-out;
  background-color: rgba(255, 255, 255, 0);
  
}
</style>
