<template>
  <div class="flex flex-col items-center w-full bg-primary md:h-[350px] md:w-[390px]">
    <ul class="p-[30px]">
      <li class="flex justify-between mb-[30px]">
        <h2 class="text-4xl font-semibold text-white">運送</h2>
        <img src="../assets/bar_delivery.svg" width="153">
      </li>
      <li class="flex">
        <form>
          <p class="text-xl font-semibold mb-2 text-second">姓氏</p>
          <input type="text" placeholder="王" class="w-full h-[56px] bg-second pl-5">
        </form>
        <form class="ml-2">
          <p class="text-xl font-semibold mb-2 text-second">姓氏</p>
          <input type="text" placeholder="王" class="w-full h-[56px] bg-second pl-5">
        </form>
      </li>
      <li></li>
      <li></li>
    </ul>
  <button
    class="w-full cursor-pointer bg-third py-4 text-2xl font-semibold text-primary md:hidden"
  >
    下一步
  </button>
  </div>
</template>