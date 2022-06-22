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
    <HomeIntro/>
    <div class="flex flex-wrap justify-center">
      <div class="w-full max-w-[315px] relative">
        <img src="https://hexschool.github.io/webLayoutTraining1st/student-week1/p-2.png" alt="image" 
        width="315"
        class="w-full relative"
        >
        <h2 class="font-semibold text-second absolute vertical-rl bg-primary top-0 left-5">本日精選</h2>

      </div>
    </div>
  </div>
</template>

<script>
import HomeIntro from "../components/HomeIntro.vue"
export default {
  components:{
    HomeIntro
  }

}

</script>

<style></style>
