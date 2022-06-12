<template>
  <nav
    class="fixed z-50 w-full py-4 px-5 xl:px-36"
    :class="{ bg_active: active, bg_none: !active }"
  >
    <ul class="flex items-center justify-between">
      <li>
        <router-link to="/">
          <img
            alt="LOGO"
            src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/logo.png"
            width="218"
            class="w-[150px]"
          />
        </router-link>
      </li>
      <li class="planButton bg-second">
        <router-link to="/price">方案費用</router-link>
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
}
.bg_active {
  transition: 0.1s ease-in-out;
  border-bottom: 2px solid rgba(245, 202, 82);
  background-color: rgba(255, 255, 255, 0.703);
}
.bg_none {
  transition: 0.1s ease-in-out;
  background-color: rgba(255, 255, 255, 0);
}
</style>
