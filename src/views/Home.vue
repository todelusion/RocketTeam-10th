<template>
  <div class="max-w-full">
    <header>
      <div
        class="relative flex h-[496px] w-full justify-center bg-banner-home bg-cover bg-center"
      >
        <ul class="absolute bottom-0 flex w-full md:-bottom-9 md:h-64 md:w-3/5">
          <li
            class="home-menu cursor-pointer bg-primary/80 font-light text-white duration-100 hover:bg-third/80 hover:font-semibold hover:text-primary"
          >
            <h2 class="text-xl vertical-lr md:text-2xl">本日精選</h2>
          </li>
          <li
            class="home-menu cursor-pointer bg-primary/80 font-light text-white duration-100 hover:bg-third/80 hover:font-semibold hover:text-primary"
          >
            <h2 class="text-xl vertical-lr md:text-2xl">人氣推薦</h2>
          </li>
          <li
            class="home-menu cursor-pointer bg-primary/80 font-light text-white duration-100 hover:bg-third/80 hover:font-semibold hover:text-primary"
          >
            <h2 class="text-xl vertical-lr md:text-2xl">新品上市</h2>
          </li>
        </ul>
      </div>
    </header>
    <HomeIntro />
    <div class="mb-16 flex justify-center">
      <ProductCard
        url="https://hexschool.github.io/webLayoutTraining1st/student-week1/p-2.png"
        class="w-full md:w-2/6"
      />
      <ProductCard
        url="https://hexschool.github.io/webLayoutTraining1st/student-week1/p-1.png"
        class="ml-5 hidden md:block md:w-2/6"
      />
      <ProductCard
        url="https://hexschool.github.io/webLayoutTraining1st/student-week1/p-3.png"
        class="ml-5 hidden md:block md:w-2/6"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import HomeIntro from "../components/HomeIntro.vue";
export default {
  components: {
    HomeIntro,
  },
};
</script>

<style>
.bg-banner-home {
  background-image: url("../assets/home_banner.jpg");
}

</style>
