<template>
  <div
    class="flex items-center justify-center pt-[84px] md:px-[122px] md:pt-[130px] md:pb-[40px]"
  >
    <CheckoutCard
    />
  </div>
  <button
    class="mx-auto mb-5 hidden w-1/2 cursor-pointer bg-third py-4 text-2xl font-semibold text-primary md:block"
  >
    登入帳號
  </button>
  <Footer />
</template>

<script>
import CheckoutCard from "../components/CheckoutCard.vue";
export default {
  components: {
    CheckoutCard,
  },
};
</script>
