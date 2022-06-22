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
      />
      <ProductCard
        url="https://hexschool.github.io/webLayoutTraining1st/student-week1/p-1.png"
        class="ml-5 hidden md:block"
      />
      <ProductCard
        url="https://hexschool.github.io/webLayoutTraining1st/student-week1/p-3.png"
        class="ml-5 hidden md:block"
      />
    </div>
    <footer>
      <section class="flex w-full justify-center bg-primary p-[30px]">
        <div class="flex flex-col justify-center">
          <div class="mb-[30px] flex items-center">
            <img
              src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/f70f00178a7f0baa31e9c01634303d8562cfe93a/student-week1/logo-light.svg"
              width="40"
            />
            <p class="ml-5 text-2xl font-normal text-second">
              訂閱你我的甜蜜郵件
            </p>
          </div>
          <div class="flex max-w-[315px] justify-between bg-second">
            <font-awesome-icon icon="envelope" class="px-6 py-5 text-primary" />
            <font-awesome-icon
              icon="arrow-right"
              class="bg-third px-6 py-5 text-primary"
            />
          </div>
        </div>
      </section>
      <section class="w-full bg-second px-[30px] pb-[30px] pt-[40px]">
        <img
          src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/f70f00178a7f0baa31e9c01634303d8562cfe93a/student-week1/logotype-lg-dark.svg"
          alt="logo"
          width="171"
          class="mb-10"
        />
        <ul class="mb-9 text-primary">
          <li>07-1234-5678</li>
          <li>sweetaste@email.com</li>
          <li>800 高雄市新興區幸福路 520 號</li>
        </ul>
        <div class="flex">
          <font-awesome-icon :icon="['fab', 'pinterest']"></font-awesome-icon>
          <font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon>
        </div>
      </section>
    </footer>
  </div>
</template>

<script>
import HomeIntro from "../components/HomeIntro.vue";
import ProductCard from "../components/ProductCard.vue";
export default {
  components: {
    HomeIntro,
    ProductCard,
  },
};
</script>

<style></style>
