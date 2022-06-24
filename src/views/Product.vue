<template>
  <div class="pt-[84px] pb-[30px] md:px-[42px] md:pt-[100px] md:pb-[60px]">
    <img
      src="../assets/banner.png"
      alt="product_banner"
      width="940"
      class="mx-auto mb-[60px]"
    />
    <div class="mb-[30px] flex flex-col md:flex-row md:justify-center">
      <ul
        class="mb-[30px] w-full cursor-pointer text-center text-2xl font-semibold leading-[60px] text-primary md:max-w-[300px]"
      >
        <li class="bg-primary text-white">甜點類別</li>
        <li class="hover:bg-second">所有甜點（48）</li>
        <li class="hover:bg-second">本日精選（10）</li>
        <li class="hover:bg-second">人氣推薦（26）</li>
        <li class="hover:bg-second">人氣推薦（26）</li>
      </ul>
      <div class="flex flex-col items-center lg:items-end ml-5">
        <ul
          class="grid mb-[30px] w-full grid-cols-1 justify-items-center gap-[30px] md:max-w-[600px] lg:grid-cols-2"
        >
          <li>
            <ProductCard
              url="https://hexschool.github.io/webLayoutTraining1st/student-week1/p-1.png"
              class="w-full md:max-w-[300px]"
            />
          </li>
          <li>
            <ProductCard
              url="https://hexschool.github.io/webLayoutTraining1st/student-week1/p-2.png"
              class="w-full md:w-[300px]"
            />
          </li>
          <li>
            <ProductCard
              url="https://hexschool.github.io/webLayoutTraining1st/student-week1/p-3.png"
              class="w-full md:max-w-[300px]"
            />
          </li>
          <li>
            <ProductCard
              url="https://hexschool.github.io/webLayoutTraining1st/student-week1/p-4.png"
              class="w-full md:max-w-[300px]"
            />
          </li>
          <li>
            <ProductCard
              url="https://hexschool.github.io/webLayoutTraining1st/student-week1/p-5.png"
              class="w-full md:w-[300px]"
            />
          </li>
          <li>
            <ProductCard
              url="https://hexschool.github.io/webLayoutTraining1st/student-week1/p-6.png"
              class="w-full md:max-w-[300px]"
            />
          </li>
        </ul>
        <ul class="flex cursor-pointer border-2 w-max">
          <li class="py-4 px-4 border-r-2"><img src="../assets/arrow_left.png" alt=""></li>
          <li class="py-4 px-6 border-r-2 text-primary hover:text-white hover:bg-primary">1</li>
          <li class="py-4 px-6 border-r-2 text-primary hover:text-white hover:bg-primary">2</li>
          <li class="py-4 px-6 border-r-2 text-primary hover:text-white hover:bg-primary">3</li>
          <li class="py-4 px-4"><img src="../assets/arrow_right.png" alt=""></li>
        </ul>
      </div>
    </div>
  </div>
  <Footer />
</template>
