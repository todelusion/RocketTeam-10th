<template>
  <div class="pt-[84px] md:px-[122px] md:pt-[130px] md:pb-[40px] flex flex-wrap justify-center">
    <div class="w-full lg:w-2/3">
      <h2
        class="mb-[30px] w-full bg-second py-4 text-center text-2xl font-semibold text-primary"
      >
        您的購物車
      </h2>
      <div class="flex flex-col items-center">
        <CartToBuy
          class="mb-10"
          url="https://hexschool.github.io/webLayoutTraining1st/student-week1/p-1.png"
        />
        <CartToBuy
          class="mb-10"
          url="https://hexschool.github.io/webLayoutTraining1st/student-week1/p-2.png"
        />
        <CartToBuy
          class="mb-10"
          url="https://hexschool.github.io/webLayoutTraining1st/student-week1/p-3.png"
        />
        <CartToBuyDesk
          class="mb-10"
          url="https://hexschool.github.io/webLayoutTraining1st/student-week1/p-1.png"
        />
        <CartToBuyDesk
          class="mb-10"
          url="https://hexschool.github.io/webLayoutTraining1st/student-week1/p-2.png"
        />
        <CartToBuyDesk
          class="mb-10"
          url="https://hexschool.github.io/webLayoutTraining1st/student-week1/p-3.png"
        />
      </div>
    </div>
    <div class="w-full lg:w-1/4 lg:ml-5">
      <CartResult/>
      <h2
        class="w-full bg-third py-4 text-center text-2xl font-semibold text-primary lg:hidden"
      >
        結帳
      </h2>
    </div>
  </div>
  <Footer />
</template>

<script>
import CartToBuy from "../components/CartToBuy.vue";
import CartToBuyDesk from "../components/CartToBuyDesk.vue"
import CartResult from "../components/CartResult.vue";
export default {
  components: {
    CartToBuy,
    CartToBuyDesk,
    CartResult,
  },
};
</script>
