<template>
  <div
    class="flex items-center justify-center pt-[84px] md:px-[122px] md:pt-[130px] md:pb-[40px]"
  >
    <CheckoutCard />
    <div class="ml-5 hidden w-1/4 lg:block">
      <CartResult hide="hidden" />
      <div class="mt-5">
        <h2 class="w-full bg-primary py-4 text-center text-xl text-second">
          購物清單
        </h2>
        <div class="px-5 py-4">
          <ul
            class="mb-4 grid grid-flow-col grid-rows-2 content-center gap-x-3 text-center"
          >
            <li class="row-span-2">
              <img
                src="../assets/p-1.png"
                class="h-[80px] w-[120px] object-cover object-center"
              />
            </li>
            <li class="row-span-1 self-end truncate text-primary">
              焦糖馬卡龍(2)
            </li>
            <li class="row-span-1 self-start text-xl font-medium text-primary">
              NT$ 900
            </li>
          </ul>
          <ul
            class="mb-4 grid grid-flow-col grid-rows-2 content-center gap-x-3 text-center"
          >
            <li class="row-span-2">
              <img
                src="../assets/p-2.png"
                class="h-[80px] w-[120px] object-cover object-center"
              />
            </li>
            <li class="row-span-1 self-end truncate text-primary">
              焦糖馬卡龍(2)
            </li>
            <li class="row-span-1 self-start text-xl font-medium text-primary">
              NT$ 900
            </li>
          </ul>
          <ul
            class="grid grid-flow-col grid-rows-2 content-center gap-x-3 text-center"
          >
            <li class="row-span-2">
              <img
                src="../assets/p-3.png"
                class="h-[80px] w-[120px] object-cover object-center"
              />
            </li>
            <li class="row-span-1 self-end truncate text-primary">
              焦糖馬卡龍(2)
            </li>
            <li class="row-span-1 self-start text-xl font-medium text-primary">
              NT$ 900
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import CheckoutCard from "../components/CheckoutCard.vue";
import CartResult from "../components/CartResult.vue";
export default {
  components: {
    CheckoutCard,
    CartResult,
  },
};
</script>
