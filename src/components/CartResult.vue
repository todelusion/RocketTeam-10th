<template>
  <ul class="mx-auto lg:bg-primary lg:px-4 lg:pb-4">
    <li
      class="mb-4 w-full bg-second py-4 text-center text-2xl font-semibold text-primary lg:border-b-[1px] lg:bg-transparent lg:text-[#EAF0ED]"
    >
      訂單摘要
    </li>
    <li
      class="mb-2 flex justify-between font-light text-primary lg:text-second"
    >
      <p>小計</p>
      <p>NT$ 2,700</p>
    </li>
    <li
      class="mb-2 flex justify-between font-light text-primary lg:text-second"
    >
      <p>運費</p>
      <p>NT$ 300</p>
    </li>
    <li
      class="flex justify-between text-xl font-semibold text-primary lg:text-white"
    >
      <p>總計</p>
      <p>NT$ 3,000</p>
    </li>
  </ul>
  <router-link to="/checkout">
    <h2
      class="w-full bg-third py-4 text-center text-2xl font-semibold text-primary"
      :class="[hide, block]"
    >
      結帳
    </h2>
  </router-link>
</template>

<script>
export default {
  props: ["hide", "block"],
};
</script>

<style>
.hidden {
  display: none;
}
</style>
