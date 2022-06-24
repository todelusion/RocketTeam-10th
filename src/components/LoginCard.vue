<template>
  <div class="w-full md:h-[350px] md:w-[390px] md:bg-second">
    <h2
      class="bg-primary py-[30px] text-center text-4xl text-white md:bg-transparent md:text-[#8DA291]"
    >
      會員登入
    </h2>
    <ul class="flex justify-center bg-second p-[30px] md:hidden">
      <li class="flex h-[56px] bg-white">
        <div
          class="flex h-full w-[105px] items-center border-r-2 border-second px-[14px]"
        >
          <img
            src="../assets/ic-facebook-logotype.svg"
            alt="facebook"
            width="108"
          />
        </div>
        <div
          class="flex h-full w-[105px] items-center border-r-2 border-second px-[14px]"
        >
          <img src="../assets/ic-google.svg" alt="google" width="94" />
        </div>
        <div
          class="flex h-full w-[105px] items-center border-r-2 border-second px-[14px]"
        >
          <img src="../assets/ic-yahoo.svg" alt="yahoo" width="97" />
        </div>
      </li>
    </ul>
    <form class="flex flex-col bg-primary p-[30px] md:bg-transparent">
      <div class="mb-4 flex items-center bg-second md:bg-white">
        <font-awesome-icon icon="user" class="px-4 py-5" />
        <input
          type="text"
          class="pr-4 text-primary placeholder-[#8DA291]"
          placeholder="電子信箱/手機號碼"
        />
      </div>
      <div class="mb-4 flex items-center bg-second md:bg-white">
        <font-awesome-icon icon="key" class="px-4 py-5" />
        <input
          type="password"
          class="pr-4 text-primary placeholder-[#8DA291]"
          placeholder="請輸入使用者密碼"
        />
      </div>
      <label class="cursur-pointer flex items-center">
        <input type="checkbox" />
        <p class="ml-2 font-medium text-white md:text-[#8DA291]">記住我</p>
      </label>
    </form>
    <button
      class="w-full cursor-pointer bg-third py-4 text-2xl font-semibold text-primary md:hidden"
    >
      登入帳號
    </button>
  </div>
</template>
