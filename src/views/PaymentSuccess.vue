<template>
  <div class="pt-[90px] md:px-[42px] md:pt-[130px] md:pb-[60px]">
    <div
      class="flex h-screen items-center justify-center bg-payment-success bg-cover bg-center md:h-[460px]"
    >
      <div class="flex w-1/2 flex-col items-center md:w-1/5">
        <img
          src="../assets/bar_payment_success.svg"
          alt="payment_success"
          class="mb-5"
        />
        <h2
          class="font-serif text-[10vw] font-black text-primary md:mb-14 md:text-[3vw]"
        >
          付款成功
        </h2>
        <router-link to="/product" class="hidden w-full md:block">
          <button
            class="w-full cursor-pointer bg-third py-4 text-2xl font-semibold text-primary"
          >
            繼續逛逛
          </button>
        </router-link>
      </div>
    </div>
    <router-link to="/product" class="w-full md:hidden">
      <button
        class="w-full cursor-pointer bg-third py-4 text-2xl font-semibold text-primary"
      >
        繼續逛逛
      </button>
    </router-link>
  </div>
  <Footer />
</template>
