<template>
  <div class="flex w-full flex-col items-center bg-primary md:w-[460px]">
    <ul class="p-[30px]">
      <li class="mb-[30px] flex justify-between">
        <h2 class="text-4xl font-semibold text-white">運送</h2>
        <img src="../assets/bar_delivery.svg" width="153" />
      </li>
      <li class="mb-4 flex">
        <form>
          <p class="mb-2 text-xl font-semibold text-second">姓氏</p>
          <input
            type="text"
            placeholder="王"
            class="h-[56px] w-full bg-second pl-5"
          />
        </form>
        <form class="ml-2">
          <p class="mb-2 text-xl font-semibold text-second">姓氏</p>
          <input
            type="text"
            placeholder="小明"
            class="h-[56px] w-full bg-second pl-5"
          />
        </form>
      </li>
      <li class="mb-4">
        <form>
          <p class="mb-2 text-xl font-semibold text-second">電話</p>
          <input
            type="text"
            placeholder="0912-345-678"
            class="h-[56px] w-full bg-second pl-5"
          />
        </form>
      </li>
      <li>
        <p class="mb-2 text-xl font-semibold text-second">地址</p>
        <form class="mb-2 flex">
          <select class="h-[56px] w-full bg-second px-5 py-4">
            <option value="高雄市">高雄市</option>
            <option value="台中市">台中市</option>
            <option value="台北市">台北市</option>
            <option value="台南市">台南市</option>
          </select>
          <select class="ml-2 h-[56px] w-full bg-second px-5 py-4">
            <option value="新興區">新興區</option>
            <option value="三民區">三民區</option>
            <option value="左營區">左營區</option>
            <option value="前鎮區">前鎮區</option>
          </select>
        </form>
        <form class="flex">
          <input
            type="text"
            placeholder="幸福路"
            class="h-[56px] w-full bg-second px-5 py-4"
          />
        </form>
      </li>
    </ul>
    <router-link to="/PaymentSuccess" class="w-full">
      <button
        class="w-full cursor-pointer bg-third py-4 text-2xl font-semibold text-primary"
      >
        下一步
      </button>
    </router-link>
  </div>
</template>
