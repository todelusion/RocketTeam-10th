<template>
  <div class="relative w-full max-w-[315px]">
    <img :src="url" alt="image" width="315" class="relative w-full" />
    <h2
      class="absolute top-0 left-5 bg-primary p-[10px] font-semibold tracking-[5px] text-second vertical-rl"
    >
      本日精選
    </h2>
    <font-awesome-icon
      :icon="['far', 'heart']"
      @click="heartActive = !heartActive"
      v-show="!heartActive"
      class="absolute top-5 right-6 duration-100 hover:scale-110 hover:text-red-600"
    />
    <font-awesome-icon
      :icon="['fas', 'heart']"
      v-show="heartActive"
      @click="heartActive = !heartActive"
      class="absolute top-5 right-6 scale-110 text-red-600 duration-100"
    />
    <div class="flex w-full bg-white">
      <div
        class="flex w-[183px] items-center justify-center border-r-[2px] border-r-second py-[14px]"
      >
        <h2 class="font-light text-primary">焦糖馬卡龍</h2>
      </div>
      <div class="flex w-[133.35px] items-center justify-center py-[14px]">
        <h2 class="font-semibold text-primary">NT$ 450</h2>
      </div>
    </div>
    <button
      class="w-full cursor-pointer bg-second py-4 text-center text-2xl font-semibold text-primary duration-100 hover:bg-primary hover:text-second"
    >
      加入購物車
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heartActive: false,
    };
  },
  props: ["url"],
};
</script>
