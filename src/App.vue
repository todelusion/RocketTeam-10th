<template>
  <header class="banner flex items-center justify-center">
    <ul class="max-w-[304px] italic text-white">
      <li class="text-xl">here's</li>
      <li class="mb-8 text-7xl font-black">JOANNE</li>
      <li class="mb-10 text-base font-normal">
        Founder of “XXXD Official’’＆Graphic Designer
      </li>
      <li class="ml-[-16px] flex justify-evenly">
        <img
          src="./assets/svg/behance.svg"
          alt="behance"
          width="60"
          class="w-11 duration-100 hover:scale-110"
        />
        <img
          src="./assets/svg/facebook.svg"
          alt="behance"
          width="60"
          class="w-11 duration-100 hover:scale-110"
        />
        <img
          src="./assets/svg/instagram.svg"
          alt="behance"
          width="60"
          class="w-11 duration-100 hover:scale-110"
        />
        <img
          src="./assets/svg/youtube.svg"
          alt="behance"
          width="60"
          class="w-11 duration-100 hover:scale-110"
        />
      </li>
    </ul>
  </header>
  <section class="py-14">
    <ul
      class="mx-auto flex max-w-sm flex-col items-center text-center font-semibold"
    >
      <li class="mb-10 text-4xl italic">About</li>
      <div class="italic">
        <li class="mb-5"><img src="./assets/photo.png" alt="photo" /></li>
        <li>
          <p>
            Joanne Chen<br />1997/10/10<br />National Hex School Normal
            University Department of Visual Design
          </p>
        </li>
        <div class="my-6 w-full border-b-[1px] border-black"></div>
        <li>
          <ul class="ml-[-10px] flex flex-col items-center">
            <li
              class="mb-7 flex w-max items-center before:text-4xl before:text-[#891818] before:content-['\2022']"
            >
              Founder of ‘’XXXD Official’’
            </li>
            <li
              class="mb-7 flex w-max items-center before:text-4xl before:text-[#891818] before:content-['\2022']"
            >
              Graphic Designer
            </li>
            <li
              class="mb-7 flex w-max items-center before:text-4xl before:text-[#891818] before:content-['\2022']"
            >
              Graphic Intern of Hex School
            </li>
          </ul>
        </li>
      </div>
    </ul>
  </section>
  <section class="flex flex-col items-center bg-black pt-14 pb-40">
    <ul class="flex flex-col items-center text-center text-white">
      <li class="mb-3 text-6xl font-medium italic">My Brand ‘’XXXD’’</li>
      <li class="mb-8 text-2xl italic">Just Keep XXXD Everyday</li>
      <li class="mb-16 max-w-xs text-xl">
        2020 年創立的個人服飾品牌 引領叛逆少年開啟與社會對話的窗口
        主打概念潮流T-Shirt
      </li>
    </ul>
    <ul
      class="grid max-w-sm grid-cols-1 justify-items-center gap-10 lg:max-w-3xl lg:grid-cols-4 xl:max-w-5xl"
    >
      <li class="lg:col-span-4"><img src="./assets/brand_img1.png" /></li>
      <li class="lg:col-span-2">
        <img src="./assets/brand_img2.png" alt="" />
      </li>
      <li class="lg:col-span-2">
        <img src="./assets/brand_img3.png" alt="" />
      </li>
    </ul>
  </section>
  <section class="flex flex-col items-center pt-14 pb-36">
    <ul class="flex flex-col items-center text-center text-black">
      <li class="mb-4 text-6xl font-medium italic">Other Works</li>
      <li class="mb-14 text-xl">
        2016-2020 年累積的作品<br />海報/廣告/攝影/LOGO/3D
      </li>
    </ul>
    <ul
      class="text-md grid max-w-lg grid-cols-2 justify-items-center gap-x-5 gap-y-10 px-5 font-medium lg:max-w-3xl lg:grid-cols-6 xl:max-w-5xl"
    >
      <li class="col-span-2">
        <img src="./assets/works/work_img1.png" />
        <p class="mx-auto w-max pt-4">海報設計/2017</p>
      </li>
      <li class="lg:col-span-2">
        <img src="./assets/works/work_img2.png" />
        <p class="mx-auto w-max pt-4">海報設計/2017</p>
      </li>
      <li class="lg:col-span-2">
        <img src="./assets/works/work_img3.png" />
        <p class="mx-auto w-max pt-4">海報設計/2017</p>
      </li>
      <li class="col-span-2 lg:col-span-3">
        <img src="./assets/works/work_img4.png" />
        <p class="mx-auto w-max pt-4">概念攝影/2018</p>
      </li>
      <li class="col-span-2 lg:col-span-3">
        <img src="./assets/works/work_img5.png" />
        <p class="mx-auto w-max pt-4">概念攝影/2018</p>
      </li>
      <li class="lg:col-span-2">
        <img src="./assets/works/work_img6.png" />
        <p class="mx-auto w-max pt-4">sasa 酒標設計/2019</p>
      </li>
      <li class="lg:col-span-2">
        <img src="./assets/works/work_img7.png" />
        <p class="mx-auto w-max pt-4">攝影創作/2018</p>
      </li>
      <li class="col-span-2">
        <img src="./assets/works/work_img8.png" width="500px" />
        <p class="mx-auto w-max pt-4">官網設計/2020</p>
      </li>
    </ul>
  </section>
  <footer class="flex justify-center bg-black py-16">
    <ul class="max-w-[315px] text-center text-white">
      <li class="mb-4 text-4xl italic">Contact</li>
      <li class="mb-4">Mail：xxxd@hexschool.com</li>
      <li>Phone Number：0910123456</li>
    </ul>
  </footer>
</template>

<style>
.banner {
  height: 100vh;
  background-image: url("./assets/banner.png");
  background-size: cover;
  background-position: center;
}
</style>
